import { Ship } from './shipClass';

class Gameboard {
  constructor() {
    this.sunkenShips = 0;
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill(0));
    }
    this.ships = [      
      new Ship("ship1", {x: 0, y: 0}, {x: 0, y: 4}),
      new Ship("ship2", {x: 1, y: 0}, {x: 1, y: 3}),
      new Ship("ship3", {x: 2, y: 0}, {x: 2, y: 2}),
      new Ship("ship4", {x: 3, y: 0}, {x: 3, y: 2}),
      new Ship("ship5", {x: 4, y: 0}, {x: 4, y: 1})
    ];
  }
  receiveAttack(event) {
    let boardTarget = this.gameboard.board[this.x][this.y];
    this.gameboard.ships.forEach(ship => ship.spots.forEach(spot => {
        if (spot.x == this.x && spot.y == this.y) {
            ship.applyHit({x: this.x, y: this.y});
            boardTarget = 1;
            this.classList.toggle('red');
            if (ship.sunk) {
              this.gameboard.sunkenShips++;
              if (this.gameboard.sunkenShips >= 5) {
                console.log("Game over!");
              }
            }
        }}
      )
    )
    if (boardTarget != 1) {
      boardTarget = 2;
      this.classList.toggle('white');
    }
    this.removeEventListener('click', this.gameboard.receiveAttack);
  }
}

export { Gameboard };
