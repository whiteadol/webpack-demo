"use strict";
(() => {
  // js/util/nifi/parse.js
  function DecodeBinary(binary) {
    return JSON.parse(decodeURIComponent(escape(window.atob(String.fromCharCode.apply(null, binary)))));
  }
  function JsonToBinary(json) {
    return new TextEncoder().encode(JSON.stringify(json));
  }

  // js/business/ws_send.js
  var data = { token: "\uD55C\uAE00\uC785\uB2C8\uB2E4", type: "subscribe", topic: "nifi" };
  document.addEventListener("DOMContentLoaded", async () => {
    const buffer = JsonToBinary(data);
    const nifiSocket = new WebSocket(`wss://${window.location.hostname}/nws/webPoint`);
    nifiSocket.binaryType = "arraybuffer";
    nifiSocket.onopen = () => {
      console.log("nifi \uC5F0\uACB0 \uC131\uACF5");
      setInterval(() => {
      }, 1e3);
    };
    nifiSocket.onmessage = (event) => {
      console.log(JSON.parse(DecodeBinary(event.data)));
      console.log(event.data);
    };
    nifiSocket.onerror = (error) => {
      console.log(error);
    };
    nifiSocket.onclose = () => {
      console.log("nifi \uC5F0\uACB0 \uC885\uB8CC");
    };
  });
})();
//# sourceMappingURL=ws_send.js.map
