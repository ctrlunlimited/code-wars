// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about 
// developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return either:
// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];


// function isSameLanguage(list) {
//   return list.every(e => e.language === list[0].language);
// }


function isSameLanguage(list) {
  return list.every((a,_,b) =>  a.language === b[0].language);
}

