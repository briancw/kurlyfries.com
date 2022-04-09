<script>
    import './styles/reset.less'
    import {Router, Route} from 'svelte-navigator'
    import Menu from './components/menu.svelte'
    import HomePage from './pages/home.svelte'
    import AboutPage from './pages/about.svelte'
</script>

<main>
    <Menu />
    <Router>
        <Route path="/">
            <HomePage />
        </Route>
        <Route path="/about">
            <AboutPage />
        </Route>
    </Router>
</main>

<style lang="less">
</style>
