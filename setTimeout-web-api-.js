//a function showing setTimeout as a webapi and not part of js 

function houseOne(){
    console.log("paper delivered to house one")
}

function houseTow(){
    setTimeout(() => console.log("paper delivered to house two"), 2000)
}

function houseThree(){
    console.log("paper delivered to house three")
}

houseOne()
houseTow()
houseThree()