<script>
    import './styles/reset.less'
    import {Router, Route} from 'svelte-navigator'
    import {GoogleAnalytics} from '@beyonk/svelte-google-analytics'

    // Pages
    import Menu from './components/menu.svelte'
    import HomePage from './pages/home.svelte'
    import GalleryPage from './pages/gallery.svelte'
    import ContactPage from './pages/contact.svelte'
    import EventsPage from './pages/events.svelte'
    import MenusPage from './pages/menus.svelte'
    import RecommendationsPage from './pages/recommendations.svelte'
    import AffiliatesPage from './pages/affiliates.svelte'
    import FourOhFourPage from './pages/fourohfour.svelte'
</script>

<GoogleAnalytics properties={['UA-28431964-4']} />
<Menu />
<div class="pageWrapper">
    <Router>
        <Route path="/">
            <HomePage />
        </Route>
        <Route path="/gallery">
            <GalleryPage />
        </Route>
        <Route path="/contact">
            <ContactPage />
        </Route>
        <Route path="/events">
            <EventsPage />
        </Route>
        <Route path="/menus">
            <MenusPage />
        </Route>
        <Route path="/recommendations">
            <RecommendationsPage />
        </Route>
        <Route path="/affiliates">
            <AffiliatesPage />
        </Route>
        <Route>
            <FourOhFourPage />
        </Route>
    </Router>
</div>

<style lang="less">
:global(body) {
    background-color: #054278;
    font-family: "Open Sans";
}
</style>
