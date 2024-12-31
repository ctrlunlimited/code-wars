// summing a function for a sorted, contiguous array of integers that starts with the number1 
//is an O(n) but could a constant time using gauss' trick 
//gauss trick

const sumContiguousArray = function (ary){
    //get the last item
     const lastItem = ary[ary.length -1]
     //gauss trick
     return lastItem * (lastItem + 1) / 2
}

const nums = [1,2,3,4,5,6]

//const sumOfArray = const sumContiguousArray(nums)