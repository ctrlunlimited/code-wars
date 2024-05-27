// Given an array/list [] of integers , Find all the LEADERS in the array.

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

// var arrayLeaders = numbers => {
// return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}


var arrayLeaders = numbers => {
  const sumOfAllAfter = []

  let sum = 0
  for (let i = numbers.length - 1; i >= 0; i--) {
    sumOfAllAfter[i] = sum
    sum += numbers[i]
  }

  return numbers.filter((num, i) => num > sumOfAllAfter[i])
}
