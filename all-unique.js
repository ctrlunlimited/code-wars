
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A'
// are considered different characters.

function hasUniqueChars(str){
    return new Set(str).size === str.length
   }

//    A Set stores only unique values.
//    If the size of the Set matches the length of the string, all characters are unique.
//    Otherwise, there are duplicates.