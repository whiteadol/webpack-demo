'use strict';
const moment = require('moment');
const axios = require('axios');
const _ = require('lodash');
import Grid from 'tui-grid';

const myModalEl = document.getElementById('exampleModal');
const modal = new mdb.Modal(myModalEl);
var jsmpeg = require('jsmpeg');

document.getElementById('actScreen').onclick = () => {
	modal.show();
};

let processGroupStore = {
	'64fcbdc4-8771-3567-f7a2-afa4d68e8ab9': {
		name: '열화상 카메라 프로세스',
	},
	'32161a19-e551-3965-ecef-6c1782228437': {
		name: '날씨조회(OpenAPI - 초단기예보 + 대기오염)',
	},
};

const instance = new Grid({
	el: document.getElementById('grid'), // Container element
	scrollX: false,
	scrollY: true,
	bodyHeight: 'fitToParent',
	minRowHeight: 30,
	rowHeight: 35,
	columns: [
		{
			header: '프로세스 그룹명',
			name: 'parentGroupId',
		},
		{
			header: '프로세스 ID',
			name: 'processId',
			width: 280,
		},
		{
			header: '프로세스명',
			name: 'name',
		},
		{
			header: '상태',
			name: 'status',
			align: 'center',
			width: 100,
			formatter: ev => {
				const { column, row, value } = ev;
				switch (value) {
					case 'RUNNING':
						return `<span class="badge badge-success" style="font-size : 12px">동작중</span>`;
					case 'STOPPED':
						return `<span class="badge badge-danger" style="font-size : 12px">미작동</span>`;
					default:
						return `<span class="badge badge-warning" style="font-size : 12px">${value}</span>`;
				}
			},
		},
		{
			header: 'Read/write',
			name: 'readWrite',
			align: 'center',
			width: 150,
		},
		{
			header: '상태 업데이트 시간',
			name: 'statsLastRefreshed',
			width: 150,
		},
	],
	columnOptions: {
		resizable: true,
	},
});

Grid.applyTheme('clean'); // Call API of static method

document.addEventListener('DOMContentLoaded', async () => {
	/* 
	let token = null;
	const isAccess = await axios.get('/thermal/access').then(res => res.data);
	console.log(isAccess.resultBody.accessStatus);
	token = await axios.get('/thermal/nifiToken').then(res => res.data);
	if (isAccess.resultBody.accessStatus.status !== 'ACTIVE') {
		token = await axios.get('/thermal/nifiToken').then(res => res.data);
		const status = await axios
			.get(`/thermal/system-diagnostics`, {
				params: {
					//token: token.resultBody,
				},
			})
			.then(res => res.data);
		console.log(status.resultBody);
		console.log(status.resultBody.systemDiagnostics.aggregateSnapshot);
	} */

	const status = await axios.get(`/thermal/system-diagnostics`, {}).then(res => res.data);
	//const { freeHeap, heapUtilization, maxHeap, statsLastRefreshed, totalHeap, uptime, totalThreads } = status.resultBody.systemDiagnostics.aggregateSnapshot;
	for (let [key, value] of Object.entries(status.resultBody.systemDiagnostics.aggregateSnapshot)) {
		$(`#${key}`).text(value);
		if (key === 'flowFileRepositoryStorageUsage') {
			for (let [frsuKey, frsuValue] of Object.entries(value)) {
				$(`#${frsuKey}`).text(frsuValue);
			}
		}
	}
	await axios
		.get('/thermal/allProcessGroups', {
			params: { processId: '5a84d27a-0187-1000-70eb-233a05639739' },
			//params: { processId: '5a84d27a-0187-1000-70eb-233a05639739', token: token.resultBody },
		})
		.then(res => {
			res.data.resultBody?.processGroups.forEach(one => {
				processGroupStore[one.id] = one.component.name;
				$('#pGroupWrap').append(`<button type="button" data-processid="${one.id}" name="getNifiApi" id="weatherGroup" class="btn btn-primary m-1">${one.component.name}</button>`);
			});
		});

	//프로세스 그룹 목록 조회
	document.getElementsByName('getNifiApi').forEach(element => {
		element.addEventListener('click', async () => {
			const data = await axios
				.get('/thermal/process-groups', {
					//params: { processId: element.dataset.processid, token: token.resultBody },
					params: { processId: element.dataset.processid },
				})
				.then(res => res.data);

			instance.resetData(
				data.resultBody.processors.map(processor => {
					console.log(processor);

					const { component, status, id } = processor;
					//console.log(moment(status.statsLastRefreshed).format('HH:mm:ss'));
					return {
						parentGroupId: processGroupStore[element.dataset.processid],
						processId: id,
						name: component.name,
						status: component.state,
						readWrite: `${status.aggregateSnapshot.read} / ${status.aggregateSnapshot.written}`,
						statsLastRefreshed: status.statsLastRefreshed,
					};
				}),
			);
		});
	});
	//NIFI 접근 로그 Btn
	document.getElementsByName('nifi-restBtn').forEach(element => {
		element.addEventListener('click', async evt => {
			const { base, sub } = evt.target.dataset;
			const params = {
				callType: evt.target.id,
				//tceSeq: 1234,
			};
			await axios
				.get(`/${base}/${sub}`, {
					params,
				})
				.then(res => {
					if (base === 'camera-api') {
						document.getElementById('logsDiv').innerText = JSON.stringify(res.data);
						return;
					}
					document.getElementById('logsDiv').innerText = null;
					document.getElementById('logsDiv').innerText = res.data;
				})
				.catch(err => {
					console.log(err);
				});
		});
	});

	/* setTimeout(() => {
		instance.refreshLayout();
	}, 100);

	var client = new WebSocket('wss://10.100.1.164/rtspWs');
	new jsmpeg(client, {
		canvas: document.getElementById('canvas'), // Canvas should be a canvas DOM element
	}); */
	/* var player = new jsmpeg(client, {
		canvas: canvas,
	}); */
});
