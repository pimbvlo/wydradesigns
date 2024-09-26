gsap.set("#marqueeOne", {
  transformOrigin: "50% 50%",
  rotate: 1,
  scale: 1.05
});
gsap.set("#marqueeTwo", {
  transformOrigin: "50% 50%",
  rotate: -0.5,
  scale: 1.05,
  y: -12
});
gsap.set("#marqueeThree", {
  transformOrigin: "50% 50%",
  rotate: 1.5,
  scale: 1.05,
  y: -4
});

// Grab the prefers reduced media query.
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// Check if the media query matches or is not available.
if (!mediaQuery || mediaQuery.matches) {
  gsap.set(".marquee", {
    repeat: 0
  });
} else {
  gsap.to("#marqueeOne .marquee-unit", {
    xPercent: -100,
    repeat: -1,
    duration: 18,
    ease: "none"
  });

  gsap.to("#marqueeTwo .marquee-unit", {
    xPercent: -100,
    repeat: -1,
    duration: 14,
    ease: "none"
  });

  gsap.to("#marqueeThree .marquee-unit", {
    xPercent: -100,
    repeat: -1,
    duration: 16,
    ease: "none"
  });

  gsap.set(".marquee-inner", {
    xPercent: -25
  });
}

// Ads an event listener to check for changes in the media query's value.
mediaQuery.addEventListener("change", () => {
  if (mediaQuery.matches) {
    gsap.set(".marquee", {
      repeat: 0
    });
  } else {
    gsap.to("#marqueeOne .marquee-unit", {
      xPercent: -100,
      repeat: -1,
      duration: 18,
      ease: "none"
    });

    gsap.to("#marqueeTwo .marquee-unit", {
      xPercent: -100,
      repeat: -1,
      duration: 14,
      ease: "none"
    });

    gsap.to("#marqueeThree .marquee-unit", {
      xPercent: -100,
      repeat: -1,
      duration: 16,
      ease: "none"
    });

    gsap.set(".marquee-inner", {
      xPercent: -25
    });
  }
});
