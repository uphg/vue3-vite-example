import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Hi from '../components/Hi.vue'

const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/hi',
      component: Hi
    }
  ]
})