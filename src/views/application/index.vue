<template>
  <div class="wrapper">
    <div class="content">
      <crumbs :crumbsConfig="crumbsConfig" @reloadPage="reloadPage">
        <span slot="btn" class="appBtn" @click="chkApp">选择应用</span>
      </crumbs>
      <div :class="flag ? 'group canChk' : 'group'" v-for="(m, i) in list" :key="i">
        <div class="top_border"></div>
        <p class="item_name">{{ m.name }}</p>
        <div class="item_box">
          <div :class="x.chk ? 'chk_item item' : 'item'" v-for="(x, y) in m.item" :key="y" @click="chkItem(x.id)">
            <img :src="logo" alt="" class="item_logo" />
            <span :title="x.nm" class="item_nm">{{ x.nm }}</span>
            <img :src="chkImg" alt="" class="chk" v-if="x.chk" />
            <span v-else class="chk notChk"></span>
          </div>
        </div>
      </div>
      <div v-if="flag" class="btn_box">
        <button class="confirm" @click="confirm">确认</button>
        <button class="cancel" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import crumbs from '../../components/crumbs';
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  components: {
    crumbs
  },
  data() {
    return {
      crumbsConfig: {
        logo: 'menu1',
        name: '应用中心'
      },
      list: [
        {
          name: '类别一',
          item: [
            {
              nm: 'OAyaioayofay adsfasdfadf',
              logo: 'oa.png',
              chk: true,
              id: 1
            },
            {
              nm: 'OA1',
              logo: 'oa.png',
              chk: false,
              id: 2
            },
            {
              nm: 'OA2',
              logo: 'oa.png',
              chk: false,
              id: 3
            },
            {
              nm: 'OA3',
              logo: 'oa.png',
              chk: false,
              id: 4
            }
          ]
        },
        {
          name: '类别二',
          item: [
            {
              nm: 'OA',
              logo: 'oa.png',
              id: 5,
              chk: false
            },
            {
              nm: 'OA1',
              logo: 'oa.png',
              chk: false,
              id: 6
            },
            {
              nm: 'OA2',
              logo: 'oa.png',
              chk: true,
              id: 7
            },
            {
              nm: 'OA3',
              logo: 'oa.png',
              chk: true,
              id: 8
            },
            {
              nm: 'OA3',
              logo: 'oa.png',
              chk: true,
              id: 9
            },
            {
              nm: 'OA3',
              logo: 'oa.png',
              chk: true,
              id: 10
            },
            {
              nm: 'OA3',
              logo: 'oa.png',
              chk: true,
              id: 11
            }
          ]
        },
        {
          name: '类别三',
          item: [
            {
              nm: 'OA',
              logo: 'oa.png',
              chk: true,
              id: 12
            },
            {
              nm: 'OA1',
              logo: 'oa.png',
              chk: false,
              id: 13
            },
            {
              nm: 'OA2',
              logo: 'oa.png',
              chk: false,
              id: 14
            },
            {
              nm: 'OA3',
              logo: 'oa.png',
              chk: false,
              id: 15
            }
          ]
        }
      ],
      logo: null,
      flag: false,
      chkArr: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    chkApp() {
      this.flag = true;
    },
    confirm() {
      this.flag = false;
    },
    cancel() {
      this.flag = false;
    },
    getAllChk(arr) {
      for (let i of arr) {
        for (let z of i.item) {
          if (z.chk) {
            this.chkArr.push(z.id);
          }
        }
      }
    },
    chgThis(id, val) {
      for (let i of this.list) {
        for (let z of i.item) {
          if (z.id == id) {
            z.chk = val;
          }
        }
      }
    },
    chkItem(id) {
      let arr = this.chkArr;
      let newChk = [];
      if (this.flag) {
        if (arr.indexOf(id) == -1) {
          arr.push(id);
          if (arr.length > 8) {
            $$.msg.error('最多只允许选择八个应用');
            arr.splice(
              arr.findIndex(item => item === id),
              1
            );
          } else {
            this.chgThis(id, true);
            newChk = arr;
            return newChk;
          }
        } else {
          arr.splice(
            arr.findIndex(item => item === id),
            1
          );
          this.chgThis(id, false);
        }
      }
    },
    reloadPage() {
      this.flag = false;
    }
  },
  created() {
    this.logo = require('../../assets/img/oa.png');
    this.chkImg = require('../../assets/img/chkImg.png');
    this.getAllChk(this.list);
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  // position: absolute;
  // top: 0px;
  // right: 0;
  // left: 0;
  // bottom: 0px;
  min-height: calc(100vh - 418px);
  margin: 0px 10px 10px 10px;
  padding-top: 20px;
  background: #fff;
  margin-top: -10px;
  min-height: calc(100vh - 400px);
  display: flex;
  flex-direction: column;
  flex-grow: 1000;
  .content {
    width: 980px;
    margin: 0 auto;
    span {
      &.appBtn {
        border-radius: 3px;
        width: 70px;
        text-align: center;
        display: inline-block;
        background: #508cd5;
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        margin-left: 10px;
        line-height: 30px;
        height: 30px;
      }
    }
    .group {
      background: rgba(249, 249, 249, 1);
      border: 1px solid rgba(229, 229, 229, 1);
      border-top: 0;
      padding: 15px 10px 5px 10px;
      position: relative;
      text-align: center;
      margin-bottom: 20px;

      &.canChk {
        .item {
          cursor: pointer;
        }
        .chk_item {
          box-shadow: 0px 7px 8px 2px rgba(10, 70, 164, 0.08);
        }
        .notChk {
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(226, 226, 226, 1);
          border-radius: 50%;
        }
      }
      .top_border {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 2px;
      }
      &:last-of-type {
        margin-bottom: 30px;
      }
      &:nth-child(3n + 2) {
        .top_border {
          background: url('../../assets/img/A.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(3n) {
        .top_border {
          background: url('../../assets/img/B.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(3n + 1) {
        .top_border {
          background: url('../../assets/img/C.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .item_name {
        text-align: left;
        color: #000000;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .item_box {
      width: 935px;
      margin: 0 auto;
      display: inline-block;
      text-align: left;
    }
    .item {
      width: 226px;
      height: 85px;
      background: rgba(255, 255, 255, 1);
      display: inline-block;
      padding: 13px;
      position: relative;
      margin-right: 10px;
      border: 1px solid rgba(230, 230, 230, 1);
      text-align: left;
      margin-bottom: 15px;
      &.chk_item {
        border: 1px solid rgba(80, 140, 213, 1);
      }
      &:nth-child(4n) {
        margin-right: 0px;
      }
      .item_logo {
        width: 54px;
        height: 54px;
        margin-right: 20px;
      }
      .chk {
        position: absolute;
        top: 13px;
        right: 13px;
        width: 20px;
        height: 20px;
      }
      .item_nm {
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 100px;
        vertical-align: middle;
      }
    }
    .btn_box {
      margin-bottom: 20px;
      text-align: center;
      button {
        width: 46px;
        height: 32px;
        color: #fff;
        background: rgba(80, 140, 213, 1);
        border: 1px solid rgba(80, 140, 213, 1);
        border-radius: 3px;
        &.cancel {
          border: 1px solid rgba(198, 198, 198, 1);
          background: #fff;
          color: #666;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
