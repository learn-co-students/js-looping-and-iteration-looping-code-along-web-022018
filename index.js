// Code your solutions in this file

function printBadges(array)  {
  for (i=0; i < array.length; i++) {
  console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails() {
  let tails = 0
  let heads = 0
  while (heads === 0) {
     if (Math.random() >= 0.5) {
      tails += 1
    } else {
      heads += 1
    }
  }
  return `You got ${tails} tails in a row!`
}
