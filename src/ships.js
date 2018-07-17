const shipFactory = (start, end) => {
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

  // let sunk = false;

  const applyHit = target => {
    let index = spots.indexOf(spots.find((spot) => spot.x == target.x && spot.y == target.y))
    spots[index].hit = true;
  }

  const isSunk = () => {
    if (spots.every(spot => spot.hit == true)) {
      console.log('sunk');
      // sunk = true;
      return true;
    }
    return false;
  }

  return { start, end, spots, applyHit, isSunk };
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
//   applyHit = function() {
//
//   }
// }
