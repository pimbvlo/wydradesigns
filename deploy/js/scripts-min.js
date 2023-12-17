var burgerSpeed=.5,canYouSeeNav=!1;gsap.set(".burger-lines",{transformOrigin:"50% 50%"}),gsap.set("#burger-container",{transformOrigin:"50% 50%"}),gsap.set("#burger",{transformOrigin:"50% 50%"}),gsap.set("#burger-lines",{transformOrigin:"50% 50%"});var linesToLine=gsap.timeline({paused:!0});$("#burger-container").on("mouseenter",(function(){linesToLine.invalidate().restart(),linesToLine.play()}));var lineToX=gsap.timeline({paused:!0});lineToX.to("#burger-container",{duration:burgerSpeed,rotate:270},"create-x").to("#top-line",{duration:burgerSpeed,scaleX:.72,transformOrigin:"50% 50%",y:0,x:5,rotate:45,stroke:"rgba(225, 204, 243, 1)"},"create-x").to("#middle-line",{duration:burgerSpeed,rotate:90,stroke:"rgba(225, 204, 243, 1)"},"create-x").to("#bottom-line",{duration:burgerSpeed,scaleX:.72,transformOrigin:"50% 50%",y:-16,x:-5,rotate:-45,stroke:"rgba(225, 204, 243, 1)"},"create-x");var lineToLines=gsap.timeline({paused:!0});lineToLines.to("#top-line",{duration:burgerSpeed,y:0},"move-lines").to("#middle-line",{duration:burgerSpeed,rotate:0},"move-lines").to("#bottom-line",{duration:burgerSpeed,y:0},"move-lines");var staggerNav=gsap.timeline({paused:!0});function burgerClicked(){console.log("click! 🐭"),!1===canYouSeeNav?(lineToX.invalidate().restart(),staggerNav.invalidate().restart(),linesToLine.invalidate().restart(),lineToX.play(),staggerNav.play(),linesToLine.play(),canYouSeeNav=!0):(lineToX.reverse(),staggerNav.reverse(),lineToLines.play(),canYouSeeNav=!1)}function openNav(){window.innerWidth<768?(document.getElementById("mySidenav").style.width="320px",document.getElementById("mySidenav").style.transitionDuration="0.5s",document.getElementById("mySidenav").style.boxShadow="-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)",document.getElementById("main").style.transform="translateX(-320px)",document.getElementById("main").style.transitionDuration="0.55s",document.getElementById("burger-container").onclick=closeNav):window.innerWidth<1024?(document.getElementById("mySidenav").style.width="400px",document.getElementById("mySidenav").style.transitionDuration="0.5s",document.getElementById("mySidenav").style.boxShadow="-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)",document.getElementById("main").style.transform="translateX(-400px)",document.getElementById("main").style.transitionDuration="0.55s",document.getElementById("burger-container").onclick=closeNav):(document.getElementById("mySidenav").style.width="32vw",document.getElementById("mySidenav").style.transitionDuration="0.5s",document.getElementById("mySidenav").style.boxShadow="-8px 0px 20px 6px rgba(0, 0, 0, 0.07), -4px 0px 16px 0px rgba(0, 0, 0, 0.10)",document.getElementById("main").style.transform="translateX(-32vw)",document.getElementById("main").style.transitionDuration="0.55s",document.getElementById("burger-container").onclick=closeNav)}function closeNav(){document.getElementById("mySidenav").style.width="0px",document.getElementById("mySidenav").style.boxShadow="none",document.getElementById("mySidenav").style.transitionDuration="0.55s",document.getElementById("main").style.transform="translateX(0px)",document.getElementById("main").style.transitionDuration="0.5s",document.getElementById("burger-container").onclick=openNav}$("#burger-container").on("click",burgerClicked),$("#burger-container").on("mouseleave",(function(){})),gsap.to("header",{scrollTrigger:{trigger:"footer",start:"top 80px",end:"top 80px",toggleActions:"restart none reverse none"},duration:.2,backgroundColor:"rgba(50, 44, 55, 1)",ease:"none"},"header-meet-footer"),gsap.to("#wydradesigns-path",{scrollTrigger:{trigger:"footer",start:"top 80px",end:"top 80px",toggleActions:"restart none reverse none"},duration:.2,fill:"rgba(225, 225, 225, 1)",ease:"none"},"header-meet-footer"),gsap.to(".burger-lines",{scrollTrigger:{trigger:"footer",start:"top 80px",end:"top 80px",toggleActions:"restart none reverse none"},duration:.2,stroke:"rgba(225, 204, 243, 1)",ease:"none"},"header-meet-footer"),gsap.to("body",{scrollTrigger:{trigger:"footer",start:"top 80px",end:"top 80px",toggleActions:"restart none reverse none"},duration:.2,backgroundColor:"rgba(50, 44, 55, 1)",ease:"none"},"header-meet-footer"),gsap.set("#marqueeOne",{transformOrigin:"50% 50%",rotate:1,scale:1.05}),gsap.set("#marqueeTwo",{transformOrigin:"50% 50%",rotate:-.5,scale:1.05,y:-12}),gsap.set("#marqueeThree",{transformOrigin:"50% 50%",rotate:1.5,scale:1.05,y:-4});const mediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");function filterSelection(e){var t,n;for(t=document.getElementsByClassName("filterDiv"),"all"==e&&(e=""),n=0;n<t.length;n++)removeClass(t[n],"show"),t[n].className.indexOf(e)>-1&&addClass(t[n],"show")}function addClass(e,t){var n,r,a;for(r=e.className.split(" "),a=t.split(" "),n=0;n<a.length;n++)-1==r.indexOf(a[n])&&(e.className+=" "+a[n])}function removeClass(e,t){var n,r,a;for(r=e.className.split(" "),a=t.split(" "),n=0;n<a.length;n++)for(;r.indexOf(a[n])>-1;)r.splice(r.indexOf(a[n]),1);e.className=r.join(" ")}!mediaQuery||mediaQuery.matches?gsap.set(".marquee",{repeat:0}):(gsap.to("#marqueeOne .marquee-unit",{xPercent:-100,repeat:-1,duration:18,ease:"none"}),gsap.to("#marqueeTwo .marquee-unit",{xPercent:-100,repeat:-1,duration:14,ease:"none"}),gsap.to("#marqueeThree .marquee-unit",{xPercent:-100,repeat:-1,duration:16,ease:"none"}),gsap.set(".marquee-inner",{xPercent:-25})),mediaQuery.addEventListener("change",(()=>{mediaQuery.matches?gsap.set(".marquee",{repeat:0}):(gsap.to("#marqueeOne .marquee-unit",{xPercent:-100,repeat:-1,duration:18,ease:"none"}),gsap.to("#marqueeTwo .marquee-unit",{xPercent:-100,repeat:-1,duration:14,ease:"none"}),gsap.to("#marqueeThree .marquee-unit",{xPercent:-100,repeat:-1,duration:16,ease:"none"}),gsap.set(".marquee-inner",{xPercent:-25}))})),filterSelection("all");for(var btnContainer=document.getElementById("myBtnContainer"),chip=btnContainer.getElementsByClassName("chip"),i=0;i<chip.length;i++)chip[i].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}));gsap.registerPlugin(ScrollTrigger);