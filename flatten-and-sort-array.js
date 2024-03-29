// Challenge:

// Given a two-dimensional array of integers, return the flattened
// version of the array with all the integers in the sorted (ascending) order.

// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Addendum:
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

"use strict";

const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);


function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  }

  function flattenAndSort(array) {
    var newArray = [];
    for(var i =0;i<array.length;i++)
    {
      for(var j=0;j<array[i].length;j++)
      {
        newArray.push(array[i][j]);
      }
    }
      
    return newArray.sort((a,b) =>  a-b);
  }
  