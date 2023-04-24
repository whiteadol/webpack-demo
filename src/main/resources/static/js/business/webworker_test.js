'use strict';

const maxWorkers = navigator.hardwareConcurrency;
var myWorker = new Worker('/worker/worker.js');
//console.log(maxWorkers);
//console.log(navigator);
/* 
let pwdCredential = new PasswordCredential({
	id: 'example-username', // Username/ID
	name: 'Carina Anand', // Display name
	password: 'correct horse battery staple', // Password
});

console.assert(pwdCredential.type === 'password'); */

document.addEventListener('DOMContentLoaded', async () => {
	/* myWorker.onmessage = event => {
		console.log(event.data);
	}; */

	const caonvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	/* const blob = new Blob(
		Array.prototype.map.call(document.querySelectorAll("script[type='text/js-worker']"), function (oScript) {
			return oScript.textContent;
		}),
		{ type: 'text/javascript' },
	); */

	myWorker.addEventListener('message', e => {
		const { msg } = e.data;
		document.getElementById('display').innerText = msg;
	});

	class Particle {
		constructor(x, y) {
			this.posX = x;
			this.posY = y;
			this.velX = Math.random() * 2 - 1;
			this.velY = Math.random() * 2 - 1;
		}

		move() {
			this.posX += this.velX;
			this.posY += this.velY;
			if (this.posX >= 300) {
				this.posX = 300;
				this.velX *= -1;
			} else if (this.posX <= 0) {
				this.posX = 0;
				this.velX *= -1;
			} else if (this.posY <= 0) {
				this.posY = 0;
				this.velY *= -1;
			} else if (this.posY >= 300) {
				this.posY = 300;
				this.velY *= -1;
			}
		}
	}

	const particles = [];

	for (let i = 0; i < 10; i++) {
		particles.push(new Particle(Math.random() * 300, Math.random() * 300));
	}

	const animate = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.beginPath();
		particles.forEach(it => {
			it.move();
			ctx.rect(it.posX, it.posY, 10, 10);
			ctx.fill();
		});
		ctx.closePath();
		requestAnimationFrame(animate);
	};
	animate();

	//myWorker.postMessage('good');
});
