import {images} from './images/images.js';

// Create an array of arrays to log played grid
let grid = [
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
  [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
];

let counter = 1;
let gridCount = 1;
let playedGrid = document.querySelector("#grid" + gridCount);

let box;

const handleClick = (event) => {
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
  checkForWinner(box, location, row, column);

  if (gridCount == 1) {
    document.querySelector("#level").innerHTML = "quantum foam... 1 x10^-35m";
  } else if (gridCount == 2) {
    document.querySelector("#level").innerHTML = "atom... 2 x10^-15m";
  } else if (gridCount == 3) {
    document.querySelector("#level").innerHTML = "DNA... 2 x10^-9m";
  } else if (gridCount == 4) {
    document.querySelector("#level").innerHTML = "raindrop... 1 x10^-4m";
  } else if (gridCount == 5) {
    document.querySelector("#level").innerHTML = "baby... 0.5m";
  } else if (gridCount == 6) {
    document.querySelector("#level").innerHTML = "largest dinosaur... 30m";
  } else if (gridCount == 7) {
    document.querySelector("#level").innerHTML = "mariana trench depth... 11 x10^3m";
  } else if (gridCount == 8) {
    document.querySelector("#level").innerHTML = "uranus... 25 x10^3m";
  } else if (gridCount == 9) {
    document.querySelector("#level").innerHTML = "sun... 14 x10^8m";
  } else if (gridCount == 10) {
    document.querySelector("#level").innerHTML = "betelgeuse... 13 x10^11m";
  } else if (gridCount == 11) {
    document.querySelector("#level").innerHTML = "milky way... 19 x10^20m";
  } else if (gridCount == 12) {
    document.querySelector("#level").innerHTML = "great void... 95 x10^23m";
  } else if (gridCount == 13) {
    document.querySelector("#level").innerHTML = "observable universe... 870 x10^26m";
  }
};

playedGrid.addEventListener("click", handleClick);

const updateArrayGrid = (box) => {
  if (counter % 2 === 0) {
    box.letter = 1;
  } else {
    box.letter = 2;
  }
};

const updateGridDisplay = (box, location) => {
  let playerOne = images[gridCount].one;
  let playerTwo = images[gridCount].two;

  if (box.letter == 1) {
    playedGrid.querySelector(
      "#" + location
    ).innerHTML = playerOne.getEmbedCode();
  } else if (box.letter == 2) {
    playedGrid.querySelector(
      "#" + location
    ).innerHTML = playerTwo.getEmbedCode();
  } else {
    playedGrid.querySelector("#" + location).innerHTML = "";
  }

  if (counter % 2 === 0) {
    document.querySelector('#player2').classList.add('visible');
    document.querySelector('#player2').classList.remove('hidden');
    document.querySelector('#player1').classList.add('hidden');
    document.querySelector('#player1').classList.remove('visible');
  } else {
    document.querySelector('#player1').classList.add('visible');
    document.querySelector('#player1').classList.remove('hidden');
    document.querySelector('#player2').classList.add('hidden');
    document.querySelector('#player2').classList.remove('visible');
  }
};

const checkForWinner = (box, location, row, column) => {
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
  } else if (counter == 10) {
    winner = draw;
  } else {
    winner = noWinnerYet;
  }

  if (winner != noWinnerYet) {
    gridCount = gridCount + 1;

    if (winner == playerOneWins) {
      document.querySelector('#winner').innerHTML = 'Player 1 wins';
    } else if (winner == playerTwoWins) {
      document.querySelector('#winner').innerHTML = 'Player 2 wins';
    } else {
      document.querySelector('#winner').innerHTML = 'Draw';
    }

    let lastGrid = playedGrid;
    lastGrid.innerHTML = lastGrid.innerHTML.replaceAll("id=", "");

    playedGrid = document.querySelector("#grid" + gridCount);

    playedGrid.classList.remove("hidden");
    playedGrid.classList.add("grid");
    playedGrid.addEventListener("click", handleClick);

    playedGrid.querySelector("#" + location).innerHTML = lastGrid.outerHTML;
    playedGrid.querySelector("#" + location).classList.add("scale-small");
    lastGrid.classList.add("hidden");
    lastGrid.classList.remove("grid");

    if (counter % 2 === 0) {
      lastGrid.value = 1;
    } else {
      lastGrid.value = 2;
    }

    // Resetting the array grid - Consider making another function?
    grid = [
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
    ];

    box = grid[row][column];
    box.letter = lastGrid.value;
    counter = (lastGrid.value)+1;
  };
};
