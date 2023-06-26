let key = 0;
const box = document.querySelector(".box");
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == "38") {
    key = 0; //up
  } else if (e.keyCode == "40") {
    key = 0; //down
  } else if (e.keyCode == "37") {
    key = 2; //left
  } else if (e.keyCode == "39") {
    key = 1; //right
  } else {
    key = 0;
  }

  if (key === 1 || key === 2) {
    move();
  } else {
    alert("Try Again!");
  }
}

function move() {
  let por = 45;
  let pol = 45;

  const animate = () => {
    if (key === 1) {
      if (por === 70) {
        clearInterval(anim);
      } else {
        por++;
        box.style.left = por + "%";
      }
    } else if (key === 2) {
      if (pol === 20) {
        clearInterval(anim);
      } else {
        pol--;
        box.style.left = pol + "%";
      }
    }
  };
  setInterval(animate, 5);
}

// const move = () => {
//   let por = 45;
//   let pol = 45;
//   setInterval(animate, 5);
//   const animate = () => {
//     if (key === 1) {
//       if (por === 70) {
//         clearInterval(anim);
//       } else {
//         por = por++;
//         box.style.left = por + "%";
//       }
//     } else {
//       if (por === 20) {
//         clearInterval(anim);
//       } else {
//         pol--;
//         box.style.left = pol + "%";
//       }
//     }
//   };
// };

// if (key === 1) {
//   if (por === 70) {
//     clearInterval(anim);
//   } else {
//     por = por++;
//     box.style.left = por + "%";
//   }
// } else {
//   if (por === 20) {
//     clearInterval(anim);
//   } else {
//     pol--;
//     box.style.left = pol + "%";
//   }
// }

// if (key === 1) {
//   while (por !== 70) {
//     por++;
//     box.style.left = por + "%";
//   }
//   while (pol !== 45) {
//     pol--;
//     box.style.left = por + "%";
//   }
// } else {
//   while (pol !== 20) {
//     pol--;
//     box.style.left = por + "%";
//   }
//   while (por !== 45) {
//     por++;
//     box.style.left = por + "%";
//   }
// }
