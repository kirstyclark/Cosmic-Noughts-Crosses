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
var quantumFoam2 = new _Symbol("https://thumbs.gfycat.com/BelovedTotalGrouse.webp"); // Create an array of arrays to log played grid

var grid = [[{
  letter: 0
}, {
  letter: 0
}, {
  letter: 0
}], [{
  letter: 0
}, {
  letter: 0
}, {
  letter: 0
}], [{
  letter: 0
}, {
  letter: 0
}, {
  letter: 0
}]];
var playedGrid = document.getElementById('grid' + gridCount);
var counter = -1;
var box;
var gridCount = 1;
var playerOne = quantumFoam1;
var playerTwo = quantumFoam2; // make some kind of function which knows what level the game is on
// picks out the set of symbols to play

playedGrid.addEventListener("click", function (event) {
  var boxLocation = event.target.getAttribute("value");
  var locationArr = boxLocation.split("-");
  var row = locationArr[0];
  var column = locationArr[1];
  var location = "row" + boxLocation;
  counter = counter + 1;
  box = grid[row][column];
  console.log(originalGrid); // 1. Update Array-Grid to correspond/match the click which was made

  updateArrayGrid(box); // 2. Update Display-Grid to show symbol1 or symbol2

  updateGridDisplay(box, location); // 3. Check for winning combinations

  checkForWinner(box, location); // 4. When winner/ grid complete, zoom out the next grid
  // nextLevel(winner);
});

var updateArrayGrid = function updateArrayGrid(box) {
  if (counter % 2 === 0) {
    box.letter = 1;
  } else {
    box.letter = 2;
  }
};

var updateGridDisplay = function updateGridDisplay(box, location) {
  if (box.letter == 1) {
    document.getElementById(location).innerHTML = playerOne.getEmbedCode();
  } else if (box.letter == 2) {
    document.getElementById(location).innerHTML = playerTwo.getEmbedCode();
  } else {
    document.getElementById(location).innerHTML = "";
  }
};

var checkForWinner = function checkForWinner(box, location) {
  // Winning combinations
  var row0 = [grid[0][0].letter, grid[0][1].letter, grid[0][2].letter];
  var row1 = [grid[1][0].letter, grid[1][1].letter, grid[1][2].letter];
  var row2 = [grid[2][0].letter, grid[2][1].letter, grid[2][2].letter];
  var col0 = [grid[0][0].letter, grid[1][0].letter, grid[2][0].letter];
  var col1 = [grid[0][1].letter, grid[1][1].letter, grid[2][1].letter];
  var col2 = [grid[0][2].letter, grid[1][2].letter, grid[2][2].letter];
  var diag1 = [grid[0][0].letter, grid[1][1].letter, grid[2][2].letter];
  var diag2 = [grid[0][2].letter, grid[1][1].letter, grid[2][0].letter];
  var winner;
  var playerOneWins = "player one wins";
  var playerTwoWins = "player two wins";
  var noWinnerYet = "no one has won yet";
  var draw = "game was a draw"; // When a player has three of their symbols in a row, they have won this round

  if (row0.toString() == [1, 1, 1].toString() || row1.toString() == [1, 1, 1].toString() || row2.toString() == [1, 1, 1].toString() || col0.toString() == [1, 1, 1].toString() || col1.toString() == [1, 1, 1].toString() || col2.toString() == [1, 1, 1].toString() || diag1.toString() == [1, 1, 1].toString() || diag2.toString() == [1, 1, 1].toString()) {
    winner = playerOneWins;
  } else if (row0.toString() == [2, 2, 2].toString() || row1.toString() == [2, 2, 2].toString() || row2.toString() == [2, 2, 2].toString() || col0.toString() == [2, 2, 2].toString() || col1.toString() == [2, 2, 2].toString() || col2.toString() == [2, 2, 2].toString() || diag1.toString() == [2, 2, 2].toString() || diag2.toString() == [2, 2, 2].toString()) {
    winner = playerTwoWins;
  } else if (counter == 8) {
    winner = draw;
  } else {
    winner = noWinnerYet;
  } // If someone's won the game, increment our gridCount


  if (winner != noWinnerYet) {
    gridCount = gridCount + 1;
    console.log(originalGrid); // 1. Make a copy of the grid

    var grid1 = document.getElementById("grid");
    grid1.innerHTML = grid1.innerHTML.replaceAll("id=", " ");
    grid1.style.transform = 'scale(0.2)';
    grid1.style.transition = '2s';
    originalGrid.getElementById(location).innerHTML = grid1; // Resetting the array grid

    grid = [[{
      letter: 0
    }, {
      letter: 0
    }, {
      letter: 0
    }], [{
      letter: 0
    }, {
      letter: 0
    }, {
      letter: 0
    }], [{
      letter: 0
    }, {
      letter: 0
    }, {
      letter: 0
    }]];

    if (counter % 2 === 0) {
      box.letter = 1;
    } else {
      box.letter = 2;
    } // 3. set the innerHTML of the square that was won on, to the copy of the grid we just made

  }

  return winner; // Line is scored through the winning 3
}; // const nextLevel = (winner) => {
//   if (winner !== noWinnerYet) {
//     console.log(winner);
//     document.getElementById("grid").classList.add("zoomOut");
//   } else {
//     // nowt
//   }
// when someone wins, the screen zooms out
// ---> completed grid shrinks down to the size of a grid square
// whatever the location of the final winning click was,
// the completed grid, takes that position in the new grid
// ---> player who won last round, is first mover
// ---> the past completed grid is their first move
// If no winner, screen zooms out and moves to next level regardless
// ---> all box.letter != 0 , game is complete and move on to next level
// ---> current grid zooms down like usual, but then dissapears
// if (row0 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (row0 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (row1 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (row1 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (row2 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (row2 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (col0 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (col0 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (col1 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (col1 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (col2 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (col2 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (diag1 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (diag1 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else if (diag2 == [1, 1, 1]) {
//   winner = playerOneWins;
// } else if (diag2 == [2, 2, 2]) {
//   winner = playerTwoWins;
// } else {
//   winner = noWinnerYet;
// }
// for (let index = 0; index < 3; index++) {
//   if (row(index) == [1, 1, 1]) {
//     console.log("Player one wins");
//   } else if (row(index) == [2, 2, 2]) {
//     console.log("Player two wins");
//   } else {
//     console.log("Nobody has won yet");
//   }
//   if (col(index) == [1, 1, 1]) {
//     console.log("Player one wins");
//   } else if (col(index) == [2, 2, 2]) {
//     console.log("Player two wins");
//   } else {
//     console.log("Nobody has won yet");
//   }
// }