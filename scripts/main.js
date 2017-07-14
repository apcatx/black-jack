/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//
// let J = 10;
// let Q = 10;
// let K = 10;
// let A = (11 || 1);
// let card = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ]
// let p1(hand);
// let p2(hand) =
//
// function handValue(hand) {
//   let phand = [];
  // for (let i = 0; i < cards.length; i++) {
//     let card1 = cards[i];
//     for (let j = 0; j < cards.length; j++) {
//       let card2 = cards[j];
//       let uhand = [card1, card2];
//       phand.push(uhand);
//     }
//   }
//
//   return phand === value;
//   console.assert(phand === value);
// }

function handValue(hand) {
  let total = 0
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i]
    if(card === "K" || card === "Q" || card === "J"){
      card = 10
    }
    if(card === "A"){
      card = 11 || 1
    }
    total += Number(card)
    }
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
