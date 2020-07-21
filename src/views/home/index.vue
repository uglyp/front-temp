<template>
  <div class="home">
    <div class="home_one">
      <div class="home_one_item" v-for="(item, i) in 6" :key="i">
        <div class="home_one_item_left">
          <div class="home_one_item_left_logo">
            <img src="../../assets/img/oa.png" alt="" />
          </div>
          <div class="home_one_item_left_name_box">
            <div class="home_one_item_left_name">OA</div>
            <div class="home_one_item_left_name_line"></div>
          </div>
        </div>
        <div class="home_one_item_right">
          2323
        </div>
      </div>
      <div class="home_one_btn">
        查看全部
      </div>
    </div>
    <div class="home_two">
      <div class="home_two_first">
        <div class="home_two_first_chunk_one ">
          <homeChunk class="self_height" :list="list"></homeChunk>
        </div>
        <div class="home_two_first_chunk_one_right ">
          <homeChunk class="self_height" :useSlot="true" :useTag="false">
            <div class="slot_box">
              <div class="slot_box_item" v-for="(item, index) in 4" :key="index">
                <div class="slot_box_item_time">
                  <div class="slot_box_item_m">07</div>
                  <div class="slot_box_item_y">
                    2020.04
                  </div>
                </div>
                <div class="slot_box_title_box">
                  <div class="slot_box_title_box_title txt-two-cut">
                    <img
                      class="home_chunk_img"
                      src="../../assets/img/light.gif"
                    />中国船舶集团所属中国船柴国际业务部在防疫中国船舶集团所属中国船柴国际业务部在防疫中国船舶集团所属中国船柴国际业务部在防疫
                    期间承接200单
                  </div>
                </div>
              </div>
            </div>
          </homeChunk>
        </div>
      </div>
      <div class="home_two_first">
        <div class="home_two_first_chunk_one">
          <homeChunk class="two_between self_height_three" :list="list1" :isContent="true"></homeChunk>
          <homeChunk class="self_height_three" :list="list1" :isContent="false"></homeChunk>
        </div>
        <div>
          <div class="home_two_first_chunk_one_right ">
            <homeChunk class="self_height_two" :useSlot="true" :useTag="false">
              <div class="slot_box2">
                <div v-if="true">
                  <div class="slot_box_item2" v-for="(item, index) in 8" :key="index">
                    <div class="slot_box_title_box_big">
                      <div class="txt-one-cut title_width">
                        <img
                          class="home_chunk_img"
                          src="../../assets/img/light.gif"
                        />中国船舶集团所属中国船柴国际撒打发斯蒂芬间承接200单
                      </div>
                      <div class="tag_color">
                        (规章制度)
                      </div>
                    </div>
                    <div>2020-04-14</div>
                  </div>
                </div>
                <div v-if="false">暂无数据</div>
              </div>
            </homeChunk>
          </div>
        </div>
      </div>
      <div class="home_two_first">
        <div class="home_two_first_chunk_one">
          <homeChunk class="self_height_three" :list="list2"></homeChunk>
        </div>
        <div class="home_two_first_chunk_one_right ">
          <homeChunk class="self_height_three" :useSlot="true" :useTag="false">
            <div class="slot_box3">
              <div class="app_item" v-for="(item, index) in 8" :key="index">
                <div class="app_item_icon"><img src="../../assets/img/newslog.png" alt="" /></div>
                <div class="app_item_name txt-one-cut">宜昌基地及哈哈</div>
              </div>
            </div>
          </homeChunk>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeChunk from '../../components/homeChunk';
import img1 from '../../assets/img/s1.png';
import img2 from '../../assets/img/s2.png';
import img3 from '../../assets/img/s3.png';
export default {
  data() {
    return {
      list: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国 春回大地，万物复苏。随着湖北疫情防控形势持续向好，经地方政府正式批准，3月14日，中国船舶集团所属中国船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战、生产经'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经'
        },
        {
          img: img2,
          content:
            ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经'
        }
      ],
      list1: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经中国hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content:
            ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经、生产经...'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经战、生产经...'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content:
            ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经战、生产经...'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经，吹响了疫情防控阻击战、生产经...'
        }
      ],
      list2: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经舶 集团所属中国hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content:
            ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战、生集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经产经...'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经经...'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经.集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经..'
        },
        {
          img: img2,
          content:
            ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击战、生产经...集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经'
        },
        {
          img: img3,
          content:
            ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经..集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经.'
        }
      ],
      list3: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        }
      ],
      list4: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        }
      ],
      list5: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        }
      ],
      list6: [
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国hl船柴宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了疫情hkl防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公司稳妥有序复工复产，ghj吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img1,
          content:
            ' 续向好，经地方政府正式批准，3月14日，中国船舶 集团所属中国船hdfg宜柴公司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        },
        {
          img: img2,
          content: ' 船柴宜柴公司稳妥有序复工复产，吹响了asdf 疫情防控阻击战、生产经...'
        },
        {
          img: img3,
          content: ' 3月14日，中国船舶 集团所属中国船柴宜柴公fadsf 司稳妥有序复工复产，吹响了疫情防控阻击战、生产经...'
        }
      ]
    };
  },
  components: {
    homeChunk
  },
  mounted() {
    let data = {
      ID: 'TK#W',
      NM: 'C$Af',
      FILE_URL: 'VR(',
      ISSUE_TIME_YMD: '56Pf',
      MODULE_NM: 'OT8A'
    };
    this.$emit('getBanner', data);
  }
};
</script>
<style lang="scss" scoped>
.slot_box_title_box_title {
  width: 300px;
}
.app_item {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app_item_icon {
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    max-width: 100%;
  }
}
.app_item_name {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 18px;
  max-width: 78px;
  padding-top: 7px;
}
.self_height_three {
  height: 276px;
}
.home_two_last_chunk_one_right {
  height: 276px;
}
.self_height_two {
  height: 562px;
}
.title_width {
  width: 293px;
  display: inline-block;
}
.tag_color {
  color: #023894;
}
.two_between {
  margin-bottom: 10px;
}
.self_height {
  height: 317px;
}
.slot_box_item_time {
  color: #555555;
}
.slot_box_item_y {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.slot_box_item_m {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  text-align: center;
}
.slot_box_item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
}
.slot_box_item:hover > * {
  color: #023894 !important;
}
.slot_box_item2 {
  padding-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
}
.slot_box_item2:hover > .slot_box_title_box_big {
  color: #023894 !important;
}
.slot_box_title_box {
  display: flex;
  width: 293px;
  align-items: center;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 22px;
}
.slot_box_title_box_big {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 22px;
}
.home_chunk_img {
  width: 28px;
  height: 12px;
}
.slot_box {
  padding: 20px 25px 0 25px;
}
.slot_box3 {
  padding: 0px 30px 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.slot_box2 {
  padding: 20px 10px 0 20px;
}
.home_two_first_chunk_one_right {
  width: 410px;
}
.home_two_first {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.home_two_first:last-of-type {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
}
.home_two_first_chunk_one {
  width: 760px;
}
img {
  width: 100%;
}
.home {
  min-height: calc(100vh - 418px);
  margin: 0 10px 10px 10px;
}
.home_one {
  background: #fff;
  // height: 197px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  padding-bottom: 12px;
}
.home_one_item {
  width: 32.54%;
  background: #fff;
  cursor: pointer;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.home_one_item:hover {
  background: rgba(249, 249, 249, 1);
  box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, 0.15);
}
.home_one_item_left {
  display: flex;
}
.home_one_item_left_logo {
  width: 54px;
}
.home_one_item_left_name_line {
  width: 41px;
  height: 2px;
  background: rgba(255, 118, 118, 1);
}
.home_one_item_left_name {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 18px;
  padding: 10px 0 20px 0;
}
.home_one_item_left_name_box {
  padding-left: 23px;
}
.home_one_item_right {
  font-size: 32px;
  font-family: Rubik;
  font-weight: 300;
  color: rgba(47, 50, 62, 1);
  align-self: center;
}
.home_one_btn {
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 5px;
  padding: 9px 30px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin: 0 auto;
  margin-top: 5px;
  cursor: pointer;
}
.home_two {
  margin-top: 10px;
}
</style>
