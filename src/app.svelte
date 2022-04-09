<script>
    import './styles/reset.less'
    import {Router, Route} from 'svelte-navigator'
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

<main>
    <div class="page_wrapper">
        <Menu />
        <div class="content_wrapper">
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

    </div>
</main>

<style lang="less">
:global(body) {
    background-color: #054278;
    font-family: "Open Sans";
}
</style>
