// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

let seriousBusinessPerson = {
    hourlyRate: 250,
    taxRate: .40,
    hours: 40,

    calculateProfit: function(){
        return this.hourlyRate * this.hours * (1 - this.taxRate)
    }
}

function AgencyContractor (hourlyRate, taxRate, hours){
    this.taxRate = taxRate
    this.hours = hours
    let rate = hourlyRate

    let calculateProfit =  function(){
        return rate * this.hours * (1 - this.taxRate)
    }

    this.invoiceClient = function(){
        return `your invoice total is ${rate * this.hours}`
    }
}

let leon = new AgencyContractor(250, .25, 60)
console.log (leon.calculateProfit)
console.log(leon.invoiceClient)
console.log(leon.hourlyRate)

class Animal{
    constructor (name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}
let simba = new Dog ('simba', 'shepherd')