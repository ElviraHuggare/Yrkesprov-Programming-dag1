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
  // räknar "längden" på frukterna vilket i det här fallet betyder mängden frukter i listan
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

// refererar till att snurra på alla 3 reels som i respons ger en random frukt per reel
function spinWheel() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    reel.textContent = getRandomFruit();
  });
}

// beskriver allt som ska hända när man trycker på spin knappen
document.getElementById('spin_button').addEventListener('click', function() {
  spinWheel();
   calculateScores(); // Calculate scores
     updateScoreDisplay(); // Update score display
});


// kalkulerar poängen från den senaste spinnen
function calculateScores(reelSymbols) {
  currentScore = 0; // Reset current score
  
  // Loop through the symbols displayed on the reels
  for (let symbol of reelSymbols) {
    // en if som checkar om fruitPoints har en symbol i sig
    if (fruitPoints.hasOwnProperty(symbol)) {
      // adderar frukternas värde och lägger till poängen till currentScore
      currentScore += fruitPoints[symbol];
    }
  }
};

// Update score display function
function updateScoreDisplay() {
  document.getElementById('scores').textContent = `Score: ${currentScore}`;
  document.getElementById('total_score').textContent = `Total score: ${totalScore}`;
}

// Add event listener to the spin button
document.getElementById('spin_button').addEventListener('click', function() {
  spinWheel(); // Spin the wheel
  const reels = document.querySelectorAll('.reel');
  const reelSymbols = Array.from(reels).map(reel => reel.textContent.trim()); // Get symbols displayed on reels
  calculateScores(reelSymbols); 
  totalScore += currentScore; 
  updateScoreDisplay(); 
});

updateScoreDisplay();
