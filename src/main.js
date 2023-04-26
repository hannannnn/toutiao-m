import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Vant组件库
import Vant from 'vant'
// 引入vant组件库全局样式
import 'vant/lib/index.css'

import './styles/index.less'
// 注册使用Vant组件库
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
