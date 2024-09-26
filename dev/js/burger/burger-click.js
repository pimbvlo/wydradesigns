var lineToX = gsap.timeline({
    paused: true
});
lineToX.to("#burger-container", {
        duration: burgerSpeed,
        rotate: 270
    }, "create-x")
    .to("#top-line", {
        duration: burgerSpeed,
        scaleX: 0.72,
        transformOrigin: "50% 50%",
        y: 0,
        x: 5,
        rotate: 45,
    }, "create-x")
    .to("#middle-line", {
        duration: burgerSpeed,
        rotate: 90,
    }, "create-x")
    .to("#bottom-line", {
        duration: burgerSpeed,
        scaleX: 0.72,
        transformOrigin: "50% 50%",
        y: -16,
        x: -5,
        rotate: -45,
    }, "create-x");

var lineToLines = gsap.timeline({
    paused: true
});
lineToLines.to("#top-line", {
        duration: burgerSpeed,
        y: 0
    }, "move-lines")
    .to("#middle-line", {
        duration: burgerSpeed,
        rotate: 0
    }, "move-lines")
    .to("#bottom-line", {
        duration: burgerSpeed,
        y: 0
    }, "move-lines");


var staggerNav = gsap.timeline({
    paused: true
});

$('#burger-container').on("click", burgerClicked);

function burgerClicked() {
    console.log("click! 🐭");

    if (canYouSeeNav === false) {
        lineToX.invalidate().restart();
        staggerNav.invalidate().restart();
        linesToLine.invalidate().restart();

        lineToX.play();
        staggerNav.play();
        linesToLine.play();

        canYouSeeNav = true;

        // linesToLine.reverse();
    } else {
        // lineToLines.invalidate().restart();
        // staggerNav.invalidate().restart();
        // lineToX.invalidate().restart();

        lineToX.reverse();
        staggerNav.reverse();



        lineToLines.play();

        canYouSeeNav = false;
    }
}