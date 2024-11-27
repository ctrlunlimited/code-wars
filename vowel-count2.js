// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     const vowels = 'aeiou'; // Define the vowels
//     return Array.from(str).filter(char => vowels.includes(char)).length;
//   }

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }