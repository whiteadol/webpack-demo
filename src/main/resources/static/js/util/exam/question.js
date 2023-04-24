'use strict';

//시험문제 생성
class Question {
	constructor({ question, type, cm, db }) {
		this.cm = cm;
		this.db = db;
		this.$WRAP = $(document.getElementById('questionWrap'));
		this.type = type;
		this.question = question;
		this.prevSumNum = 1;
		this.mapper = {
			0: '①',
			1: '②',
			2: '③',
			3: '④',
		};
	}
	/** 객관식 문제 생성 */
	CreateQuestionWrap() {
		this.question.forEach((one, idx) => {
			const { examNm, problem, problemSample, questType, sample } = one;
			if (questType === 3) return;
			const questionNum = idx + 1;
			const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row m-3 mb-4">
                <h1 class="mb-2 ex-prb">【문제 ${questionNum}】${problem}</h1>
                <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-1">
                </div>
            </div>
            `);
			switch (questType) {
				case 1:
					if (sample) {
						sample.forEach((data, idx) => {
							const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx + 1}>${this.mapper[idx]} ${data}</p>`);
							p.addEventListener('click', async e => {
								e.currentTarget.parentNode.childNodes.forEach(one => {
									if (one.nodeType === 1) one.classList.remove('ex-samp-selected');
								});
								setTimeout(() => e.target.classList.add('ex-samp-selected'), 50);
								//이전번호 데이터 저장
								await this.db.CONNECTION.insert({
									into: 'questions',
									upsert: true,
									values: [
										{
											id: questionNum,
											answer: e.target.dataset.sampleNum,
										},
									],
								});
							});
							elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(p);
						});
					}
					break;
				case 2:
					const { condition, result } = problemSample;
					const card = `
                    <div class="row col-12">
                        <div class="card p-0">
                            <div class="card-header">
                                조건
                            </div>
                            <div class="card-body p-0">
                                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="white-space: pre;"></pre>
                            </div>
                        </div>
                        ${
							result
								? ` <div class="card p-0">
                                        <div class="card-header">
                                            [결과 출력 화면]
                                        </div>
                                        <div class="card-body p-0">
                                            <pre class="card-text prob-pre lh-base m-0 p-3" id="result" style="white-space: break-spaces;"</pre>
                                        </div>
                                    </div>`
								: ``
						}
                       
                        <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-3">
                        </div>
                    </div>
                    `;
					const type2 = this.StringToDom(card);
					Array.from(type2.getElementsByTagName('pre')).forEach((one, idx) => {
						one.innerHTML = idx === 0 ? condition : result;
					});
					elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(type2);
					if (sample) {
						sample.forEach((data, idx) => {
							const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx + 1}>${this.mapper[idx]} ${data}</p>`);
							p.addEventListener('click', async e => {
								e.currentTarget.parentNode.childNodes.forEach(one => {
									if (one.nodeType === 1) one.classList.remove('ex-samp-selected');
								});
								setTimeout(() => e.target.classList.add('ex-samp-selected'), 50);
								//이전번호 데이터 저장
								await this.db.CONNECTION.insert({
									into: 'questions',
									upsert: true,
									values: [
										{
											id: questionNum,
											answer: e.target.dataset.sampleNum,
										},
									],
								});
							});
							elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(p);
						});
					}
					break;
			}
			$(document.getElementById('allQuestionWrap')).append(elemnt);
		});
	}
	/**
	 * 주관식 문제 생성
	 * @param {Integer} probNum 문제번호
	 * @returns Object
	 */
	CreateSubjectiveQuestion(probNum) {
		probNum = probNum || 1;
		const subProb = this.question.find(oneProb => oneProb['questType'] === 3 && oneProb['probNum'] == probNum);
		const subProbIdx = this.question.findIndex(oneProb => oneProb['questType'] === 3 && oneProb['probNum'] == probNum);
		if (subProb) {
			const { examNm, problem, problemSample, questType, questTypeLv, permitLine, sample, subNum } = subProb;
			const questionNum = subProbIdx + 1;
			this.cm.permitLines = permitLine;
			const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row p-2">
                <div class="ex-prb">문제 ${questionNum}】${problem}</div>
                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="color: black;white-space : pre;background: aliceblue;">
                    ${problemSample.condition}
                </pre>
            </div> `);
			/* if (questTypeLv === 2) {
				this.cm.editor.setValue(problemSample.result);
			} else {
				this.cm.editor.setValue(problemSample.result);
			} */
			this.cm.editor.setValue(problemSample.result);
			$(document.getElementById('allQuestionWrap_s')).empty();
			$(document.getElementById('allQuestionWrap_s')).append(elemnt);
			return {
				subProbNum: questionNum, //전체 문제에서의 문제번호
				subNum: subNum, //주관식에서의 문제번호
			};
		}
	}

	StringToDom(string) {
		return new DOMParser().parseFromString(string, 'text/html').body.firstChild;
	}
}

export { Question };
