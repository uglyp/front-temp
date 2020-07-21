<template>
  <el-menu class="head_menu" :default-active="cur" mode="horizontal" router>
    <el-menu-item v-for="(m, i) in menus" :key="i" :index="m.path">
      <i v-if="m && m.meta && m.meta.icon" class="iconfont" v-html="m.meta.icon"></i>
      <span v-text="m.name"></span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      cur: null,
      menus: null
    }
  },
  watch: {
    $route() {
      this.getCur()
    }
  },
  created() {
    this.menus = this.$router.options.routes[0].children
    $c.log(this.menus)
    this.getCur()
  },
  methods: {
    getCur() {
      if(this.$route.path == '/news/info'){
        this.cur='/news/list'
      }else{
        this.cur = this.$route.path
      }
      
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 0px!important;
}
.navigate{
  font-size: 20px;
}
.head_menu{
  background: #023894;
  text-align: center;
}
.el-menu--horizontal{
  .el-menu-item{
    float: none;
    display: inline-block;
    width:110px;
    height:46px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 46px;
    padding: 0 10px;
    margin-right: 25px;
    i{
      color:#fff;
      margin-right: 10px;
    }
    &:not(.is-disabled){
      &:hover{
        background-color: #508CD5;
        color: #fff;
      }
      &:focus{
        background-color: #508CD5;
        color: #fff;
      }
      &.is-active{
        background-color: #508CD5;
        color: #fff;
      }
    }
    &.is-active{
      border-bottom: 0;
    }
    &:last-of-type{
      margin-right: 0;
    }
  }
}
</style>
