'use strict';
/** WebSocket heartBeat */
class NewHeartBeat {
	constructor({ checkTime }) {
		this._heartbeatCount = 0;
		this.timer;
		this.checkTime = checkTime;
	}

	set heartbeatCount(count) {
		this._heartbeatCount = count;
	}
	get heartbeatCount() {
		return this._heartbeatCount;
	}
}
/** WebSocket */
export class Ws extends NewHeartBeat {
	constructor({ userInfo }) {
		super({ checkTime: 6000 });
		this._userInfo = userInfo;
		this._ws;
	}
	/**
	 * Websocket Start
	 * @param {boolean} useHeartBeat 소켓 연결이 끊어지면, 재접속 시도여부
	 */
	Init({ useHeartBeat = true }) {
		const { protocol, hostname, port } = window.location;
		//console.log(protocol, hostname, port);
		const connInfo = {
			ssh: protocol === 'https:' ? 'wss' : 'ws',
			host: protocol === 'https:' && !port ? hostname : `${hostname}:${port}`,
		};
		try {
			//this._ws = new WebSocket(`${connInfo['ssh']}://${connInfo['host']}/ws?token=${this._accessToken}`);
			this._ws = new WebSocket(`${connInfo['ssh']}://${connInfo['host']}/posWs`);
		} catch (error) {
			console.error(error);
			this._ws = new WebSocket(`wss://${hostname}/posWs`);
		}
		//WebSocket Open Event
		this._ws.addEventListener('open', event => {
			const form = {
				sendType: 'connect',
				message: this._userInfo,
			};
			this._ws.send(JSON.stringify(form));
			console.log(
				`%c=======================================================\n============== WebSocket Connect Success ==============\n=======================================================`,
				'color : blue; font-size : 15px; font-weight : 600',
			);
			/**
			 * 해당 타이머가 실행중이라는건, socket연결에 실패하여 재접속 실행 중
			 * 접속이 완료되면, 해당 타이머 및 heartbeatCount 초기화
			 */
			if (this.timer) {
				clearInterval(this.timer);
				this._heartbeatCount = 0;
				this.timer = null;
			}
		});

		this._ws.onerror = event => {
			console.log(event);
			if (useHeartBeat && !this.timer) this.#CheckStart();
			//alert("유효하지 않은 웹소켓 접근입니다.");
			//this.Init({ useHeartBeat: false });
		};

		this._ws.onclose = event => {
			console.log(
				`%c ============================================== \n ============= WebSocket onClose ==============\n ==============================================`,
				'color : red; font-size: 15px; font-weight : 600',
			);
			console.log(event);
			console.log(this.timer);
			if (useHeartBeat && !this.timer) this.#CheckStart();
		};

		//브라우저 닫기전, trigger
		window.addEventListener('beforeunload', event => {
			//websocket 사용자 접속해제
			if (this._ws.readyState === 1) this._ws.close(1000, this._userInfo['uuid']);
			event.preventDefault();
		});
	}
	/** Websocket HeartBeat Start */
	#CheckStart() {
		if (!this.timer) {
			this.timer = setInterval(() => {
				try {
					console.log(`하트비트 카운트 :: ${this._heartbeatCount}`);
					this._heartbeatCount++;
					if (this._heartbeatCount >= 10) throw new Error('Websocket 서버 응답없음');
					this.Init({ useHeartBeat: true });
				} catch (e) {
					console.log(e);
					clearInterval(this.timer);
					this.timer = null;
					this._heartbeatCount = 0;
					//this._ws.close();
					console.log(`%c Closing connection. Reason: ${e.message}`, 'color : red; font-size : 15px; font-weight : 600');
				}
			}, this.checkTime);
		}
	}

	get ws() {
		return this._ws;
	}

	get grid() {
		return this._grid;
	}

	get userInfo() {
		return this._userInfo;
	}
}
