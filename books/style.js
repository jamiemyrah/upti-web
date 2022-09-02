const tl = gsap.timeline({defaults});
const sample = gsap.timeline({ defaults: { ease: "power1.out"}});
tl.to (".num," { y: "0%," duration: 1});