<template>
  <div class="flex-content">
    <head-page></head-page>

    <div class="flex-c">
      <div class="banner" v-if="showBanner">
        <swiper-page></swiper-page>
      </div>
      <div>
        <router-view @getBanner="getBanner"></router-view>
      </div>
    </div>
    <div class="foot-style">
      版权所有 © 中国重工集团船用柴油机有限公司
    </div>
  </div>
</template>
<script>
import headPage from '../head';
import swiperPage from '../swiperPage';

export default {
  name: 'app',
  data() {
    return {
      showBanner: true
    };
  },
  components: {headPage, swiperPage},
  watch: {
    $route(to) {
      $c.log(to.path);
      this.getCur();
    }
  },
  methods: {
    getCur() {
      if (this.$route.path == '/communication') {
        this.showBanner = false;
      } else {
        this.showBanner = true;
      }
    },
    getBanner(val) {
      $c.log(val, 'hahahhahh');
    }
  },
  mounted() {
    this.getCur();
    this.$loading.show();
  }
};
</script>
<style lang="scss" scoped></style>
