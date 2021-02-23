class Symbol {
  constructor(url) {
    this.url = url;
  }
  getEmbedCode() {
    return `<img class="animated__gif" src='${this.url}'></img>`;
  }
}

// ROUND ONE
const playerOne = new Symbol(
  "https://thumbs.gfycat.com/CompleteBriefBaleenwhale.webp"
);
const playerTwo = new Symbol(
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
let gridCount = 1;
let playedGrid = document.getElementById("grid" + gridCount);
let winner;

// let playerOne = JSON.parse(JSON.stringify('playerOne' + gridCount));
// const playerOne = 'playerOne' + gridCount;
// const playerTwo = 'playerTwo' + gridCount;

playedGrid.addEventListener("click", (event) => {
  const boxLocation = event.target.getAttribute("value");
  const locationArr = boxLocation.split("-");
  const row = locationArr[0];
  const column = locationArr[1];
  const location = "row" + boxLocation;

  counter = counter + 1;
  box = grid[row][column];

  // 1. Update Array-Grid to correspond/match the click which was made
  updateArrayGrid(box);

  // 2. Update Display-Grid to show symbol1 or symbol2
  updateGridDisplay(box, location);

  // 3. Check for winning combinations
  checkForWinner(box, location);

});

const updateArrayGrid = (box) => {
  if (counter % 2 === 0) {
    box.letter = 1;
  } else {
    box.letter = 2;
  }
};

const updateGridDisplay = (box, location) => {
  if (box.letter == 1) {
    document.getElementById(location).innerHTML = playerOne.getEmbedCode();
  } else if (box.letter == 2) {
    document.getElementById(location).innerHTML = playerTwo.getEmbedCode();
    document.getElementById(location).innerHTML = playerTwo.getEmbedCode();
    document.getElementById(location).innerHTML = playerTwo.getEmbedCode();
    document.getElementById(location).innerHTML = playerTwo.getEmbedCode();
  } else {
    document.getElementById(location).innerHTML = "";
  }
};

const checkForWinner = (box, location) => {
  // Winning combinations
  var row0 = [grid[0][0].letter, grid[0][1].letter, grid[0][2].letter];
  var row1 = [grid[1][0].letter, grid[1][1].letter, grid[1][2].letter];
  var row2 = [grid[2][0].letter, grid[2][1].letter, grid[2][2].letter];
  var col0 = [grid[0][0].letter, grid[1][0].letter, grid[2][0].letter];
  var col1 = [grid[0][1].letter, grid[1][1].letter, grid[2][1].letter];
  var col2 = [grid[0][2].letter, grid[1][2].letter, grid[2][2].letter];
  var diag1 = [grid[0][0].letter, grid[1][1].letter, grid[2][2].letter];
  var diag2 = [grid[0][2].letter, grid[1][1].letter, grid[2][0].letter];

  let winner;
  const playerOneWins = "player one wins";
  const playerTwoWins = "player two wins";
  const noWinnerYet = "no one has won yet";
  const draw = "game was a draw";

  // When a player has three of their symbols in a row, they have won this round
  if (
    row0.toString() == [1, 1, 1].toString() ||
    row1.toString() == [1, 1, 1].toString() ||
    row2.toString() == [1, 1, 1].toString() ||
    col0.toString() == [1, 1, 1].toString() ||
    col1.toString() == [1, 1, 1].toString() ||
    col2.toString() == [1, 1, 1].toString() ||
    diag1.toString() == [1, 1, 1].toString() ||
    diag2.toString() == [1, 1, 1].toString()
  ) {
    winner = playerOneWins;
  } else if (
    row0.toString() == [2, 2, 2].toString() ||
    row1.toString() == [2, 2, 2].toString() ||
    row2.toString() == [2, 2, 2].toString() ||
    col0.toString() == [2, 2, 2].toString() ||
    col1.toString() == [2, 2, 2].toString() ||
    col2.toString() == [2, 2, 2].toString() ||
    diag1.toString() == [2, 2, 2].toString() ||
    diag2.toString() == [2, 2, 2].toString()
  ) {
    winner = playerTwoWins;
  } else if (counter == 8) {
    winner = draw;
  } else {
    winner = noWinnerYet;
  }

  if (winner != noWinnerYet) {

    gridCount = gridCount + 1;

    let lastGrid = playedGrid
    lastGrid.innerHTML.replaceAll('id=', "")

    playedGrid = document.getElementById('grid' + gridCount);
    playedGrid.classList.remove('hidden');
    playedGrid.classList.add('grid');
    console.log(playedGrid);

    playedGrid.querySelector('#' + location).innerHTML = lastGrid.outerHTML;
    playedGrid.querySelector('#' + location).classList.add('scale-small')

    lastGrid.classList.add('hidden');
    lastGrid.classList.remove('grid');

    // Resetting the array grid
    grid = [
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
    ];

    if (counter % 2 === 0) {
      lastGrid.value = 1;
    } else {
      lastGrid.value = 2;
    }

    // 3. set the innerHTML of the square that was won on, to the copy of the grid we just made
  }

};

// when someone wins, the screen zooms out
// ---> completed grid shrinks down to the size of a grid square
// whatever the location of the final winning click was,
// the completed grid, takes that position in the new grid
// ---> player who won last round, is first mover
// ---> the past completed grid is their first move

// If no winner, screen zooms out and moves to next level regardless
// ---> all box.letter != 0 , game is complete and move on to next level
// ---> current grid zooms down like usual, but then dissapears
