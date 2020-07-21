import { $ } from "qh-controls";

const getList = search => {
  return $.post("js/manage/count/l", search);
}
export default {
  getList,
};