// Given an array of integers , Find the maximum product obtained from 
// multiplying 2 adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }
  
//   function adjacentElementsProduct(a) {
//     return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
//   }