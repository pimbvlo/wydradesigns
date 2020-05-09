var burgerSpeed = 0.25;


var canYouSeeNav = false;

gsap.set("#nav-bg", {
    scaleX: 0,
    alpha: 0.5
});
gsap.set("#sm-nav ul li", {
    alpha: 0
});

// hide outline
gsap.set("#burger-outline", {
    alpha: 0,
    transformOrigin: "50% 50%"
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