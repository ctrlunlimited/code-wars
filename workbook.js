let v = "my very educated goods"
alert(v.endsWith('?'))

let y = "good better best hired as a jr dev"
console.log (y.replaceAll('jr dev', 'software eng'))

let newArr = new Array()

function sq(arr){
    return arr.map(x => x**2)
}

sq([1,2,3])

function sty (str){
    console.log(str.split('').reverse().join(''))
}

sty('bunmialabius')

function palindromeChecker(stw){
    alert(stw === stw.split('').reverse().join(''))
}

palindromeChecker('level')