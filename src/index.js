
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }

   matrix.map(line => matrix.indexOf(line) % 2 === 0 ? line : line = line.reverse());

  return matrix.flat();
}
