function printBadges(names){
	for (let i = 0; i < names.length; i++){
		console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
	}
	return names
}

function tailsNeverFails(){
	let numTails = 0
	while (Math.random() >= .5){
		numTails ++
	}
	return `You got ${numTails} tails in a row!`
}

