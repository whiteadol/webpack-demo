'use strict';

const _ = require('lodash');
import moment from 'moment';

class IsotopeCntr {
	constructor({ inst, opt }) {
		this.inst = inst;
		this.clickFloor = 1;
		if (opt) {
			const { filterFn } = opt;
			this.filterFn = filterFn;
		} else {
			this.filterFn = this.#defaultFilters;
		}
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

	CarIconColor(temp) {
		const r = temp > 20 ? 255 : Math.floor((temp / 20) * 255);
		const g = temp > 20 ? Math.floor(((100 - temp) / 80) * 255) : 255;
		const b = 0;
		return `rgba(${r}, ${g}, ${b}, 1)`;
	}

	CreateIsotElmnt({ data, opt = new Object() }) {
		if (_.isEmpty(data)) {
			alert('데이터 없음');
			return;
		}
		const { ip, port, rng_id, reg_dt, avg_temp, cnt_temp, max_temp, min_temp, floorName, floor, camera_nm, use_yn } = data;
		const tempValue = parseFloat(max_temp);

		//tempValue 랜덤값생성 함수
		//조건 1 : tempValue변수의 값보다 10작다.
		//조건 2 : 0보다 작다면, 0으로 고정. 조건 끝
		//함수 생성
		const randomTempValue = tempValue => {
			const randomValue = Math.floor(Math.random() * 10);
			if (tempValue - randomValue < 0) {
				return 0;
			} else {
				const returnTemp = parseFloat(tempValue - randomValue).toFixed(1);
				return isNaN(returnTemp) ? '-' : returnTemp;
			}
		};
		const elemnt_origin = ` 
            <div id="camera_${ip}_${port}_${rng_id}" name="cameraCard" class="item_1 me-3" style="background : ${use_yn === 'Y' ? this.CardBackColor(tempValue, 'card') : 'gray'};"
                data-camera-ip=${ip}
                data-camera-ch=${port}
                data-reg-dt=${reg_dt}
                data-temp-avg=${avg_temp}
                data-temp-center=${cnt_temp}
                data-temp-max=${max_temp}
                data-temp-min=${min_temp}
            >
                <div class="top-info">
                    <div name="floor" class="floor" style="display : none">${floor}</div>
                    <div name="floorName" class="floorName" style="display : none">${floorName}</div>
                    <div name="cameraName" class="cameraName" style="display : none">${ip}__${port}</div>
                    <div name="temperate" class="temperate" style="display : none">${isNaN(parseFloat(max_temp)) ? 0 : parseFloat(max_temp)}</div>
                    <div name="date" class="date" style="display : none">${reg_dt ? new Date(reg_dt).getTime() : 9999999999999999999}</div>
                    <div class="section">
                        <mark style="background-color: ${use_yn === 'Y' ? this.CarIconColor(tempValue) : '#89b1fc'}";><i class="fas fa-parking"></i></mark>
                        <span>${floorName}</span>
                    </div>
                    <div class="time">
                        <i class="far fa-clock"></i>
                        <span name="timeWrap">00:00:00</span>
                    </div>
                </div>
                <ul class="detail-info">
                    <li><b>인식시간</b>${reg_dt ? moment(reg_dt).format('yyyy-MM-DD HH:MM:ss') : '-'}</li>
                    <li><b>최초온도</b>${isNaN(tempValue) ? '-' : tempValue}℃</li>
                    <li><b>평균온도</b>${randomTempValue(tempValue)}℃</li>
                </ul>
                <div class="temperature-info">
                    <div class="visual-set">
                        <div class="spectrum">
                            ${this.CreateColorSpectrum(tempValue)}
                        </div>
                        <div class="car">
                            <div class="car-icon">
                                <div class="masked-icon" style="background-color: ${use_yn === 'Y' ? this.CarIconColor(tempValue) : '#89b1fc'}; "></div>
                            </div>
                        </div>
                    </div>
                    <div class="temperature">
                        <b>최고온도</b>
                        <strong name="viewTemp" style="color:${this.CardBackColor(tempValue)}">${use_yn === 'N' ? '-' : isNaN(tempValue.toFixed(1)) ? 0 : tempValue.toFixed(1)}℃<small></small></strong>
                    </div>
                </div>
            </div> `;
		const isopCard = new DOMParser().parseFromString(elemnt_origin, 'text/html').body.firstChild;
		setInterval(() => {
			const timeDuration = this.TimeDuration(reg_dt);
			isopCard.querySelector('[name=timeWrap]').innerHTML = timeDuration === 'NaN:NaN:NaN' ? '00:00:00' : timeDuration;
		}, 1000);
		return isopCard;
	}

	/**
	 * 카메라 이벤트 수신시간과 현재시간의 차이를 반환
	 * @param {String} evtTime 카메라 이벤트 수신시간
	 * @returns {String} 시간차
	 * @example
	 * TimeDuration("2023-04-25 10:00:00")
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
	 * 카메라 이벤트 온도에 따른 스펙트럼 html 생성
	 * @param {Float} tempValue 온도값
	 * @returns {String} 스펙트럼 html
	 * @example
	 * CreateColorSpectrum(50.6)
	 */
	CreateColorSpectrum(tempValue) {
		const nowTemp = isNaN(tempValue) ? 100 : 100 - tempValue;
		const standTemp = 100 - (tempValue - 10);
		const viewStandTemp = nowTemp <= standTemp || standTemp < 0 ? 0 : standTemp;
		return `
        <div style="width: 10px; height: 55px; background: linear-gradient(rgba(255, 0, 0, 0.5), rgba(12, 255, 0, 0.5)); position: absolute; z-index: 1;">
            <div name="nowTempLine" style="width: 10px; height: 3px; background-color: black; position: absolute; top: ${nowTemp < 0 ? 0 : nowTemp * 0.55}px; left: 0px; z-index: 2;"></div>
            <div style="width: 10px; height: 3px; background-color: #0008f5; position: absolute; top: ${viewStandTemp < 0 ? 0 : viewStandTemp * 0.55}px; left: 0px; z-index: 2;"></div>
            <div name="nowTempArrow" style="width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid black; position: absolute; top: ${
				nowTemp < 0 ? -4 : (nowTemp - 4) * 0.55
			}px; left: 10px; z-index: 2;"></div>
            <div style="width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid #0008f5; position: absolute; top: ${
				(viewStandTemp - 5) * 0.55
			}px; left: 10px; z-index: 2;"></div>
        </div>`;
	}
	/**
	 *  IsotopeCntr 인스턴스 생성
	 * @param {html} elmnt 구역 Elemnt
	 * @returns undefined
	 */
	AppendIsotElmnt(elmnt) {
		this.inst.append(elmnt).isotope('appended', elmnt);
	}

	get #defaultFilters() {
		return {
			numberGreaterThan50: function () {
				const number = $(this).find('.number').text();
				return parseInt(number, 10) > 50;
			},
			brName: function () {
				const name = $(this).find('.brName').text();
				return name.includes('은행지점01');
			},
			brId: function (e) {
				const name = $(this).find('.brId').text();
				console.log(name);
				return name.includes('은행지점01');
			},
		};
	}
}

export { IsotopeCntr };
