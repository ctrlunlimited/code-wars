// Your job is to implement these functions in your given language. 
// Make sure it doesn't edit the array; that would cause problems! 
// Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x


function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) {return a.slice(1)}

// var head = (arr) => arr[0];
// var tail = (arr) => arr.slice(1);
// var init = (arr) => arr.slice(0, arr.length-1);
// var last = (arr) => arr[arr.length-1];