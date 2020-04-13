import Vue from "vue";
import App from "./App.vue";
import myBtn from "./lib/Button/lib";
Vue.use(myBtn);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
