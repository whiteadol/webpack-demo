(() => {
  // js/util/exam/userActionCheck.js
  var UserActionCheck = class {
    #logOutTime;
    #remainingTime;
    #limitSecond;
    #isFocus;
    constructor(el) {
      this.#logOutTime = 1;
      this.#remainingTime = 30;
      this.#limitSecond = 600;
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
      this.#isFocus = true;
    }
    #TimeCheck() {
      this.#logOutTime++;
      if (this.#logOutTime >= this.#limitSecond) {
        if (this.#remainingTime <= 0) {
          alert("\uC7A5\uC2DC\uAC04 \uBBF8\uC0AC\uC6A9");
        } else {
          console.log(`\uC0AC\uC6A9\uC790\uC758 \uC6C0\uC9C1\uC784\uC774 \uC5C6\uC5B4 ${this.#remainingTime}\uCD08 \uD6C4, \uC790\uB3D9 \uB85C\uADF8\uC544\uC6C3\uC774 \uB429\uB2C8\uB2E4.`);
        }
        this.#remainingTime--;
      }
    }
    #FocusScreenCheck() {
      document.onvisibilitychange = (ev) => {
        const { hidden, webkitHidden, webkitVisibilityState } = ev.target;
        if (hidden || webkitHidden || webkitVisibilityState === "hidden") {
          this.#isFocus = false;
          console.log("\uD398\uC774\uC9C0\uAC00 \uBE44\uD65C\uC131\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        } else {
          this.#isFocus = true;
          console.log("\uD398\uC774\uC9C0\uAC00 \uD65C\uC131\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
      };
    }
    get isFocus() {
      return this.#isFocus;
    }
    set isFocus(val) {
      this.#isFocus = val;
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
