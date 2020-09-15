let prompt = require("prompt-sync")();

const randomNum = Math.floor((Math.random() * 100) + 1);


for (let i = 0; i >= 0; i++) {
  let userInputNum = prompt("Guess a number between 1 and 100: ");

  if (userInputNum == randomNum) {
    console.log(`You guessed correctly. Your number was ${userInputNum} and the random number is ${randomNum}. 
    You made ${i} attempts!`);
    break;
  }
  else if (userInputNum < randomNum) {
    console.log(`Your number ${userInputNum} is too low.`);
  }
  else if (userInputNum > randomNum) {
    console.log(`Your number ${userInputNum} is too high.`);
  } else {
    console.log(`Your input is "${userInputNum}". Not a number! Try again!`);
  }

}


