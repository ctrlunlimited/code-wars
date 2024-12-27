// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"



var isAnagram = function(test, original) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
   return normalize(test) === normalize(original)
};