import App from './App'
import http from './common/request/request.js'


import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from "uview-ui";
Vue.use(uView);
// 全局过滤器注册
import filters from '@/utils/filters/index.js'
Vue.use(filters)

Vue.prototype.$http = http
const app = new Vue({
    ...App
})
app.$mount()


