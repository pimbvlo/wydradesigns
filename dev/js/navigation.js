// var navigationWidth = $("nav").width();// var navigationHeight = $("nav").scrollTop();

// when a link is clicked, force the menu to reverse all the animations
// $("nav ul li").on("click", burgerClicked);

// listen for the window to resize and reset the nav width var
// $(window).resize(function() {
//     console.log(navigationWidth);    navigationWidth = $("nav").width();
// });

// $( window ).resize(function() {
//     console.log(navigationHeight);
//     navigationHeight = $(window).scrollTop();
// });
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  document.getElementById("mySidenav").style.boxShadow = "-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)";
  document.getElementById("mySidenav").style.transitionDuration = "0.5s";
  document.getElementById("main").style.transform="translateX(-320px)";
  document.getElementById("main").style.transitionDuration = "0.5s";
  document.getElementById("burger-container").onclick = closeNav;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("mySidenav").style.boxShadow = "none";
  document.getElementById("mySidenav").style.transitionDuration = "0.5s";
  document.getElementById("main").style.transform="translateX(0px)";
  document.getElementById("main").style.transitionDuration = "0.5s";
  document.getElementById("burger-container").onclick = openNav;

}

