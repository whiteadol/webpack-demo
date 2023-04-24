'use strict';

class Answer {
	constructor(probList) {
		this._answerStore = probList.map((one, idx) => {
			return {
				prob: idx + 1,
				answer: null,
			};
		});
	}

	get answerStore() {
		return this._answerStore;
	}

	set answerStore(obj) {
		const thisIdx = this._answerStore.findIndex(one => one['prob'] === obj['prob']);
		this._answerStore[thisIdx]['answer'] = isNaN(parseInt(obj['answer'])) ? obj['answer'] : parseInt(obj['answer']);
	}
}

export { Answer };
