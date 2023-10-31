const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopButton.disabled = true;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  stopButton.disabled = true;
  startButton.disabled = false;

  clearInterval(intervalId);
});
