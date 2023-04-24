"use strict";

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

    BackColor(value) {
        const r = value > 20 ? 255 : Math.floor((value / 20) * 255);
        const g = value > 20 ? Math.floor(((100 - value) / 80) * 255) : 255;
        const b = 0;
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    }

    CreateIsotElmnt({ data, opt = new Object() }) {
        if (_.isEmpty(data)) {
            alert("데이터 없음");
            return;
        }
        const randomInt = Math.floor(Math.random() * 100) + 1;
        const { agId, uId, uName, brName, uRdt, brId, floor } = data;
        const date = new Date(moment(`2023-04-21 ${Math.floor(Math.random() * 14) + 1}:${Math.floor(Math.random() * 59) + 1}:${Math.floor(Math.random() * 59) + 1}`)).getTime()
        const tempValue = Math.floor(Math.random() * 100) + 1;
        const elemnt = ` 
        <div id="userCard_${uId}" class="card m-2 rounded-3" style="width: 200px; background : ${this.BackColor(tempValue)}; ">
            <div class="row p-2">
                <div class="col-lg-12">
                    <div class="agId" style="display : none" data-floor=${floor}>${agId}</div>
                    <div class="brId" style="display : none">${brId}</div>
                    <div class="brName" style="display : none">${brName}</div>
                    <div class="weight" style="display : none">${randomInt}</div>
                    <div class="floor" style="display : none">${floor}</div>
                    <div class="temperate" style="display : none">${tempValue}</div>
                    <h7 class="card-title">${uName}</h7>
                    <div class="date" style="display : none">${new Date(date).getTime()}</div>
                </div>
                <div class="col-lg-12">
                    <h7 name="timeWrap" class="card-title">0</h7>
                    <img src="/images/car.png" class="card-img-top rounded mx-auto d-block w-50 h-50"/>
                    <div class="box">
                        <div class="grid-contents">
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <h7 class="card-title">${tempValue.toFixed(1)}℃</h7>
                </div>
            </div>
        </div>`;

        //0.0~100.0사이의 랜덤값, 뒤에 소수점 1자리까지, 화씨


        const isopCard = new DOMParser().parseFromString(elemnt, "text/html").body.firstChild;

        setInterval(() => {
            const timeTerm = parseInt(moment.duration(moment().diff(moment(date))).asSeconds());
            const hour = Math.floor(timeTerm / 3600).toString().padStart(2, "0");
            const min = Math.floor((timeTerm - hour * 3600) / 60);
            const sec = (timeTerm - hour * 3600 - min * 60);
            isopCard.querySelector("[name=timeWrap]").innerHTML = `${hour}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
        }, 1000);
        return isopCard;
    }

    AppendIsotElmnt(elmnt) {
        this.inst.append(elmnt).isotope("appended", elmnt);
    }

    get #defaultFilters() {
        return {
            numberGreaterThan50: function () {
                const number = $(this).find(".number").text();
                return parseInt(number, 10) > 50;
            },
            brName: function () {
                const name = $(this).find(".brName").text();
                return name.includes("은행지점01");
            },
            brId: function (e) {
                const name = $(this).find(".brId").text();
                console.log(name);
                return name.includes("은행지점01");
            },
        };
    }
}

export { IsotopeCntr };

