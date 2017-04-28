const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});
//
// function absurdBubbleSort(arr, sortCompletionCallback) {
//
// }

function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is ${el1} greater than ${el2}?`, function(answer) {
    if (answer === 'y') {
      return callback(true);
    } else {
      return callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log("abc");
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i],arr[i+1], function(isGreaterThan) {
      if (isGreaterThan == true) {
        arr[i] = arr[i] ^ arr[i+1];
        arr[i+1] = arr[i] ^ arr[i+1];
        arr[i] = arr[i] ^ arr[i+1];
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  } else {
      outerBubbleSortLoop(madeAnySwaps);
    }
  }

function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
