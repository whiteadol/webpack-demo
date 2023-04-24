'use strict';

class UserActionCheck {
	#logOutTime;
	#remainingTime;
	#limitSecond;
	constructor(el) {
		this.#logOutTime = 1; //진행시간(초)
		this.#remainingTime = 30; //남은시간(초)
		this.#limitSecond = 300; //제한시간(초)

		document.onkeypress = () => {
			this.#logOutTime = 1;
			this.#remainingTime = 30;
			//Notiflix.Loading.remove();
		};
		document.onmousemove = () => {
			this.#logOutTime = 1;
			this.#remainingTime = 30;
			//Notiflix.Loading.remove();
		};
		setInterval(() => this.#TimeCheck(), 1000);
		this.#FocusScreenCheck();
	}

	#TimeCheck() {
		this.#logOutTime++;
		if (this.#logOutTime >= this.#limitSecond) {
			if (this.#remainingTime <= 0) {
				alert('장시간 미사용으로 강제 시험종료');
			} else {
				let text = `사용자의 움직임이 없어 ${this.#remainingTime}초 후, 자동 로그아웃이 됩니다.`;
				console.log(text);
			}
			this.#remainingTime--;
		}
	}

	#FocusScreenCheck() {
		window.onfocus = e => $('html, body').css({ background: 'white', color: '#000' });
		window.onblur = e => $('html, body').css({ background: 'black', color: '' });
		document.onvisibilitychange = ev => {
			const { hidden, webkitHidden, webkitVisibilityState } = ev.target;
			if (hidden || webkitHidden || webkitVisibilityState === 'hidden') {
				alert('화면전환');
				$('html, body').css({ background: 'black', color: '' });
			}
		};
	}
}

export { UserActionCheck as UAC };
