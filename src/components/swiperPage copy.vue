// <template>
//   <swiper class="swiper" :options="swiperOption">
//     <swiper-slide>Slide 1</swiper-slide>
//     <swiper-slide>Slide 2</swiper-slide>
//     <swiper-slide>Slide 3</swiper-slide>
//     <swiper-slide>Slide 4</swiper-slide>
//     <swiper-slide>Slide 5</swiper-slide>
//     <swiper-slide>Slide 6</swiper-slide>
//     <swiper-slide>Slide 7</swiper-slide>
//     <swiper-slide>Slide 8</swiper-slide>
//     <swiper-slide>Slide 9</swiper-slide>
//     <swiper-slide>Slide 10</swiper-slide>
//     <div class="swiper-button-prev" slot="button-prev"></div>
//     <div class="swiper-button-next" slot="button-next"></div>
//   </swiper>
// </template>

// <script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// // import "swiper/css/swiper.css"
// import "swiper/swiper-bundle.css"; //6.0及以上
// export default {
//   name: "swiper-example-navigation",
//   title: "Navigation",
//   components: {
//     Swiper,
//     SwiperSlide
//   },
//   data() {
//     return {
//       swiperOption: {
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev"
//         },
//         //自动轮播
//         autoplay: {
//           delay: 2000,
//           //当用户滑动图片后继续自动轮播
//           disableOnInteraction: false
//         },
//         //开启循环模式
//         loop: true,
//         notNextTick: true,
//         autoplay: 3000,
//         direction: "horizontal",
//         grabCursor: true,
//         setWrapperSize: true,
//         autoHeight: true,
//         paginationClickable: true,
//       }
//     };
//   }
// };
// </script>

// <style lang="scss" scoped>
// .swiper {
//   width: 100%;
//   height: 100%;
// }
// .swiper-button-prev {
//   background: url("../assets/img/prev.png") no-repeat;
//   background-size: 100% 100%;
// }
// .swiper-button-next {
//   background: url("../assets/img/next.png") no-repeat;
//   background-size: 100% 100%;
// }
// .swiper-button-prev:after,
// .swiper-container-rtl .swiper-button-next:after {
//   content: "";
// }
// .swiper-button-next:after,
// .swiper-container-rtl .swiper-button-prev:after {
//   content: "";
// }
// </style>
