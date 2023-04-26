'use strict'

import { IsotopeCntr } from '../util/componentCntr.js';

const userList = [
    {
        "uId": "test03",
        "brAccessYn": "N",
        "uName": "지점관리",
        "brId": 2,
        "brName": "은행지점01",
        "bruApprover": "a",
        "otpApprover": "N",
        "agId": "g_br_manager",
        "agName": "지점 관리자",
        "uPosition": "sm",
        "uCompanyNum": "0003",
        "uPhone": null,
        "uEmail": null,
        "uRid": "test01",
        "uRdt": "2022-12-02",
        "uMdt": "2023-01-11",
        "uApprIp": "127.0.0.1",
        "uIpYn": "N",
        "uApprove": "Y",
        "uBlock": "N",
        "uUse": "Y",
        "uLoginFail": 0
    },
]

const isopGrid = $(".grid").isotope({
    itemSelector: ".card",
    layoutMode: "fitRows",
    stagger: 5,
    sortAscending: {
        date: true,
        temperate: true,
        'card-title': true,
    },
    getSortData: {
        //온도 내림차순
        temperate: function (itemElem) {
            const temperate = $(itemElem).find(".temperate").text();
            return -parseFloat(temperate.replace(/[\(\)]/g, ""));
        },
        //최고 주차시간 내림차순
        date: function (itemElem) {
            const date = $(itemElem).find(".date").text();
            return parseFloat(date.replace(/[\(\)]/g, ""));
        },
        //구획명 내림차순
        'card-title': function (itemElem) {
            return $(itemElem).find(".card-title").text();
        }
    },
});
const isotopeCntr = new IsotopeCntr({
    inst: isopGrid,
});

userList.forEach(oneUser => {
    for (let i = 0; i < 120; i++) {
        const floor = Math.floor(i / 20);
        const room = i % 20;
        const floorStr = floor < 10 ? `${floor}` : `${floor}`;
        const roomStr = room < 10 ? `0${room}` : `${room}`;
        oneUser['floor'] = floor;
        oneUser.uName = `B${floorStr}F-${roomStr}`;
        const appendElemnt = isotopeCntr.CreateIsotElmnt({
            data: oneUser,
            opt: {
                idx: i,
            },
        });
        isotopeCntr.AppendIsotElmnt(appendElemnt);
    }
});


export { isotopeCntr, isopGrid };

