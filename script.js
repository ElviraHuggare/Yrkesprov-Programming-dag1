
const symbols = ['🍇', '🍉', '🍌', '🍈', '🍋', '🍑', '🍍', '👑'];

function getRandomFruit() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

function spinWheel() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    reel.textContent = getRandomFruit();
  });
}

document.getElementById('spin_button').addEventListener('click', function() {
  spinWheel();
});

function updateScoreDisplay() {
  document.getElementById('scores').textContent = `Score: ${currentScore}`;
  document.getElementById('total_score').textContent = `Total score: ${totalScore}`;
}


updateScoreDisplay();

