const shipFactory = (start, end) => {
  // let length = Math.abs((start.x - end.x) + (start.y - end.y)) + 1;
  let spots = [];

  if (start.y == end.y) {
    for (let i = start.x; i <= end.x; i++) {
      spots.push({x: i, y: start.y, hit: false});
    }
  } else {
    for (let i = start.y; i <= end.y; i++) {
      spots.push({x: start.x, y: i, hit: false})
    }
  }
  
  let sunk = false;

  let hit = function(target) {
    // this function only gets called if target hit this ship
    // compare target.x and target.y  to spots
    // check for spot already hit?  toggle if not
    // check is all spots hit?  if yes toggle sunk
  }
  return {start, end, spots, sunk, hit};
};

export { shipFactory }


// EXAMPLE SHIP:
//
// start.x: 0,  start.y: 0    ->    end.x: 2, end.y: 0
//
// ship1 = {
//   start = { x: 0, y: 0 },
//   end = { x: 2, y: 0 },
//   spots = [{ x: 0, y: 0, hit: false },
//            { x: 1, y: 0, hit: false },
//            { x: 2, y: 0, hit: false }],
//   sunk: false,
//   hit = function() {
//
//   }
// }
