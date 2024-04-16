let currentScore = 0;

let totalScore = 0;

const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  🍇: 8,
  🍉: 5,
  🍌: 4,
  🍈: 3,
  🍑: 3,
  🍍: 2,
  👑: 1,
};

//const 🍇 = 10;
//const 🍉 = 20;

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber)
let score = ''

let score = randomNumber
if (score === 0) {
  console.log('🍇');
  } else if(score === 1) {
   console.log('🍉');
  } else if (score === 2) {
   console.log('🍌');
  } else if (score === 3) {
   console.log('🍈');
   } else if (score === 5) {
   console.log('🍋');
   } else if (score === 6) {
   console.log('🍑');
   } else if (score === 7) {
   console.log('🍍')
   } else {
   console.log('👑');   
}

let totalScore = ()

Function getRandomFruit() {}

Function spinWheel() {}
/*
  const symbols = [];
}
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (Let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  };
  
  const reels = [];
    for (Let i = 0; i < COLS; i++) {
      reels.push([]);
    const reelSymbols = [...symbols];
    for (Let j = 0; j < ROWS; ++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};
const reels = spinWheel();
console.log(reels);
Function updateScoreDisplay() {}
*/

Function addPoints() {}

Function showFruitPoints() {}

Function mainDisplay() {}
  
console.log(score)
