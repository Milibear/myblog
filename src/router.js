import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
    routes:[
    //    首页界面 
       {path:"/",component: Index},
    //    没有的页面
       {path:"*",component:{
           template:`<h2 style="color:red">404:Not Found</h2>`
       }}
    ]
})