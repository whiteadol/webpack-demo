"use strict";

class ProtoManage {
    #mainPath = "/proto";
    #protoBuf = {
        deviceStatus: `/service_def.proto`,
        health: `/health.proto`,
        tui: `/tui_grid_2.proto`,
        examAnswer: `/exam_answer.proto`,
    };
    Path(protoName) {
        return this.#mainPath.concat(this.#protoBuf[protoName]);
    }
}

export { ProtoManage };
