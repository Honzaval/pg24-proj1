const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let score = 0;
let timeLimit = 1000; // Circle appears for 1 second

// Function to create a new circle (good or bad)
function createCircle() {
    const circle = document.createElement('div');
    const isGood = Math.random() < 0.7; // 70% chance to create a good circle

    if (isGood) {
        circle.classList.add('circle', 'good-circle');
        circle.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            circle.remove(); // Remove the circle when clicked
        });
    } else {
        circle.classList.add('circle', 'bad-circle');
        circle.addEventListener('click', () => {
            score--;
            scoreDisplay.textContent = score;
            circle.remove(); // Remove the circle when clicked
        });
    }

    // Set random position for the circle
    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    gameArea.appendChild(circle);

    // Remove circle after a certain time if not clicked
    setTimeout(() => {
        if (circle.parentNode) {
            circle.remove();
        }
    }, timeLimit);
}

// Start the game by creating circles every 1.5 seconds
setInterval(createCircle, 1500);
