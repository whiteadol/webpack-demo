'use strict';

class User {
	#userStore;
	constructor() {
		this.#userStore = {
			/*********/
			'966127cc-eb30-44ac-b510-3269e8078810': {
				name: '박주현',
			},
			'1dc864d9-3978-43d8-b620-82b3bc8f67a6': {
				name: '김원준',
			},
			'5a076d9e-0862-4472-b23b-bf49cc5d3399': {
				name: '임상근',
			},
			'cef7f8b4-43d5-46c9-ba09-463ec4cabfe2': {
				name: '박주현_PC_Mobile',
			},
			'bdc289a2-3e0d-44d2-b34c-173a69736388': {
				name: '이상엽',
			},
			'c3d1a5b6-473f-4e4a-b3a9-bfe4a5e71253': {
				name: '이승한',
			},
			/* '966127cc-eb30-44ac-b510-3269e8078810': {
				name: '오찬영',
			}, */
		};
	}

	get getUser() {
		return this.#userStore;
	}

	set setUser(dataObj) {
		const { mobileUUID, isConn } = dataObj;
		this.#userStore[mobileUUID] = isConn;
	}
}

export { User };
