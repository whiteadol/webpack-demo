'use strict';

import { WebRtcUtil as Wr, ScreenShot } from '../util/webrtc/webrtcUtil.js';
const myModalEl = document.getElementById('exampleModal');
const modal = new mdb.Modal(myModalEl);
const wr = new Wr();

document.addEventListener('DOMContentLoaded', async () => {
	await wr.CamInit().then(res => res.DisplayInit());

	document.getElementById('actScreen').onclick = () => {
		modal.show();
		const camStream = wr.mediaStream.get('cam');
		ScreenShot.Action(camStream);
	};

	document.getElementById('camFrameRange').onchange = ChangeStreamConstraint;
	document.getElementById('diplayFrameRange').onchange = ChangeStreamConstraint;

	function ChangeStreamConstraint(evt) {
		const { id, value } = evt.target;
		const [camStream, displayStream] = [wr.mediaStream.get('cam'), wr.mediaStream.get('display')];
		if (id === 'camFrameRange') {
			wr.constraints['cam'] = {
				frameRate: {
					max: parseInt(value),
				},
			};
			camStream.getTracks()[0].applyConstraints(wr.constraints['cam']);
		} else {
			wr.constraints['display'] = {
				frameRate: parseInt(value),
			};
			console.log(displayStream.getTracks());
			displayStream.getTracks()[0].applyConstraints(wr.constraints['display']);
		}
	}
});
