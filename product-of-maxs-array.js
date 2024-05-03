// Given an array/list [] of integers , Find the product of the k maximal numbers. 
// Array/list size is at least 3 . Array/list's numbers Will be mixture of positives , negatives and zeros. 
// Repetition of numbers in the array/list could occur.
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)

function maxProduct(numbers, size){
  //your code here
  return numbers.sort((a,b)=> b-a).slice(0,size).reduce((acc,c)=> acc * c)
  
}