// Given an array of integers , Find the minimum sum which is obtained from summing each 
// Two integers product 
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);


// function minSum(arr) {
//   return arr.sort( (a,b) => a-b )
//             .slice(0, arr.length/2)
//             .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
// }