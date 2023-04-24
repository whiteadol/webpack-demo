'use strict';

class CanvasChart {
	#measureDatas;
	constructor(elemnt = 'ecgChart', { shift = 192, interval = 90 }) {
		this.elemnt = elemnt;
		this.shiftLength = shift;
		this.interval = interval;
		this.#measureDatas = [];
		this.inteval;
		this.axisIdx = 0;
		this.instance;
	}
	CreateChart() {
		this.instance = new CanvasJS.Chart(this.elemnt, {
			data: [
				{
					type: 'spline',
					dataPoints: this.accDataArray,
				},
			],
		});
		this.instance.render();
		return this;
	}

	get accDataArray() {
		return this.#measureDatas;
	}

	set accDataArray(data) {
		this.#measureDatas.push({ x: this.axisIdx, y: data });
		//this.#measureDatas = [...this.#measureDatas, ...[{ x: this.axisIdx, y: data }]];
		this.axisIdx++;
		if (this.#measureDatas.length > this.shiftLength) {
			this.#measureDatas.shift();
		}
	}

	ClearInteval() {
		if (this.inteval) {
			clearInterval(this.inteval);
			this.inteval = null;
		}
		return this;
	}

	StartInteval() {
		if (!this.inteval) {
			this.inteval = setInterval(() => this.instance.render(), this.interval);
		}
		return this;
	}
}

export { CanvasChart };
