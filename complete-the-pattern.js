// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555


function pattern(n) {
    // If n < 1, return empty string
    if (n < 1) return "";
    
    // Create array to store pattern rows
    let rows = [];
    
    // Generate each row
    for (let i = 1; i <= n; i++) {
      // Repeat the number i, i times
      rows.push(String(i).repeat(i));
    }
    
    // Join rows with newline
    return rows.join('\n');
  }

//   function pattern(n) {
//     var res = [], i;
//     for(i = 1; i <= n; i++) {
//       res.push(Array(i + 1).join(i));
//     }
//     return res.join('\n');
//   }