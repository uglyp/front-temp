import Vue from "vue";
import Router from "vue-router";
// import hooks from './hooks';
import dashboardRouter from "./layout";
import notFoundRouter from "./not-found";

Vue.use(Router);
//解决导航，菜单等重复点击走路由的报错和警告
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      x: 0,
      y: 0
    };
  },
  routes: [...dashboardRouter, ...notFoundRouter]
});

// 添加导航钩子
// hooks(router);

export default router;
