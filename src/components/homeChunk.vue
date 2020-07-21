<template>
  <div class="home_chunk_box">
    <div class="home_chunk_header">
      <div class="home_chunk_header_l">
        <div class="home_chunk_header_img">
          <img src="../assets/img/smalllog.png" alt="" />
        </div>
        <div @click="target">待办事项</div>
      </div>
      <div class="home_chunk_header_r">
        <div class="home_chunk_header_tag" v-if="useTag">
          <div v-for="(item, index) in 4" :key="index" @click="clickTag(index)">
            <div>
              <span v-if="index !== 0">/</span
              ><span :class="index === active ? 'active' : ''">&nbsp;安全生产&nbsp;</span>
            </div>
          </div>
        </div>
        <div class="home_chunk_header_more">More</div>
      </div>
    </div>
    <div class="home_chunk_content" v-if="isTXT && !useSlot">
      <div v-if="true">
        <div class="home_chunk_content_item" v-for="(item, i) in dataList" :key="i">
          <div class="home_chunk_content_item_title">
            <div class="home_chunk_title txt-one-cut">
              <img class="home_chunk_img" src="../assets/img/light.gif" alt="" />{{ item.content }}
            </div>
          </div>
          <div class="home_chunk_content_item_time">2012-04-15</div>
        </div>
      </div>
      <div v-if="false">
        暂无权限
      </div>
    </div>
    <div class="home_chunk_swiper" v-if="!isTXT && !useSlot">
      <div v-if="true">
        <div class="block1">
          <el-carousel
            arrow="never"
            @change="swiperChange"
            :initial-index="activeImg"
            indicator-position="none"
            :autoplay="false"
            ref="carousel1"
          >
            <el-carousel-item
              v-for="(item, index) in dataList"
              :key="item.content"
              :name="index + ''"
              @click.native="linkToDetail"
            >
              <img :src="item.img" alt />
            </el-carousel-item>
          </el-carousel>
          <div class="index_box">
            <div
              class="index_class"
              :class="indexActive == index ? 'active_index' : ''"
              v-for="(item, index) in list"
              :key="item.content"
              @click="setActiveItem(index)"
            >
              {{ index + 1 }}
            </div>
          </div>
        </div>
        <div class="block2">
          <el-carousel arrow="never" ref="carousel2" indicator-position="none" :autoplay="false">
            <el-carousel-item
              v-for="(item, index) in list"
              :key="item.content"
              :name="index + ''"
              @click.native="linkToDetail"
            >
              <div class="block2-title txt-two-cut">
                {{ item.content }}
              </div>
              <div class="block2-time">2014-01-04</div>
              <div class="block2-content txt-four-cut">
                {{ item.content }}
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div v-if="false">
        暂无数据
      </div>
    </div>
    <div v-if="useSlot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeImg: 0,
      indexActive: 0,
      active: null
    };
  },
  props: {
    useSlot: [Boolean], //有没有用插槽
    useTag: {
      //用不用标签
      type: Boolean,
      default: true
    },
    isContent: {
      //是不是纯文字的
      type: Boolean,
      default: true
    },
    list: {
      //数据
      type: Array
    }
  },
  computed: {
    isTXT() {
      return this.isContent;
    },
    dataList() {
      return this.list;
    }
  },
  methods: {
    setActiveItem(i) {
      this.$refs.carousel1.setActiveItem(i);
      this.$refs.carousel2.setActiveItem(i);
    },
    swiperChange(i) {
      $c.log(i, '123');
      this.indexActive = i;
      this.$refs.carousel2.setActiveItem(i);
    },
    target() {
      // this.isTXT = !this.isTXT;
    },
    linkToDetail() {},
    clickTag(i) {
      $c.log(i);
      this.active = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.block2-content {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 22px;
  padding-top: 17px;
  text-indent: 2em;
}
.block2-time {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 24px;
}
.block2-title {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 24px;
  padding-top: 15px;
  cursor: pointer;
}
.block2-title:hover {
  color: #023894;
}
.active_index {
  color: rgba(255, 203, 92, 1) !important;
  // color: red !important;
}
.index_box {
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 5px;
  z-index: 100;
}
.index_class {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.55);
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(247, 247, 247, 1);
  margin-left: 5px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
img {
  width: 100%;
  max-width: 100%;
}
::v-deep .el-carousel__container {
  height: 200px !important;
}
.block1 {
  display: inline-block;
  width: 372px;
  position: relative;
}
.block2 {
  display: inline-block;
  width: 310px;
  margin-left: 25px;
}
.home_chunk_img {
  width: 28px;
  height: 12px;
}
.home_chunk_swiper {
  padding: 13px 20px;
}
.home_chunk_title {
  max-width: 576px;
  cursor: pointer;
}
.home_chunk_title:hover {
  color: #023894;
}
.home_chunk_box {
  width: 100%;
  background: #fff;
}
.home_chunk_header {
  padding: 12px 0px 10px 0;
  display: flex;
  margin: 0px 19px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
}
.home_chunk_header_l {
  display: flex;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
}
.home_chunk_header_r {
  display: flex;
}
.home_chunk_header_img {
  width: 22px;
  margin-right: 10px;
}
.home_chunk_header_more {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  font-style: italic;
  color: rgba(10, 112, 207, 1);
  margin-left: 10px;
}
.home_chunk_header_tag {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  display: flex;
  cursor: pointer;
}
.active {
  color: #1048a5;
  position: relative;
}
.active::before {
  content: '';
  width: 10px;
  height: 2px;
  background: rgba(16, 70, 162, 1);
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}
.home_chunk_content {
  padding: 15px 35px 15px 21px;
}
.home_chunk_content_item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}
.home_chunk_content_item:last-of-type {
  padding-bottom: 0px;
}
.home_chunk_content_item:first-of-type {
  padding-top: 0px;
}
.home_chunk_content_item_title {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
  display: flex;
  align-items: center;
}
.home_chunk_content_item_time {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  line-height: 14px;
}
</style>
