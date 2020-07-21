<template>
  <el-carousel
    :interval="5000"
    arrow="hover"
    class="carousel-box"
    indicator-position="none"
  >
    <el-carousel-item
      label="4"
      v-for="item in 4"
      :key="item"
      class="carousel-box-item"
    >
      <div class="erevy-item">
        <div><img src="../assets/img/banner1.png" alt="" /></div>
        <div class="erevy-dsc">
          为中户大师傅第三方
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__arrow i {
  display: none;
}
::v-deep .el-icon-arrow-left:before {
  content: "";
}
::v-deep .el-icon-arrow-right:before {
  content: "";
}
::v-deep .el-carousel__arrow {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  height: 60px;
  width: 40px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0 !important;
  background-color: rgba(31, 45, 61, 0);
  color: #ffffff;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  text-align: center;
  font-size: 0.0625rem;
}
::v-deep .el-carousel__arrow--right {
  background: url("../assets/img/next.png") no-repeat;
  background-size: 100% 100%;
  right: 0;
}
::v-deep .el-carousel__arrow--left {
  background: url("../assets/img/prev.png") no-repeat;
  background-size: 100% 100%;
  left: 0;
}
.erevy-item {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
  }
}
.erevy-dsc {
  position: absolute;
  height: 30px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.7;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 254, 254, 1);
  line-height: 30px;
  padding-left: 10px;
}
::v-deep .el-carousel__container {
  height: 220px !important;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
