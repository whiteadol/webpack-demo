"use strict";
(() => {
  // js/business/webworker_test.js
  var maxWorkers = navigator.hardwareConcurrency;
  var myWorker = new Worker("/worker/worker.js");
  document.addEventListener("DOMContentLoaded", async () => {
    const caonvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    myWorker.addEventListener("message", (e) => {
      const { msg } = e.data;
      document.getElementById("display").innerText = msg;
    });
    class Particle {
      constructor(x, y) {
        this.posX = x;
        this.posY = y;
        this.velX = Math.random() * 2 - 1;
        this.velY = Math.random() * 2 - 1;
      }
      move() {
        this.posX += this.velX;
        this.posY += this.velY;
        if (this.posX >= 300) {
          this.posX = 300;
          this.velX *= -1;
        } else if (this.posX <= 0) {
          this.posX = 0;
          this.velX *= -1;
        } else if (this.posY <= 0) {
          this.posY = 0;
          this.velY *= -1;
        } else if (this.posY >= 300) {
          this.posY = 300;
          this.velY *= -1;
        }
      }
    }
    const particles = [];
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle(Math.random() * 300, Math.random() * 300));
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      particles.forEach((it) => {
        it.move();
        ctx.rect(it.posX, it.posY, 10, 10);
        ctx.fill();
      });
      ctx.closePath();
      requestAnimationFrame(animate);
    };
    animate();
  });
})();
//# sourceMappingURL=webworker_test.js.map
