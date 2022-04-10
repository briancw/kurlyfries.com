<script>
import Footer from '../components/footer.svelte'
</script>

<main class="ohNo">
    <div>
        <h1>Error 404</h1>
        That page could not be found.<br>
        Not sure how you ended up here.<br>
        Just click above to get where you want to be.
    </div>
</main>
<Footer />

<style lang="less">
.ohNo {
    color: #fff;
    text-align: center;
    padding: 30px;
    font-size: 24px;

    @media screen and (min-width: 720px) {
        margin-top: 50px;
    }
}
</style>