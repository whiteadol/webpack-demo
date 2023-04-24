import { UAC } from '../util/exam/userActionCheck.js';

console.log(navigator);
console.log(navigator.connection);

document.addEventListener('DOMContentLoaded', async () => {
	const uac = new UAC();
	const hard = await navigator.storage.estimate();
	console.log(hard);

	setInterval(() => {
		//console.log(`is Online :: ${navigator.onLine}`);
	}, 1000);

	//console.log(window.screen);

	console.log(navigator.maxTouchPoints);
	document.getElementById('viewInput').value = navigator.maxTouchPoints;
	const monitor = await navigator.mediaDevices.enumerateDevices();
	console.log(monitor);

	document.querySelector('html').addEventListener('keypress', evt => {
		const { key, code } = evt;
		if (key === 'F5') return false;
	});

	document.querySelector('html').addEventListener('mousemove', () => {
		//console.log('마우스');
	});

	document.onkeydown = ev => {
		const { key, code } = ev;
		const keyList = ['Alt', 'Meta', 'Tab'];
		if (keyList.some(onekey => onekey === key)) {
			ev.preventDefault();
		}
	};

	/* window.onbeforeunload = e => {
		document.getElementById('viewInput').value = '닫는다';
	}; */
	/* $(window).keydown(function (event) {
		console.log(event);
	}); */

	/* console.log(navigator.clipboard);
	let i = 0;
	document.getElementById('pythonRun').onclick = async () => {
		i++;
		await navigator.clipboard.writeText(i).then(async data => {
			const read = await navigator.clipboard.readText();
			document.getElementById('header').innerText = read;
		});
	}; */
});
