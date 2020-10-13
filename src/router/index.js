import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/father',
    name: 'Father',
    component: () => import('../views/1.Child-to-Father-emit/Father.vue')
  },{
    path: '/slotShow',
    name: 'SlotShow',
    component: () => import('../views/2.Slot/SlotShow.vue')
  },{
    path: '/sync',
    name: 'Index',
    component: () => import('../views/3.Sync/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
