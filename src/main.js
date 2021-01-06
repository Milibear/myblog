import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import(ES6引入语法) 等效于node中require("axios")
// 凡是放在node_modules中都不用加./
// 引入用npm安装的axios模块
import axios from 'axios'

// 引入要作为全局组件的对象
import MyHeader from './components/MyHeader'
// 将MyHeader普通对象，重新封装为全局组件
Vue.component("my-header",MyHeader);

Vue.config.productionTip = false

// 将 axios对象放入Vue的原型对象中
Vue.prototype.axios = axios;
// 所有组件都是Vue.prototype的孩子，所以所有
// 组件都可以用this.axios.get()发送ajax请求

// main.js是整个应用程序的入口
new Vue({
  render: h => h(App),
}).$mount('#app')
