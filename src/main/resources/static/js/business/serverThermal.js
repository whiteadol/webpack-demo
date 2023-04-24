'use strict';
const moment = require('moment');
const axios = require('axios');
const _ = require('lodash');
import Grid from 'tui-grid';

let processGroupStore = {
	'50528ad4-0187-1000-9172-bb9ac6f647e9': {
		name: '열화상 카메라 프로세스',
	},
	'25b3b957-0187-1000-35fd-028bd3462473': {
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
	let token = null;
	const status = await axios
		.get(`/thermal/system-diagnostics`, {
			params: {
				token: null,
				nifiType: 'server',
			},
		})
		.then(res => res.data);
	console.log(status.resultBody.systemDiagnostics.aggregateSnapshot);
	const { freeHeap, heapUtilization, maxHeap, statsLastRefreshed, totalHeap, uptime, totalThreads } = status.resultBody.systemDiagnostics.aggregateSnapshot;

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
			params: { processId: '307efb97-0187-1000-d3aa-a9210c5242c7', nifiType: 'server' },
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
					params: { processId: element.dataset.processid, nifiType: 'server' },
				})
				.then(res => res.data);

			instance.resetData(
				data.resultBody.processors.map(processor => {
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

	//비밀번호 체크 정규식(영문, 숫자, 특수문자 포함 8~16자리, 숫자 증감 불가, 특수문자는 !@#$%^*+=- 만 허용)
	const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
	const spaceCheck = /\s/;
	const test = 'Ekzmsltm1#321) ';

	//연속된 숫자 불가(3자리까지)
	const numCheck = /(?=.*[0-9]{3,})/;
	//숫자 증감여부(321, 123, 987, 789 등)
	console.log(numCheck.test(test));
	/* if (pwCheck.test(test) === false || spaceCheck.test(test)) {
		alert();
	} */
	setTimeout(() => {
		instance.refreshLayout();
	}, 100);
});
