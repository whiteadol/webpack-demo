'use strict';

import { Ws } from '../util/wsUtil.js';
import { Loading, Notify } from 'notiflix';
import { ContextMenu, SkinMenu } from '../lib/context.js';
import { defMenu } from '../util/context/defMenu.js';
import { IsotopeCntr, TopStatusSummary } from '../util/componentCntr.js';
import { UAC } from '../util/exam/userActionCheck.js';
import { Chartjs } from '../util/chartUtil.js';
import moment from 'moment';
const chartjs = new Chartjs('chart-temperature-line');
const axios = require('axios');

const contextMenuData = {
	now: null,
	last: null,
};

// 알림 팝오버
var popover = new bootstrap.Popover($('.noti-trigger'), {
	html: true,
	container: 'body',
	content: $('#popNotification'),
	trigger: 'focus',
	placement: 'bottom',
});

document.addEventListener('DOMContentLoaded', async function () {
	const uac = new UAC();
	//const topStatusSummary = new TopStatusSummary();
	//topStatusSummary.totalCamera = cameraList;
	const isopGrid = $('.car-info').isotope({
		itemSelector: '.status-item',
		layoutMode: 'fitRows',
		stagger: 5,
		sortAscending: {
			date: true,
			temperate: true,
			floorName: true,
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
			floorName: function (itemElem) {
				return $(itemElem).find('.floorName').text();
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
			console.log(res.data);
			if (!res.data.length || (res.data.length === 1 && Object.keys(res.data[0]).length === 1)) return;
			res.data.forEach((camera, i) => {
				const appendElemnt = isotopeCntr.CreateIsotElmnt({
					data: camera,
				});
				isotopeCntr.AppendIsotElmnt(appendElemnt);
			});
		})
		.then(() => {
			// 우클릭 메뉴
			$('.car-info .status-item').contextify({
				items: [
					{
						text: '<i class="fas fa-chart-line"></i>상세정보',
						onclick: function () {
							if (!contextMenuData.now) {
								alert('데이터가 없습니다.');
								return;
							}
							$('#modal-detail').modal('show');
						},
					},
					{
						text: '<i class="fas fa-chart-line"></i>Kafka 수신 이미지',
						onclick: function () {
							$('#kafka_test_img_popup').modal('show');
						},
					},
					{ text: '<i class="fas fa-video"></i>실시간 영상', href: 'javascript:functionEx()' }, //영상 링크 또는 스크립트 처리
				],
			});
		})
		.catch(err => {
			console.log(err);
		});

	//0.5초후 레이아웃 재정렬
	setTimeout(() => $(isopGrid).isotope('layout'), 500);
	//WebSocket 초기화
	const nifiSocket = new WebSocket(`wss://${window.location.hostname}/ws`);
	nifiSocket.binaryType = 'arraybuffer';
	nifiSocket.onopen = () => {
		const dataForm = {
			type: 'userBr',
			data: 100101,
		};
		nifiSocket.send(new TextEncoder().encode(JSON.stringify(dataForm)));
	};
	nifiSocket.onmessage = event => {
		//현재 사용자가 해당 웹 페이지를 보고있지 않다면, 데이터를 받아도 처리하지 않음
		if (!uac.isFocus) return;
		const cameraEvt = JSON.parse(new TextDecoder().decode(event.data));
		switch (cameraEvt.type) {
			case 'processing-ai-camera-data':
			case 'cam-thermal-data':
				//prkng_yn : 주차여부
				//charge_yn : 충전여부
				//anomalies_yn : 임계치 도달 여부
				const { max_temp, min_temp, avg_temp, ip, port, rng_id, prkng_yn, charge_yn, anomalies_yn } = JSON.parse(cameraEvt.data);
				const isDataExist = Array.from(isopGrid.find(`.status-item`)).find(item => item.id === `camera_${ip}_${port}_${rng_id}`);
				if (prkng_yn && !isDataExist) {
					console.log('2. 실시간 데이터에서는 주차가 되어있다고 하지만, 진입시 대시보드에는 주차데이터가 없는 경우 - %c html 추가', 'color: blue; font-size: 15px;');
					const appendElemnt = isotopeCntr.CreateIsotElmnt({
						data: JSON.parse(cameraEvt.data),
					});
					isotopeCntr.AppendIsotElmnt(appendElemnt);
					isopGrid.isotope('updateSortData').isotope();
				} else if (!prkng_yn && isDataExist) {
					console.log('3. 실시간 데이터에서는 주차가 안되어있다고 하지만, 진입시 대시보드에는 주차데이터가 존재하는 경우 - %c대시보드에서 해당 데이터 삭제', 'color: red; font-size: 15px;');
					isotopeCntr.RemoveIsotElmnt(isDataExist);
					isopGrid.isotope('updateSortData').isotope();
				} else if (prkng_yn && isDataExist) {
					const [temperate, avgTemp, viewTemp, nowTempLine, nowTempArrow] = [
						isDataExist.querySelector(`div[name="temperate"]`),
						isDataExist.querySelector(`li[id="avgTemp"]`),
						isDataExist.querySelector(`strong[name="viewTemp"]`),
						isDataExist.querySelector(`div[name="nowTempLine"]`),
						isDataExist.querySelector(`div[name="nowTempArrow"]`),
					];
					temperate.innerHTML = max_temp;
					avgTemp.innerHTML = `<b>평균온도</b>${avg_temp}℃`;
					viewTemp.innerText = `${parseFloat(max_temp).toFixed(1)}℃`;
					nowTempLine.style.transition = 'bottom 1s ease-in-out';
					nowTempLine.style.bottom = `${parseFloat(max_temp) * 0.55}px`;
					nowTempArrow.style.transition = 'bottom 1s ease-in-out';
					nowTempArrow.style.bottom = `${parseFloat(max_temp) * 0.55 - 4}px`;
					isopGrid.isotope('updateSortData').isotope();
				}
				break;
			default:
				const canvas = document.getElementById('canvas');
				//kafka로 전송받은 image data base64로 변환(png)
				const image = new Image();
				image.src = `data:image/png;base64,${cameraEvt.data}`;
				image.onload = () => {
					canvas.width = image.width;
					canvas.height = image.height;
					canvas.style.transition = 'background-color 1s ease-in-out';
					const ctx = canvas.getContext('2d');
					ctx.drawImage(image, 0, 0);
				};
				console.log(cameraEvt);
				break;
		}
	};
	nifiSocket.onerror = error => {
		console.log(error);
	};
	nifiSocket.onclose = () => {
		console.log('nifi 연결 종료');
	};
	//상단 필터 버튼 클릭 이벤트
	Array.from(document.getElementsByClassName('nav-link')).forEach(filterEl => {
		filterEl.addEventListener('click', function () {
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
		filterEl.dataset.sortBy === 'temperate' &&
			setTimeout(() => {
				filterEl.click();
			}, 500);
	});

	document.addEventListener('contextmenu', function (event) {
		event.preventDefault(); // 기본 동작 중단
		const [x, y] = [event.clientX, event.clientY];
		const element = document.elementFromPoint(x - 5, y - 5); // x, y 좌표에 해당하는 HTML 요소 가져오기
		const cameraWrapCard = element.closest('div[name="cameraCard"]');
		//최상위
		if (cameraWrapCard) {
			const { floorName, cameraIp, cameraPort, cameraRngId, threshold, regDt, tempAvg, tempCenter, tempMax, tempMin, prkngDt } = cameraWrapCard.dataset;
			contextMenuData.last = contextMenuData.now;
			contextMenuData.now = {
				floorName,
				cameraIp,
				cameraPort,
				cameraRngId,
				threshold,
				tempAvg,
				prkngDt,
				tempCenter,
				tempMax,
				tempMin,
				regDt,
			};
		} else {
			if (contextMenuData.now) {
				contextMenuData.last = contextMenuData.now;
			}
			contextMenuData.now = null;
		}
		console.log(contextMenuData);
	});

	//대시보드 상단 종합데이터 목록 조회
	await axios.get('/camera-api/getStaticsData').then(res => {
		console.log(res.data);
		if (res.data.length) {
			document.querySelector('.status-bar #totalCamera').innerText = res.data[0].use_camera_cnt ?? 0;
			document.querySelector('.status-bar #chargeRecognition').innerText = res.data[0].prkng_cnt ?? 0;
			document.querySelector('.status-bar #anomalies').innerText = `${res.data[0].anomalies_cnt ?? 0}`;
			document.querySelector('.status-bar #maxTemp').innerText = `${res.data[0].max_temp ?? 0}℃`;
			document.querySelector('.status-bar #minTemp').innerText = `${res.data[0].min_temp ?? 0}℃`;
			document.querySelector('.status-bar #avgTemp').innerText = `${res.data[0].avg_temp ?? 0}℃`;
		}
	});
	//상세 popup show 이벤트
	$('#modal-detail').on('show.bs.modal', async () => {
		if (!contextMenuData.now) return;
		const { floorName, cameraIp, cameraPort, cameraRngId, tempAvg, tempCenter, tempMax, threshold, tempMin, prkngDt, regDt } = contextMenuData.now;
		await axios
			.get('/camera-api/getCameraDetailEvent', {
				params: {
					ip: cameraIp,
					port: cameraPort,
					rngId: cameraRngId,
				},
			})
			.then(res => {
				console.log(res.data);
				//res.data Array의 가장 마지막 데이터
				const lastArrayData = res.data[res.data.length - 1];
				const detailMaxTemp = Math.max(...res.data.map(cameraData => parseFloat(cameraData.max_temp)));
				document.getElementById('p-title').innerText = `${floorName}`;
				document.getElementById('ps-maxTemp').innerText = `${detailMaxTemp}℃`;
				document.getElementById('p-prkngDt').innerHTML = `<b>최초 차량 인식 시간</b>${prkngDt.replace(/__/gi, ' ')}`;
				document.getElementById('p-maxTemp').innerHTML = `<b>최초 차량 최초 온도</b>${lastArrayData.max_temp}℃`;
				document.getElementById('p-avgTemp').innerHTML = `<b>최초 차량 평균 온도</b>${lastArrayData.avg_temp}℃`;
				/* document.getElementById('p-prkngDt').innerHTML = `<b>최초 차량 인식 시간</b>${prkngDt.replace(/__/gi, ' ')}`;
				document.getElementById('p-maxTemp').innerHTML = `<b>최초 차량 최초 온도</b>${tempMax}℃`;
				document.getElementById('p-avgTemp').innerHTML = `<b>최초 차량 평균 온도</b>${tempAvg}℃`; */
				const chartTemp = res.data.map(chartData => parseFloat(chartData.max_temp)).reverse();
				const chartGruidTemp = res.data.map(chartData => chartData.threshold).reverse();
				const chartLabel = res.data.map(chartData => chartData.to_char_date).reverse();
				chartjs.update = { label: chartLabel, data: chartTemp, threshold: chartGruidTemp };
				const gradientOpt = {
					width: 10,
					height: 200,
					opacity: 0.5,
				};
				//100에 비례한 높이비율값
				gradientOpt['gradientRate'] = gradientOpt['height'] / 100;
				$(document.getElementById('p-spectrum')).empty();
				$(document.getElementById('p-spectrum')).append(isotopeCntr.CreateColorSpectrum(parseFloat(tempMax), threshold, gradientOpt));
			})
			.catch(err => console.error(err));
	});

	$('#modal-detail').on('hidden.bs.modal', function () {});
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

// 상단 요약정보 바 토글
$('.status-toggle-btn').click(function () {
	$('.status-bar').toggleClass('hide');
	$('.status-bar ul').slideToggle('fast');
});
