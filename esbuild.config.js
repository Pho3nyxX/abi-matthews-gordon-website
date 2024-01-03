import { argv } from 'node:process';
import * as esbuild from 'esbuild';

const
  productionMode = ('development' !== (argv[2] || process.env.NODE_ENV)),
  target = 'chrome100,firefox100,safari15'.split(',');

console.log(`${ productionMode ? 'production' : 'development' } build`);

// bundle CSS
const buildCSS = await esbuild.context({

  entryPoints: [ './amg-designs/styles/styles.css' ],
  bundle: true,
  target,
  external: ['amg-designs/images/*'],
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'dataurl'
  },
  logLevel: productionMode ? 'error' : 'info',
  minify: productionMode,
  sourcemap: !productionMode && 'linked',
  outdir: './amg-designs/dist/css'

});


// bundle JS
const buildJS = await esbuild.context({

  entryPoints: [ './amg-designs/scripts/site.js' ],
  format: 'esm',
  bundle: true,
  target,
  drop: productionMode ? ['debugger', 'console'] : [],
  logLevel: productionMode ? 'error' : 'info',
  minify: productionMode,
  sourcemap: !productionMode && 'linked',
  outdir: './amg-designs/dist/js'

});


if (productionMode) {

  // single production build
  await buildCSS.rebuild();
  buildCSS.dispose();

  await buildJS.rebuild();
  buildJS.dispose();

}
else {

  // watch for file changes
  await buildCSS.watch();
  await buildJS.watch();

  // development server
  await buildCSS.serve({
    servedir: './build'
  });

}