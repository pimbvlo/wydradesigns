// timeline for the burger lines to become 1 line
var linesToLine = gsap.timeline({
    paused: true
});
$("#burger-container").on("mouseenter", function() {
    // console.log("mouse enter");

    if (canYouSeeNav === false) {
        // console.log("is open false mouseEnter");
        // play the timeline to combine the lines into 1 line
        linesToLine.invalidate().restart();
        linesToLine.play();
    } else {
        // console.log("is open true mouseEnter");
        linesToLine.invalidate().restart();
        linesToLine.play();
    }

});
