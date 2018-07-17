const shipFactory = (start, end) => {
  let length = Math.abs((start.x - end.x) + (start.y - end.y)) + 1;
  let spots = {}
  for (let i = start.x; i < end.x; i++) {
    spots.push()
  }
  let hit = (position) => {

  }
  return {length, start, end};
};

export { shipFactory }
