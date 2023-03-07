import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/404Page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('../views/CalculateView.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('../views/InventoryView.vue')
  },
  {
    path: '/loan',
    name: 'loan',
    component: () => import('../views/LoanRatesView.vue')
  },
  {
    path: '/videos',
    name: 'videos',
    component: () => import('../views/VehicleVideosView.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/QuizView.vue')
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/car/:id',
    name: 'car',
    component: () => import('../views/CarView.vue')
  },
  {
    name: '404',
    path: '/:pathMatch(.*)',
    component: PageNotFound
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
      return to = top
  }
})

export default router
