import { Gameboard } from './gameboard';

function buildBoard(player) {
  let gameBoard = new Gameboard()
  let boardDiv = document.createElement('div');
  boardDiv.classList = 'board';
  document.body.appendChild(boardDiv);
  // gameBoard.board.forEach(
  //
  // )
  for (let x=0; x<10; x++) {
    for (let y=0; y<10; y++) {
      let square = document.createElement('div');
      square.classList = 'square';
      if (y == 0) {
        square.classList.toggle('first');
      }
      square.x = x;
      square.y = y;
      // CRUCIAL LINE BELOW:
      // applying the gamboard (line 4) to the squares, means that when you click on one of the squares, and "this" is called on it, "this" is also the gamebaord (line 4).
      square.gameboard = gameBoard;
      if (player == 'NPC') {
        square.addEventListener('click', gameBoard.playerAttacks);
        square.addEventListener('click', gameBoard.receiveAttack);
      } else if (gameBoard.board[x][y] == 1) {
        square.classList.toggle('player-ship');
      }
      boardDiv.appendChild(square);
    }
  }
}

function initialSetup() {
  buildBoard('NPC');
  buildBoard('player');
}

export {initialSetup};
