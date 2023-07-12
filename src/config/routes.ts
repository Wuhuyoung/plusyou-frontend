import * as VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import Team from '../pages/Team.vue'
import User from '../pages/User.vue'
import Search from '../pages/Search.vue'


// 定义一些路由
// 每个路由都需要映射到一个组件
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search', component: Search },
]

// 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
