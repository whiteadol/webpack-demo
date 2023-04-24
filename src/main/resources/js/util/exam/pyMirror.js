'use strict';

/** Python CodeMirror 생성 */
class PyMirror {
	#pyodide;
	constructor({ el, output, probText }) {
		this.pythonPrintData = [];
		this._permitLines = [3, 4, 5];
		this._probNum = 1;
		this.#pyodide = null;
		this.editor = CodeMirror.fromTextArea(el, {
			mode: {
				//name: "python-noprint",
				name: 'python',
				version: 3,
				singleLineStringErrors: false,
			},
			lineNumbers: true,
			indentUnit: 4,
			styleActiveLine: true,
			lint: true,
			matchBrackets: true,
			gutters: ['CodeMirror-lint-markers'],
		});

		this.output = output;
		this.errorOutput = output;

		this.editor.on('keydown', function (cm, event) {
			//console.log(event);
			if (event.keyCode == 13) {
				return;
			}
		});
		this.editor.on('dragstart', () => event.preventDefault());
		this.editor.on('beforeChange', (cm, change) => this.BeforeChange(cm, change));

		this.editor.on('change', (cm, change) => {
			if (this.permitLines && this.permitLines.length === 0) {
				[...Array(cm.doc.size).keys()].forEach((one, idx) => {
					this.editor.removeLineClass(one, 'wrap', 'line-top');
					this.editor.removeLineClass(one, 'wrap', 'non-permit');
				});
			} else {
				[...Array(cm.doc.size).keys()].forEach((one, idx) => {
					this.editor.removeLineClass(one, 'wrap', 'line-top');
					this.editor.removeLineClass(one, 'wrap', 'non-permit');
					if (this.permitLines.includes(one)) {
						this.editor.addLineClass(one, 'wrap', 'line-top');
					} else {
						this.editor.addLineClass(one, 'wrap', 'non-permit');
					}
				});
			}
		});
	}

	BeforeChange(cm, change) {
		const { from, to, origin } = change;
		//console.log(`이전 라인 :: ${from.line}`);
		//console.log(`이후 라인 :: ${to.line}, 명령 :: ${origin}`);
		if (origin === 'setValue') return;
		if (this.permitLines && this.permitLines.length === 0) return;
		if (from.line !== to.line || !this.permitLines.includes(from.line) || change.text.length > 1) {
			change.cancel();
		}
	}

	set addToOutput(buildResult) {
		const { result, data } = buildResult;
		if (result) {
			this.errorOutput.value = null;
		} else {
			this.output.value = null;
		}
		setTimeout(() => {
			if (this.pythonPrintData.length > 0) {
				this.pythonPrintData.forEach(print => {
					this[`${result ? 'output' : 'errorOutput'}`].value += '>>>' + print + '\n';
				});
			}
			if (data) {
				this[`${result ? 'output' : 'errorOutput'}`].value += '>>>' + data + '\n';
			}
		}, 100);
	}

	set probNum(num) {
		this._probNum = num;
	}
	get probNum() {
		return this._probNum;
	}

	get permitLines() {
		return (() => this._permitLines)();
	}
	set permitLines(datas) {
		return (this._permitLines = datas);
	}
}

export { PyMirror as PyThonMirror };
