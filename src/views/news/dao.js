import { $ } from "qh-controls";

const getSelectList = () => {
  return $.get({
    url: "js/hm/cl",
    out(re) {
      re.data = re.data.map(r => {
        return {
          key: r.ID + "",
          txt: r.EN_NM
        };
      });
      return re;
    }
  });
};

const getList = search => {
  return $.post("js/manage/download/l", search);
}
export default {
  getList,
  getSelectList
};