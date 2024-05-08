// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant.
// The association is funded through financial donations from generous benefactors. 
// John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next 
// benefactor should give to the association so that the average of the first n + 1 donations should reach an 
// average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

// Could you help him?

// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that 
// will permit to reach the average navg. Should the last donation be a non positive number (<= 0) John wants 
// us:

function newAvg(arr, newavg) {
    if (arr.length === 0) return newavg;
    const actualAvg = arr.reduce((a,c) => a+c, 0) / arr.length;
    const amtToAdd = Math.ceil(arr.length * (newavg - actualAvg) + newavg); 
    if (amtToAdd > 0) return amtToAdd; else throw ('Expected New Average is too low');
}