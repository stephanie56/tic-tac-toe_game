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
  var user = {symbol:null, token:1};
  var computer = {symbol:null, token:2};
  var cross = '<span class="fa fa-close"></span';
  var circle = '<span class="fa fa-circle-thin"></span>';
  var board = [[0,0,0],[0,0,0],[0,0,0]];

  clear();

  $('#cross').click(function(){
    user.symbol = cross;
    computer.symbol = circle;
  });

  $('#circle').click(function(){
    user.symbol = circle;
    computer.symbol = cross;
  });

  $('.box').click(function(){
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    if(board[row][col] == 0){
      board[row][col] = 1; // player1: user
      makeMove(this, user.symbol);
      if(won()==true){
        console.log("You won!!!");
      }
      else{
        setTimeout(computerMove(findMove()), 2500);
      }
    }

  });

  /** main functions **/

  function makeMove(location, sym){
    $(location).html(sym);
  }

  function computerMove(move){
    var r = move[0];
    var c = move[1];
    var key = r*3 + c;
    $('[data-key="'+ key +'"]').html(computer.symbol);
    board[r][c] = 2; // player2: computer
    console.table(board);
  }

  // This function is to find the next available cell to move onto -> output index of the available cell
  function findMove(){
    var move = [];
    while(move.length == 0){
      var i = Math.round(Math.random()*2);
      var j = Math.round(Math.random()*2);
      for(var r = 0; r < 3; r++){
        for(var c = 0; c < 3; c++){
          //case 1: if computer has 2 in a row or in a col
          if(board[r][c] == 0 && r == i && c == j){
            move.push(r,c);
            break;
          }
        } // iterate each col
      } // iterate each row
    }
    return move;
  } // findmove ends

  function won(){
    return false;
  }

  function clear(){
    console.log("clear board!");
  }

});
