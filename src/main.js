import '@/styles/index.scss' // global css
import Element from 'element-ui'
import enLang from 'element-ui/lib/locale/lang/en' // 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Vue from 'vue'
import App from './App'
import * as filters from './filters' // global filters
import './icons' // icon
import './permission' // permission control
import router from './router'
import store from './store'
import './styles/element-variables.scss'
import './utils/error-log' // error log


if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // 设置element的默认大写OA
})

// 注册全局实用程序筛选器
Object.keys(filters).forEach(key => {
  console.log(key);
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
