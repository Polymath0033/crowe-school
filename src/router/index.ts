import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { data } from '../lib/data'
import { modifiedLink } from '@/helpers/route-helper'
import CroweDirector from '../components/news/pages/CroweDirector.vue'
import ADayDirector from '../components/news/pages/ADayDirector.vue'
console.log(modifiedLink(data[0].title))
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
    {
      path: `/news/${modifiedLink(data[0].title)}`,
      name: data[0].title,
      component: () => import('../components/news/pages/CroweDirector.vue'),
      meta: { title: data[0].title }
    },
    {
      path: `/news/${modifiedLink(data[1].title)}`,
      name: data[1].title,
      component: () => import('../components/news/pages/ADayDirector.vue'),
      meta: { title: data[1].title }
    },
    {
      path: `/news/${modifiedLink(data[2].title)}`,
      name: data[2].title,
      component: () => import('../components/news/pages/PreviewAdmission.vue'),
      meta: { title: data[2].title }
    },
    {
      path: `/news/${modifiedLink(data[3].title)}`,
      name: data[3].title,
      component: () => import('../components/news/pages/TeachersSchoolFront.vue'),
      meta: { title: data[3].title }
    },
    {
      path: `/news/${modifiedLink(data[4].title)}`,
      name: data[4].title,
      component: () => import('../components/news/pages/ParadingWithGuns.vue'),
      meta: { title: data[4].title }
    },
    {
      path: `/news/${modifiedLink(data[5].title)}`,
      name: data[5].title,
      component: () => import('../components/news/pages/StudentsStrolling.vue'),
      meta: { title: data[5].title }
    }
  ]
})
/*  { path: '/news/:news', name: 'News', component: () => import('../components/NewsPage.vue') } */
router.beforeEach((to, from, next) => {
  //@ts-ignore
  document.title = to.meta.title ?? "Crowe Int'l Schools"
  next()
})
export default router
