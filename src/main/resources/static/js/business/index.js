const Grid = require("tui-grid");
const moment = require("moment");
const { isEmpty } = require("lodash");
const protobuf = require("protobufjs");
import { ProtoManage } from "../util/protoUtil.js";
import { Axios } from "../util/axiosUtil.js";

document.addEventListener("DOMContentLoaded", async () => {
    const grpcAxios = new Axios({ type: "grpc", baseURL: "/restApi/deviceStatus" }).axiosInstn;
    const deviceStatusProto = await protobuf.load(new ProtoManage().Path("deviceStatus"));
    const postParams = deviceStatusProto.lookupType("StatusParams").encode({ deviceId: "10" }).finish();
    await grpcAxios
        .post("/selectDeviceStatusList", postParams, {
            responseType: "arraybuffer",
        })
        .then(result => {
            const { flag, data } = result;
            const statusProto = deviceStatusProto.lookupType("DeviceStatusList");
            const decodeData = statusProto.decode(data);
            decodeData.list.map(one => console.log(one));
        })
        .catch(e => console.error(e))
        .finally(() => {});

    const tabEl = document.querySelectorAll('a[data-mdb-toggle="pill"]');
    tabEl.forEach(oneTab => oneTab.addEventListener("shown.mdb.tab", TabCntr));

    function TabCntr(event) {
        console.log(event.target.id);
        console.log(event.relatedTarget.id);
        //event.target; // newly activated tab
        //event.relatedTarget; // previous active tab
    }
});
