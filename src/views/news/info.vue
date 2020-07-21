<template>
  <div class="wrapper">
    <div class="list_header">
      <img :src="listLogo" alt="">
      <span>{{listName}}</span>
      <p class="crumbs">
        <span @click="goHome" class="home">
          <img :src="homeLogo" alt="">
          门户首页
        </span>
        <span v-if="spr">
          <span class="arr">></span>
          <a @click="goSpr">{{spr}}</a>
        </span>
        <span>
          <span class="arr">></span>
          <a @click="goItem">{{item}}</a>
        </span>
      </p>
    </div>
    <div class="info_content">
      <div class="info_top">
        <p class="title">{{title}}</p>
        <p class="other">发布时间：{{data}} <span class="view">浏览量：{{view}}</span></p>
      </div>
      <div>
        <div class='content' v-html='html'> </div>
      </div>
      <div v-if="prev" class="info_link prev">
        <p @click="goOther(prev.id)"><span>上一篇：</span>{{prev.title}}</p>
      </div>
      <div class="info_link" v-if="next">
        <p @click="goOther(next.id)"><span>下一篇：</span>{{next.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  name:'',
  components:{},
  props:{},
  data(){
    return {
      title:'',
      data:'',
      view:'',
      html:'',
      prev:{
        id:11,
        title:'我是上一篇'
      },
      next:{
        id:22,
        title:'我是下一篇'
      },
    }
  },
  watch:{},
  computed:{},
  methods:{
    goHome(){
      this.$router.push({
        path:'/home',
      })
    },
    goSpr(){
      const route = this.$route.query
      this.$router.push({
        path:'/news/list',
        query:{ 
          id: route.sprId.toString(),
          nm: route.spr,
          lg: route.lg
        }
      })
      this.reload();
    },
    goItem(){
      this.$router.go(-1)
      this.reload();
    },
    goOther(id){
      this.$route.query.infoId = id
      this.reload();
    }
  },
  created(){
    this.listName = this.$route.query.nm
    this.homeLogo = require('../../assets/img/home.png')
    this.listLogo = require('../../assets/img/'+this.$route.query.lg+'.png')
    this.spr = this.$route.query.spr
    this.item = this.$route.query.nm
    this.title='中国船舶集团所属中国船柴经营接单捷报频传';
    this.data="2020-04-07 12:00:003598"
    this.view='3598'
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
  .list_header{
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom:1px solid #E2E2E2;
    font-size: 14px;
    > img{
      width: 20px;
      margin-right: 10px;
      vertical-align: top;
    }
    >span{
      height: 20px;
      line-height: 22px;
      display: inline-block;
    }
    
    .crumbs{
      float: right;
      .home{
        color: #666;
        cursor: pointer;
      }
      img{
        width: 20px;
        vertical-align: top;
        margin-right: 5px;
      }
      >span{
        a{
          color: #666;
          cursor: pointer;
        }
        .arr{
          color: #666;
          margin: 0 10px;
        }
        &:last-of-type{
          a{
            color: #00449A;
          }
        }
      }
      
    }
  }
  .info_top{
    border-bottom: 1px solid #E2E2E2;
    >p{
      text-align: center;
      &.title{
        margin: 20px 0;
        font-size:18px;
        color: #000;
      }
      &.other{
        font-size: 14px;
        color: #999;
        margin-bottom: 20px;
        .view{
          margin-left: 10px;
        }
      }
    }
  }
  .info_content{
    margin-bottom: 30px;
  }
  .content{
    margin-bottom: 30px;
  }
  .info_link{
    &.prev{
      margin-bottom: 15px;
    }
    p{
      font-size: 14px;
      color: #666;
      cursor: pointer;
      display: inline-block;
      width: auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      span{
        color: #023894;
      }
    }
  }
</style>