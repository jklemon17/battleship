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
          ship = new Ship(`ship${length+1}`, {x: randomX, y: randomY}, {x: randomX, y: randomY+length});
        } else {
          ship = new Ship(`ship${length+1}`, {x: randomX, y: randomY}, {x: randomX+length, y: randomY});
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


    this.lastShotSucceeded = false;
    this.lastShotXY = null;
    this.shotsSinceLastHit = 0;

  }

  playerAttack(event) {
    // let gameOverDiv = document.getElementById('game-over');
    // gameOverDiv.innerHTML = 'Computer Firing...';
    let boardTarget = this.gameboard.board[this.x][this.y];
    let gameOverDiv = document.getElementById('game-over');
    gameOverDiv.innerHTML = '';
    let board = document.getElementsByClassName('board')[0];

    loop1:
      for (let ship of this.gameboard.ships) {
        for (let spot of ship.spots) {
          if (spot.x == this.x && spot.y == this.y) {
              ship.applyHit({x: this.x, y: this.y});
              this.classList.toggle('red');
              if (ship.sunk) {
                this.gameboard.sunkenShips++;
                gameOverDiv.innerHTML = 'You sunk their ship!';
                if (this.gameboard.sunkenShips >= 5) {
                  board.style.pointerEvents = 'none';
                  gameOverDiv.innerHTML = 'You Win!';
                }
              }
              break loop1;//STOP this loop
          }
        }
      }

    // this.gameboard.ships.forEach(ship => ship.spots.forEach(spot => {
    //     if (spot.x == this.x && spot.y == this.y) {
    //         ship.applyHit({x: this.x, y: this.y});
    //         // boardTarget = 2;
    //         this.classList.toggle('red');
    //         if (ship.sunk) {
    //           this.gameboard.sunkenShips++;
    //           if (this.gameboard.sunkenShips >= 5) {
    //             let gameOverDiv = document.getElementById('game-over');
    //             gameOverDiv.innerHTML = 'You Win!';
    //           }
    //         }
    //     }}
    //   )
    // )
    if (boardTarget != 1) {
      boardTarget = 2;
      this.classList.toggle('white');
    }
    this.removeEventListener('click', this.gameboard.playerAttack);
  }

  computerAttack() {
    this.removeEventListener('click', this.enemyboard.computerAttack);
    let board = document.getElementsByClassName('board')[0];

        let computerShot;
        let gameOverDiv = document.getElementById('game-over');

        if (this.enemyboard.lastShotSucceeded) {
          computerShot = this.enemyboard.educatedShot(this);
        } else {
          computerShot = this.enemyboard.randomShot(this);
        }

        let computerTarget = document.getElementById(`X${computerShot.x}-Y${computerShot.y}`);

        if (this.enemyboard.board[computerShot.x][computerShot.y] == 1) {
          computerTarget.classList.toggle('red');
          this.enemyboard.lastShotSucceeded = true;
          this.enemyboard.shotsSinceLastHit = 0;
          this.enemyboard.lastShotXY = { x: computerShot.x, y: computerShot.y };

          // apply hit to Player's javascript Ship object:
          loop1:
            for (let ship of this.enemyboard.ships) {
              for (let spot of ship.spots) {
                if (spot.x == computerShot.x && spot.y == computerShot.y) {
                    ship.applyHit({x: computerShot.x, y: computerShot.y});
                    if (ship.sunk) {
                      this.enemyboard.sunkenShips++;
                      gameOverDiv.innerHTML = 'PC sunk your ship!';
                      if (this.enemyboard.sunkenShips >= 5) {
                        // let gameOverDiv = document.getElementById('game-over')
                        gameOverDiv.innerHTML = 'You Lose!';
                        board.style.pointerEvents = 'none';
                      }
                    }
                    break loop1;//STOP this loop
                }
              }
            }

        } else {
          computerTarget.classList.toggle('white');
          this.enemyboard.shotsSinceLastHit++;
          if (this.enemyboard.shotsSinceLastHit >= 4) {
            this.enemyboard.lastShotSucceeded = false;
          }
        }
        this.enemyboard.board[computerShot.x][computerShot.y] = 2;
  }

  educatedShot(target) {
    let guessCount = 1;
    let computerShot = generateEducatedCoords(target.enemyboard.lastShotXY);
    while (target.enemyboard.board[computerShot.x][computerShot.y] == 2 && guessCount < 5) {
      computerShot = generateEducatedCoords(target.enemyboard.lastShotXY);
      guessCount++;
    }
    // This guessCount avoids an infinite loop if no adjacent spots are valid.
    if (guessCount == 5) {
      computerShot = target.enemyboard.randomShot(target);
    }

    return computerShot;
  }

  randomShot(target) {
    let computerShot = generateRandomCoords();
    while (target.enemyboard.board[computerShot.x][computerShot.y] == 2) {
      computerShot = generateRandomCoords();
    }
    return computerShot;
  }
    // CPU AI LOGIC:

    // generate new shot with random coordinates,
    // check if that location has already been targeted "state = 2",
    // if yes, generate new one until it is one that is not "state = 2",
    //
    // if successful hit, then next generated shot will educatedCoordinate instead of random,
    // it will +1 or -1 x or y from last successful hit.
    // if that location is not state = "2"
    // if 4 calls to educatedCoordinate occur that are invalid, switch back to random.
    //
    // keep track of num shots since last hit.
    // keep track of num shots that are hits since last hit
    //
    // if go 4 shots without hit, then go back to generating random location,
    // or if go 5 hits in 15 shots (sunk largest ship), then go back to generating random location.  The two variables above get reset.
    //
    // if hits are in a straight line?  follow line?

}


function generateRandomCoords() {
  let randomCoords = { x: -5, y: -5 }

  while (randomCoords.x < 0 || randomCoords.x > 9 || randomCoords.y < 0 || randomCoords.y > 9) {
    randomCoords.x = Math.floor(Math.random() * 10);
    randomCoords.y = Math.floor(Math.random() * 10);
  }

  return randomCoords;
}

function generateEducatedCoords(lastshot) {
  let educatedCoords = {x:-5, y:-5};

  while (educatedCoords.x < 0 || educatedCoords.x > 9 || educatedCoords.y < 0 || educatedCoords.y > 9) {
    switch(Math.floor(Math.random() * 4)){
      case 0:
        educatedCoords.x = lastshot.x + 1
        educatedCoords.y = lastshot.y
        break;
      case 1:
        educatedCoords.x = lastshot.x - 1
        educatedCoords.y = lastshot.y
        break;
      case 2:
        educatedCoords.x = lastshot.x
        educatedCoords.y = lastshot.y + 1
        break;
      case 3:
        educatedCoords.x = lastshot.x
        educatedCoords.y = lastshot.y - 1
        break;
    };
  }

  return educatedCoords;
}


export { Gameboard };
