var lineToX = gsap.timeline({
    paused: true
});
lineToX.to("#burger-container", {
        duration: burgerSpeed,
        rotate: -90
    }, "create-x")
    .to("#top-line", {
        duration: burgerSpeed,
        y: 7.75,
        rotate: 45
    }, "create-x")
    .to("#middle-line", {
        duration: burgerSpeed,
        alpha: 0
    }, "create-x")
    .to("#bottom-line", {
        duration: burgerSpeed,
        y: -7.75,
        rotate: -45
    }, "create-x");
// .from("#burger-outline",{duration:0.5, alpha:0},"create-x");

var lineToLines = gsap.timeline({
    paused: true
});
lineToLines.to("#top-line", {
        duration: burgerSpeed,
        y: 0
    }, "move-lines")
    .to("#middle-line", {
        duration: burgerSpeed * 1.25,
        alpha: 1
    }, "move-lines")
    .to("#bottom-line", {
        duration: burgerSpeed,
        y: 0
    }, "move-lines");


var staggerNav = gsap.timeline({
    paused: true
});
staggerNav.to("#nav-bg", {
        duration: burgerSpeed + (burgerSpeed / 8),
        scale: 40,
        alpha: 0.99
    })
    .to("#nav-bg svg circle", {
        duration: burgerSpeed,
        alpha: 0.95
    }, "-=burgerSpeed")
    .to("#sm-nav ul li", {
        duration: burgerSpeed / 4,
        stagger: 0.1,
        alpha: 1,
        y: 10,
        display: "initial"
    }, "-=0.15");

$('#burger-container').on("click", burgerClicked);

function burgerClicked() {
    console.log("click");

    if (canYouSeeNav === false) {
        gsap.set("#burger-outline", {
            duration: burgerSpeed,
            alpha: 1
        });
        lineToX.invalidate().restart();
        staggerNav.invalidate().restart();
        linesToLine.invalidate().restart();

        lineToX.play();
        staggerNav.play();
        linesToLine.play();

        canYouSeeNav = true;

        // linesToLine.reverse();
    } else {
        gsap.to("#burger-outline", {
            duration: burgerSpeed,
            alpha: 0
        });
        // lineToLines.invalidate().restart();
        // staggerNav.invalidate().restart();
        // lineToX.invalidate().restart();

        lineToX.reverse();
        staggerNav.reverse();



        lineToLines.play();

        canYouSeeNav = false;
    }
}