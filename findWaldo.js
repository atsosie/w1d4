// // The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(indexNum) {
  console.log("Found Waldo at index " + indexNum + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Refactored code above using forEach()

function findWaldoAgain(array, found) {
  array.forEach(function (element, index) {

    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(indexNum) {
  console.log("Found Waldo at index " + indexNum + "!");
}

findWaldoAgain(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);