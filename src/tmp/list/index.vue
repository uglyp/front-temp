<template>
  <el-container class="list-page" v-if="config">
    <el-header class="settings" height="auto">
      <com-form
        :form="lastConfig.searchItem"
        ref="search"
        class="search-form"
        @search="search"
        size="mini"
        inline
      >
        <template slot="last-item">
          <com-btns
            v-if="table && (lastConfig.searchItem || lastConfig.pageBtns)"
            :btns="lastConfig.pageBtns"
            :page="self"
            :item="table.selection"
            :table="table"
            class="page-btns"
            :reload="dxhTable.getRowData"
          >
            <li slot="first-btn">
              <el-button
                v-if="lastConfig.searchItem"
                type="primary"
                class="searchButton"
                @click="search"
                size="mini"
                :disabled="load"
                >查询</el-button
              >
            </li>
          </com-btns>
        </template>
      </com-form>
    </el-header>
    <el-main class="list-table">
      <con-table
        :config="config"
        :searchList="searchList"
        :on="lastConfig.on"
        ref="dxhTable"
      ></con-table>
      <slot name="right" class="sds"></slot>
    </el-main>
  </el-container>
</template>
<script>
import { comBtns, conTable, comForm } from "qh-controls";
import adSearch from "./adSearch";
export default {
  name: "tmpList",
  components: {
    comBtns,
    conTable,
    adSearch,
    comForm
  },
  props: {
    config: Object
  },
  data() {
    return {
      showAll: false,
      radio: 1,
      dxhTable: null,
      searchDom: null,
      table: null,
      dxhTabs: null,
      tabs: null,
      self: null,
      tableControl: null,
      searchData: {},
      searchTxt: "",
      searchList: null,
      showMore: false
    };
  },
  created() {
    this.getSearchList();
  },
  computed: {
    load() {
      return !!this.$refs.dxhTable.load;
    },
    lastConfig() {
      let { pageBtns, searchItem, on } = this.config;
      for (let key in searchItem) {
        if (
          searchItem[key].config &&
          (searchItem[key].config.dao || searchItem[key].config.map)
        ) {
          searchItem[key].config.hasDefault = true;
        }
      }
      return {
        pageBtns,
        searchItem,
        on
      };
    }
  },
  mounted() {
    this.dxhTable = this.$refs.dxhTable;
    this.table = this.dxhTable.getTable();
    this.self = this;
    const self = this;
    this.$nextTick(() => {
      self.dxhTabs = self.$refs.tabs;
      self.searchDom = self.$refs.search || {};
      self.showMore = self.sHeight > self.pHeight + 20;
    });
    //
  },
  methods: {
    /** */
    getSearchList() {
      this.searchList = {};
      for (let key in this.config.searchItem) {
        if (typeof this.config.searchItem[key] !== "object") {
          this.searchList[key] = this.config.searchItem[key];
        }
      }
    },
    /**弹出高级搜索 */
    showSearch() {
      this.$refs.search.show();
    },
    /** 高级搜索更多和收起 */
    moreItem(data) {
      this.showAll = data;
    },
    clearSearch() {
      this.$refs.search.clear();
    },
    /**高级搜索, 查询 */
    search() {
      /**同步搜索数据 */
      let $form = this.$refs.search;
      this.searchData = $form.getDatas();
      // this.getSearchList();
      let data = this.searchData;
      for (let key in this.config.searchItem) {
        if (typeof this.config.searchItem[key] !== "object") {
          data[key] = this.config.searchItem[key];
        }
      }
      this.$set(this, "searchList", data);
      this.$nextTick(() => {
        this.dxhTable.getRowData();
      });
    },
    /**重新加载表格数据**/
    refresh() {
      this.$refs.dxhTable.refresh();
    },
    /* 输出table组件实例 */
    tableEl() {
      return this.$refs.dxhTable;
    },
    closeTag(tag) {
      this.searchList[tag.key] = "";
      this.broadcast("comForm", "on-close-search-tag", tag.key);
      this.search();
    }
  }
};
</script>
