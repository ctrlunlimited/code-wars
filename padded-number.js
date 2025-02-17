// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" 
// where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// function solution(value){
//     let num = value.toString();
//     let padding = '0'.repeat(5 - num.length);
//     return `Value is ${padding}${num}`;
//  }

 function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }