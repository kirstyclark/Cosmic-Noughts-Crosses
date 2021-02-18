"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _Symbol =
/*#__PURE__*/
function () {
  function _Symbol(url) {
    _classCallCheck(this, _Symbol);

    this.url = url;
  }

  _createClass(_Symbol, [{
    key: "getEmbedCode",
    value: function getEmbedCode() {
      return "<img class=\"animated__gif\" src='".concat(this.url, "'></img>");
    }
  }]);

  return _Symbol;
}(); // ROUND ONE


var quantumFoam1 = new _Symbol("https://thumbs.gfycat.com/CompleteBriefBaleenwhale.webp");
var quantumFoam2 = new _Symbol("https://thumbs.gfycat.com/BelovedTotalGrouse.webp"); // ROUND TWO

var atom1 = new _Symbol("https://gfycat.com/hauntingzealousatlanticsharpnosepuffer");
var atom2 = new _Symbol("https://gfycat.com/hiddenexemplaryamoeba"); // PLAYER CLICKS ON GRID BOX
// --> Event listener added to grid
// --> When grid is clicked, 1 is added to counter

var counter = 0;

var playerClick = function playerClick(event) {
  console.log(counter);
  return counter = counter + 1;
};

var gridClick = document.getElementById('grid').addEventListener("click", playerClick); // --> their symbol appears in the square

var boxLocation;

var findLocation = function findLocation(event) {
  console.log(event.target.getAttribute('id'));
  return event.target.getAttribute('id');
};

var gridLocation = document.getElementById('grid').addEventListener("click", findLocation); // Next player click on a box in the grid 
//        - different symbol appears in the square
//        - a counter is added to buttonTrack
// A player cannot click on a box that already has a symbol in it
// When a player has three of their symbols in a row, they have won this round
// Line is scored through the winning 3
// Screen zooms out
//        - completed grid is a then the first move in a new grid 
//        - player who won last round, is first mover
// If no winner, screen zooms out but past viewing board is not first move 
// disable event listener 
// function that is running constantly to check for winner 
// ---> when button is clicked 
// Background animation when a button is clicked
// let counter = 0;
// keypad.addEventListener("click", (event) => {
//   counter = counter + 1;
//   if (counter % 2 == 0) {
//     document.getElementById('background').classList.add('background2');
//     document.getElementById('background').classList.remove('background');
//   } else {
//     document.getElementById('background').classList.add('background');
//     document.getElementById('background').classList.remove('background2');
//   }
// });
// const buttonClick = document
//   .getElementById("box1")
//   .addEventListener("click", boxClick);
// const gridClick = document
//   .getElementById("grid")
//   .addEventListener("click", buttonPressed);
//   grid.addEventListener("click", (event) => {
//     lastButton = event.target.className;
//   });
//   grid.addEventListener("click", (event) => {
//     lastButton = event.target.className;
//   });
// const boxClick = (event) => {
//     if (document.getElementById("grid__box").innerHTML = undefined) {
//       if (counter % 2 == 0) {
//         return Symbol.getEmbedCode();
//       } else {
//         return Symbol.getEmbedCode();
//       }
//     } 
//     else {
//       counter = counter - 1;
//     }
//   };
// const boxOneClick = (event) => {
//   if (document.getElementById("box1").innerHTML = undefined) {
//     if (counter % 2 == 0) {
//       document.getElementById("box1").innerHTML = quantumFoam1.getEmbedCode();
//     } else {
//       document.getElementById("box1").innerHTML = quantumFoam2.getEmbedCode();
//     }
//   } else {
//     counter = counter - 1;
//   }
// };
// const boxOne = document
//   .getElementById("box1")
//   .addEventListener("click", boxOneClick);
// const boxTwoClick = (event) => {
//   if (counter % 2 == 0) {
//     document.getElementById("box2").innerHTML = quantumFoam1.getEmbedCode();
//   } else {
//     document.getElementById("box2").innerHTML = quantumFoam2.getEmbedCode();
//   }
// };
// const boxThreeClick = (event) => {
//   if (counter % 2 == 0) {
//     document.getElementById("box3").innerHTML = quantumFoam1.getEmbedCode();
//   } else {
//     document.getElementById("box3").innerHTML = quantumFoam2.getEmbedCode();
//   }
// };
// const boxFourClick = (event) => {
//   if (counter % 2 == 0) {
//     document.getElementById("box4").innerHTML = quantumFoam1.getEmbedCode();
//   } else {
//     document.getElementById("box4").innerHTML = quantumFoam2.getEmbedCode();
//   }
// };
// const boxFiveClick = (event) => {
//   if (counter % 2 == 0) {
//     document.getElementById("box5").innerHTML = quantumFoam1.getEmbedCode();
//   } else {
//     document.getElementById("box5").innerHTML = quantumFoam2.getEmbedCode();
//   }
// };
// const boxTwo = document
//   .getElementById("box2")
//   .addEventListener("click", boxTwoClick);
// const boxThree = document
//   .getElementById("box3")
//   .addEventListener("click", boxThreeClick);
// const boxFour = document
//   .getElementById("box4")
//   .addEventListener("click", boxFourClick);
// const boxFive = document
//   .getElementById("box5")
//   .addEventListener("click", boxFiveClick);
// const boxSix = document
//   .getElementById("box6")
//   .addEventListener("click", boxSixClick);
// const boxSeven = document
//   .getElementById("box7")
//   .addEventListener("click", boxSevenClick);
// const boxEight = document
//   .getElementById("box8")
//   .addEventListener("click", boxEightClick);
// const boxNine = document
//   .getElementById("box9")
//   .addEventListener("click", boxNineClick);