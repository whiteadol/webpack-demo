'use strict';

const _ = require('lodash');
import moment from 'moment';

class IsotopeCntr {
	constructor({ inst, opt }) {
		this.inst = inst;
		this.clickFloor = 1;
		this.gradientOpt = {
			width: 10,
			height: 55,
			opacity: 0.5,
		};
		//100에 비례한 높이비율값
		this.gradientRate = this.gradientOpt['height'] / 100;
		//임계치 온도의 라인 및 Arrow 색상
		this.thresholdTempColor = '#0008f5';
		//현재 온도의 라인 및 Arrow 색상
		this.nowTempColor = 'black';
	}
	/**
	 * 열화상 상태에 따른 배치 html div의 배경색 지정
	 * @param {Integer} temp 온도값
	 * @returns {String} rgba값
	 * @example
	 * CardBackColor(20) // rgba(255, 255, 0, 0.5)
	 */
	CardBackColor(temp, type) {
		const r = temp > 20 ? 255 : Math.floor((temp / 20) * 255);
		const g = temp > 20 ? Math.floor(((100 - temp) / 80) * 255) : 255;
		const b = 0;
		return `rgba(${r}, ${g}, ${b}, ${type === 'card' ? 0.3 : 1})`;
	}
	/**
	 * 열화상 상태 Elemnt의 차량 아이콘 색상 지정
	 * @param {int} temp 온도값
	 * @example
	 * CarIconColor(20) // rgba(255, 255, 0, 1)
	 * @returns {String} rgba값
	 */
	CarIconColor(temp) {
		const r = temp > 20 ? 255 : Math.floor((temp / 20) * 255);
		const g = temp > 20 ? Math.floor(((100 - temp) / 80) * 255) : 255;
		const b = 0;
		return `rgba(${r}, ${g}, ${b}, 1)`;
	}
	/**
	 * 열화상 상태 Elemnt 생성
	 * @param {Object} data 조회 or 소켓 수신 데이터
	 * @example
	 * CreateThermalCard({data, opt})
	 * @returns {Dom Elemnt} 열화상 상태 Elemnt
	 */
	CreateIsotElmnt({ data, opt = new Object() }) {
		if (_.isEmpty(data)) {
			alert('데이터 없음');
			return;
		}
		const statusEl = this.CreateThermalCard(data);
		const isopCard = new DOMParser().parseFromString(statusEl, 'text/html').body.firstChild;
		setInterval(() => {
			const timeDuration = this.TimeDuration(data['prkng_dt']);
			isopCard.querySelector('[name=timeWrap]').innerHTML = timeDuration === 'NaN:NaN:NaN' ? '00:00:00' : timeDuration;
		}, 1000);
		return isopCard;
	}
	/**
	 * 카메라 이벤트 수신시간과 현재시간의 차이를 반환
	 * @param {String} evtTime 카메라 이벤트 수신시간
	 * @example
	 * TimeDuration("2023-04-25 10:00:00")
	 * @returns {String} 시간차
	 */
	TimeDuration(evtTime) {
		const timeTerm = parseInt(moment.duration(moment().diff(moment(evtTime))).asSeconds());
		const hour = Math.floor(timeTerm / 3600)
			.toString()
			.padStart(2, '0');
		const min = Math.floor((timeTerm - hour * 3600) / 60);
		const sec = timeTerm - hour * 3600 - min * 60;
		return `${hour}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
	}
	/**
	 * 온도에 따른 gradient 높이(height)에 따른 비율계산
	 * @param {Float} tempValue 온도값
	 * @example
	 * TempCalculate(50.6)
	 * @returns {Object} 현재온도, 현재온도 화살표가 위치할 값
	 */
	TempCalculate(tempValue, threshold, gradientRate) {
		//현재 온도
		const nowTemp = (isNaN(tempValue) ? 100 : 100 - tempValue) * gradientRate;
		//현재온도 화살표가 위치할 값
		//const viewStandTemp = (tempValue <= 100 - (tempValue - 10) || 100 - (tempValue - 10) < 0 ? 0 : 100 - (tempValue - 10)) * this.gradientRate;
		const viewStandTemp = threshold * gradientRate;
		return { nowTemp, viewStandTemp };
	}
	/**
	 * 카메라 이벤트 온도에 따른 스펙트럼 html 생성
	 * @param {Float} tempValue 온도값
	 * @example
	 * CreateColorSpectrum(50.6)
	 * @returns {String} 스펙트럼 html
	 */
	CreateColorSpectrum(tempValue, threshold, opt) {
		const { nowTemp, viewStandTemp } = this.TempCalculate(tempValue, threshold, opt ? opt['gradientRate'] : this.gradientRate);
		return `
        <div style="width: ${this.gradientOpt.width}px; height: ${
			opt ? opt['height'] : this.gradientOpt['height']
		}px; background: linear-gradient(rgba(255, 0, 0, 0.5), rgba(12, 255, 0, 0.5)); position: absolute; z-index: 1;">
        <div name="nowTempLine" style="width: ${opt ? opt['width'] : this.gradientOpt.width}px; height: 2px; background-color: ${this.nowTempColor}; position: absolute; top: ${
			nowTemp < 0 ? 0 : nowTemp
		}px; left: 0px; z-index: 2;"></div>
        <div name="thresholdLine" style="width: ${opt ? opt['width'] : this.gradientOpt.width}px; height: 2px; background-color: ${this.thresholdTempColor}; position: absolute; bottom: ${
			viewStandTemp < 0 ? 0 : viewStandTemp
		}px; left: 0px; z-index: 2;"></div>
        <div name="nowTempArrow" style="width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid ${
			this.nowTempColor
		}; position: absolute; top: ${nowTemp < 0 ? -4 : nowTemp - 4}px; left: ${opt ? opt['width'] : this.gradientOpt.width}px; z-index: 2;"></div>
        <div name="thresholdArrow" style="width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid ${
			this.thresholdTempColor
		}; position: absolute; bottom: ${isNaN(viewStandTemp) || viewStandTemp < 0 ? -4.2 : viewStandTemp - 4.2}px; left: ${opt ? opt['width'] : this.gradientOpt.width}px; z-index: 2;"></div>
        </div>`;
	}
	/**
	 * 카메라 이벤트 온도에 따른 스펙트럼 html 생성
	 * @param {Object} data 조회 or 소켓 수신 데이터
	 * @example
	 * CreateThermalCard(50.6) / String Elemnt
	 */
	CreateThermalCard(data) {
		const { ip, port, rng_id, reg_dt, threshold, avg_temp, cnt_temp, max_temp, min_temp, floor, floor_cd, camera_nm, prkng_dt, charge_dt, anomalies_dt } = data;
		const maxTemp = parseFloat(max_temp);
		const floorName = `${floor_cd}${floor}F-0${rng_id}`;
		return ` 
            <div id="camera_${ip}_${port}_${rng_id}" name="cameraCard" class="status-item me-3" style="background : ${this.CardBackColor(maxTemp, 'card')};"
                data-camera-ip=${ip}
                data-camera-port=${port}
                data-camera-rng-id=${rng_id}
                data-floor-name=${floorName}
                data-reg-dt=${moment(reg_dt).format('YYYY-MM-DD__HH:mm:ss')}
                data-prkng-dt=${moment(prkng_dt).format('YYYY-MM-DD__HH:mm:ss')}
                data-charge-dt=${moment(charge_dt).format('YYYY-MM-DD__HH:mm:ss')}
                data-anomalies-dt=${moment(anomalies_dt).format('YYYY-MM-DD__HH:mm:ss')},
                data-temp-avg=${avg_temp}
                data-threshold=${threshold}
                data-temp-center=${cnt_temp}
                data-temp-max=${max_temp}
                data-temp-min=${min_temp}
            >
                <div class="top-info">
                    <div name="floor" class="floor" style="display : none">${floor}</div>
                    <div name="floorName" class="floorName" style="display : none">${floorName}</div>
                    <div name="cameraName" class="cameraName" style="display : none">${ip}__${port}</div>
                    <div name="temperate" class="temperate" style="display : none">${isNaN(parseFloat(max_temp)) ? 0 : parseFloat(max_temp)}</div>
                    <div name="date" class="date" style="display : none">${prkng_dt ? new Date(prkng_dt).getTime() : 9999999999999999999}</div>
                    <div class="section">
                        <mark style="background-color: ${this.CarIconColor(maxTemp)}";><i class="fas fa-parking"></i></mark>
                        <span>${floorName}</span>
                    </div>
                    <div class="time">
                        <i class="far fa-clock"></i>
                        <span name="timeWrap">00:00:00</span>
                    </div>
                </div>
                <ul class="detail-info">
                    <li><b>인식시간</b>${prkng_dt ? moment(prkng_dt).format('yyyy-MM-DD HH:mm:ss') : '-'}</li>
                    <li><b>최초온도</b>${isNaN(maxTemp) ? '-' : maxTemp}℃</li>
                    <li id="avgTemp"><b>평균온도</b>${avg_temp}℃</li>
                </ul>
                <div class="temperature-info">
                    <div class="visual-set">
                        <div class="spectrum">
                            ${this.CreateColorSpectrum(maxTemp, threshold)}
                        </div>
                        <div class="car">
                            <div class="car-icon">
                                <div class="masked-icon" style="background-color: ${this.CarIconColor(maxTemp)}; "></div>
                            </div>
                        </div>
                    </div>
                    <div class="temperature">
                        <b>현재온도</b>
                        <strong name="viewTemp" style="color:${this.CardBackColor(maxTemp)}">${isNaN(maxTemp.toFixed(1)) ? 0 : maxTemp.toFixed(1)}℃<small></small></strong>
                    </div>
                </div>
            </div> `;
	}
	/**
	 *  IsotopeCntr 인스턴스 생성
	 * @param {html} elmnt 구역 Elemnt
	 * @returns undefined
	 */
	AppendIsotElmnt(elmnt) {
		this.inst.append(elmnt).isotope('appended', elmnt);
	}

	RemoveIsotElmnt(elmnt) {
		this.inst.isotope('remove', elmnt);
	}
}

class TopStatusSummary {
	constructor(elIds = ['totalCamera', 'chargeRecognition', 'anomalies', 'maxTemp', 'minTemp', 'avgTemp']) {
		this.map = new Map();
		elIds.forEach(elId => {
			this.map.set(elId, document.getElementById(elId));
		});
		this.summaryData;
	}

	set summaryData(data) {
		this.summaryData = data;
		if (data.length) {
			const { totalCamera, chargeRecognition, anomalies, maxTemp, minTemp, avgTemp } = data[0];
			this.totalCamera = totalCamera;
		}
	}
	//총카메라
	set totalCamera(cameraList) {
		if (cameraList.length) {
			const useCameras = cameraList.filter(camera => camera.use_yn === 'Y');
			this.map.get('totalCamera').innerText = useCameras.length ?? 0;
		} else {
			this.map.get('totalCamera').innerText = 0;
		}
	}
	//충전인식
	set chargeRecognition(value) {
		this.map.get('chargeRecognition').innerText = value ?? 0;
	}
	//이상징후
	set anomalies(value) {
		this.map.get('anomalies').innerText = value ?? 0;
	}
	//최대온도
	set maxTemp(value) {
		this.map.get('maxTemp').innerText = value ?? '0℃';
	}
	//최소온도
	set minTemp(value) {
		this.map.get('minTemp').innerText = value ?? '0℃';
	}
	//평균온도
	set avgTemp(value) {
		this.map.get('avgTemp').innerText = value ?? '0℃';
	}
}

export { IsotopeCntr, TopStatusSummary };
