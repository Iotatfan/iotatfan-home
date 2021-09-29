import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/portofolio',
  //   name: 'Portofolio',
  //   component: () => import('../views/Portofolio.vue'),
  //   meta: { transitionName: 'zoom'}
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
