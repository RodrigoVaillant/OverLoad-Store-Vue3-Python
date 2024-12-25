import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'
import BuyerService from '@/components/pages/BuyerService.vue'
import New from '@/components/pages/New.vue'
import Login from '@/components/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Home},
    {path: "/buyer-service", component: BuyerService},
    {path: "/new", component: New},
    {path: "/login", component: Login},
  ],
})

export default router
