var burgerSpeed = 0.5;


var canYouSeeNav = false;

gsap.set("#nav-bg", {
    scale: 0,
    alpha: 0.5,
    display: "none"
});
gsap.set("#sm-nav ul li", {
    alpha: 0,
    display: "none"
});

// reset the roation pin for the lines
gsap.set(".burger-lines", {
    transformOrigin: "50% 50%"
});
gsap.set("#burger-container", {
    transformOrigin: "50% 50%"
});
gsap.set("#burger", {
    transformOrigin: "50% 50%"
});
gsap.set("#burger-lines", {
    transformOrigin: "50% 50%"
});