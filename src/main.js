import "./assets/scss/partials/element-variables.scss";
import "./assets/fonts/iconfont.css";
import App from "./app";
import router from "./routes";
import flexible from "@/libs/flexible";
Vue.prototype.$flexible = flexible;
import loading from './libs/loading'
Vue.prototype.$loading = loading;


import "qh-controls/init";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Vue, ElementUI } from "qh-controls/common";
Vue.use(ElementUI);
// 全局挂载 filter
import filters from "./filters";
Object.keys(filters).forEach((key, index) => {
  Vue.filter(key, filters[key]);
});
Vue.use(filters)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
