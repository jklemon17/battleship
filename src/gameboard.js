import { Ship } from './shipClass';

class Gameboard {
  constructor() {
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
    let boardTarget = this.board[event.target.x][event.target.y];
    this.ships.forEach(ship => ship.spots.forEach(spot => {
        if (spot.x == event.target.x && spot.y == event.target.y) {
            spot.applyHit({x: event.target.x, y: event.target.y});
            boardTarget = 1;
            event.target.classList += 'red';
        }}
      )
    )
    if (boardTarget != 1) {
      boardTarget = 2;
      event.target.classList += 'white';
    }
  }
}

export { Gameboard };
