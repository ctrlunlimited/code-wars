// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// const removeDuplicateWords = s => {
//     const set = new Set(s.split(' '));
//     return Array.from(set).join(' ');
//   }