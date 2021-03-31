import { images } from "./images/images.js";

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
let winner;
let lastGrid;
const playerOneWins = "Player one wins";
const playerTwoWins = "Player two wins";
const noWinnerYet = "No one has won yet";
const draw = "Game was a draw";

document
  .querySelector("#enter")
  .addEventListener("click", (event) =>
    document.querySelector("#opening").classList.add("hidden")
  );

const handleClick = (event) => {
  const boxLocation = event.target.getAttribute("value");
  const locationArr = boxLocation.split("-");
  const row = locationArr[0];
  const column = locationArr[1];
  const location = "row" + boxLocation;
  counter = counter + 1;
  box = grid[row][column];

  updateArrayGrid(box, location);

  updateGridDisplay(box, location);

  checkForWinner(location);

  updateWinner(location);

  resetGrid(box, column, row);

  updateLevelMessage();
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
    document.querySelector("#player2").classList.add("visible");
    document.querySelector("#player2").classList.remove("hidden");
    document.querySelector("#player1").classList.add("hidden");
    document.querySelector("#player1").classList.remove("visible");
  } else {
    document.querySelector("#player1").classList.add("visible");
    document.querySelector("#player1").classList.remove("hidden");
    document.querySelector("#player2").classList.add("hidden");
    document.querySelector("#player2").classList.remove("visible");
  }
};

const checkForWinner = (location) => {
  var row0 = [grid[0][0].letter, grid[0][1].letter, grid[0][2].letter];
  var row1 = [grid[1][0].letter, grid[1][1].letter, grid[1][2].letter];
  var row2 = [grid[2][0].letter, grid[2][1].letter, grid[2][2].letter];
  var col0 = [grid[0][0].letter, grid[1][0].letter, grid[2][0].letter];
  var col1 = [grid[0][1].letter, grid[1][1].letter, grid[2][1].letter];
  var col2 = [grid[0][2].letter, grid[1][2].letter, grid[2][2].letter];
  var diag1 = [grid[0][0].letter, grid[1][1].letter, grid[2][2].letter];
  var diag2 = [grid[0][2].letter, grid[1][1].letter, grid[2][0].letter];

  if (
    row0.toString() == "1,1,1" ||
    row1.toString() == "1,1,1" ||
    row2.toString() == "1,1,1" ||
    col0.toString() == "1,1,1" ||
    col1.toString() == "1,1,1" ||
    col2.toString() == "1,1,1" ||
    diag1.toString() == "1,1,1" ||
    diag2.toString() == "1,1,1"
  ) {
    winner = playerOneWins;
  } else if (
    row0.toString() == "2,2,2" ||
    row1.toString() == "2,2,2" ||
    row2.toString() == "2,2,2" ||
    col0.toString() == "2,2,2" ||
    col1.toString() == "2,2,2" ||
    col2.toString() == "2,2,2" ||
    diag1.toString() == "2,2,2" ||
    diag2.toString() == "2,2,2"
  ) {
    winner = playerTwoWins;
  } else if (counter == 10) {
    winner = draw;
  } else {
    winner = noWinnerYet;
  }
  return winner;
};

const updateWinner = (location) => {
  if (winner != noWinnerYet && gridCount < 13) {
    gridCount = gridCount + 1;

    if (winner == playerOneWins) {
      document.querySelector("#winner").innerHTML = playerOneWins;
    } else if (winner == playerTwoWins) {
      document.querySelector("#winner").innerHTML = playerTwoWins;
    } else {
      document.querySelector("#winner").innerHTML = draw;
    }

    lastGrid = playedGrid;
    lastGrid.innerHTML = lastGrid.innerHTML.replaceAll("id=", "");

    playedGrid = document.querySelector("#grid" + gridCount);

    playedGrid.classList.remove("hidden");
    playedGrid.classList.add("grid");
    playedGrid.addEventListener("click", handleClick);

    playedGrid.querySelector("#" + location).innerHTML = lastGrid.outerHTML;
    playedGrid.querySelector("#" + location).classList.add("scale-small");
    lastGrid.classList.add("hidden");
    lastGrid.classList.remove("grid");

    return lastGrid;
  } else if (winner != noWinnerYet && gridCount == 13) {
    gridCount = gridCount + 1;
    document.getElementById("explosion").classList.remove("hidden");
    document.querySelector("#winner").classList.add("hidden");
    document.querySelector("#player1").classList.add("hidden");
    document.querySelector("#player2").classList.add("hidden");
    document.querySelector("#level").classList.add("hidden");
    document.getElementById("explosion").classList.add("hidden"), 2000;
  }
};

const resetGrid = (box, column, row) => {
  if (winner != noWinnerYet && gridCount < 14) {
    if (counter % 2 === 0) {
      lastGrid.value = 1;
    } else {
      lastGrid.value = 2;
    }

    grid = [
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
    ];

    box = grid[row][column];
    box.letter = lastGrid.value;
    counter = lastGrid.value + 1;
  } else if (winner != noWinnerYet && gridCount == 14) {
    grid = [
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
      [{ letter: 0 }, { letter: 0 }, { letter: 0 }],
    ];
    counter = 1;
    gridCount = 1;
  }
};

const updateLevelMessage = () => {
  let levelMessage = document.querySelector("#level");
  if (gridCount == 1) {
    levelMessage.innerHTML = "quantum foam... 1 x10^-35m";
  } else if (gridCount == 2) {
    levelMessage.innerHTML = "atom... 2 x10^-15m";
  } else if (gridCount == 3) {
    levelMessage.innerHTML = "DNA... 2 x10^-9m";
  } else if (gridCount == 4) {
    levelMessage.innerHTML = "raindrop... 1 x10^-4m";
  } else if (gridCount == 5) {
    levelMessage.innerHTML = "baby... 0.5m";
  } else if (gridCount == 6) {
    levelMessage.innerHTML = "largest dinosaur... 30m";
  } else if (gridCount == 7) {
    levelMessage.innerHTML = "mariana trench depth... 11 x10^3m";
  } else if (gridCount == 8) {
    levelMessage.innerHTML = "uranus... 25 x10^3m";
  } else if (gridCount == 9) {
    levelMessage.innerHTML = "sun... 14 x10^8m";
  } else if (gridCount == 10) {
    levelMessage.innerHTML = "betelgeuse... 13 x10^11m";
  } else if (gridCount == 11) {
    levelMessage.innerHTML = "milky way... 19 x10^20m";
  } else if (gridCount == 12) {
    levelMessage.innerHTML = "great void... 95 x10^23m";
  } else if (gridCount == 13) {
    levelMessage.innerHTML = "observable universe... 870 x10^26m";
  }
};
