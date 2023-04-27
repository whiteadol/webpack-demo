'use strict';

import { Ws } from '../util/wsUtil.js';
import { Loading, Notify } from 'notiflix';
import { ContextMenu, SkinMenu } from '../lib/context.js';
import { defMenu } from '../util/context/defMenu.js';
import { IsotopeCntr } from '../util/componentCntr.js';
const axios = require('axios');

document.addEventListener('DOMContentLoaded', async function () {
	// 알림 팝오버
	var popover = new bootstrap.Popover($('.noti-trigger'), {
		html: true,
		container: 'body',
		content: $('#popNotification'),
		trigger: 'focus',
		placement: 'bottom',
	});

	// 상세정보 모달 상세정보 & 실시간 영상 토글
	$('.mode-body').hide();
	$('.mode-body:nth-child(1)').show(); /* 디폴트 모드 설정 : (1): 그리드 (2): 풀 */
	/* 그리드, 풀 모드 토글 */
	$('.toggle-mode li').click(function () {
		$('.mode-body').hide();
		var activeTab = $(this).attr('rel');
		$('#' + activeTab).fadeIn();
		if ($(this).attr('rel') == 'full') {
			$('.mode-slider').addClass('slide');
		} else {
			$('.mode-slider').removeClass('slide');
		}
		$('.toggle-mode li').removeClass('active');
		$(this).addClass('active');
	});

	const isopGrid = $('.car-info').isotope({
		itemSelector: '.item_1',
		layoutMode: 'fitRows',
		stagger: 5,
		sortAscending: {
			date: true,
			temperate: true,
			'card-title': true,
		},
		getSortData: {
			//온도 내림차순
			temperate: function (itemElem) {
				const temperate = $(itemElem).find('.temperate').text();
				return -parseFloat(temperate.replace(/[\(\)]/g, ''));
			},
			//최고 주차시간 내림차순
			date: function (itemElem) {
				const date = $(itemElem).find('.date').text();
				return parseFloat(date.replace(/[\(\)]/g, ''));
			},
			//구획명 내림차순
			'card-title': function (itemElem) {
				return $(itemElem).find('.card-title').text();
			},
		},
	});
	const isotopeCntr = new IsotopeCntr({
		inst: isopGrid,
	});

	//NIFI Rest API - 카메라 이벤트 조회
	await axios
		.get('/camera-api/getCameraEvent')
		.then(res => {
			res.data.forEach((camera, i) => {
				const floor = Math.floor(i / 20);
				const room = i % 20;
				const floorStr = floor < 10 ? `${floor}` : `${floor}`;
				const roomStr = room < 10 ? `0${room}` : `${room}`;
				camera['floor'] = 1;
				camera['floorName'] = `B${floorStr}F-${roomStr}`;
				const appendElemnt = isotopeCntr.CreateIsotElmnt({
					data: camera,
					opt: {
						idx: i,
					},
				});
				isotopeCntr.AppendIsotElmnt(appendElemnt);
			});
		})
		.then(() => {
			// 우클릭 메뉴
			var options = {
				items: [
					{
						text: '<i class="fas fa-chart-line"></i>상세정보',
						onclick: function () {
							$('#modal-detail').modal('show');
						},
					},
					{ text: '<i class="fas fa-video"></i>실시간 영상', href: 'javascript:functionEx()' }, //영상 링크 또는 스크립트 처리
				],
			};
			$('.car-info .item_1').contextify(options);
			setTimeout(() => {}, 1000);
		})
		.catch(err => {
			console.log(err);
		});

	//0.5초후 레이아웃 재정렬
	setTimeout(() => $(isopGrid).isotope('layout'), 500);

	//WebSocket 초기화
	const nifiSocket = new WebSocket(`wss://${window.location.hostname}/ws`);
	nifiSocket.binaryType = 'arraybuffer';
	nifiSocket.onopen = () => console.log('nifi 연결 성공');
	nifiSocket.onmessage = event => {
		const cameraEvt = JSON.parse(new TextDecoder().decode(event.data));
		const { max_temp, min_temp, avg_temp, ip, port, rng_id } = cameraEvt;
		isopGrid.find(`.item_1`).each(function () {
			if (this.id == `camera_${ip}_${port}_${rng_id}`) {
				const [cBody, temperate, viewTemp, nowTempLine, nowTempArrow] = [
					this.querySelector(`div[name="cameraCard"]`),
					this.querySelector(`div[name="temperate"]`),
					this.querySelector(`strong[name="viewTemp"]`),
					this.querySelector(`div[name="nowTempLine"]`),
					this.querySelector(`div[name="nowTempArrow"]`),
				];
				//cBody.style.transition = 'background-color 1s ease-in-out';
				//cBody.style.backgroundColor = isotopeCntr.CardBackColor(max_temp);
				temperate.innerHTML = max_temp;
				viewTemp.innerText = `${parseFloat(max_temp).toFixed(1)}℃`;
				nowTempLine.style.transition = 'top 1s ease-in-out';
				nowTempLine.style.top = `${parseFloat(max_temp) * 0.55}px`;
				nowTempArrow.style.transition = 'top 1s ease-in-out';
				nowTempArrow.style.top = `${parseFloat(max_temp) * 0.55 - 4}px`;
				//isopGrid.isotope('updateSortData', this)
			}
		});
		isopGrid.isotope('updateSortData').isotope();
	};
	nifiSocket.onerror = error => {
		console.log(error);
	};
	nifiSocket.onclose = () => {
		console.log('nifi 연결 종료');
	};
	Array.from(document.getElementsByClassName('nav-link')).forEach(one => {
		one.addEventListener('click', function () {
			if (this.querySelector('i').classList.contains('up')) {
				this.querySelector('i').classList.remove('up');
				$(isopGrid).isotope('option', {
					sortAscending: true,
				});
			} else {
				this.querySelector('i').classList.add('up');
				$(isopGrid).isotope('option', {
					sortAscending: false,
				});
			}
			const sortByValue = $(this).attr('data-sort-by');
			isopGrid.isotope({ sortBy: sortByValue });
		});
	});
});

// 상단 요약정보 바 토글
$('.status-toggle-btn').click(function () {
	$('.status-bar').toggleClass('hide');
	$('.status-bar ul').slideToggle('fast');
});

/* 상세 모달 라인차트 */
var ctx = document.getElementById('chart-temperature-line').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'line',
	//plugins: [ChartDataLabels],
	data: {
		labels: ['09:12', '09:15', '09:18', '09:21', '09:24', '09:27', '09:30', '09:33', '09:36', '09:39', '09:42', '09:45'],
		datasets: [
			{
				tension: 0.4,
				data: [40.1, 39.0, 39.2, 40.9, 42.3, 45.1, 50.2, 55.9, 58.5, 62.2, 68.0, 74.3],
				borderColor: '#f8e400',
				borderWidth: '3',
				pointBackgroundColor: '#dddddd',
				pointBorderColor: '#2a2c33',
				pointHoverBackgroundColor: '#f8e400',
				pointHoverBorderColor: '#918819',
				pointRadius: 5,
				pointHoverRadius: 5,
				pointBorderWidth: 2,
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
				},
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			y: {
				ticks: {
					color: '#d7d7d8',
					//display:false
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
