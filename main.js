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

  $('#cross').click(function(){
    user.symbol = cross;
  });

   $('#circle').click(function(){
    user.symbol = circle;
  });


  $('.box').click(function(){

    showMove(this, user.symbol);

  });

  function showMove(location, sym){
    $(location).html(sym);
  }

});
