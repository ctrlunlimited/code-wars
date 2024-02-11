// no oddities here 

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// var noOdds = values => values.filter(x => x % 2 === 0);

var noOdds = values => values.filter(x => !(x % 2));


// function noOdds( values ){
//     // Return all non-odd values
//     var goodies = [];
//     for(var i=0; i<values.length;i++){
//         if(values[i]%2 == 0){
//           goodies.push(values[i]);
//         }
//     }
    
//     return goodies;
//   }