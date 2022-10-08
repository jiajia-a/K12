import App from './App'
import http from './common/request/request.js'


import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from "uview-ui";
Vue.use(uView);

Vue.prototype.$http = http
const app = new Vue({
    ...App
})
app.$mount()


