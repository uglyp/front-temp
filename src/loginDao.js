import { $ } from "qh-controls";

const getLoginInfo = () => {
  return $.post("sso/auth/info");//用户信息
};
const getUserInfo = () => {
  return $.post(`js/manage/count/l`);//角色
};
const exitLogin = (token) => {
  return $.post("js/manage/auth/exit",token);
};
const setPwd = () => {
  return $.post("sso/usr/pwd/set");
};
export default {
    getLoginInfo,
    getUserInfo,
    exitLogin,
    setPwd
};
