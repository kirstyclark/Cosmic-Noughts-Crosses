// import {quantumFoam1, quantumFoam2} from "./images.js";
class Symbol {
  constructor(url) {
    this.url = url;
  }
  getEmbedCode() {
    return `<img class="animated__gif" src='${this.url}'></img>`;
  }
}

// ROUND ONE
const quantumFoam1 = new Symbol(
  "https://thumbs.gfycat.com/CompleteBriefBaleenwhale.webp"
);
const quantumFoam2 = new Symbol(
  "https://thumbs.gfycat.com/BelovedTotalGrouse.webp"
);

// PLAYER CLICKS ON GRID BOX

// Find location of players click
let boxLocation;
const findLocation = (event) => {
  boxLocation = event.target.getAttribute("id");
  console.log(boxLocation);
};

const gridLocation = document
  .getElementById("grid")
  .addEventListener("click", findLocation);

// 1. keep track of the moves which have been made
let counter = -1;

const playerClick = (event) => {
  counter = counter + 1;
  console.log(counter);
  // if ( ...... .letter == 0) {
  //   console.log("empty box");
  if (counter % 2 === 0) {
    document.getElementById(
      boxLocation
    ).innerHTML = quantumFoam1.getEmbedCode();
    console.log(boxLocation);
    console.log(grid);
  } else {
    document.getElementById(
      boxLocation
    ).innerHTML = quantumFoam2.getEmbedCode();
    console.log(boxLocation);
    console.log(grid);
  }

  // } else {
  //   counter = counter - 1;
  //   console.log("already played");
  //   console.log(counter);
  // }
};

// Create an array of arrays to log played grid

let grid = [
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
];

let box1 = grid[0][0].letter;
let box2 = grid[0][1].letter;
let box3 = grid[0][2].letter;
let box4 = grid[1][0].letter;
let box5 = grid[1][1].letter;
let box6 = grid[1][2].letter;
let box7 = grid[2][0].letter;
let box8 = grid[2][1].letter;
let box9 = grid[2][2].letter;

// Find value of grid box just clicked

let clickValue;

const addValue = (
  event,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9
) => {

  const findValue = (event) => {
    clickValue = event.target.value;
    return clickValue;
  }

  if (clickValue == "1") {
    if (counter % 2 === 0) {
      box1 = "1";
    } else {
      box1 = "2";
    }
  } else if (clickValue == "2") {
    if (counter % 2 === 0) {
      box2 = "1";
    } else {
      box2 = "2";
    }
  } else if (clickValue == "3") {
    if (counter % 2 === 0) {
      box3 = "1";
    } else {
      box3 = "2";
    }
  } else if (clickValue == "4") {
    if (counter % 2 === 0) {
      box4 = "1";
    } else {
      box4 = "2";
    }
  } else if (clickValue == "5") {
    if (counter % 2 === 0) {
      box5 = "1";
    } else {
      box5 = "2";
    }
  } else if (clickValue == "6") {
    if (counter % 2 === 0) {
      box6 = "1";
    } else {
      box6 = "2";
    }
  } else if (clickValue == "7") {
    if (counter % 2 === 0) {
      box7 = "1";
    } else {
      box7 = "2";
    }
  } else if (clickValue == "8") {
    if (counter % 2 === 0) {
      box8 = "1";
    } else {
      box8 = "2";
    }
  } else {
    if (counter % 2 === 0) {
      box9 = "1";
    } else {
      box9 = "2";
    }
  }
  console.log(grid);
};

//  Player clicks on a sqaure in grid
//  Every square has a value depending on its location
//  Each square corresponds to a different value in the grid array
//  if statement?
//  if box has value of 'X' and counter is 'ODD' --> change letter to '1'
// playerOne is even & playerTwo is odd

// Create a function which tracks to see if latest move is a winning move
// If box has been played, do not player click box

// for (let index = 0; index < 3; index++) {
//   const row = grid[index];
//   // 1. Check for horizontal matches
//   // 2. Check for vertical matches
//   // 3. Check for diagonal matches
// }

const gridClick = document
  .getElementById("grid")
  .addEventListener("click", playerClick);

const squareValue = document
  .getElementById("grid")
  .addEventListener("click", addValue);

// When a player has three of their symbols in a row, they have won this round

// Line is scored through the winning 3

// Screen zooms out
//        - completed grid is a then the first move in a new grid
//        - player who won last round, is first mover

// If no winner, screen zooms out but past viewing board is not first move

// disable event listener
// function that is running constantly to check for winner
// ---> when button is clicked
