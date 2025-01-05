const findMaxBid = function(bids){
    let maxBid = bids[0]
    let minBid = bids[0]
    for(let i=0; i<bids.length; i++){
        for(let j=0; j<bids.length; j++){
            if(bids[i] > bids[j] && bids[i] > maxBid){
                maxBid = bids[i]
            }else if (bids[i] < bids[j] && bids[i] < minBid){
                minBid = bids[i]
            }
        }
    }return [minBid, maxBid]
}

const allBids = [1,2,3,4,5,7,1,8]
console.log(findMaxBid[allBids])