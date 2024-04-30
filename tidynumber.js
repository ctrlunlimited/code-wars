
// A Tidy number is a number whose digits are in non-decreasing order.

// Given a number, Find if it is Tidy or not .
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
const tidyNumber = n => {
  let s = n.toString();
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] > s[i+1]) return false;
  }
  return true;
}