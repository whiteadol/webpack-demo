"use strict";

import { Ws } from "../util/wsUtil.js";
import { Loading, Notify } from "notiflix";
import { ContextMenu, SkinMenu } from "../lib/context.js";
import { defMenu } from "../util/context/defMenu.js";
import { IsotopeCntr } from "../util/componentCntr.js";
const axios = require("axios");

document.addEventListener("DOMContentLoaded", async () => {
    const isopGrid = $(".grid").isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        stagger: 5,
        sortAscending: {
            date: true,
            temperate: true,
            "card-title": true,
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
            "card-title": function (itemElem) {
                return $(itemElem).find(".card-title").text();
            },
        },
    });
    const isotopeCntr = new IsotopeCntr({
        inst: isopGrid,
    });
    const itemList = [
        {
            text: "전체 초기화",
            onclick: e => {
                isopGrid.isotope({ sortBy: "original-order" });
                isopGrid.isotope({ filter: "*" });
            },
        },
        {
            text: "정렬 초기화",
            onclick: e => {
                isopGrid.isotope({ sortBy: "original-order" });
            },
        },
        {
            text: "필터 초기화",
            onclick: e => {
                isopGrid.isotope({ filter: "*" });
            },
        },
    ];
    //NIFI Rest API - 카메라 이벤트 조회
    await axios
        .get("/camera-api/getCameraEvent")
        .then(res => {
            res.data.forEach((camera, i) => {
                const floor = Math.floor(i / 20);
                const room = i % 20;
                const floorStr = floor < 10 ? `${floor}` : `${floor}`;
                const roomStr = room < 10 ? `0${room}` : `${room}`;
                camera["floor"] = 1;
                camera["floorName"] = `B${floorStr}F-${roomStr}`;
                const appendElemnt = isotopeCntr.CreateIsotElmnt({
                    data: camera,
                    opt: {
                        idx: i,
                    },
                });
                isotopeCntr.AppendIsotElmnt(appendElemnt);
            });
        })
        .catch(err => {
            console.log(err);
        });

    const skinMenu = new SkinMenu();
    const kaliContextMenu = new ContextMenu(document.body, itemList);
    const subItemList = [...defMenu(isopGrid), { text: "데이터 필터", hotkey: "❯", submenu: kaliContextMenu }, { text: "스킨", hotkey: "❯", submenu: skinMenu.Init() }];
    const chromeContextMenu = new ContextMenu(document.body, subItemList);
    chromeContextMenu.install();

    document.addEventListener("contextmenu", function (event) {
        event.preventDefault(); // 기본 동작 중단
        const [x, y] = [event.clientX, event.clientY];
        const element = document.elementFromPoint(x - 5, y - 5); // x, y 좌표에 해당하는 HTML 요소 가져오기
        const cameraWrapCard = element.closest('div[name="cameraCard"]');
        //최상위
        if (cameraWrapCard) {
            const { cameraCh, cameraIp, regDt, tempAvg, tempCenter, tempMax, tempMin } = cameraWrapCard.dataset;
            console.log(`cameraCh: ${cameraCh}, cameraIp: ${cameraIp}, regDt: ${regDt}, tempAvg: ${tempAvg}, tempCenter: ${tempCenter}, tempMax: ${tempMax}, tempMin: ${tempMin}`);
        } else {
            chromeContextMenu.hideAll();
        }
    });

    $("#filters").on("click", "button", function () {
        const filterValue = $(this).attr("data-filter");
        const floor = function () {
            return this.querySelector(`div[name="floor"]`).innerHTML == filterValue;
        };
        isopGrid.isotope({ filter: filterValue === "*" ? filterValue : floor });
    });
    // bind sort button click
    $("#sorts").on("click", "button", function () {
        const sortByValue = $(this).attr("data-sort-by");
        isopGrid.isotope({ sortBy: sortByValue });
    });

    /*  $("#brSelect").on("change", function () {
         const ddd = $("option:selected", this).attr("value");
         let filterValue = $("option:selected", this).attr("data-filter");
         filterValue = isotopeCntr.filterFn[filterValue] || filterValue;
         function test(e) {
             const name = $(this).find(".brId").text();
             console.log(name);
             return name.includes(ddd);
         }
         isopGrid.isotope({ filter: test });
     }); */

    //0.5초후 레이아웃 재정렬
    setTimeout(() => $(isopGrid).isotope("layout"), 500);

    setTimeout(() => {
        //동적으로 정렬방식 변경
        /* $(isopGrid).isotope('option', {
            sortAscending: false
        }); */
        //var iso = isopGrid.data($('.grid')[0])
        //console.log(isopGrid)
    }, 2000);

    //WebSocket 초기화
    const nifiSocket = new WebSocket(`wss://${window.location.hostname}/ws`);
    nifiSocket.binaryType = "arraybuffer";
    nifiSocket.onopen = () => console.log("nifi 연결 성공");
    nifiSocket.onmessage = event => {
        const cameraEvt = JSON.parse(new TextDecoder().decode(event.data));
        const { max_temp, min_temp, avg_temp, ip, port, rng_id } = cameraEvt;
        console.log(max_temp);
        isopGrid.find(`.grid-item`).each(function () {
            if (this.id == `camera_${ip}_${port}_${rng_id}`) {
                const [cBody, temperate, viewTemp, nowTempLine, nowTempArrow] = [
                    this.querySelector(`div[name="cBody"]`),
                    this.querySelector(`div[name="temperate"]`),
                    this.querySelector(`h7[name="viewTemp"]`),
                    this.querySelector(`div[name="nowTempLine"]`),
                    this.querySelector(`div[name="nowTempArrow"]`),
                ];
                cBody.style.transition = "background-color 1s ease-in-out";
                cBody.style.backgroundColor = isotopeCntr.CardBackColor(max_temp);
                temperate.innerHTML = max_temp;
                viewTemp.innerText = `${parseFloat(max_temp).toFixed(1)}℃`;
                nowTempLine.style.transition = "top 1s ease-in-out";
                nowTempLine.style.top = `${100 - parseFloat(max_temp)}px`;
                nowTempArrow.style.transition = "top 1s ease-in-out";
                nowTempArrow.style.top = `${100 - (parseFloat(max_temp) + 4)}px`;
                //isopGrid.isotope('updateSortData', this)
            }
        });
        isopGrid.isotope("updateSortData").isotope();
        /* cameraEvt.forEach((one) => {
            const { max_temp, min_temp, avg_temp, ip, port, rng_id } = one;
            console.log(one)
            isopGrid.find(`.grid-item`).each(function () {
                if (this.id == `camera_${ip}_${port}_${rng_id}`) {
                    this.querySelector(`div[name="cBody"]`).style.transition = 'background-color 1s ease-in-out';
                    this.querySelector(`div[name="cBody"]`).style.backgroundColor = isotopeCntr.CardBackColor(max_temp);
                    this.querySelector(`div[name="temperate"]`).innerHTML = max_temp;
                    this.querySelector(`h7[name="viewTemp"]`).innerText = `${max_temp}℃`;
                    this.querySelector(`div[name="nowTempLine"]`).style.transition = 'top 1s ease-in-out';
                    this.querySelector(`div[name="nowTempLine"]`).style.top = `${100 - parseFloat(max_temp)}px`;
                    this.querySelector(`div[name="nowTempArrow"]`).style.transition = 'top 1s ease-in-out';
                    this.querySelector(`div[name="nowTempArrow"]`).style.top = `${100 - (parseFloat(max_temp) + 4)}px`;
                    //isopGrid.isotope('updateSortData', this)
                }
            });
            isopGrid.isotope('updateSortData').isotope();
        }); */
    };
    nifiSocket.onerror = error => {
        console.log(error);
    };
    nifiSocket.onclose = () => {
        console.log("nifi 연결 종료");
    };
});
