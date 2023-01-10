import { createRouter, createWebHistory } from 'vue-router'
import TabsViewVue from '../views/tabs/TabsView.vue'
import HomeView from '../views/tabs/home/HomeView.vue'
import OrderView from '../views/tabs/order/OrderView.vue'
import MeView from '../views/tabs/me/MeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsViewVue,
      children: [
        {
          name: 'home',
          path: '/home',
          component: HomeView,
        },
        {
          name: 'order',
          path: '/order',
          component: OrderView,
        },
        {
          name: 'me',
          path: '/me',
          component: MeView,
        },
      ],
    },
  ],
})

export default router
