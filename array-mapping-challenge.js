var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(arrElement) {
  var zSquared = Math.pow(arrElement.x, 2) + Math.pow(arrElement.y, 2);
  return Math.sqrt(zSquared);
});

// console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// result should be array of numbers corresponding to x-y pairs:
// [5, 13, 17]