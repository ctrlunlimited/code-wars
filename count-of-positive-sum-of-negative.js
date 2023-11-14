function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0){
      return []
    }
    
    let positive = 0
    let negative = 0
    
    for (let i=0; i<input.length; i++){
      if (input[i] > 0){
        ++ positive
      }else{
        negative += input[i]
      }
    }return [positive , negative]
  }

//   function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }