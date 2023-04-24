(() => {
  // js/util/exam/userActionCheck.js
  var UserActionCheck = class {
    #logOutTime;
    #remainingTime;
    #limitSecond;
    constructor(el) {
      this.#logOutTime = 1;
      this.#remainingTime = 30;
      this.#limitSecond = 300;
      document.onkeypress = () => {
        this.#logOutTime = 1;
        this.#remainingTime = 30;
      };
      document.onmousemove = () => {
        this.#logOutTime = 1;
        this.#remainingTime = 30;
      };
      setInterval(() => this.#TimeCheck(), 1e3);
      this.#FocusScreenCheck();
    }
    #TimeCheck() {
      this.#logOutTime++;
      if (this.#logOutTime >= this.#limitSecond) {
        if (this.#remainingTime <= 0) {
          alert("\uC7A5\uC2DC\uAC04 \uBBF8\uC0AC\uC6A9\uC73C\uB85C \uAC15\uC81C \uC2DC\uD5D8\uC885\uB8CC");
        } else {
          let text = `\uC0AC\uC6A9\uC790\uC758 \uC6C0\uC9C1\uC784\uC774 \uC5C6\uC5B4 ${this.#remainingTime}\uCD08 \uD6C4, \uC790\uB3D9 \uB85C\uADF8\uC544\uC6C3\uC774 \uB429\uB2C8\uB2E4.`;
          console.log(text);
        }
        this.#remainingTime--;
      }
    }
    #FocusScreenCheck() {
      window.onfocus = (e) => $("html, body").css({ background: "white", color: "#000" });
      window.onblur = (e) => $("html, body").css({ background: "black", color: "" });
      document.onvisibilitychange = (ev) => {
        const { hidden, webkitHidden, webkitVisibilityState } = ev.target;
        if (hidden || webkitHidden || webkitVisibilityState === "hidden") {
          alert("\uD654\uBA74\uC804\uD658");
          $("html, body").css({ background: "black", color: "" });
        }
      };
    }
  };

  // js/business/navigator.js
  console.log(navigator);
  console.log(navigator.connection);
  document.addEventListener("DOMContentLoaded", async () => {
    const uac = new UserActionCheck();
    const hard = await navigator.storage.estimate();
    console.log(hard);
    setInterval(() => {
    }, 1e3);
    console.log(navigator.maxTouchPoints);
    document.getElementById("viewInput").value = navigator.maxTouchPoints;
    const monitor = await navigator.mediaDevices.enumerateDevices();
    console.log(monitor);
    document.querySelector("html").addEventListener("keypress", (evt) => {
      const { key, code } = evt;
      if (key === "F5")
        return false;
    });
    document.querySelector("html").addEventListener("mousemove", () => {
    });
    document.onkeydown = (ev) => {
      const { key, code } = ev;
      const keyList = ["Alt", "Meta", "Tab"];
      if (keyList.some((onekey) => onekey === key)) {
        ev.preventDefault();
      }
    };
  });
})();
//# sourceMappingURL=navigator.js.map
