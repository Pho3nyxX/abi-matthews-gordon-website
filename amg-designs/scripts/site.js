// import * as bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.js';
import  { gsap } from '../../node_modules/gsap/dist/all.js';

document.addEventListener("DOMContentLoaded", (event)=>{

    gsap.from(".name-title ", {
        opacity: 0,
        x: -1000,
        duration: .8
    });

    gsap.from(".description-para", {
        opacity: 0,
        x: -1000,
        duration: .8,
        delay: .3
    });

    gsap.from(".description .links", {
        opacity: 0,
        x: -1000,
        duration: .8,
        delay: .6
    });

    gsap.from(".focused", {
        scale: 0,
        // x: -1000, 
        duration: .6,
        delay: 1.4,
        // ease: "bounce.out"
    });

    gsap.from(".second", {
        scale: 0,
        // x: -1000, 
        duration: .6,
        delay: 1.7
    });

    gsap.from(".third", {
        scale: 0,
        // x: -1000, 
        duration: .6,
        delay: 2
    });

    gsap.from(".fourth", {
        scale: 0,
        // x: -1000, 
        duration: .6,
        delay: 2.3
    });

    gsap.from(".fifth", {
        scale: 0,
        // x: -1000, 
        duration: .6,
        delay: 2.6
    });

});