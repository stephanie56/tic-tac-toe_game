/** tic tac toe game **/
// user story:
// - I can play a game of Tic Tac Toe with the computer.
// - My game will reset as soon as it's over so I can play again.
// - I can choose whether I want to play as X or O.
// MVP to-do
// 1. draw the tic tac toe board (9 cells and 2 symbols to be re-used)
// 2. how to start the game:
// - user click on X or O to trigger the game
// - if user click on X or O - this symbol is assigned to user
// - if user move first
// 1) user click on one of the 9 cells, the user's symbol shows
// 2) action (1) triggers a cell shows the other symbol
// 3. user - computer - user - computer until
// user or computer win the game
// 4. how to win the game
// the board from left to right - from top to bottom is a 2d (nested) array
// 1) board = [{row0: [col0, col1, col2]},{row1: [col0, col1, col2]}, {row2: [col0, col1, col2]}]
// 2) board = [row0col0, row0col1, row0col2, row1col0, row1col1, row1col2, row2col0, row2col1, row2col2]

/** main functions **/
// function clear(); -> clear the board to start fresh
// function greet(); -> user to pick symbol
// function init(); -> to start the game
// function move(); -> how to move around
// function won(); -> how to win the game

$(document).ready(function(){
  var cross = '<span class="fa fa-close"></span>';
  var circle = '<span class="fa fa-circle-thin"></span>';
  var user = {symbol:null};
  var computer = {symbol:null};
  var board = [0,0,0,0,0,0,0,0,0];

  $('#cross').click(function(){
    user.symbol = cross;
    computer.symbol = circle;
  });

   $('#circle').click(function(){
    user.symbol = circle;
    computer.symbol = cross;
  });


  $('.box').click(function(){
    var index = $(this).attr('data-key');
    board[index] = 1; // player1: user
    var nextmove = findMove();
    makeMove(this, user.symbol);
    if(won() == true){
      console.log("You won!!!");
    }
    else{
      setTimeout(computerMove(nextmove), 1500);
    }
  });

  /** main functions **/

  function makeMove(location, sym){
    $(location).html(sym);
  }

  function computerMove(key){
    $('[data-key="'+ key +'"]').html(computer.symbol);
    board[key] = 2; // player2: computer
    console.log(board);
  }

  // This function is to find the next available cell to move onto -> output index of the available cell
  function findMove(){
    var move = null;
      var r = Math.floor(Math.random() * 8); // generate a random number 0 - 8
      for(var i = 0; i < 9; i++){
        if(i === r && board[i] !== 1){
          move = r;
          return move;
        }
        else{
          console.log("ooops");
        }
      } //forloop ends
  } // findmove ends

  function won(){
    for(var row = 0; row < 3; row++){
      for(var col = 0; col < 3; col++){
        if(board[row][col] == board[row][col+1] == board[row][col+2] && board[row][col] != 0){
          console.log("row it!");
          return true;
        }
        else if(board[row][col] == board[row+1][col] == board[row+2][col] && board[row][col] != 0){
          console.log("colsh you!");
          return true;
        }
        else if(board[row][col] == board[row+1][col+1] == board[row+2][col+2] && board[row][col] != 0){
          console.log("cross off!");
          return true;
        }
        else if(board[row][col] == board[row+1][col-1] == board[row+2][col-2] && board[row][col] != 0){
          console.log("cross off!");
          return true;
        }
        else {
          return false;
        }
      }
    }

    return false;

  }


});
