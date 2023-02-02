import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ListItems',
      name: 'ListItems',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/ListItems.vue')
    },
    {
      path: '/ConditionalRendering',
      name: 'ConditionalRendering',
      component: ()=>import('../components/ConditionalRendering.vue')
    },
    {
      path: '/Events',
      name: 'Events',
      component: ()=>import('../components/Events.vue')
    },
    {
      path: '/Form',
      name: 'Form',
      component: ()=>import('../components/Form.vue')
    }
  ]
})

export default router
