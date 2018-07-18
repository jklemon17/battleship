import { Gameboard } from './gameboard';

function buildBoard() {
  let gameBoard = new Gameboard()
  // gameBoard.board.forEach(
  //
  // )
  for (let x=0; x<10; x++) {
    for (let y=0; y<10; y++) {
      let square = document.createElement('div');
      square.classList = 'square';
      if (y == 0) {
        square.classList.toggle('last');
      }
      square.x = x;
      square.y = y;
      // CRUCIAL LINE BELOW:
      // applying the gamboard (line 4) to the squares, means that when you click on one of the squares, and "this" is called on it, "this" is also the gamebaord (line 4).
      square.gameboard = gameBoard;
      square.addEventListener('click', gameBoard.receiveAttack);
      document.body.appendChild(square);
    }
  }
}

export {buildBoard};
