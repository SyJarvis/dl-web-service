import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.创建路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import OcrDetect from '../views/OcrDetect.vue'
import DrugChinese from '../views/DrugChinese.vue'

Vue.use(VueRouter);
// 2.将路由组件进行映射
const routes = [
    {
        path: "/",
        component: Main,
        redirect: '/home',      // 重定向
        children: [
            { path: 'home', name: 'home', component: Home },     // 首页
            { path: 'user', name: 'user', component: User },     // 用户管理
            { path: 'mall', name: 'mall', component: Mall },     // 商品管理
            { path: 'ocr', name:'ocr', component: OcrDetect},
            { path: 'drug', name: 'drug', component: DrugChinese},  // 药品用法说明解析
            { path: 'page1', name: 'page1', component: PageOne},   // 页面1
            { path: 'page2', name: 'page2', component: PageTwo},   // 页面2
        ]
    },

]

// 3.创建router实例
const router = new VueRouter({
    routes
})

// 4.将router对外进行暴露，创建和挂载到根实例
export default router
