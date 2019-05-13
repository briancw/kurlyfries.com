import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import defaultLayout from './layouts/default.vue'

const home = loadPage('home')
const photos = loadPage('photos')
const contact = loadPage('contact')
const events = loadPage('events')
const menus = loadPage('menus')
const recommendations = loadPage('recommendations')
const affiliates = loadPage('affiliates')
const fourOhFour = loadPage('fourohfour')

const routes = [
    {path: '/', component: defaultLayout, children: [
        {path: '/', component: home, name: 'home'},
        {path: '/photos', component: photos, name: 'photos'},
        {path: '/contact', component: contact, name: 'contact'},
        {path: '/events', component: events, name: 'events'},
        {path: '/menus', component: menus, name: 'menus'},
        {path: '/recommendations', component: recommendations, name: 'recommendations'},
        {path: '/affiliates', component: affiliates, name: 'affiliates'},
        {path: '/404', component: fourOhFour},
    ]},
    {path: '/', component: defaultLayout, children: [
        {path: '*', component: fourOhFour, meta: {isFourOhFour: true}},
    ]},
]

/**
 * Helper function for loading components
 * @param  {String} templateName    Name of the component to load
 * @return {Function<Promise>}      A Promise, in an function, in an enigma
 */
function loadPage(templateName) {
    return () => import(`./pages/${templateName}.vue`)
}

let options = {
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {x: 0, y: 0}
    },
}

export default () => new Router(options)
