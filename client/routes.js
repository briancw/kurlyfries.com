import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * Helper function for loading components
 * @param  {String} templateName    Name of the component to load
 * @return {Function<Promise>}       A Promise, in an function, in an enigma
 */
function loadPage(templateName) {
    // TODO switch to import when that's a bit more stable
    return () => System.import(`./pages/${templateName}.vue`)
}

const home = loadPage('home')
const photos = loadPage('photos')
const contact = loadPage('contact')
const events = loadPage('events')
const menus = loadPage('menus')
const reccomendations = loadPage('reccomendations')
const affiliates = loadPage('affiliates')

const routes = [
    {path: '/', component: home, meta: {title: 'Welcome'}},
    {path: '/photos', component: photos, meta: {title: 'Welcome'}},
    {path: '/contact', component: contact, meta: {title: 'contact'}},
    {path: '/events', component: events, meta: {title: 'events'}},
    {path: '/menus', component: menus, meta: {title: 'menus'}},
    {path: '/reccomendations', component: reccomendations, meta: {title: 'reccomendations'}},
    {path: '/affiliates', component: affiliates, meta: {title: 'affiliates'}},
]

let router = new Router({
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     let ret = { x: 0, y: 0 }
    //     if (to.hash) {
    //         ret = {selector: to.hash}
    //     } else if (savedPosition) {
    //         ret = savedPosition
    //     }
    //     return ret
    // },
    routes,
})

// const default_title = 'Grab Hub'
//
// router.beforeEach(function(to, from, next) {
//     document.title = `${default_title}`
//
//     if (to.meta && to.meta.title) {
//         document.title = to.meta.title
//     }
//
//     next()
// })

export default router
