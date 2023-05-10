'use strict';

class Chartjs {
	constructor(el) {
		/* 상세 모달 라인차트 */
		this._chart = new Chart(document.getElementById(el).getContext('2d'), {
			type: 'line',
			//plugins: [ChartDataLabels],
			data: {
				labels: ['09:12', '09:15', '09:18', '09:21', '09:24', '09:27', '09:30', '09:33', '09:36', '09:39', '09:42', '09:45'],
				datasets: [
					{
						tension: 0.4,
						data: [40.1, 39.0, 39.2, 40.9, 42.3, 45.1, 50.2, 55.9, 58.5, 62.2, 68.0, 74.3],
						borderColor: '#f8e400',
						borderWidth: '1',
						pointBackgroundColor: '#dddddd',
						pointBorderColor: '#2a2c33',
						pointHoverBackgroundColor: '#f8e400',
						pointHoverBorderColor: '#918819',
						pointRadius: 0,
						pointHoverRadius: 0,
						/* pointRadius: 3.5,
						pointHoverRadius: 3.5,
						pointBorderWidth: 2, */
						fill: false,
					},
					{
						tension: 0,
						data: [67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67],
						borderColor: '#e64e49',
						borderWidth: '1',
						pointRadius: 0,
						pointHoverRadius: 0,
						fill: false,
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				layout: {
					padding: {
						// top:40,
						// left:30,
						// right:30
					},
				},
				plugins: {
					tooltip: {
						enabled: true,
						callbacks: {
							label: function (tooltipItem, data) {
								return tooltipItem.formattedValue + '℃';
							},
						},
					},
					legend: {
						display: false,
					},
				},
				scales: {
					x: {
						ticks: {
							color: '#d7d7d8',
							font: {
								size: 9,
							},
							align: 'start',
						},
						grid: {
							display: false,
							drawBorder: false,
						},
					},
					y: {
						min: 0,
						max: 100,
						ticks: {
							color: '#d7d7d8',
							//display:false
							stepSize: 20,
						},
						//display: false,
						grid: {
							//display: false,
							color: 'rgba(255,255,255,0.08)',
							drawBorder: false,
						},
						beginAtZero: true,
					},
				},
			},
		});
	}

	get chart() {
		return this._chart;
	}

	set update(chartData) {
		const { label, data, threshold } = chartData;
		this.chart.data.labels = [];
		this.chart.data.datasets.forEach(dataset => (dataset.data = []));
		this.chart.update();
		setTimeout(() => {
			label.forEach(oneLabel => this.chart.data.labels.push(oneLabel));
			this.chart.data.datasets.forEach((dataset, idx) => {
				if (idx === 0) {
					data.forEach(d => dataset.data.push(d));
				} else if (idx === 1) {
					threshold.forEach(d => dataset.data.push(d));
				}
			});
			this.chart.update();
		}, 300);
	}
}

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

export { CanvasChart, Chartjs };
