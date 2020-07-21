<template>
  <com-form :form="form" ref="form" class="search-form"></com-form>
</template>
<script>
import { comForm } from "qh-controls";
export default {
  components: {
    comForm
  },
  props: {
    form: Object,
    searchData: Object
  },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    clear() {
      this.$refs.form.clear();
    },
    show() {
      this.isShow = true;
    },
    search() {
      let $form = this.$refs.form;
      this.$emit("update:searchData", $form.getDatas());
    },
    cancel() {
      let $form = this.$refs.form;
      $form.clear();
      this.$emit("update:searchData", $form.getDatas());
      this.$emit("search");
      this.close();
    },
    close() {
      this.isShow = false;
    }
  }
};
</script>
