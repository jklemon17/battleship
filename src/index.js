import { shipFactory } from './ships';

"use strict";

let ship1 = shipFactory({x: 4, y: 4}, {x: 7, y: 4});

console.log(ship1);
