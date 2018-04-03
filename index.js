// Code your solutions in this file
function printBadges(names){
  for (let count = 0;count < names.length;count++){
    console.log(`Welcome ${names[count]}! You are employee #${count + 1}.`);
  }
  return names
}

function tailsNeverFails(){
  i = 1
  count = 0
    while(i >= .5){
    i = Math.random()
      if(i >= .5){
        count++
      }
    }
    return (`You got ${count} tails in a row!`)
}
