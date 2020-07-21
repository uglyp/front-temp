<template>
  <div class="header">
    <img :src="logo" alt="">
    <span>{{crumbsConfig.name}}</span>
    <slot name="btn"></slot>
    <p class="crumbs">
      <span @click="goHome" class="home">
        <img :src="homeLogo" alt="" />
        门户首页
      </span>
      <span>
        <span class="arr">></span>
        <a @click="goItem">{{ crumbsConfig.name }}</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name:'crumbs',
  props:{
    crumbsConfig:Object
  },
  data(){
    return {
      logo:null,
      homeLogo:null
    }
  },
  methods:{
    goHome() {
      this.$router.push({
        path: "/home"
      });
    },
    goItem() {
      this.$emit('reloadPage')
    },
  },
  created(){
    this.homeLogo = require("../assets/img/home.png");
    this.logo = require("../assets/img/" + this.crumbsConfig.logo +".png");
  },
}
</script>
<style lang="scss" scoped>
  .header {
    line-height: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e2e2e2;
    font-size: 14px;
    margin-bottom: 20px;
    > img {
      width: 20px;
      margin-right: 10px;
      vertical-align:middle;
    }
    > span {
      height: 30px;
      line-height: 32px;
      display: inline-block;
    }
  } 
  .crumbs {
    float: right;
    line-height: 30px;
    .home {
      color: #666;
      cursor: pointer;
    }
    img {
      width: 20px;
      vertical-align:middle;
      margin-right: 5px;
    }
    > span {
      a {
        color: #666;
        cursor: pointer;
      }
      .arr {
        color: #666;
        margin: 0 10px;
      }
      &:last-of-type {
        a {
          color: #00449a;
        }
      }
    }
  }
</style>