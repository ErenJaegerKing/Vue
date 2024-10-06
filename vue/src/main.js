// 入口文件
// 导入Mock
import "./mock";
import Vue from "vue";
import App from "./App.vue";
// 导入全局样式
import "./styles/global.less";
// 导入路由规则
import router from "./router";
import showMessage from "./utils/showMessage";
import "./eventBus.js";
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy",vLazy);

new Vue({
  // 路由规则注册
  router,
  render: (h) => h(App),
}).$mount("#app");


