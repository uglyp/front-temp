<template>
  <header class="head">
    <div class="top">
      <div class="top_msg">
        <div class="head_img">
          <img :src="img.logo" />
        </div>
        <div class="head_title" v-text="title"></div>
      </div>
      <div>
        <span class="welcome">孙XX,欢迎登录系统</span>
        <span class="date">
          <span class="time" v-text="time"></span>
          <span class="week" v-text="date">2020/12/12 星期一</span>
        </span>
      </div>
    </div>
    <com-nav></com-nav>
  </header>
</template>
<script>
import comNav from "./nav";
import logo from "../assets/img/2333.png";
const z = num => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};
export default {
  components: {
    comNav
  },
  data() {
    return {
      img: { logo },
      title: "中国船柴  统一门户", //window.config.title,
      now: new Date()
    };
  },
  computed: {
    d() {
      window.setTimeout(() => {
        this.now = new Date();
      }, 1000);
      return this.now;
    },
    time() {
      let h = z(this.d.getHours());
      let m = z(this.d.getMinutes());
      let s = z(this.d.getSeconds());
      return `${h}:${m}:${s}`;
    },
    date() {
      let y = z(this.d.getFullYear());
      let m = z(this.d.getMonth() + 1);
      let d = z(this.d.getDate());
      let w = this.d.getDay();
      let weeks = ["日", "一", "二", "三", "四", "五", "六"];
      return `${y}/${m}/${d} 星期${weeks[w]}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  color: black;
  background-color: #fff;
  user-select: none;
  .head_img{
    img{
      height: 35px;
    }
  }
  .top {
    padding: 18px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top_msg{
      div{
        display: inline-block;

      }
      .head_title{
        font-size:24px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(2,56,148,1);
        vertical-align: middle;
        margin-left: 15px;
      }
    }
  }
  .welcome{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(10,64,136,1);
    vertical-align: middle;
    margin-right: 30px;
  }
  .date{
    vertical-align: middle;
    display: inline-block;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(10,64,136,1);
    .time{
      text-align: right;
      display: block;
      font-size:22px;
    }
    .week{
      font-size:14px;
    }
  }
}
.head_img {
  width: 145px;
}
</style>
