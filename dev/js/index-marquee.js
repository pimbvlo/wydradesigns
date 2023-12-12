gsap.set("#marqueeOne", {
  transformOrigin: "50% 50%",
  rotate: 1,
  scale: 1.05
});
gsap.set("#marqueeTwo", {
  transformOrigin: "50% 50%",
  rotate: -1,
  scale: 1.05,
  y: -12
});
//   gsap.set("#marqueeThree", {
//     transformOrigin: "50% 50%",
//     rotate: 2,
//     scale: 1.05,
//     y: -20
//   });

// if (window.innerWidth < 768) {
//   gsap.to(".marqueeLeft li", {
//     scrollTrigger: {
//       trigger: "#marqueeOne",
//       scrub: true,
//       start: "top bottom",
//       end: "+=175%"
//     },
//     x: -250,
//     ease: "none",
//   });
//   gsap.to(".marqueeRight li", {
//     scrollTrigger: {
//       trigger: "#marqueeOne",
//       scrub: true,
//       start: "top bottom",
//       end: "+=175%"
//     },
//     x: 250,
//     ease: "none",
//   });

// } else if (window.innerWidth < 1024) {
//   gsap.to(".marqueeLeft li", {
//     scrollTrigger: {
//       trigger: "#marqueeOne",
//       scrub: true,
//       start: "top bottom",
//       end: "+=175%"
//     },
//     x: -250,
//     ease: "none",
//   });
//   gsap.to(".marqueeRight li", {
//     scrollTrigger: {
//       trigger: "#marqueeOne",
//       scrub: true,
//       start: "top bottom",
//       end: "+=175%"
//     },
//     x: 250,
//     ease: "none",
//   });

// } else {
//   gsap.to(".marqueeLeft li", {
//     scrollTrigger: {
//       trigger: "#marqueeOne",
//       scrub: true,
//       start: "top bottom",
//       end: "+=175%"
//     },
//     x: -750,
//     ease: "none",
//   });
//   gsap.to(".marqueeRight li", {
//     scrollTrigger: {
//       trigger: "#marqueeOne",
//       scrub: true,
//       start: "top bottom",
//       end: "+=175%"
//     },
//     x: 250,
//     ease: "none",
//   });

// }

gsap.to("#marqueeOne .marquee-unit", {
  xPercent: -100,
  repeat: -1,
  duration: 10,
  ease: "none"
});

gsap.to("#marqueeTwo .marquee-unit", {
  xPercent: -100,
  repeat: -1,
  duration: 9,
  ease: "none"
});

gsap.to("#marqueeThree .marquee-unit", {
  xPercent: -100,
  repeat: -1,
  duration: 12,
  ease: "none"
});

gsap.set(".marquee-inner", {
  xPercent: -25
});
