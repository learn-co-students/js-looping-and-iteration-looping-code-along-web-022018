// Code your solutions in this file
function printBadges(array){
  for (let i=0; i< array.length; i++){
    console.log (`Welcome ${array[i]}! You are employee #${(i + 1)}.`);
  }
  return array;
}

function tailsNeverFails(){
  let num = Math.random()
  let count = 0
  while (num >= 0.5){
    ++count
    num = Math.random()
  }
  return `You got ${count} tails in a row!`
}
