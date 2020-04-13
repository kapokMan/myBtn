import Btn from "./index.vue";

const myBtn = {
  install(Vue, opt = {}) {
    Vue.component("myBtn", Btn);
  }
};

export default myBtn;
