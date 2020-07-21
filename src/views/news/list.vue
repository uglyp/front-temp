<template>
  <div class="wrapper">
    <div class="list_header">
      <img :src="listLogo" alt="" />
      <span>{{ listName }}</span>
      <p class="crumbs">
        <span @click="goHome" class="home">
          <img :src="homeLogo" alt="" />
          门户首页
        </span>
        <span v-if="spr">
          <span class="arr">></span>
          <a @click="goSpr">{{ spr }}</a>
        </span>
        <span>
          <span class="arr">></span>
          <a @click="goItem">{{ item }}</a>
        </span>
      </p>
    </div>
    <div>
      <ul class="list_content">
        <li
          v-for="(m, i) in list"
          :key="i"
          class="list_item"
          @click="goInfo(m.id)"
        >
          <div class="item_Date">
            <p class="month">{{ m.date | formatDate("dd") }}</p>
            <p>{{ m.date | formatDate("yyyy.MM") }}</p>
          </div>
          <div>
            <div class="item_content">
              <p class="title">{{ m.title }}</p>
              <p>{{ m.data }}</p>
              <a>详情>></a>
            </div>
            <p class="item_other">
              发布时间：{{ m.date }}
              <span>浏览量：{{ m.view }}</span>
            </p>
          </div>
        </li>
      </ul>
      <Pagination
        :total="total"
        @pagination="getUserList"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/pagination1";
export default {
  name: "",
  components: {
    Pagination
  },
  props: {},
  data() {
    return {
      listName: "",
      listLogo: "",
      homeLogo: null,
      spr: null,
      list: [
        {
          date: "2020-04-07 12:00:00",
          title: "战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误",
          data:
            "2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk",
          view: 13544,
          id: 1
        },
        {
          date: "2020-04-07 12:00:00",
          title: "战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误",
          data:
            "2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk",
          view: 13544,
          id: 2
        },
        {
          date: "2020-04-07 12:00:00",
          title: "战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误",
          data:
            "2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk",
          view: 13544,
          id: 3
        },
        {
          date: "2020-04-07 12:00:00",
          title: "战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误",
          data:
            "2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk",
          view: 13544,
          id: 4
        },
        {
          date: "2020-04-07 12:00:00",
          title: "战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误",
          data:
            "2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk",
          view: 13544,
          id: 5
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:6
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:3
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
        {
          date:'2020-04-07 12:00:00',
          title:'战疫情 保生产 中国船舶集团所属中国船柴大柴公司复工防疫两不误',
          data:'2月10日，复工第一天，公司领导、中层干部、科（股）长、班组长到岗。按照党委书记顺主持召开专skdjfhkajsdhdsakjfk',
          view:13544,
          id:2
        },
      ],
      total: 10,
      listQuery: {
        limit: 20,
        page: 1
      },
      routeData: Object
    };
  },
  watch: {},
  computed: {},
  methods: {
    goHome() {
      this.$router.push({
        path: "/home"
      });
    },
    goSpr() {
      const route = this.$route.query;
      this.$router.push({
        path: "/news/list",
        query: {
          id: route.sprId.toString(),
          nm: route.spr,
          lg: route.lg
        }
      });
      this.reload();
    },
    goItem() {
      this.reload();
    },
    goInfo(id) {
      this.routeData["infoId"] = id;
      this.$router.push({
        path: "/news/info",
        query: this.routeData
      });
    },
    getUserList() {
      //获取数据的方法
    }
  },
  created() {
    this.listName = this.$route.query.nm;
    this.homeLogo = require("../../assets/img/home.png");
    this.listLogo = require("../../assets/img/" +
      this.$route.query.lg +
      ".png");
    this.spr = this.$route.query.spr;
    this.item = this.$route.query.nm;
    this.routeData = this.$route.query;
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
  .list_header {
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e2e2;
    font-size: 14px;
    > img {
      width: 20px;
      margin-right: 10px;
      vertical-align: top;
    }
    > span {
      height: 20px;
      line-height: 22px;
      display: inline-block;
    }
  } 
  .crumbs {
    float: right;
    .home {
      color: #666;
      cursor: pointer;
    }
    img {
      width: 20px;
      vertical-align: top;
      margin-right: 5px;
    }
    > span {
      a {
        color: #666;
        cursor: pointer;
      }
      .arr {
        color: #666;
        margin: 0 10px;
      }
      &:last-of-type {
        a {
          color: #00449a;
        }
      }
    }
  }
  .list_content{
    margin-bottom: 30px;
  }
  .list_item{
    cursor: pointer;
    margin-top: 20px;
    text-align: right;
    >div{
      display: inline-block;
      &:first-of-type{
        float: left;
        color: #fff;
        width: 64px;
        height: 64px;
        background: url('../../assets/img/date.png');
        background-size: 100%;
        font-size: 14px;
        text-align: center;

        .month {
          margin-top: 8px;
          font-size: 26px;
          font-weight: bold;
        }
      }
      &:last-of-type{
        text-align: left;
        vertical-align: top;
        .item_content{
          padding-bottom: 10px;
          border-bottom: 1px solid #E2E2E2;
          p{
            overflow: hidden;
            display: inline-block;
            text-overflow:ellipsis;
            white-space:nowrap;
            width: 670px;
            font-size:14px;
            color:rgba(102,102,102,1);
            &.title{
              width: 710px;
              font-size:18px;
              color:rgba(0,0,0,1);
              margin-bottom: 15px;
              display: block;
            }
          }
          a{
            cursor: pointer;
            color: #0D47A5;
            vertical-align: top;
          }
        }
        .item_other{
          color: #999999;
          font-size: 14px;
          color: rgba(102, 102, 102, 1);
          &.title {
            width: 710px;
            font-size: 18px;
            color: rgba(0, 0, 0, 1);
            margin-bottom: 15px;
            display: block;
          }
        }
        a {
          cursor: pointer;
          color: #0d47a5;
          vertical-align: top;
        }
      }
      .item_other {
        color: #999999;
        font-size: 14px;
        margin-top: 10px;
        span {
          margin-left: 10px;
        }
      }
    }
    &:hover {
      > div {
        &:first-of-type {
          background: url("../../assets/img/dateAc.png");
          background-size: 100%;
        }
        &:last-of-type {
          .item_content {
            .title {
              color: #00449a;
            }
          }
        }
      }
    }
  }
</style>