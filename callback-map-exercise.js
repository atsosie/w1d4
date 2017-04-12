// My own version of a map function. First parameter is an array.
// Second parameter is a callback function.

var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cbFunction) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = cbFunction(arr[i]);
    newArr.push(result);
  }
  console.log(newArr);
}

map(words, function(word) {
  return word.length;
});

// called function should return:
// [6, 7, 5, 3]