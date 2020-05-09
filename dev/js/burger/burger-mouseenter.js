// timeline for the burger lines to become 1 line
var linesToLine = gsap.timeline({
    paused: true
});
linesToLine.to("#top-line", {
        duration: burgerSpeed,
        y: 8
    }, "move-lines")
    .to("#middle-line", {
        duration: burgerSpeed * 1.5,
        alpha: 0
    }, "move-lines")
    .to("#bottom-line", {
        duration: burgerSpeed,
        y: -8
    }, "move-lines");


$("#burger-container").on("mouseenter", function() {
    // console.log("mouse enter");

    if (canYouSeeNav === false) {
        console.log("is open false mouseEnter");

        // play the timeline to combine the lines into 1 line
        linesToLine.invalidate().restart();
        linesToLine.play();
    } else {
        console.log("is open true mouseEnter");
        linesToLine.invalidate().restart();
        linesToLine.play();
    }

});
