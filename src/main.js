import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern, HTML5-ready alternative to CSS resets

import App from './App.vue'
import router from './router'
import store from './store' //引入状态管理
import i18n from './i18n/i18n'
import Vue2Editor from "vue2-editor"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css' // 全局样式
import '@/utils/RouteAuthority' // 路由权限

Vue.use(ElementUI)
Vue.use(Vue2Editor);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
