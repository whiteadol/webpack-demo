import { JsonToBinary, DecodeBinary } from '../util/nifi/parse.js';
import interact from 'interactjs';

const data = { token: '한글입니다.', type: 'subscribe', topic: 'nifi' };

document.addEventListener('DOMContentLoaded', async () => {
	const nifiSocket = new WebSocket(`wss://${window.location.hostname}/nws/aiPoint`);
	//const nifiSocket = new WebSocket(`wss://${window.location.hostname}/review/testPoint`);

	nifiSocket.binaryType = 'arraybuffer';
	nifiSocket.onopen = () => {
		setTimeout(() => {
			nifiSocket.send(JsonToBinary(data));
		}, 1000);
		//nifiSocket.send(JSON.stringify('d'));
		console.log('nifi 연결 성공');
	};
	nifiSocket.onmessage = event => {
		console.log(event.data);
		console.log(DecodeBinary(event.data));
	};
	nifiSocket.onerror = error => {
		console.log(error);
	};
	nifiSocket.onclose = () => {
		console.log('nifi 연결 종료');
	};

	drawPolygon(document.getElementById('canvas'));

	var element = document.getElementById('grid-snap');
	var element2 = document.getElementById('grid-snap2');

	test(element);
	//test(element2);
});

function test(element) {
	var x = 0;
	var y = 0;
	interact(element)
		.draggable({
			x: 364,
			y: 300,
			modifiers: [
				interact.modifiers.snap({
					targets: [interact.snappers.grid({ x: 20, y: 20 })],
					range: Infinity,
					relativePoints: [{ x: 0, y: 0 }],
				}),
				interact.modifiers.restrict({
					restriction: element.parentNode,
					elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
					endOnly: true,
				}),
			],
			inertia: true,
		})
		.on('dragmove', function (event) {
			x += event.dx;
			y += event.dy;
			console.log(x, y);

			event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
		});
}

/**
 * canvas에 이벤트 추가하여 사용자 클릭한 x,y좌표로 꼭지점으로 하는 직선으로 이루어진 다각형을 그린다. 다각형은 숫자로된 id가 부여된다.
 * linecolor는 파란색이며, linewidth는 2이다.
 * 첫 클릭한 위치의 x,y좌표와 거리가 20px내일 경우 마지막 꼭지점으로 인식하여 처음 클릭한 위치와 직선으로 이어지며, 해당 좌표점(canvas 내의 좌표값으로)들의 목록을 반환한다. 이후 클릭이벤트는 무시된다.
 */
function drawPolygon(canvas, callback) {
	let points = [];
	let apiPoints = [];
	let isDraw = true;
	let ctx = canvas.getContext('2d');
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 2;
	canvas.addEventListener('click', function (e) {
		if (isDraw) {
			let x = e.offsetX;
			let y = e.offsetY;
			const x1 = parseInt(x * 7.8);
			const y1 = parseInt(y * 10.4);
			apiPoints.push({ x: x1, y: y1 });
			points.push({ x, y });
			if (points.length > 1) {
				ctx.beginPath();
				ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
				ctx.lineTo(x, y);
				ctx.stroke();
			}
			if (points.length > 2) {
				let x1 = points[0].x;
				let y1 = points[0].y;
				let x2 = points[points.length - 1].x;
				let y2 = points[points.length - 1].y;
				let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
				if (distance < 20) {
					ctx.beginPath();
					ctx.moveTo(x1, y1);
					ctx.lineTo(x2, y2);
					ctx.stroke();
					isDraw = false;
					apiPoints.push({ x: x1, y: y1 });
					getPolygonInfo(canvas);
					console.log(apiPoints);
				}
			}
		}
	});
}

/**
 * canvas 내의 다각형 정보를 받는다
 */
function getPolygonInfo(canvas) {
	let ctx = canvas.getContext('2d');
	let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data = imageData.data;
	console.log(data);
}
