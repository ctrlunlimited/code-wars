// Find the capitals 
// Instructions
// Write a function that takes a single non-empty string of only lowercase 
// and uppercase ascii letters (word) as its argument, and returns an ordered list containing 
// the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
    word = word.split('')
     let x = []
     for(let i=0; i<word.length; i++){
       if(word[i] === word[i].toUpperCase()){
         x.push(i)
       }
     }return x
   };

//    var capitals = function (word) {
//     var caps = [];
//       for(var i = 0; i < word.length; i++) {
//       if(word[i].toUpperCase() == word[i]) caps.push(i);
//     }
//     return caps;
//   };


// var capitals = function (word) {
// 	return word.split('').reduce(function(memo, v, i) {
//     return v === v.toUpperCase() ? memo.concat(i) : memo;
//   }, []);
// };