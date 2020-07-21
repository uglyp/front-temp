<template>
  <div class="leftMenu">
    <div class="classData">
      <p v-text="config.classNm"></p>
      <p v-text="config.classEnm"></p>
    </div>
    <el-menu
      class="head_menu"
      :default-active="cur"
      ref="menu"
      unique-opened
      :default-openeds="defaultOpenedsArray"
    >
      <div v-for="(m, i) in config.menus" :key="i">
        <el-submenu v-if="m.items" :index="m.id.toString()">
          <template slot="title">
            <div
              @click="goItems(m)"
              :class="{ acitve: m.id + '' === acID + '' }"
            >
              <img
                v-if="m && m.meta && m.meta.icon"
                class="menuLogo"
                :src="imgSrc(m.meta.icon)"
              />
              <span v-text="m.name"></span>
            </div>
          </template>
          <el-menu-item
            v-for="(z, i) in m.items"
            :key="i"
            :index="z.id.toString()"
            @click="goItemsRouter(z, m.meta.icon, m.name, m.id)"
          >
            <template slot="title">
              <span v-text="z.name"></span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="m.id.toString()" @click="goRouter(m)">
          <img
            v-if="m && m.meta && m.meta.icon"
            class="menuLogo"
            :src="imgSrc(m.meta.icon)"
          />
          <span v-text="m.name"></span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      cur: null,
      menus: null,
      acID: null,
      defaultOpenedsArray: null
    };
  },
  props: {
    config: Object
  },
  watch: {
    $route() {
      this.getCur();
    }
  },
  computed: {
    act: function(i) {
      return this.acID == i.cur ? "acitve" : "";
    }
  },
  created() {
    this.getCur();
  },
  methods: {
    getCur() {
      this.cur = this.$route.query.id;
      this.acID = this.$route.query.id;
    },

    goRouter(i) {
      this.defaultOpenedsArray = [];
      this.$router.push({
        path: "/news/list",
        query: {
          id: i.id.toString(),
          nm: i.name,
          lg: i.meta.icon
        }
      });
      this.acID = i.id;
      this.reload();
    },
    goItems(i) {
      this.$router.push({
        path: "/news/list",
        query: {
          id: i.id.toString(),
          nm: i.name,
          lg: i.meta.icon
        }
      });
      this.$nextTick(function() {
        //this.$refs.menu.open(i.id)
      });

      this.acID = i.id;
      this.reload();
    },
    goItemsRouter(i, logo, spr, sprId) {
      this.acID = i.id;
      this.$router.push({
        path: "/news/list",
        query: {
          id: i.id.toString(),
          nm: i.name,
          lg: logo,
          spr: spr,
          sprId: sprId
        }
      });
      this.reload();
    },
    imgSrc(i) {
      return require("../assets/img/" + i + ".png");
    }
  }
};
</script>
<style lang="scss" scoped>
.leftMenu {
  width: 150px;
  background:#F9F9F9;
}
.classData {
  padding: 10px;
  height:54px;
  color:rgba(0,68,154,1);
  border:1px solid rgba(230,230,230,1);
  border-bottom: 0px;
  p{
    &:first-of-type{
      font-size:17px;
      font-weight:bold;
    }
    &:last-of-type {
      font-size: 14px;
    }
  }
}
.el-menu{
  border:1px solid rgba(230,230,230,1);
  border-top: 0px;
}
.navigate {
  font-size: 20px;
}
.head_menu {
  background: #f9f9f9;
  text-align: center;
}
.menuLogo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.el-menu {
  > div {
    > .el-menu-item {
      height: 40px;
      color: #333;
      font-size: 14px;
      line-height: 40px;
      padding: 0 10px;
      text-align: left;
      border-top: 1px solid #e6e6e6;
      padding-left: 20px !important;
      i {
        color: #333;
        margin-right: 10px;
      }
      &:not(.is-disabled) {
        &:hover {
          background: #f9f9f9;
          color: #333;
        }
        &:focus {
          background: #f9f9f9;
          color: #fff;
        }
        &.is-active {
          background: url("../assets/img/menubg.png") no-repeat;
          background-size: 100%;
          font-weight: bold;
          color: #fff;
        }
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
