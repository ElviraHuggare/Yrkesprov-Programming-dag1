// lista på symbolerna
const symbols = ['🍇', '🍉', '🍌', '🍈', '🍋', '🍑', '🍍', '👑'];

// poängen för varje frukt
const fruitPoints = {
  '🍇': 5,
  '🍉': 10,
  '🍌': 20,
  '🍈': 30,
  '🍋': 50,
  '🍑': 70,
  '🍍': 100,
  '👑': 200
};

//poängen man startar med
let currentScore = 0;
let totalScore = 0;

// en funktion för att få en random frukt varje gång
function getRandomFruit() {
  // räknar "längden" på frukterna vilket i det här fallet betyder mängden frukter i listan för att kunna få vilken som helst av dem alla
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

// funktion för att snurra på alla 3 reels som i respons ger en random frukt per reel
function spinWheel() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    reel.textContent = getRandomFruit();
  });
}

// beskriver allt som ska hända när man trycker på spin knappen
document.getElementById('spin_button').addEventListener('click', function() {
  spinWheel();
   calculateScores(); 
     updateScoreDisplay(); // uppdaterar vad "Score" visar för antal
});


// kalkulerar poängen från den senaste spinnen
function calculateScores(reelSymbols) {
  currentScore = 0; // Reset current score
  
  // loopar genom symbolerna i alla reels
  for (let symbol of reelSymbols) {
    // en if som checkar om fruitPoints har en symbol i sig
    if (fruitPoints.hasOwnProperty(symbol)) {
      // adderar frukternas värde och lägger till poängen till currentScore
      currentScore += fruitPoints[symbol];
    }
  }
};

function updateScoreDisplay() {
  document.getElementById('current_score').textContent = `Score: ${currentScore}`;
  document.getElementById('total_score').textContent = `Total score: ${totalScore}`;
}

document.getElementById('spin_button').addEventListener('click', function() {
  spinWheel(); 
  const reels = document.querySelectorAll('.reel');
  const reelSymbols = Array.from(reels).map(reel => reel.textContent.trim()); 
  calculateScores(reelSymbols); 
  totalScore += currentScore; 
  updateScoreDisplay(); 
});

updateScoreDisplay();

