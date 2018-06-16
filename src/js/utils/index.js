function triangleType(inputs) {
  const sides = inputs.map(side => +side).sort((a, b) => +a - +b);
  const x = sides[0];
  const y = sides[1];
  const z = sides[2];

  if (x && x + y > z) {
    if (x === y && y === z) return 1;
    if (x !== y && y !== z) return 2;
    return 3;
  }
  return 0;
}

export {
  triangleType
}