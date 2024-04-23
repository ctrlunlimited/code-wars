// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

// ceil(price of System B) < price of System A.
// More examples:
// movie(500, 15, 0.9) should return 43 
//     (with card the total price is 634, with tickets 645)
// movie(100, 10, 0.95) should return 24 
//     (with card the total price is 235, with tickets 240)

function movie(card, ticket, perc) {
    let n = 1;
    let discountTicket = ticket * perc;
    let systemA = n * ticket;
    let systemB = card + discountTicket;

    while (systemA <= Math.ceil(systemB)) {
        n++;
        discountTicket *= perc;
        systemA += ticket;
        systemB += discountTicket;
    }

    return n;
};