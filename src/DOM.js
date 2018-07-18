import { Gameboard } from './gameboard';

function buildBoard() {
  let gameBoard = new Gameboard()
  // gameBoard.board.forEach(
  //
  // )
  for (let x=0; x<10; x++) {
    for (let y=0; y<10; y++) {
      let square = document.createElement('div');
      square.addEventListener('click', gameBoard.receiveAttack);
      square.classList = 'square';
      if (y == 0) {
        square.classList.toggle('last');
      }
      square.x = x;
      square.y = y;
      document.body.appendChild(square);
    }
  }
}

export {buildBoard};
