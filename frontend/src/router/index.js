import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import BuyerService from '@/components/BuyerService.vue'
import New from '@/components/New.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Home},
    {path: "/buyer-service", component: BuyerService},
    {path: "/new", component: New},
  ],
})

export default router
