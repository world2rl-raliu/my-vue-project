import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('../views/About.vue') } // 遅延ロード
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router