// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);
