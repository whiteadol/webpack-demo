'use strict';

class RtcInterface {
	#constraints = {
		cam: {
			video: {
				width: {
					max: 640,
				},
				height: {
					max: 480,
				},
				frameRate: {
					max: 10,
				},
			},
			audio: false,
		},
		display: {
			video: {
				aspectRatio: 1.3296398891966759, //4:3
				displaySurface: 'monitor',
				frameRate: 30,
				cursor: 'never',
			},
		},
	};
	#mediaStream = new Map();
	constructor() {}

	get constraints() {
		return this.#constraints;
	}

	set constraints(constrains) {
		this.#constraints = constrains;
	}

	get mediaStream() {
		return this.#mediaStream;
	}

	set mediaStream(mediaStream) {
		const { type, stream } = mediaStream;
		this.#mediaStream.set(type, stream);
	}
}

class WebRtcUtil extends RtcInterface {
	constructor() {
		super();
	}

	async CamInit() {
		const { getUserMedia } = navigator.mediaDevices;
		if (getUserMedia) {
			this.mediaStream = {
				type: 'cam',
				stream: await navigator.mediaDevices.getUserMedia(this.constraints['cam']),
			};
			document.getElementById('userCam').srcObject = this.mediaStream.get('cam');
		}
		return this;
	}
	async DisplayInit() {
		const { getDisplayMedia } = navigator.mediaDevices;
		if (!getDisplayMedia) return;

		const setform = {
			type: 'display',
			stream: null,
		};
		const stream = await navigator.mediaDevices.getDisplayMedia(this.constraints['display']).catch(e => {
			return e.message;
		});
		//사용자 Display(모니터) 화면을 가져오지 못했다면 return;
		if (!(stream instanceof MediaStream)) {
			alert(stream);
			return;
		}
		//사용자 Display를 가져온 타입
		const displaySurface = stream.getVideoTracks()[0].getSettings().displaySurface;
		if (displaySurface !== 'monitor') {
			alert('사용자의 모니터를 선택해야합니다.');
			window.location.reload();
		}
		setform['stream'] = stream;
		this.mediaStream = setform;
		document.getElementById('pcDisplay').srcObject = this.mediaStream.get('display');
	}
}

class ScreenShot {
	static async Action(stream) {
		const streamTrack = stream.getTracks();
		if (!streamTrack.length) return;
		const reader = new FileReader();
		const imgBlob = await new ImageCapture(streamTrack[0]).takePhoto();
		const image = new Image();
		reader.readAsDataURL(imgBlob);
		reader.onloadend = evt => {
			const { result } = evt.currentTarget;
			image.src = result;
			document.getElementById('userSnapShot').src = result;
		};
	}
}

export { WebRtcUtil, ScreenShot };
