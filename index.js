// Code your solutions in this file
function printBadges(arry) {
  for (var i = 0; i < arry.length; i++) {
    console.log("Welcome "+arry[i]+"! You are employee #"+(i+1)+".")
  }
  return arry
}


function tailsNeverFails() {
  var x = 0
  while (maybeTrue()) {
    x++
  }
  return "You got "+x+" tails in a row!"
}

function maybeTrue() {
  x = (Math.floor(Math.random() * 2) == 0);
  if(x){
  	return false;
  }else{
    return true;
  }
}
