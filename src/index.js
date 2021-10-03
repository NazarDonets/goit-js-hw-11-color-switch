refs = {
	btnStart: document.querySelector('[data-action="start"]'),
	btnStop: document.querySelector('[data-action="stop"]'),
	colors: ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
	body: document.querySelector('body'),
	colorText: document.querySelector('.color-code'),
};

const { btnStart, btnStop, colors, body, colorText } = refs;
let maxValue = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let currentColor = null;
let colorInterval = null;

btnStart.addEventListener('click', () => {
	if (colorInterval) {
		return;
	}
	colorInterval = setInterval(() => {
		currentColor = colors[randomIntegerFromInterval(0, maxValue)];
		body.style.backgroundColor = currentColor;
		colorText.textContent = currentColor;
	}, 1000);
});

btnStop.addEventListener('click', () => {
	clearInterval(colorInterval);
	colorInterval = null;
});
