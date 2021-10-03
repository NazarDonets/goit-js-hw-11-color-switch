refs = {
	btnStart: document.querySelector('[data-action="start"]'),
	btnStop: document.querySelector('[data-action="stop"]'),
	colors: ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
	body: document.querySelector('body'),
	colorText: document.querySelector('.color-code'),
};

const { btnStart, btnStop, colors, body, colorText } = refs;

let maxValue = colors.length - 1;
let currentColor = null;
let colorInterval = null;

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
	currentColor = colors[randomIntegerFromInterval(0, maxValue)];
	body.style.backgroundColor = currentColor;
	colorText.textContent = currentColor;
}

btnStart.addEventListener('click', () => {
	if (colorInterval) {
		return;
	}
	colorInterval = setInterval(changeColor, 1000);
	btnStart.classList.toggle('btn__disabled');
	btnStop.classList.toggle('btn__disabled');
});

btnStop.addEventListener('click', () => {
	clearInterval(colorInterval);
	btnStart.classList.toggle('btn__disabled');
	btnStop.classList.toggle('btn__disabled');
	colorInterval = null;
});
