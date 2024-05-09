// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to 
// The Product of all the elements of Arr[] except Arr[i].

// function productArray(numbers){
//   return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
// }

function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}