'use strict';

import { JsonToBinary, DecodeBinary } from '../util/nifi/parse.js';

const data = { token: '한글입니다', type: 'subscribe', topic: 'nifi' };

document.addEventListener('DOMContentLoaded', async () => {
	const buffer = JsonToBinary(data); // JSON 데이터를 binary 데이터로 변환
	const nifiSocket = new WebSocket(`wss://${window.location.hostname}/nws/webPoint`);
	nifiSocket.binaryType = 'arraybuffer';
	nifiSocket.onopen = () => {
		console.log('nifi 연결 성공');
		setInterval(() => {
			//nifiSocket.send(buffer);
		}, 1000);
	};
	nifiSocket.onmessage = event => {
		console.log(JSON.parse(DecodeBinary(event.data)));
		console.log(event.data);
	};
	nifiSocket.onerror = error => {
		console.log(error);
	};
	nifiSocket.onclose = () => {
		console.log('nifi 연결 종료');
	};
});
