import * as VueRouter from 'vue-router'


// 定义一些路由
// 每个路由都需要映射到一个组件
const routes = [
    { path: '/', component: () => import('../pages/Index.vue') },
    { path: '/team', component: () => import('../pages/Team.vue') },
    { path: '/user', component: () => import('../pages/User.vue') },
    { path: '/search', component: () => import('../pages/Search.vue') },
    { path: '/user/edit', component: () => import('../pages/UserEdit.vue') },
    { path: '/user/list', component: () => import('../pages/SearchResult.vue') },
    { path: '/user/login', component: () => import('../pages/UserLogin.vue') },
]

// 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
