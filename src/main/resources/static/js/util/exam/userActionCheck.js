'use strict';

class UserActionCheck {
	#logOutTime;
	#remainingTime;
	#limitSecond;
	#isFocus;
	constructor(el) {
		this.#logOutTime = 1; //진행시간(초)
		this.#remainingTime = 30; //남은시간(초)
		this.#limitSecond = 600; //제한시간(초)
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
		this.#isFocus = true;
	}

	#TimeCheck() {
		this.#logOutTime++;
		if (this.#logOutTime >= this.#limitSecond) {
			if (this.#remainingTime <= 0) {
				alert('장시간 미사용');
			} else {
				console.log(`사용자의 움직임이 없어 ${this.#remainingTime}초 후, 자동 로그아웃이 됩니다.`);
			}
			this.#remainingTime--;
		}
	}

	#FocusScreenCheck() {
		document.onvisibilitychange = ev => {
			const { hidden, webkitHidden, webkitVisibilityState } = ev.target;
			if (hidden || webkitHidden || webkitVisibilityState === 'hidden') {
				this.#isFocus = false;
				console.log('페이지가 비활성화 되었습니다.');
			} else {
				this.#isFocus = true;
				console.log('페이지가 활성화 되었습니다.');
			}
		};
	}

	get isFocus() {
		return this.#isFocus;
	}
	set isFocus(val) {
		this.#isFocus = val;
	}
}

export { UserActionCheck as UAC };
