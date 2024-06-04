// Get year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear();
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  if (window.innerWidth < 768) {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("mySidenav").style.transitionDuration = "0.5s";
    // document.getElementById("mySidenav").style.boxShadow =
//       "-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)";
    document.getElementById("main").style.transform = "translateX(-320px)";
    document.getElementById("main").style.transitionDuration = "0.55s";
    document.getElementById("burger-container").onclick = closeNav;
  } else if (window.innerWidth < 1024) {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("mySidenav").style.transitionDuration = "0.5s";
    // document.getElementById("mySidenav").style.boxShadow =
      // "-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)";
    document.getElementById("main").style.transform = "translateX(-400px)";
    document.getElementById("main").style.transitionDuration = "0.55s";
    document.getElementById("burger-container").onclick = closeNav;

  } else {
    document.getElementById("mySidenav").style.width = "32vw";
    document.getElementById("mySidenav").style.transitionDuration = "0.5s";
    // document.getElementById("mySidenav").style.boxShadow =
      // "-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)";
    document.getElementById("main").style.transform = "translateX(-32vw)";
    document.getElementById("main").style.transitionDuration = "0.55s";
    document.getElementById("burger-container").onclick = closeNav;
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("mySidenav").style.boxShadow = "none";
  document.getElementById("mySidenav").style.transitionDuration = "0.55s";
  document.getElementById("main").style.transform = "translateX(0px)";
  document.getElementById("main").style.transitionDuration = "0.5s";
  document.getElementById("burger-container").onclick = openNav;
}
// console.log("ready!");

gsap.to(
  "header",
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 80px",
      end: "top 80px",
      toggleActions: "restart none reverse none"
    },
    duration: 0.25,
    backgroundColor: "rgba(43, 43, 43, 1)",
    ease: "sine.inOut"
  },
  "header-meet-footer"
);
gsap.to(
  "#wydradesigns-path",
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 80px",
      end: "top 80px",
      toggleActions: "restart none reverse none"
    },
    duration: 0.25,
    fill: "rgba(225, 225, 225, 1)",
    ease: "sine.inOut"
  },
  "header-meet-footer"
);
gsap.to(
  ".burger-lines",
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 80px",
      end: "top 80px",
      toggleActions: "restart none reverse none"
    },
    duration: 0.25,
    stroke: "rgba(229, 0, 69, 1)",
    ease: "sine.inOut"
  },
  "header-meet-footer"
);
gsap.to(
  "body",
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 80px",
      end: "top 80px",
      toggleActions: "restart none reverse none"
    },
    duration: 0.25,
    backgroundColor: "rgba(50, 46, 47, 1)",
    ease: "sine.inOut"
  },
  "header-meet-footer"
);
