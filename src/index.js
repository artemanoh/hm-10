// task 1
const startBtn = document.querySelector(".startBtn");
const messageText = document.querySelector(".message-text");

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    messageText.innerHTML = "";

    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        messageText.textContent = `Інтервал ${count}`;

        if (count === 5) {
            clearInterval(intervalId);
            messageText.textContent = "Інтервал зупинено";
            startBtn.disabled = false;

            setTimeout(() => {
                messageText.innerHTML = "";
            }, 3000);
        }
    }, 1000);
});
// task 2

const boxes = document.querySelectorAll(".box");
const startButton = document.querySelector(".startAnimation");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

startButton.addEventListener("click", () => {
    startButton.disabled = true;

    let size = 100;
    let step = 5;

    const intervalId = setInterval(() => {
        if (size >= 150) {
            clearInterval(intervalId);
            startButton.disabled = false;
            return;
        }

        size += step;

        boxes.forEach(box => {
            box.style.width = size + "px";
            box.style.height = size + "px";
            box.style.backgroundColor = getRandomColor();
        });
    }, 100);
});

// task 3
const startGameBtn = document.querySelector('.startGame');
const gameArea = document.querySelector('.gameArea');
const target = document.querySelector('.target');
const scoreDisplay = document.querySelector('.score');
const textGame = document.querySelector('.text-game');

let score = 0;
let intervalId;
let timeLeft = 20;

function moveTarget() {
    target.style.left = Math.random() * (gameArea.clientWidth - target.offsetWidth) + 'px';
    target.style.top = Math.random() * (gameArea.clientHeight - target.offsetHeight) + 'px';
}


function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    timeLeft = 16;
    startGameBtn.disabled = true;
    target.style.display = 'block';
    moveTarget();

    intervalId = setInterval(() => {
        timeLeft--;
        textGame.textContent = `Залишилось ${timeLeft} секунд`

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            startGameBtn.disabled = false;
            target.style.display = 'none';
            textGame.textContent = `Гра завершена! Ваші очки: ${score}`
        } else {
            moveTarget();
        }
    }, 1000);
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

startGameBtn.addEventListener('click', startGame);
// task 4
const input = document.querySelector('.timeInput');
const button = document.querySelector('.startTimer');
const output = document.querySelector('.outputMessage');

button.addEventListener('click', () => {
    let seconds = parseInt(input.value);
    if (isNaN(seconds) || seconds <= 0) {
        output.textContent = 'Введіть правильну кількість секунд';
        output.style.color = 'red';
        return;
    }

    input.disabled = true;
    button.disabled = true;
    output.style.color = 'green';
    output.textContent = `Чекаємо ${seconds} секунд...`;

    const interval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            output.textContent = `Чекаємо ${seconds} секунд...`;
        } else {
            clearInterval(interval);
            output.textContent = 'Час вийшов!';
            input.disabled = false;
            button.disabled = false;

            setTimeout(() => {
                output.textContent = '';
            }, 2000);
        }
    }, 1000);
});
