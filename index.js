// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i <array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}
function flip(){
  return Math.random() >= .5
}
function tailsNeverFails(){
  let tails = 0
  let heads = 0
  while (flip()!==false){
    tails++
  }
  return `You got ${tails} tails in a row!`
}
