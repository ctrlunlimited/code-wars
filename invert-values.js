// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//solutions

// function invertNum(arr){
//     return arr.map( n => -n)
// }

// console.log (invertNum([-2,4,6,-8]))

// function invertNum(arr){
//     return arr.map( y => y === 0 ? y : )
// }

const invert = array => array.map(num => -num);