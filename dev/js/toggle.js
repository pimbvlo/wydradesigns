//determines if the user has a set theme
function detectColorScheme() {
    var theme = "light"; //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            theme = "dark";
        }
    } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        // $(document.documentElement).attr("data-theme", "dark");
    }
}
detectColorScheme();


//identify the toggle switch HTML element
// const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');
const toggleSwitch = $('#theme-switch input[type="checkbox"]');

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        // document.documentElement.setAttribute('data-theme', 'dark');
        $(document.documentElement).attr('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
        // document.documentElement.setAttribute('data-theme', 'light');
        $(document.documentElement).attr('data-theme', 'light');
        toggleSwitch.checked = false;
    }
}

//listener for changing themes
// toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitch.on('change', switchTheme);

//pre-check the dark-theme checkbox if dark-theme is set

//console.log(document.documentElement.getAttribute("data-theme"));
console.log($(document.documentElement).attr("data-theme"));

// if (document.documentElement.getAttribute("data-theme") == "dark"){
if ($(document.documentElement).attr("data-theme") === "dark") {
    console.log("toggle should be checked");
    // toggleSwitch.checked = true;
    toggleSwitch.prop("checked", !toggleSwitch.prop("checked"));
}