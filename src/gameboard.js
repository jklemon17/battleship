import { Ship } from './shipClass';

class Gameboard {
  constructor() {
    let self = this;
    this.sunkenShips = 0;
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill(0));
    }
    this.ships = [];

    // take a ship random start coord, add 5 to made the end coordinate,
    // coin toss if add to x or y direction
    // now check all the potential ship.spots  exist at x < 10 && y < 10;
    // if not, try again.
    // check the gameboard squares if that location (for each ship.spot) is a 0?  if all are 0, then place (set that sqaure to 1), else, try new random
    // push to array is valid

    function placeRandom(length) {
        let randomX = -5;
        let randomY = -5;
        while (randomX+length < 0 || randomX+length > 9 || randomY+length < 0 || randomY+length > 9) {
          randomX = Math.floor(Math.random() * 10);
          randomY = Math.floor(Math.random() * 10);
        }

        let randomDir = Math.random() < 0.5 ? "H" : "V";
        let ship;
        if (randomDir == "V") {
          ship = new Ship("ship1", {x: randomX, y: randomY}, {x: randomX, y: randomY+length});
        } else {
          ship = new Ship("ship1", {x: randomX, y: randomY}, {x: randomX+length, y: randomY});
        }
        // check if spots have already been taken:
        let spotisValid = true
        ship.spots.forEach(spot => {
          if (self.board[spot.x][spot.y] != 0) {
            spotisValid = false;
          }
        });

        if (spotisValid) {
          self.ships.push(ship);
          ship.spots.forEach(spot => {
            self.board[spot.x][spot.y] = 1;
          });
        }

        return spotisValid;
    }

    // NOTE ship lengths of 5,4,4,3,1  need to be -1
    let stockShips = [4,3,3,2,1];
    stockShips.forEach(length => {
      let happened;
      do {
        happened = placeRandom(length);
      } while (!happened)

    });
    console.log(this.board);
    console.log(this.ships.length);
    let count = 0;
    this.board.forEach(row => row.forEach(coord => {
      if (coord == 1) { count++; }
    }));
    console.log(count);


      //
      // new Ship("ship1", {x: 0, y: 0}, {x: 0, y: 4}),
      // new Ship("ship2", {x: 1, y: 0}, {x: 1, y: 3}),
      // new Ship("ship3", {x: 2, y: 0}, {x: 2, y: 2}),
      // new Ship("ship4", {x: 3, y: 0}, {x: 3, y: 2}),
      // new Ship("ship5", {x: 4, y: 0}, {x: 4, y: 1})
  }

  playerAttack(event) {
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

  computerAttack() {
    coords = generateRandomCoords()
  }
  generateRandomCoords() {
    
  }
}

export { Gameboard };
