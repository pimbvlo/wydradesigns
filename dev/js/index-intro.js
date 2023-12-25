const introAngle = document.getElementsByClassName("intro-angle");
let introAngleNumber = 0;
function indexIntroAngle() {
  if (window.innerWidth < 768) {
    introAngleNumber = Math.ceil(Math.random() * 2);
  } else if (window.innerWidth < 1024) {
    introAngleNumber = Math.ceil(Math.random() * 3);
  } else {
    introAngleNumber = Math.ceil(Math.random() * 4);
  }

  if (Math.random() * 1 >= 0.5) {
    introAngleNumber *= -1;
  }
  // gsap.set(".intro-angle", {
  //   transformOrigin: "center",
  //   rotation: introAngleNumber
  // });
}

for (i = 0; i < introAngle.length; i++) {
  switch (i) {
    case 0:
      indexIntroAngle();
      gsap.set("#indexIntro span.intro-angle:nth-of-type(1)", {
        transformOrigin: "center",
        rotation: introAngleNumber
      });
      console.log(`The Random Angle is: ${introAngleNumber}`);
      break;
    case 1:
      indexIntroAngle();
      gsap.set("#indexIntro span.intro-angle:nth-of-type(2)", {
        transformOrigin: "center",
        rotation: introAngleNumber
      });
      console.log(`The Random Angle is: ${introAngleNumber}`);
      break;
    case 2:
      indexIntroAngle();
      gsap.set("#indexIntro span.intro-angle:nth-of-type(3)", {
        transformOrigin: "center",
        rotation: introAngleNumber
      });
      console.log(`The Random Angle is: ${introAngleNumber}`);
      break;
      case 3:
        indexIntroAngle();
        gsap.set("#indexIntro span.intro-angle:nth-of-type(4)", {
          transformOrigin: "center",
          rotation: introAngleNumber
        });
        console.log(`The Random Angle is: ${introAngleNumber}`);
        break;
        case 4:
          indexIntroAngle();
          gsap.set("#indexIntro span.intro-angle:nth-of-type(5)", {
            transformOrigin: "center",
            rotation: introAngleNumber
          });
          console.log(`The Random Angle is: ${introAngleNumber}`);
          break;
        }
}
