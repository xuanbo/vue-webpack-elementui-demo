// 引用 vue 没什么要说的
import Vue from 'vue'

// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'

// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)
// 引用路由配置文件
import routes from './router/routes'
// 使用配置文件规则
const router = new VueRouter({
  routes
})

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

// 创建Vue实例
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
