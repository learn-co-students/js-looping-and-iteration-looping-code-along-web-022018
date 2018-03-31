// // Code your solutions in this file
// for(let age = 30; age < 40 ; age ++){
//   console.log(`I'm ${age} years old. Happy Bday to me`)
// }
// function wrapGifts(gifts){
//   for(let i=0; i<gifts.size;i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
//   }
// }

function printBadges(names){
  // Welcome Ada! You are employee #1.
  for(let i=0;i<names.length;i++){
    console.log(`Welcome ${names[i]}! You are employee #${[i+1]}.`)
  }
  // console.log(`"Function complete: ${names}"`)
  return names
}

function tailsNeverFails(){
  function maybeTrue() { return Math.random() >= 0.5;}
//   //tails is 1
  let i=0;
  while(maybeTrue()){
    i++
// //     console.log(i)
  }
  console.log(`You got ${i} tails in a row!`)
  return (`You got ${i} tails in a row!`)
// console.log(maybeTrue())
}

// tailsNeverFails()
