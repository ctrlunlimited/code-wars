// Find the middle element 

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

// function gimme (triplet) {
//  return triplet.indexOf(triplet.slice().sort((x, y) => x - y)[1])
// }

// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };

// We spread the input array because sort modifies the original array, 
// but we need the original array later on to find the index of the middle value. 
// Therefore, we create a copy of the array using [...arr], sort it (which modifies the array), 
// grab the middle value, then we run indexOf to look for the index of the middle value in the original, unmodified array.

// [2, 3, 1] -> original array
// [1, 2, 3] -> sorted array, grab middle value (2)
// [2, 3, 1].indexOf(2) -> 0


// var gimme = function (inputArray) {
//   let index = 0;
//   let max = Math.max(...inputArray);
//   let min = Math.min(...inputArray);
//   for(let i = 0; i < inputArray.length; i++){
//     if(inputArray[i] !== max && inputArray[i] !== min){        
//       index = i;
//     }
//   }
//   return index;
// };


// var gimme = function (inputArray) {
//   return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
// };