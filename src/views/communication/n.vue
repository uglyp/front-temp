<template>
  <div v-if="data" :class="['node', data.CLASSNAME]" :style="{order:data.ORDER||i+1}">
    <div class="txt">
      <span v-text="data.LABEL"></span>
    </div>
    <div class="btm" v-if="data.ITEMS && data.ITEMS.length">
      <div
        class="child"
        ref="child"
        :style="{gridTemplateColumns: `repeat(${data.ITEMS.length+(line?1:0)}, auto)`}"
      >
        <nd v-for="(d,i) in data.ITEMS" :key="d.ID" :data="d" :i="i"></nd>
        <p class="node ctn" v-if="line" :style="{order:order}"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nd',
  props: {
    line: Boolean,
    data: Object,
    i: Number
  },
  data() {
    return {
      order: 0
    }
  },
  mounted() {
    this.setOrder()
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.setOrder()
      }
    }
  },
  methods: {
    setOrder() {
      if (this.line) {
        let nodes = this.$refs.child.childNodes
        let sum = 0
        for (let node of nodes) {
          sum += node.offsetWidth
        }
        let diff = 9999
        let i = 0
        let order = 0
        for (let node of nodes) {
          if (Math.abs(node.offsetLeft - nodes[0].offsetLeft - sum / 2) < diff) {
            diff = Math.abs(node.offsetLeft - nodes[0].offsetLeft - sum / 2)
            order = i
          } else {
            break
          }
          i++
        }
        this.order = order
      }
    }
  }
}
</script>