const foo = ['a','b','c']
const bar = ['d','e','f']
console.log(...foo)
console.log([...foo, ...bar])

//output 'a', 'b', 'c'
//['a', 'b', 'c', 'd', 'e', 'f']