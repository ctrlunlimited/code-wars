
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    let length = s.length
    let middle = Math.floor (length/2)
    
    if(length % 2 === 0){
      return s[middle-1] + s[middle]
    }else {
      return s[middle]
    }
  }