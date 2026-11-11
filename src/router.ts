import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Gallery from './pages/Gallery.vue'
import Contact from './pages/Contact.vue'
import Events from './pages/Events.vue'
import Menus from './pages/Menus.vue'
import Recommendations from './pages/Recommendations.vue'
import Affiliates from './pages/Affiliates.vue'
import Fourohfour from './pages/Fourohfour.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
    { path: '/events', component: Events },
    { path: '/menus', component: Menus },
    { path: '/recommendations', component: Recommendations },
    { path: '/affiliates', component: Affiliates },
    { path: '/:pathMatch(.*)*', component: Fourohfour },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || (to.hash ? { el: to.hash } : { top: 0 })
  },
})
