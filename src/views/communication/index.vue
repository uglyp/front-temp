<template>
  <div class="main-content">
    <div class="ma">
    <div class="ov">
      <nd v-loading="!data" :data="data" class="main" line></nd>
      <nd v-loading="!data2" :data="data2" class="main"></nd>
    </div>
    <div>
      <el-cascader v-model="ids" :options="tree" :props="props" size="medium"></el-cascader>
      <el-button @click="add" type="success" plain>加一子项</el-button>
      <el-button @click="del" type="danger" plain>删一子项</el-button>
    </div>
  </div>
  </div>
</template>
<script>
// import dao from './book/dao'
import nd from './n';
import data from './data';
import './grid.scss';
let num = 1;
const getData = (data, id) => {
  if (data.ID === id) {
    return data;
  } else if (data.ITEMS) {
    let tmp;
    for (let d of data.ITEMS) {
      tmp = getData(d, id);
      if (tmp) {
        return tmp;
      }
    }
  } else {
    return null;
  }
};
export default {
  components: {nd},
  data() {
    return {
      ids: null,
      data: null,
      data2: null,
      tree: null,
      props: {
        checkStrictly: true,
        label: 'LABEL',
        children: 'ITEMS',
        value: 'ID'
      }
    };
  },
  created() {
    this.getTree();
  },
  methods: {
    // 根据id获取标签模型
    getItemById(id) {
      return getData(this.data, id) || getData(this.data2, id);
    },
    // 获取数据
    getTree() {
      let r = data;
      let a = r.ZGS[0];
      let b = r.ZSBM[0];
      this.data = b;
      this.data2 = a;
      this.setTree();
    },
    // 获取树形数据, 用于功能校验
    setTree() {
      let tree = [JSON.parse(JSON.stringify(this.data))];
      let t2 = JSON.parse(JSON.stringify(this.data2));
      tree.push(...t2.ITEMS);
      this.tree = tree;
    },
    // 添加一个子集  用于功能校验
    add() {
      if (!this.ids) {
        $$.msg.warn('请选择');
      } else {
        let id = this.ids[this.ids.length - 1];
        let r = this.getItemById(id);
        r.ITEMS.push({
          ID: Math.random(),
          LABEL: `测试加一项${num++}`,
          ITEMS: []
        });
        this.getTree();
      }
    },
    // 删除一个子集  用于功能校验
    del() {
      if (!this.ids) {
        $$.msg.warn('请选择');
      } else {
        let id = this.ids[this.ids.length - 1];
        let r = this.getItemById(id);
        r.ITEMS.splice(0, 1);
        this.getTree();
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
