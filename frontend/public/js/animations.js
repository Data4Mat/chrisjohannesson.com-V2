import { gsap } from "gsap";

let tl = gsap.timeline();
tl.timescale(1);
let yStart = window.innerHeight + 200;

tl.from(".page-head-title", {
    scale: 0,
    opacity: 0,
    duration: 2,
    y: yStart,
    rotation: -360
});