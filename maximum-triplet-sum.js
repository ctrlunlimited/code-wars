// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications
// maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)

function maxTriSum(numbers){
    return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
  }

  
//   function maxTriSum(numbers){
//     return [...new Set(numbers)]
//       .sort( (a,b) => a - b)
//       .slice(-3)
//       .reduce( (acc,el) => acc + el);
//   }