'use strict';

import { BlueTooth, MeasureDataStore, DataProcessing } from '@juhyuen/bluetooth';
import { MapLib, LineDraw, MapUtil } from '@juhyuen/map-module';
import { CanvasChart } from '../util/chartUtil.js';
import { Ws } from '../util/wsUtil.js';
import { User } from '../util/position/user.js';
import { Loading, Notify } from 'notiflix';
import { transform } from 'ol/proj';
import { getCenter } from 'ol/extent';
import * as olSphere from 'ol/sphere';
import { Style, Stroke, Icon, Text, Fill } from 'ol/style';
import TileLayer from 'ol/layer/Tile';
import { LineString } from 'ol/geom';
import { Vector } from 'ol/layer';
import { ContextMenu, SkinMenu } from '../lib/context.js';
import { defMenu } from '../util/context/defMenu.js';
import { isotopeCntr, isopGrid } from './isoTest.js';

const itemList = [
    /*  {
         text: 'Information Gathering',
         hotkey: '❯',
         subitems: [{ text: 'DNS Analysis', hotkey: '❯', subitems: [{ text: 'dnsenum' }, { text: 'dnsrecon' }, { text: 'fierce' }] }],
     },
     {
         text: 'Vulnerability Analysis',
         hotkey: '❯',
         subitems: [
             {
                 text: 'Fuzzing Tools',
                 hotkey: '❯',
                 subitems: [{ text: 'spike-generic_chunked' }, { text: 'spike-generic_listen_tcp' }, { text: 'spike-generic_send_tcp' }, { text: 'spike-generic_send_udp' }],
             },
         ],
     },
     null, */
    {
        text: '전체 초기화',
        onclick: e => {
            //e.handled = true;
            //e.label.innerText = 'Clicked!';
            //e.data.text = e.label.innerText;
            //console.log(e);
            isopGrid.isotope({ sortBy: 'original-order' });
            isopGrid.isotope({ filter: '*' });
        },
    },
    {
        text: '정렬 초기화',
        onclick: e => {
            //e.handled = true;
            //e.label.innerText = 'Clicked!';
            //e.data.text = e.label.innerText;
            //console.log(e);
            isopGrid.isotope({ sortBy: 'original-order' });
        },
    },
    {
        text: '필터 초기화',
        onclick: e => {
            //e.handled = true;
            //e.label.innerText = 'Clicked!';
            //e.data.text = e.label.innerText;
            //console.log(e);
            isopGrid.isotope({ filter: '*' });
        },
    },
];

document.addEventListener('DOMContentLoaded', async () => {
    const skinMenu = new SkinMenu();
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault(); // 기본 동작 중단
        var x = event.clientX; // 마우스 클릭 위치의 x 좌표
        var y = event.clientY; // 마우스 클릭 위치의 y 좌표
        var element = document.elementFromPoint(x - 5, y - 5); // x, y 좌표에 해당하는 HTML 요소 가져오기
        console.log(element);
        var tag = element.tagName; // HTML 요소의 태그 이름 가져오기
        var text = element.textContent; // HTML 요소의 내용 가져오기
        //console.log('태그: ' + tag + ', 내용: ' + text); // 콘솔에 태그와 내용 출력
    });

    const kaliContextMenu = new ContextMenu(document.body, itemList);
    const subItemList = [...defMenu(isopGrid), { text: '데이터 필터', hotkey: '❯', submenu: kaliContextMenu }, { text: '스킨', hotkey: '❯', submenu: skinMenu.Init() }]
    const chromeContextMenu = new ContextMenu(document.body, subItemList);
    chromeContextMenu.install();

    $("#filters").on("click", "button", function () {
        const filterValue = $(this).attr("data-filter");
        const floor = function () {
            return this.querySelector(`[data-floor]`).dataset.floor == filterValue
        };
        isopGrid.isotope({ filter: filterValue === '*' ? filterValue : floor });
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


    // bind sort button click
    $("#sorts").on("click", "button", function () {
        const sortByValue = $(this).attr("data-sort-by");
        isopGrid.isotope({ sortBy: sortByValue });
    });

    setTimeout(() => {
        $(isopGrid).isotope('layout');
    }, 500);

    setTimeout(() => {
        //동적으로 정렬방식 변경
        $(isopGrid).isotope('option', {
            sortAscending: false
        });
    }, 10000);
});
