
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    // code here
    return array.reduce((x, y) => String(y).length > String(x).length ? y : x)
  }