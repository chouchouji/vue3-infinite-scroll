import { createRouter, createWebHistory } from 'vue-router'

const EqualHeight = () => import('./views/EqualHeight.vue')
const EqualWidth = () => import('./views/EqualWidth.vue')
const DynamicHeight = () => import('./views/DynamicHeight.vue')
const ScrollToIndex = () => import('./views/ScrollToIndex.vue')
const ScrollToOffset = () => import('./views/ScrollToOffset.vue')

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/equal/height' },
    {
      path: '/equal/height',
      component: EqualHeight
    },
    {
      path: '/equal/width',
      component: EqualWidth
    },
    {
      path: '/dynamic/height',
      component: DynamicHeight
    },
    {
      path: '/scroll/index',
      component: ScrollToIndex
    },
    {
      path: '/scroll/offset',
      component: ScrollToOffset
    }
  ]
})

export default router
