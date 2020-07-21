<template>
  <div class="content">
    <cNav :config="menu"></cNav>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
import cNav from "../../components/childNav";
export default {
  created() {
    this.defaultPath = this.menu.menus[0]
    this.routeData = this.$route.query;
    const item = this.defaultPath;
      if (!this.$route.query.id) {
        this.$router.push({
          path: "/news/list",
          query: {
            id: item.id.toString(),
            nm: item.name,
            lg: item.meta.icon
          }
        });
      }
  },
  components: {
    cNav
  },
  watch: {
    $route() {
      const item = this.defaultPath;
      if (!this.$route.query.id) {
        this.$router.push({
          path: "/news/list",
          query: {
            id: item.id.toString(),
            nm: item.name,
            lg: item.meta.icon
          }
        });
      }
    }
  },
  data() {
    return {
      defaultPath:null,
      menu: {
        classNm: "新闻中心",
        classEnm: "information center",
        menus: [
          {
            name: "通知公告",
            meta: {
              icon: "menu1"
            },
            id: 1
          },
          {
            name: "企业动态",
            meta: {
              icon: "menu2"
            },
            id: 2,
            items: [
              {
                name: "公司新闻",
                id: 3
              },
              {
                name: "重要精神",
                id: 4
              }
            ]
          },
          {
            name: "文件中心",
            meta: {
              icon: "menu3"
            },
            id: 5
          },
          {
            name: "企业管理",
            meta: {
              icon: "menu4"
            },
            id: 6,
            items: [
              {
                name: "公司新闻",
                id: 7
              },
              {
                name: "重要精神",
                id: 8
              }
            ]
          }
        ]
      },
      isRouterAlive: true,
      routeData: Object
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.news-color {
  color: $colorLink;
}
.content {
  min-height: calc(100vh - 418px);
  margin: 0 10px 10px 10px;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 400px);
  background: #fff;
  padding-top: 20px;
  .leftMenu {
    display: inline-block;
  }
  .wrapper {
    margin-left: 20px;
    width: 810px;
    display: inline-block;
  }
}
</style>
