var navigationWidth = $("nav").width();
// var navigationHeight = $("nav").scrollTop();

// when a link is clicked, force the menu to reverse all the animations
$('nav ul li').on("click", burgerClicked);

// listen for the window to resize and reset the nav width var
$(window).resize(function() {
    console.log(navigationWidth);
    navigationWidth = $("nav").width();
});

// $( window ).resize(function() {
//     console.log(navigationHeight);
//     navigationHeight = $(window).scrollTop();
// });