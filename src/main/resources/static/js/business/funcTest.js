const Grid = require('tui-grid');
//const moment = require('moment');
const DeviceUUID = require('device-uuid');
//const { isEmpty } = require('lodash');
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

Loading.init({
	messageFontSize: '3vh',
	svgSize: '90',
	svgColor: '#0db5e7',
	messageColor: '#0db5e7',
	messageMaxLength: 60,
});

Notify.init({
	messageFontSize: '2vh',
	messageColor: '#0db5e7',
	position: 'right-bottom',
});

let prevCoord;
let sumDistance = 0;
let userPosIcon;
const dataStore = new MeasureDataStore();
const connUserVector = new Map();
let defaultDisVal = 1;

/**
 * navigator.geolocation 기능 사용가능여부
 * @param {Object} res navigator response
 */
function GeomLocationAPIPermit(res) {
	const geomEl = document.getElementById('isGeoLocation');
	let scopeState;
	if (res instanceof PermissionStatus) {
		const { state } = res;
		geomEl.innerText = state;
		scopeState = state;
	} else {
		const { state } = res.target;
		geomEl.innerText = state;
		scopeState = state;
	}
	if (scopeState !== 'granted') {
		geomEl.style.color = 'red';
		Notify.warning(`GeoLocation 기능사용이 거부되었습니다.`);
	} else {
		geomEl.style.color = 'green';
		Notify.success(`GeoLocation 기능사용이 가능합니다.`);
	}
}
/**
 * 접속장치에 따른 icon style 변경
 * @param {Object} userIcon ol.layer.Vector : 사용자 위치 아이콘
 * @param {String} userName 사용자명
 * @param {String} deviceType 접속 모바일 타입
 * @returns
 */
function ModifyUserIconStyle(userIcon, { userName, deviceType }) {
	userIcon
		.getSource()
		.getFeatures()[0]
		.setStyle(
			new Style({
				image: new Icon({
					archor: [0.5, 0.5],
					scale: 0.06,
					src: `/images/${deviceType ? 'android.png' : 'iphone.png'}`,
				}),
				text: new Text({
					offsetY: -26,
					text: userName ?? '',
					font: '12px sans-serif',
					fill: new Fill({
						color: 'white',
					}),
					backgroundFill: new Fill({
						color: [168, 50, 153, 0.6],
					}),
					textAlign: 'center',
					justify: 'top',
				}),
			}),
		);
	return userIcon;
}

document.addEventListener('DOMContentLoaded', async () => {
	const userInfo = new User();
	const [uuid, device] = [DeviceUUID.DeviceUUID().get(), DeviceUUID.DeviceUUID().parse()];
	const { browser, isAndroid, isiPhone, isiPad } = device;
	document.getElementById('deviceUUID').innerText = uuid;
	document.getElementById('deviceInfo').innerText = `Brower : [ ${browser} ], Android : [ ${isAndroid} ], iPhone : [ ${isiPhone} ]`;
	const mapLib = new MapLib('map', { pos: [126.8962261, 37.4867157], tileType: 'online', opt: { apiKey: '49E2F0FB-CFB0-31E2-9594-BFD1B9602026' } });
	const lineDraw = new LineDraw(mapLib.map, mapLib.map.zIndexRule, uuid);
	//초기 아이콘 생성
	if (userInfo.getUser[uuid]) {
		userPosIcon = mapLib.IconVector({ longitude: 10, latitude: 10 }, { vectorId: uuid, proj: 4326, img: `${isAndroid ? 'android.png' : 'iphone.png'}` });
		const iconStyle = ModifyUserIconStyle(userPosIcon, { userName: userInfo.getUser[uuid]?.name, deviceType: isAndroid });
		mapLib.map.addLayer(iconStyle);
	}

	const centerVector = mapLib.IconVector({ longitude: 14125987.4431831, latitude: 4507115.196788091 }, { vectorId: 'center', proj: 3857, img: 'centerPoint.png' });
	console.log(centerVector);

	mapLib.map.addLayer(centerVector);
	mapLib.map.on('singleclick', ev => {
		const { map, coordinate, pixel } = ev;
		const [longitude, latitude] = transform(coordinate, 'EPSG:3857', 'EPSG:4326');
		//console.log(longitude, latitude);
		const clickFeature = map.forEachFeatureAtPixel(pixel, feature => feature, {
			layerFilter: layer => {
				if (!(layer instanceof TileLayer) && !(layer instanceof LineString) && layer.getProperties().layerId !== 'center') return layer;
			},
		});

		if (!clickFeature) return;

		const featureGeom = clickFeature.getGeometry().getCoordinates();
		console.log(clickFeature);

		console.log(featureGeom);
		//console.log(coordinate[0].toFixed(6), coordinate[1].toFixed(6));
		//if (!zoom) delete animaObj["zoom"];
		//map.getView().animate(animaObj);
	});
	mapLib.map.on('moveend', ev => {
		const { map, coordinate } = ev;
		const mapExtentSize = map.getView().calculateExtent(); //현재 View의 extent get
		const viewCenter = new getCenter(mapExtentSize); //해당 extent의 center coord get
		centerVector.getSource().getFeatures()[0].getGeometry().setCoordinates(viewCenter); //center img에 중심좌표 set
	});
	setTimeout(() => mapLib.map.updateSize(), 1000);
	/*******************  navigator 사용가능 여부 체크  **********************/
	const isGeolocation = await navigator.permissions.query({ name: 'geolocation' });
	isGeolocation.onchange = GeomLocationAPIPermit;
	GeomLocationAPIPermit(isGeolocation);

	/*******************  Ws 정의  **********************/
	//WebSocket 초기화
	const ws = new Ws({
		userInfo: userInfo.getUser[uuid]
			? {
					name: userInfo.getUser[uuid].name,
					uuid,
					connType: isAndroid ? 'android' : isiPhone ? 'iphone' : 'pc',
					isConn: false,
			  }
			: {
					name: 'pc',
					uuid: uuid,
					connType: 'pc',
					isConn: false,
			  },
	});
	//WebSocket 연결
	ws.Init({ useHeartBeat: true });
	// WebSocket Message Receive
	ws.ws.onmessage = async event => {
		try {
			const toJson = JSON.parse(event.data);
			const { sendType, message } = toJson;
			switch (sendType) {
				case 'userConn':
					const { uuid: connUuid, name, connType, longitude: connLong, latitude: connLat } = message;

					if (connType === 'pc' || connUserVector.get(connUuid) || connUuid === userInfo.getUser[uuid]) return;

					Notify.info(`${message.name} 님이 접속하셧습니다.`, '확인');
					const lineDraw = new LineDraw(mapLib.map, mapLib.map.zIndexRule, connUuid);
					connUserVector.set(connUuid, lineDraw);
					//초기 아이콘 생성
					const userPosIcon = mapLib.IconVector(
						{ longitude: connLong ?? 10, latitude: connLat ?? 10 },
						{ vectorId: connUuid, proj: 4326, img: `${connType === 'android' ? 'android.png' : 'iphone.png'}` },
					);
					const iconStyle = ModifyUserIconStyle(userPosIcon, { userName: name, deviceType: isAndroid });
					mapLib.map.addLayer(iconStyle);
					break;
				case 'userPosition':
					const { uuid: recUuid, connType: recConnType, name: recName, longitude: recLong, latitude: recLat } = message;
					if (recUuid === userInfo.getUser[uuid]) return;
					console.log(connUserVector.get(recUuid));
					if (recConnType !== 'pc' && !connUserVector.get(recUuid)) {
						//const lineDraw = new LineDraw(mapLib.map, mapLib.map.zIndexRule, recUuid);
						//connUserVector.set(recUuid, lineDraw);
						//초기 아이콘 생성
						const userPosIcon = mapLib.IconVector(
							{ longitude: parseFloat(recLong), latitude: parseFloat(recLat) },
							{ vectorId: recUuid, proj: 3857, img: `${recConnType === 'android' ? 'android.png' : 'iphone.png'}` },
						);
						const iconStyle = ModifyUserIconStyle(userPosIcon, { userName: recName, deviceType: isAndroid });
						mapLib.map.addLayer(iconStyle);
						return;
					}
					//console.log(`========= ${uuid} ========`);
					//console.log(longitude, latitude);
					const findUserIconLayer = mapLib.map.getAllLayers().filter(layer => {
						if (layer instanceof TileLayer || layer instanceof LineString) return false;
						return layer.getSource().getFeatures()[0].getId() === recUuid;
					});

					if (findUserIconLayer.length) {
						findUserIconLayer[0]
							.getSource()
							.getFeatures()[0]
							.getGeometry()
							.setCoordinates([parseFloat(recLong), parseFloat(recLat)]);
						/* connUserVector.get(recUuid).Action({
							coords: {
								longitude: parseFloat(recLong).toFixed(6),
								latitude: parseFloat(recLat).toFixed(6),
							},
						}); */
					}
					break;
				case 'userClose':
					console.log(`============ 사용자 접속종료 =>> ${userInfo.getUser[message.uuid]?.name}  ==================`);
					if (userInfo.getUser[message.uuid]?.name) {
						const { name } = userInfo.getUser[message.uuid];
						Notify.info(`${name} 님이 접속을 종료하였습니다..`, '확인');
					}
					break;
				default:
					console.log(`============== ${sendType} =============`);
					console.log(message);
					break;
			}
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	//모바일 기기의 위치를 실시간으로 추적하고, 해당 좌표를 기준으로 맵을 확대하고,
	//이전 좌표와 비교하여 10m이 넘을 경우 라인을 그리고, Websocket을 통해 다른 사용자한테 사용자 좌표를 전송
	navigator.geolocation.watchPosition(
		position => {
			{
				const { latitude, longitude, heading, accuracy } = position.coords;
				const distanceValue = document.getElementById('distanceValue').value;
				//EPSG:3857 좌표
				const [long, la] = transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857');
				//EPSG:3857 보정좌표
				const [crctnLong, crctnLa] = [long.toFixed(6), la.toFixed(6)];
				const animaObj = {
					center: [long, la],
					duration: 600,
				};

				try {
					if (userInfo.getUser[uuid] && prevCoord) {
						document.getElementById('coords').innerText = `X : ${longitude.toFixed(4)}, Y : ${latitude.toFixed(4)}`;
						document.getElementById('isUserExist').innerText = `${userInfo.getUser[uuid] ? 'OK' : 'None'}`;
						//6378137 -> EPSG:4326 체계의 지구 반지름
						const distance = olSphere.getDistance(prevCoord, [longitude, latitude], 6378137);
						let { calcul, unit } = MapUtil.CalculLineLength(distance);
						sumDistance += calcul;
						sumDistance = sumDistance >= 1000 ? sumDistance / 1000 : sumDistance;
						document.getElementById('moving').innerText = `${calcul ?? 0}${unit}`;
						document.getElementById('movingSum').innerText = `${sumDistance > 1000 ? `${sumDistance.toFixed(1)}Km` : `${sumDistance.toFixed(2)}m`}`;
						//console.log(`리턴값 :: ${distance}, 거리차이 :: ${calcul}`);
						//console.log(!distanceValue || isNaN(distanceValue) ? 5 : distanceValue);
						//10m 이동 이동시에만 Map 위치 갱신
						if (parseInt(distance, 10) >= (!distanceValue || isNaN(distanceValue) ? defaultDisVal : distanceValue)) {
							//mapLib.map.getView().animate(animaObj); //해당 좌표로 이동
							centerVector.getSource().getFeatures()[0].getGeometry().setCoordinates([crctnLong, crctnLa]); //center img에 중심좌표 set
							userPosIcon.getSource().getFeatures()[0].getGeometry().setCoordinates([crctnLong, crctnLa]); //center img에 중심좌표 set
							lineDraw.Action({
								coords: {
									longitude: longitude.toFixed(6),
									latitude: latitude.toFixed(6),
								},
							});
							//정의된 사용자 정보가 존재한다면 Websocket send
							const form = {
								sendType: 'userPosition',
								message: {
									name: userInfo.getUser[uuid]?.name,
									connType: isAndroid ? 'android' : isiPhone ? 'iphone' : 'pc',
									uuid: uuid,
									longitude: crctnLong,
									latitude: crctnLa,
								},
							};
							ws.ws.send(JSON.stringify(form));
							prevCoord = [longitude, latitude];
						}
					} else {
						mapLib.map.getView().animate(animaObj); //해당 좌표로 이동
						centerVector.getSource().getFeatures()[0].getGeometry().setCoordinates([crctnLong, crctnLa]); //center img에 중심좌표 set
						if (userInfo.getUser[uuid]) {
							userPosIcon.getSource().getFeatures()[0].getGeometry().setCoordinates([crctnLong, crctnLa]); //center img에 중심좌표 set
							lineDraw.Action({
								coords: {
									longitude: longitude.toFixed(6),
									latitude: latitude.toFixed(6),
								},
							});
						}
						prevCoord = [longitude, latitude];
					}
				} catch (error) {
					alert(error);
				}
			}
		},
		err => {
			console.error(err.message);
			alert(err.message);
		},
		{
			enableHighAccuracy: false,
			timeout: 2000,
			maximumAge: 0,
		},
	);

	/******************* 기타 기능 ***********************************/

	/* const ecgChart = new CanvasChart('chartEl', {
		shift: 400,
		interval: 90,
	});
	ecgChart.CreateChart().ClearInteval().StartInteval();

	setInterval(() => {
		ecgChart.accDataArray = 10;
	}, 1000); */

	const blueTooth = new BlueTooth();
	/* document.getElementById('connBT').addEventListener('click', async () => {
		blueTooth.deviceFilterOpt = 'BUZMEDIC_';
		const isAvail = await navigator.bluetooth.getAvailability(); //블루투스 사용 가능여부 체크
		if (!isAvail) {
			alert('블루투스를 사용할 수 없는 환경입니다.');
			return;
		} else {
			await blueTooth.ReqBlueToothDevice();
		}
	});
	document.getElementById('measureStart').addEventListener('click', async () => {
		if (!blueTooth.instance) {
			alert('연결 상태가 아닙니다.');
			return;
		}
		const txCharacter = blueTooth.GetTypeCharacterInst('tx');
		console.log(txCharacter);
		txCharacter.startNotifications();
		txCharacter.oncharacteristicvaluechanged = CharacteristicProcess;
	}); */
	function CharacteristicProcess(evt) {
		const { startCode, dataType, dataBody } = DataProcessing.BynaryClassify(evt);
		switch (dataType) {
			case 33:
				DataProcessing.ParseECG(dataBody).forEach(oneData => {
					ecgChart.accDataArray = oneData;
					dataStore.ecg = oneData;
				});
				break;
			//PPG
			case 34:
				DataProcessing.ParsePPG(dataBody).forEach(oneData => {
					ppgChart.accDataArray = oneData;
					dataStore.ppg = oneData;
				});
				break;
			//red
			case 35:
				DataProcessing.ParsePPG(dataBody).forEach(oneData => (dataStore.red = oneData));
				break;
			//green
			case 36:
				DataProcessing.ParsePPG(dataBody).forEach(oneData => (dataStore.green = oneData));
				break;
		}

		if ((dataType === 32 && dataLength === 1) || (dataType === 32 && dataLength === 2)) {
			console.log(dataStore);
		}
	}
});
