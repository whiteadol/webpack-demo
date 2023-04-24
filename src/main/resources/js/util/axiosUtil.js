"use strict";
const axios = require("axios");

/** Axios 객체 설정*/
class Axios {
    constructor(opt) {
        const { type, baseURL } = opt || { type: "nomal", baseURL: null };
        this._axiosInstn = baseURL ? axios.create({ baseURL }) : axios.create();
        switch (type) {
            case "grpc":
                this._axiosInstn.defaults.headers.post["Content-Type"] = "application/x-protobuf";
                //grpc 응답결과 ->  Uint8Array 세팅 후 response
                this._axiosInstn.defaults.transformResponse = result => {
                    if (result instanceof ArrayBuffer) {
                        return new Uint8Array(result);
                    } else {
                        console.log(result);
                        throw new Error("GRPC 형식의 응답이 아닙니다.");
                    }
                };
                break;
            default:
                break;
        }
    }
    get axiosInstn() {
        return this._axiosInstn;
    }
}

export { Axios };
