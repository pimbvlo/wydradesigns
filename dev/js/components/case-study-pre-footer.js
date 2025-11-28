// // Idea #1
// // Step 1. Get Random Number
// // Step 1a. if Random Number is same as pathname –> rerun
// // Step 2. Place relevant img and h3 into first .case-study-card
// // Step 3. Remove previous number and shorten Random Number by 1
// // Step 3a. if Random Number is same as pathname –> rerun
// // Step 4. Place relevant img and h3 into second .case-study-card
// // Step 5. Re-call on new page
// let caseStudyArray = [
//   ["Antifogmatic", "img/index/projects/AntiCover.jpg", "Antifogmatic.html"],
//   ["Attention to Detail", "img/index/projects/ATDCover.jpg", "AttentionToDetail.html"],
//   ["Barbara Kasten", "img/index/projects/BKCover.jpg", "BarbaraKasten.html"],
//   ["Fender", "img/index/projects/FenderCover.jpg", "Fender.html"]
// ];

// function caseStudyPreFooter() {
//   let random = Math.floor(Math.random() * caseStudyArray.length);
//   let h3String;
//   let imgString;
//   let buttonString;

//   //   console.log(caseStudyArray);
//   if (location.pathname.includes(caseStudyArray[random][2])) {
//     // Filter pathname out
//     let caseStudyArrayPathnameFilter = caseStudyArray.filter(
//       (pathfile) => !(pathfile === caseStudyArray[random])
//     );
//     // Rerun random
//     random = Math.floor(Math.random() * caseStudyArrayPathnameFilter.length);
//     // console.log(caseStudyArrayPathnameFilter);
//     // assign Strings to array with pathname filtered out
//     h3String = caseStudyArrayPathnameFilter[random][0];
//     imgString = caseStudyArrayPathnameFilter[random][1];
//     buttonString = caseStudyArrayPathnameFilter[random][2];
//     // put strings into first card
//     document.querySelector("#caseStudyCard1 h3").textContent = h3String;
//     document.querySelector("#caseStudyCard1 img").src = imgString;
//     document.querySelector("#caseStudyCard1 .button a").href = buttonString;

//     // console.log(`Path Name Route`);
//     // filter out used item from array pathname filter
//     caseStudyArrayPathnameFilter = caseStudyArrayPathnameFilter.filter(
//       (pathfile) => !(pathfile === caseStudyArrayPathnameFilter[random])
//     );
//     // console.log(caseStudyArrayPathnameFilter);
//     random = Math.floor(Math.random() * caseStudyArrayPathnameFilter.length);
//     // console.log(caseStudyArrayPathnameFilter);

//     h3String = caseStudyArrayPathnameFilter[random][0];
//     imgString = caseStudyArrayPathnameFilter[random][1];
//     buttonString = caseStudyArrayPathnameFilter[random][2];

//     document.querySelector("#caseStudyCard2 h3").textContent = h3String;
//     document.querySelector("#caseStudyCard2 img").src = imgString;
//     document.querySelector("#caseStudyCard2 .button a").href = buttonString;
//     // console.log(`Path Name Route Done`);
//   } else {
//     h3String = caseStudyArray[random][0];
//     imgString = caseStudyArray[random][1];
//     buttonString = caseStudyArray[random][2];

//     document.querySelector("#caseStudyCard1 h3").textContent = h3String;
//     document.querySelector("#caseStudyCard1 img").src = imgString;
//     document.querySelector("#caseStudyCard1 .button a").href = buttonString;

//     // console.log(`Not Path Name Route`);

//     // filter out used item from array filter
//     let caseStudyArrayFilter = caseStudyArray.filter(
//       (pathfile) => !(pathfile === caseStudyArray[random])
//     );
//     // console.log(`Not Path Name Route Filtered`);
//     random = Math.floor(Math.random() * caseStudyArrayFilter.length);

//     if (location.pathname.includes(caseStudyArrayFilter[random][2])) {
//       // Filter pathname out
//       let caseStudyArrayPathnameFilter = caseStudyArrayFilter.filter(
//         (pathfile) => !(pathfile === caseStudyArrayFilter[random])
//       );
//     //   console.log(caseStudyArrayPathnameFilter);
// //       console.log(`Here!`);
//       // Rerun random
//       random = Math.floor(Math.random() * caseStudyArrayPathnameFilter.length);
//       // console.log(caseStudyArrayPathnameFilter);
//       // assign Strings to array with pathname filtered out
//       h3String = caseStudyArrayPathnameFilter[random][0];
//       imgString = caseStudyArrayPathnameFilter[random][1];
//       buttonString = caseStudyArrayPathnameFilter[random][2];
//       // put strings into first card
//       document.querySelector("#caseStudyCard2 h3").textContent = h3String;
//       document.querySelector("#caseStudyCard2 img").src = imgString;
//       document.querySelector("#caseStudyCard2 .button a").href = buttonString;

//     //   console.log(`Not Path Name Path Name Route Filtered`);
//     } else {
//       // console.log(caseStudyArrayPathnameFilter);

//       h3String = caseStudyArrayFilter[random][0];
//       imgString = caseStudyArrayFilter[random][1];
//       buttonString = caseStudyArrayFilter[random][2];

//       document.querySelector("#caseStudyCard2 h3").textContent = h3String;
//       document.querySelector("#caseStudyCard2 img").src = imgString;
//       document.querySelector("#caseStudyCard2 .button a").href = buttonString;
//     //   console.log(`Not Path Name Not Path Name Route Filtered`);
//     }
//   }
//   //   console.log(caseStudyArray);

//   //   return;
// }

// // Idea #2
// // Step 1. Filter out pathname from Array
// // Step 2. Get Random Number
// // Step 3. Place relevant img and h3 into first .case-study-card
// // Step 4. Remove previous Random Number-ed Array item
// // Step 5. Get Random Number (new)
// // Step 6. Place relevant img and h3 into second .case-study-card
// // Step 7. Re-call on new page

// caseStudyPreFooter();

// the proper syntax is this, where it's a collection of objects in an array, this way the groups are collections
let caseStudyArray = [
  {
    name: "Antifogmatic",
    image: "img/index/projects/AntiCover.jpg",
    page: "Antifogmatic.html",
  },
  {
    name: "Attention to Detail",
    image: "img/index/projects/ATDCover.jpg",
    page: "AttentionToDetail.html",
  },
  {
    name: "Barbara Kasten",
    image: "img/index/projects/BKCover.jpg",
    page: "BarbaraKasten.html",
  },
  {
    name: "Fender&#8482;",
    image: "img/index/projects/FenderCover.jpg",
    page: "Fender.html",
  },
  {
    name: "How Tinder&#8482; Gamified Dating",
    image: "img/index/projects/TinderCover.jpg",
    page: "TinderGamification.html",
  },
  {
    name: "Science History Museum",
    image: "img/index/projects/SHMCover.jpg",
    page: "ScienceHistoryMuseum.html",
  },
  {
    name: "Second Life Composting",
    image: "img/index/projects/SecondLifeCover.jpg",
    page: "SecondLifeComposting.html",
  },
  {
    name: "Target&#8482; Curbside Pickup",
    image: "img/index/projects/TargetCover.jpg",
    page: "Target.html",
  },
  {
    name: "The Philaldephia School",
    image: "img/index/projects/TPSCover.jpg",
    page: "ThePhiladelphiaSchool.html",
  },
  {
    name: "TikTok&#8482; Live Stream Donation",
    image: "img/index/projects/TTCover.jpg",
    page: "TikTok.html",
  },
  {
    name: "Building a Multi-Brand Design System",
    image: "img/index/projects/MDSCover.jpg",
    page: "MerakiDesignSystem.html",
  },
];
// @Shawn (Feb 3) - I added excludeName now so you can pass the name if you want remove from options
function getRandomElements(arr, count, excludeName = "") {
  // now filtering out if I add name OR ignoring when using default ''...
  // if you want filter out by image or page, just update .name to those instead
  const filteredArr = arr.filter((item) => item.name !== excludeName);

  const shuffled = filteredArr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// @Shawn (Feb 3) now I can pass the 3rd option if you want to skip "Fender"
const randomCaseStudies = getRandomElements(caseStudyArray, 2, "Fender");

console.log("these are the available items now: ", randomCaseStudies);

// so now you can just use like this [0] is the first and [1] is the second...

console.log("I am the first image >> ", randomCaseStudies[0].image);
console.log("I am the second html >> ", randomCaseStudies[1].page);

// to loop over this, and apply to the HTML you could use this..
// but you do not NEED to add the HTML like this if you don't want, you can apply it like you are doing with document.querySelector(...

const caseStudyContainer = document.getElementById("case-study-container");

randomCaseStudies.forEach((study) => {
  const studyElement = document.createElement("div");
  studyElement.className = "case-study-card";

  studyElement.innerHTML = `
    <h3>${study.name}</h3>
    <img class="elevation-3" src="${study.image}" alt="${study.name}">
    <h6 class="button button-icon-right button-outline">
        <a href="${study.page}">Read About It
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
            <path fill="#000" fill-rule="evenodd" d="M27.997 16.017 15.981 28l-2.325-2.292 8.058-8.058v-.017h-4.933a.995.995 0 0 1-.113-.647h-.014c-.13 0-.254-.024-.368-.07a.92.92 0 0 1-.11.717h-1.555a.912.912 0 0 1-.06-.854.83.83 0 0 1-1.08-.796.833.833 0 0 1 1.08-.795.913.913 0 0 1 .031-.805h1.614a.914.914 0 0 1 .08.667c.114-.045.238-.07.368-.07h.014a1.003 1.003 0 0 1 .086-.597h4.96l-8.058-8.058L15.98 4l12.016 12.017ZM15.09 15.68a.83.83 0 0 1 0 .604.915.915 0 0 1 .606-.004 1.002 1.002 0 0 1 0-.595.915.915 0 0 1-.606-.005Z" clip-rule="evenodd"/>
            <path fill="#000" d="M8.397 16.565a.583.583 0 0 1 .325 1.068h-.649a.583.583 0 0 1 .324-1.068ZM10.732 16.482a.667.667 0 0 1 .457 1.151h-.914a.665.665 0 0 1 .457-1.151ZM13.068 16.315a.833.833 0 0 1 .678 1.318H12.39a.833.833 0 0 1 .677-1.318ZM6.068 16.732a.417.417 0 1 1 0 .833.417.417 0 0 1 0-.833Z"/>
            <path fill="#000" d="M11.982 15.233a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM9.647 15.317a.667.667 0 1 1 0 1.333.667.667 0 0 1 0-1.333ZM7.312 15.483a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM4.982 15.732a.252.252 0 1 1 0 .503.252.252 0 0 1 0-.503Z"/>
            <path fill="#000" d="M13.78 14.383a.833.833 0 1 1-1.422 0h1.421ZM11.237 14.383a.667.667 0 1 1-1.01 0h1.01ZM8.786 14.383a.582.582 0 0 1-.389 1.019.583.583 0 0 1-.388-1.019h.777ZM6.068 14.402a.417.417 0 1 1 0 .833.417.417 0 0 1 0-.833Z"/>
          </svg>
        </a>
    </h6>
  `;

  caseStudyContainer.appendChild(studyElement);
});
