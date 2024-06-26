// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the 
// value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else 
// return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still 
// just one person!).



// function outed(meet, boss) {
//   let names = Object.keys(meet)
//   let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
//   return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
// }

function outed(meet, boss){
    var sum=0;
    var count=0;
    for (var key in meet)
      if (key!=boss)
      {
        sum+=meet[key];
        count++;
      }  
      else
      {
        sum+=meet[key]*2;
        count++;
      }
    return sum/count<=5?'Get Out Now!':'Nice Work Champ!';
  }
  
