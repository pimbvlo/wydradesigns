gsap.from("#progress", {
    scrollTrigger: {
      trigger: "#progress",
      scrub: true,
      // pin: true,
      start: "top 80px",
      end: "#caseStudyPreFooter",
      endTrigger: "#caseStudyPreFooter"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(
    "#progress",
    {
      scrollTrigger: {
        trigger: "#caseStudyPreFooter",
        start: "top 80px",
        end: "top 80px",
        toggleActions: "restart none reverse none"
        // markers: true

      },
      duration: 0.25,
      opacity: "0",
      ease: "sine.inOut"
    },
    "header-meet-footer"
  );