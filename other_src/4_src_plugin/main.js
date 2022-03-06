import Vue from 'vue'
import App from './App.vue'

import plugins from './plugins'   //引入插件
Vue.config.productionTip = false

Vue.use(plugins)    //使用插件
new Vue({
  render: h => h(App),
}).$mount('#app')
