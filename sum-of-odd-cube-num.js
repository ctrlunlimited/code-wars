// Find the sum of the odd numbers within an array, after cubing the initial integers. 
// The function should return undefined if any of the values aren't numbers.


// function cubeOdd(arr) {

// let x = arr.reduce((acc,c)=> c % 2 !== 0 ? acc + c**3 : acc , 0 )

// return isNaN(x) ? undefined : x
// }

function cubeOdd(arr) {
  let result = arr.filter(x => x % 2 !== 0)
                  .map(x => x * x * x)
                  .reduce((a,b) => a + b, 0)
  return isNaN(result) ? undefined : result
}