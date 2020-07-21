<template>
  <div class="wrapper">
    <div class="content">
      <crumbs :crumbsConfig="crumbsConfig" @reloadPage="reloadPage">
      </crumbs>
      <div class="map_content">
        <div class='lel_one'>
          <a @click="linkFn(map.PATH)" :class="map.PATH?'':'prohibit'">
            {{map.NM}}
          </a>
        </div>
        <div class="lel_two" v-for="(m,i) in map.ITEMS" :key="i">
          <p>
            <a @click="linkFn(m.PATH)" :title="m.NM" :class="m.PATH?'':'prohibit'">
              <img :src="m.LOGO" alt="">{{m.NM}}
            </a>
          </p>
          <div class="lel_three" v-for="(x,y) in m.ITEMS" :key="y">
            <a @click="linkFn(x.PATH)" :title="x.NM" :class="x.PATH?'':'prohibit'">{{x.NM}}</a>
            <p v-for="(z,o) in x.ITEMS" :key="o">
              <a @click="linkFn(x.PATH)" :title="z.NM" @keyup.enter.native="fnfn" :class="z.PATH?'':'prohibit'">{{z.NM}}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crumbs from '../../components/crumbs'
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  components:{
    crumbs
  },
  data(){
    return {
      crumbsConfig:{
        logo:'menu1',
        name:'网站地图',
      },
      list:[
        {
          name:'类别一',
          item:[
            {
              nm:'OAyaioayofay adsfasdfadf',
              logo:'oa.png',
              chk:true,
              id:1
            },
            {
              nm:'OA1',
              logo:'oa.png',
              chk:false,
              id:2
            },
            {
              nm:'OA2',
              logo:'oa.png',
              chk:false,
              id:3
            },
            {
              nm:'OA3',
              logo:'oa.png',
              chk:false,
              id:4
            },
          ]
        },
        {
          name:'类别二',
          item:[
            {
              nm:'OA',
              logo:'oa.png',
              chk:false,
              id:5
            },
            {
              nm:'OA1',
              logo:'oa.png',
              chk:false,
              id:6,
            },
            {
              nm:'OA2',
              logo:'oa.png',
              chk:true,
              id:7
            },
            {
              nm:'OA3',
              logo:'oa.png',
              chk:true,
              id:8
            },
            {
              nm:'OA3',
              logo:'oa.png',
              chk:true,
              id:9
            },
            {
              nm:'OA3',
              logo:'oa.png',
              chk:true,
              id:10
            },
            {
              nm:'OA3',
              logo:'oa.png',
              chk:true,
              id:11
            },
          ]
        },
        {
          name:'类别三',
          item:[
            {
              nm:'OA',
              logo:'oa.png',
              chk:true,
              id:12
            },
            {
              nm:'OA1',
              logo:'oa.png',
              chk:false,
              id:13
            },
            {
              nm:'OA2',
              logo:'oa.png',
              chk:false,
              id:14
            },
            {
              nm:'OA3',
              logo:'oa.png',
              chk:false,
              id:15
            },
          ]
        }
      ],
      logo:null,
      flag:false,
      map:{
        NM:'中国船柴',
        PATH:'https://www.baidu.com/',
        ITEMS:[
          {
            NM:'办公室（党委办公室）（党群工作部）',
            LOGO:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595216809244&di=390b7c3b8755f3cf5406a102040ff606&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151231%2FImg433120571.jpg',
            PATH:'https://www.baidu.com/',
            ITEMS:[
              {
                NM:'市场部',
                PATH:'https://www.baidu.com/',
                ITEMS:[
                  {
                    NM:'市场部2级网站A',
                    PATH:'https://www.baidu.com/',
                  }
                ]
              },
              {
                NM:'柴油机销售部',
                PATH:'https://www.baidu.com/',
                ITEMS:[
                  {
                    NM:'市场部2级网站A',
                    PATH:'https://www.baidu.com/',
                  }
                ]
              },
              {
                NM:'国际业务部',
                PATH:'',
                ITEMS:[
                  {
                    NM:'市场部2级网站A',
                    PATH:'',
                  }
                ]
              },
              {
                NM:'市场部',
                PATH:'https://www.baidu.com/',
                ITEMS:[
                  {
                    NM:'国际业务部,国际业务部2级网站B，国际业务部2级网站B国际业务部2级网站B',
                    PATH:'https://www.baidu.com/',
                  }
                ]
              },
              {
                NM:'市场部',
                PATH:'https://www.baidu.com/',
                ITEMS:[
                  {
                    NM:'市场部2级网站A',
                    PATH:'https://www.baidu.com/',
                  }
                ]
              },
            ]
          }
        ]
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    reloadPage(){
      this.flag = false
    },
    linkFn(href){
      if(href){
        window.open(href);
      }else{
        return false
      }
    },
    fnfn(){
      $c.log(1111)
    }
  },
  created() {
  },
}
</script>
<style lang="scss" scoped>
  .wrapper{
    min-height: calc(100vh - 418px);
    margin: 0 10px 10px 10px;
    padding-top: 20px;
    background: #fff;
    margin-top: -10px;
    min-height: calc(100vh - 400px);
    display: flex;
    flex-direction: column;
    flex-grow: 1000;
    .content{
      width: 980px;
      margin: 0 auto;
      .map_content{
        .prohibit{
          cursor: default !important;
          color:rgba(179,179,179,1) !important;
        }
        .lel_one{
          margin-bottom: 20px;

          a{
            cursor: pointer;
            font-size:20px;
            font-weight:bold;
            color:rgba(11,69,163,1);
          }
        }
        .lel_two{
          margin-bottom: 20px;

          >p{
            margin-bottom: 15px;
          }

          img{
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
          a{
            cursor: pointer;
            font-size:18px;
            font-weight:bold;
            color:rgba(11,69,163,1);
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
            overflow: hidden;
          }
        }
        .lel_three{
          display: inline-block;
          width: 220px;
          margin-left: 20px;
          a{
            cursor: pointer;
            font-size:16px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            margin-bottom: 15px;
            display: block;
          }
          p{
            a{
              font-size:12px;
              font-weight:400;
            }
          }
        }
      }
    }
  }
</style>
