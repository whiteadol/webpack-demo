"use strict";
(() => {
  // js/util/webrtc/webrtcUtil.js
  var RtcInterface = class {
    #constraints = {
      cam: {
        video: {
          width: {
            max: 640
          },
          height: {
            max: 480
          },
          frameRate: {
            max: 10
          }
        },
        audio: false
      },
      display: {
        video: {
          aspectRatio: 1.3296398891966759,
          //4:3
          displaySurface: "monitor",
          frameRate: 30,
          cursor: "never"
        }
      }
    };
    #mediaStream = /* @__PURE__ */ new Map();
    constructor() {
    }
    get constraints() {
      return this.#constraints;
    }
    set constraints(constrains) {
      this.#constraints = constrains;
    }
    get mediaStream() {
      return this.#mediaStream;
    }
    set mediaStream(mediaStream) {
      const { type, stream } = mediaStream;
      this.#mediaStream.set(type, stream);
    }
  };
  var WebRtcUtil = class extends RtcInterface {
    constructor() {
      super();
    }
    async CamInit() {
      const { getUserMedia } = navigator.mediaDevices;
      if (getUserMedia) {
        this.mediaStream = {
          type: "cam",
          stream: await navigator.mediaDevices.getUserMedia(this.constraints["cam"])
        };
        document.getElementById("userCam").srcObject = this.mediaStream.get("cam");
      }
      return this;
    }
    async DisplayInit() {
      const { getDisplayMedia } = navigator.mediaDevices;
      if (!getDisplayMedia)
        return;
      const setform = {
        type: "display",
        stream: null
      };
      const stream = await navigator.mediaDevices.getDisplayMedia(this.constraints["display"]).catch((e) => {
        return e.message;
      });
      if (!(stream instanceof MediaStream)) {
        alert(stream);
        return;
      }
      const displaySurface = stream.getVideoTracks()[0].getSettings().displaySurface;
      if (displaySurface !== "monitor") {
        alert("\uC0AC\uC6A9\uC790\uC758 \uBAA8\uB2C8\uD130\uB97C \uC120\uD0DD\uD574\uC57C\uD569\uB2C8\uB2E4.");
        window.location.reload();
      }
      setform["stream"] = stream;
      this.mediaStream = setform;
      document.getElementById("pcDisplay").srcObject = this.mediaStream.get("display");
    }
  };
  var ScreenShot = class {
    static async Action(stream) {
      const streamTrack = stream.getTracks();
      if (!streamTrack.length)
        return;
      const reader = new FileReader();
      const imgBlob = await new ImageCapture(streamTrack[0]).takePhoto();
      const image = new Image();
      reader.readAsDataURL(imgBlob);
      reader.onloadend = (evt) => {
        const { result } = evt.currentTarget;
        image.src = result;
        document.getElementById("userSnapShot").src = result;
      };
    }
  };

  // js/business/webrtc.js
  var myModalEl = document.getElementById("exampleModal");
  var modal = new mdb.Modal(myModalEl);
  var wr = new WebRtcUtil();
  document.addEventListener("DOMContentLoaded", async () => {
    await wr.CamInit().then((res) => res.DisplayInit());
    document.getElementById("actScreen").onclick = () => {
      modal.show();
      const camStream = wr.mediaStream.get("cam");
      ScreenShot.Action(camStream);
    };
    document.getElementById("camFrameRange").onchange = ChangeStreamConstraint;
    document.getElementById("diplayFrameRange").onchange = ChangeStreamConstraint;
    function ChangeStreamConstraint(evt) {
      const { id, value } = evt.target;
      const [camStream, displayStream] = [wr.mediaStream.get("cam"), wr.mediaStream.get("display")];
      if (id === "camFrameRange") {
        wr.constraints["cam"] = {
          frameRate: {
            max: parseInt(value)
          }
        };
        camStream.getTracks()[0].applyConstraints(wr.constraints["cam"]);
      } else {
        wr.constraints["display"] = {
          frameRate: parseInt(value)
        };
        console.log(displayStream.getTracks());
        displayStream.getTracks()[0].applyConstraints(wr.constraints["display"]);
      }
    }
  });
})();
//# sourceMappingURL=webrtc.js.map
