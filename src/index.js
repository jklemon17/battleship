import { Ship } from './shipClass';
import { Gameboard } from './gameboard';

"use strict";

let board = new Gameboard();

let sunkenShips = 0;
console.log(sunkenShips);

let ship1 = new Ship("ship1", {x: 0, y: 0}, {x: 0, y: 4});
let ship2 = new Ship("ship2", {x: 1, y: 0}, {x: 1, y: 3});
let ship3 = new Ship("ship3", {x: 2, y: 0}, {x: 2, y: 2});
let ship4 = new Ship("ship4", {x: 3, y: 0}, {x: 3, y: 2});
let ship5 = new Ship("ship5", {x: 4, y: 0}, {x: 4, y: 1});


console.log(ship1);
ship1.applyHit({x:0, y:0});
ship1.applyHit({x:0, y:1});
ship1.applyHit({x:0, y:2});
ship1.applyHit({x:0, y:3});
console.log(ship1);
ship1.applyHit({x:0, y:4});
console.log(ship1);

if (ship1.sunk) {
  sunkenShips++;
}


console.log(sunkenShips);
