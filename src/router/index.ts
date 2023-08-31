import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: "Crowe Int'l schools" }
    },
    {
      path: '/about-us',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: "About us - Crowe Int'l schools" }
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/Career.vue'),
      meta: { title: "Careers - Crowe Int'l schools" }
    },
    {
      path: '/admissions',
      name: 'admissions',
      component: () => import('../views/Admission.vue'),
      meta: { title: "Admissions - Crowe Int'l schools" }
    },
    {
      path: '/media-zone',
      name: 'media-zone',
      component: () => import('../views/Media.vue'),
      meta: { title: "Media - Crowe Int'l schools" }
    },
    {
      path: '/faq',
      name: 'faqs',
      component: () => import('../views/FAQs.vue'),
      meta: { title: "FAQ - Crowe Int'l schools" }
    },
    {
      path: '/payments',
      name: 'payments',
      component: () => import('../views/Payments.vue'),
      meta: { title: "Payments - Crowe Int'l schools" }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { title: "Contact - Crowe Int'l schools" }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
      meta: { title: "News -  Crowe Int'l schools" }
    },
    { path: '/news/:news', name: 'News', component: () => import('../components/NewsPage.vue') }
  ]
})
router.beforeEach((to, from, next) => {
  //@ts-ignore
  document.title = to.meta.title ?? "Crowe Int'l Schools"
  next()
})
export default router
