<template>
  <canvas id="can" width="500" height="500"></canvas>
</template>
<script>
let can;
let ctx;
let CFG = {
  perDeg: 1
};
let deg = 0;

export default {
  data() {
    return {};
  },
  methods: {
    initCanvas() {
      can = document.getElementById('can');
      ctx = can.getContext('2d');
      deg = 0;
      ctx.strokeStyle = 'rgba(0,255,0,1)'; //用来设置描边的样式
      this.init();
    },
    init() {
      ctx.fillStyle = 'rgba(0,50,0,1)';//给canvas中的各种图形填充样式
      ctx.arc(250, 250, 250, 0, 2 * Math.PI);
      ctx.fill();
      window.requestAnimationFrame(this.loop);
    },
    loop() {
      deg = deg + CFG.perDeg;
      this.cover();
      this.drawPosLine();
      this.drawRadar(deg);
      window.requestAnimationFrame(this.loop);
    },
    cover() {
      ctx.save();
      ctx.fillStyle = 'rgba(0,0,0,0.02)';
      ctx.arc(250, 250, 250, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
    },
    drawPosLine() {
      ctx.beginPath();
      ctx.moveTo(250, 0);
      ctx.lineTo(250, 500);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 250);
      ctx.lineTo(500, 250);
      ctx.closePath();
      ctx.stroke();

      ctx.moveTo(250, 250);
      ctx.beginPath();
      ctx.arc(250, 250, 125, 0 * Math.PI, 2 * Math.PI);
      ctx.closePath();
      ctx.stroke();

      ctx.moveTo(250, 250);
      ctx.beginPath();
      ctx.arc(250, 250, 75, 0 * Math.PI, 2 * Math.PI);
      ctx.closePath();
      ctx.stroke();
    },
    drawRadar(iDeg) {
      ctx.fillStyle = 'rgba(0,200,0,.7)';
      ctx.beginPath();
      ctx.moveTo(250, 250);
      ctx.arc(250, 250, 250, ((-2 * CFG.perDeg + iDeg) / 180) * Math.PI, ((0 + iDeg) / 180) * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  },
  mounted() {
    this.initCanvas();
    window.onresize = () => {
      this.initCanvas();
    };
  }
};
</script>

<style></style>
