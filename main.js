/** tic tac toe game **/

$(document).ready(function(){
  var user = {symbol:null,
              score:[[0,0,0],[0,0,0],[0,0,0]]};
  var computer = {symbol:null,
                  score:[[0,0,0],[0,0,0],[0,0,0]]};
  var cross = '<span class="fa fa-close"></span>';
  var circle = '<span class="fa fa-circle-thin"></span>';
  var board = [[0,0,0],[0,0,0],[0,0,0]];

  $('#cross').click(function(){
    user.symbol = cross;
    computer.symbol = circle;
  });

  $('#circle').click(function(){
    user.symbol = circle;
    computer.symbol = cross;
  });

  $('#reset').click(clear);

  $('.box').click(function(){
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    if(board[row][col] == 0){
      board[row][col] = 1; // player1: user
      user.score[row][col] = 1;
      $(this).html(user.symbol);
      if(won(user.score)){
        $(".message").html("YOU WON!!!");
        setTimeout(clear, 2500);
      }
      else{
        setTimeout(computerMove(findMove()), 2500);
      }
    }

  });

  /** main functions **/
  function computerMove(move){
    var r = move[0];
    var c = move[1];
    var key = r*3 + c;
    $('[data-key="'+ key +'"]').html(computer.symbol);
    board[r][c] = 2; // player2: computer
    computer.score[r][c] = 1;
    if(won(computer.score)){
      $(".message").html("YOU LOSE!!");
      setTimeout(clear, 2500);
    }
  }

  // This function is to find the next available cell to move onto -> output index of the available cell
  function findMove(){
    var move = [];
    while(move.length == 0){
      var i = Math.round(Math.random()*2);
      var j = Math.round(Math.random()*2);
      for(var r = 0; r < 3; r++){
        for(var c = 0; c < 3; c++){
          if(board[r][c] == 0 && r == i && c == j){
            move.push(r,c);
            break;
          }
        } // iterate each col
      } // iterate each row
    }
    return move;
  }

  function won(score){
    for(var row = 0; row < 3; row++){
      if(score[row][0] == 1 && score[row][1] == 1 && score[row][2] == 1){
        return true;
      }
      for(var col = 0; col < 3; col++){
        if(score[0][col] == 1 && score[1][col] == 1 && score[2][col] == 1){
          return true;
        }
        else if(score[0][0] == 1 && score[1][1] == 1 && score[2][2] == 1){
          return true;
        }
        else if(score[0][2] == 1 && score[1][1] == 1 && score[2][0] == 1){
          return true;
        }
      }
    }
       return false;
    }

  function clear(){
    console.log("click to clear");
    $(".box").find('span').remove();
    board = [[0,0,0],[0,0,0],[0,0,0]];
    user = {symbol:null,
            score:[[0,0,0],[0,0,0],[0,0,0]]};
    computer = {symbol:null,
                score:[[0,0,0],[0,0,0],[0,0,0]]};
    $(".message").html("");
  }

});
