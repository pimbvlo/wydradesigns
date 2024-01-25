// Idea #1
// Step 1. Get Random Number
// Step 1a. if Random Number is same as pathname –> rerun
// Step 2. Place relevant img and h3 into first .case-study-card
// Step 3. Remove previous number and shorten Random Number by 1
// Step 3a. if Random Number is same as pathname –> rerun
// Step 4. Place relevant img and h3 into second .case-study-card
// Step 5. Re-call on new page
let caseStudyArray = [
  ["Antifogmatic", "img/index/projects/AntiCover.jpg", "Antifogmatic.html"],
  ["Attention to Detail", "img/index/projects/ATDCover.jpg", "AttentionToDetail.html"],
  ["Barbara Kasten", "img/index/projects/BKCover.jpg", "BarbaraKasten.html"],
  ["Fender", "img/index/projects/FenderCover.jpg", "Fender.html"]
];


function caseStudyPreFooter() {
  let random = Math.floor(Math.random() * caseStudyArray.length);
  let h3String;
  let imgString;
  let buttonString;

  //   console.log(caseStudyArray);
  if (location.pathname.includes(caseStudyArray[random][2])) {
    // Filter pathname out
    let caseStudyArrayPathnameFilter = caseStudyArray.filter(
      (pathfile) => !(pathfile === caseStudyArray[random])
    );
    // Rerun random
    random = Math.floor(Math.random() * caseStudyArrayPathnameFilter.length);
    // console.log(caseStudyArrayPathnameFilter);
    // assign Strings to array with pathname filtered out
    h3String = caseStudyArrayPathnameFilter[random][0];
    imgString = caseStudyArrayPathnameFilter[random][1];
    buttonString = caseStudyArrayPathnameFilter[random][2];
    // put strings into first card
    document.querySelector("#caseStudyCard1 h3").textContent = h3String;
    document.querySelector("#caseStudyCard1 img").src = imgString;
    document.querySelector("#caseStudyCard1 .button a").href = buttonString;

    // console.log(`Path Name Route`);
    // filter out used item from array pathname filter
    caseStudyArrayPathnameFilter = caseStudyArrayPathnameFilter.filter(
      (pathfile) => !(pathfile === caseStudyArrayPathnameFilter[random])
    );
    // console.log(caseStudyArrayPathnameFilter);
    random = Math.floor(Math.random() * caseStudyArrayPathnameFilter.length);
    // console.log(caseStudyArrayPathnameFilter);

    h3String = caseStudyArrayPathnameFilter[random][0];
    imgString = caseStudyArrayPathnameFilter[random][1];
    buttonString = caseStudyArrayPathnameFilter[random][2];

    document.querySelector("#caseStudyCard2 h3").textContent = h3String;
    document.querySelector("#caseStudyCard2 img").src = imgString;
    document.querySelector("#caseStudyCard2 .button a").href = buttonString;
    // console.log(`Path Name Route Done`);
  } else {
    h3String = caseStudyArray[random][0];
    imgString = caseStudyArray[random][1];
    buttonString = caseStudyArray[random][2];

    document.querySelector("#caseStudyCard1 h3").textContent = h3String;
    document.querySelector("#caseStudyCard1 img").src = imgString;
    document.querySelector("#caseStudyCard1 .button a").href = buttonString;

    // console.log(`Not Path Name Route`);

    // filter out used item from array filter
    let caseStudyArrayFilter = caseStudyArray.filter(
      (pathfile) => !(pathfile === caseStudyArray[random])
    );
    // console.log(`Not Path Name Route Filtered`);
    random = Math.floor(Math.random() * caseStudyArrayFilter.length);

    if (location.pathname.includes(caseStudyArrayFilter[random][2])) {
      // Filter pathname out
      let caseStudyArrayPathnameFilter = caseStudyArrayFilter.filter(
        (pathfile) => !(pathfile === caseStudyArrayFilter[random])
      );
    //   console.log(caseStudyArrayPathnameFilter);
//       console.log(`Here!`);
      // Rerun random
      random = Math.floor(Math.random() * caseStudyArrayPathnameFilter.length);
      // console.log(caseStudyArrayPathnameFilter);
      // assign Strings to array with pathname filtered out
      h3String = caseStudyArrayPathnameFilter[random][0];
      imgString = caseStudyArrayPathnameFilter[random][1];
      buttonString = caseStudyArrayPathnameFilter[random][2];
      // put strings into first card
      document.querySelector("#caseStudyCard2 h3").textContent = h3String;
      document.querySelector("#caseStudyCard2 img").src = imgString;
      document.querySelector("#caseStudyCard2 .button a").href = buttonString;

    //   console.log(`Not Path Name Path Name Route Filtered`);
    } else {
      // console.log(caseStudyArrayPathnameFilter);

      h3String = caseStudyArrayFilter[random][0];
      imgString = caseStudyArrayFilter[random][1];
      buttonString = caseStudyArrayFilter[random][2];

      document.querySelector("#caseStudyCard2 h3").textContent = h3String;
      document.querySelector("#caseStudyCard2 img").src = imgString;
      document.querySelector("#caseStudyCard2 .button a").href = buttonString;
    //   console.log(`Not Path Name Not Path Name Route Filtered`);
    }
  }
  //   console.log(caseStudyArray);

  //   return;
}


// Idea #2
// Step 1. Filter out pathname from Array
// Step 2. Get Random Number
// Step 3. Place relevant img and h3 into first .case-study-card
// Step 4. Remove previous Random Number-ed Array item
// Step 5. Get Random Number (new)
// Step 6. Place relevant img and h3 into second .case-study-card
// Step 7. Re-call on new page

caseStudyPreFooter();
