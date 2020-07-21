<template>
  <div id="app" class="front_app">
    <router-view />
  </div>
</template>
<script>
// import bg from '@/assets/img/bg.png'
export default {
  name: "app",
  data() {
    return {
      // bg
    };
  },

  // methods: {
  //   setTimer(intMilliecind) {
  //     this.timer = setInterval(() => {
  //       this.getUserInfo();
  //     }, intMilliecind);
  //   },
  //   checkUser() {
  //     dao.getUserInfo().then(res => {
  //       this.setTimer(1000);
  //     });
  //   },
  //   getUserInfo() {
  //     dao.getLoginInfo().then(res => {
  //       $c.log(res, "用户名");
  //       window.sessionStorage.setItem("userInfo", JSON.stringify(res));
  //       clearInterval(this.timer);
  //     });
  //   }
  // },

  created() {
    // this.checkUser();
  }
};
</script>
<style lang="scss">
@import "./assets/scss/partials/reset";
@import "./assets/scss/partials/global";
.el-submenu{
  .acitve{
    background: url('./assets/img/menubg.png') no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-weight: bold;

    .el-menu{
      display: block!important;
    }
  }
    border-top:1px solid #E6E6E6;
    .el-submenu__title{
        height:40px;
        color: #333;
        font-size: 14px;
        line-height: 40px;
        padding: 0 10px;  
        text-align: left;
        background: #f9f9f9;
        padding: 0!important;
        >div{
          padding-left: 20px !important;
        }
        i{
          margin-right: 10px;
        }
        .el-submenu__icon-arrow {
            display: none;
        }
    }
    .el-menu-item{
      padding-right: 0;
      min-width: auto;
      height: 40px;
      line-height: 40px;
      background: #f9f9f9;
      &.is-active{
        background: url('./assets/img/menubg.png') no-repeat;
        background-size: 100% 100%;
        color: #fff;

        &:hover{
          background: url('./assets/img/menubg.png') no-repeat;
          background-size: 100% 100%;
        }
      }

      &:hover{
        background: #f9f9f9;
      }
    }
    &.is-active{
      >.el-submenu__title{
        font-weight: bold;
        border-bottom: 0px;
      }
    }
}
</style>
