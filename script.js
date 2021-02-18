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

// Create an array of arrays to log played grid
let grid = [
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
];

let counter = -1;
let box;

document.getElementById("grid").addEventListener("click", (event) => {
  // 1. Increment the counter
  counter = counter + 1;
  const boxLocation = event.target.getAttribute("value");
  // 2. Update Array-Grid to correspond/match the click which was made. e.g. Player 1 clicked row1 column1, the grid needs to reflect that
  updateArrayGrid(boxLocation);
  // 3. Update Display-Grid to show symbol1 or symbol2 (e.g. quantom foam or ..)
  updateGridDisplay(box, boxLocation);
});

const updateArrayGrid = (boxLocation) => {
  const locationArr = boxLocation.split("-");
  const row = locationArr[0];
  const column = locationArr[1];

  //We have the box, let's update it's value
  box = grid[row][column];
  if (counter % 2 === 0) {
    box.letter = 1;
  } else {
    box.letter = 2;
  }

  // if (box.letter = 1) {
  //   for (let index=0; index < 3; index++) {
  //     if (grid[row][index] == box.letter) {
  //       return win;
  //     } else if (grid[index][column] == box.letter) {
  //       return win;
  //     } else if ()
  //   }
  //   for (let index=0; index < 3; index++) {
  //     grid[index][column] == box.letter ?
  //   }
  // } else if (box.letter = 2) {
  // }

  // I need to find out if the grid box just clicked has been the winning move
  //    --> " box = grid[0][1] "
  // Find which player has just played
  //    --> " box.letter = 1 "
  // Check if they have had a horizontal win
  //    --> check if the other two values in that horizontal row have the same box.letter
  //    --> row = [0] ...... for loop [0][0], [0][1], [0][2] = box.letter=1 ?
  // Check if they have had a vertical win
  //    --> check if the other two values in that vertical column have the same box.letter
  //    --> column = [1] ...... for loop [0][0], [1][0], [1][0] = box.letter=1 ?
  // Check if they have had a diagonal win
  //    --> if move just played was in a corner or center, check for diagonal wins
  //    --> [0][0], [0][2], [1][1], [2][0], [2][2];
  //    --> check if the other two values in that horizontal row have the same box.letter
  //    --> row = [0] ...... for loop [0][0], [0][1], [0][2] = box.letter=1 ?
};

const updateGridDisplay = (box, boxLocation) => {
  if (box.letter == 1) {
    document.getElementsByTagName(boxLocation).innerHTML = quantumFoam1.getEmbedCode();
  } else if (box.letter == 2) {
    document.getElementsByTagName(boxLocation).innerHTML = quantumFoam2.getEmbedCode();
  } else {
    document.getElementsByTagName(boxLocation).innerHTML == "";
  }
};

// When a player has three of their symbols in a row, they have won this round

// Line is scored through the winning 3

// Screen zooms out
//        - completed grid is a then the first move in a new grid
//        - player who won last round, is first mover

// If no winner, screen zooms out but past viewing board is not first move

// disable event listener
// function that is running constantly to check for winner
// ---> when button is clicked
