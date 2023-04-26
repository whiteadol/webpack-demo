'use strict';
/**
 * binary 데이터를 JSON 데이터로 변환 - NINI 용
 * @param {Uint8Array} binary
 * @return {Object}
 * @example
 * const data = { token: '한글입니다', type: 'subscribe', topic: 'nifi' };
 * const buffer = JsonToBinary(data);
 * DecodeBinary(buffer);
 * {token: "한글입니다", type: "subscribe", topic: "nifi"}
 **/
function DecodeBinary(binary) {
	return JSON.parse(decodeURIComponent(escape(window.atob(String.fromCharCode.apply(null, binary)))));
}

//주석
/**
 * JSON 데이터를 binary 데이터로 변환
 * @param {Object} json
 * @return {Uint8Array}
 * @example
 * const data = { token: '한글입니다', type: 'subscribe', topic: 'nifi' };
 * const buffer = JsonToBinary(data);
 * Uint8Array(48) [123, 34, 116, 111, 107, 101, 110, 34, 58, 34, 237, 149, 156, 234, 184, 128, 237, 149, 156, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 115, 117, 98, 115, 99, 114, 105, 98, 101, 34, 44, 34, 116, 111, 112, 105, 99, 34, 58, 34, 110, 105, 102, 105, 34, 125]
 **/
function JsonToBinary(json) {
	return new TextEncoder().encode(JSON.stringify(json));
}

export { DecodeBinary, JsonToBinary };
