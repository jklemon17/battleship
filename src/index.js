import { shipFactory } from './ships';

"use strict";


let ship1 = shipFactory({x: 0, y: 0}, {x: 0, y: 4});
let ship2 = shipFactory({x: 1, y: 0}, {x: 1, y: 3});
let ship3 = shipFactory({x: 2, y: 0}, {x: 2, y: 2});
let ship4 = shipFactory({x: 3, y: 0}, {x: 3, y: 2});
let ship5 = shipFactory({x: 4, y: 0}, {x: 4, y: 1});

console.log(ship1);
ship1.applyHit({x:0, y:0});
ship1.applyHit({x:0, y:1});
console.log(ship1.isSunk());
ship1.applyHit({x:0, y:2});
ship1.applyHit({x:0, y:3});

let sunkenShips = 0;

console.log(sunkenShips);
ship1.applyHit({x:0, y:4});
if (ship1.isSunk) {
  sunkenShips++;
}
console.log(sunkenShips);
