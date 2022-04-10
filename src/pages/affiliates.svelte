<script>
import Footer from '../components/footer.svelte'
</script>

<main class="affiliatesPage">
    <h1 class="affiliatesTitle">Some of Our Dear Friends</h1>

    <div class="affiliate">
        <a href="http://taylorsausage.com" target="_blank" class="affiliateLink">TaylorSausage.com</a>
        <br />
        We are proud to serve Taylor's Gourmet Sausages, a Fair Favorite.
    </div>

    <div class="affiliate">
        <a href="http://www.westernfairs.org/" target="_blank" class="affiliateLink">Western Fairs Association</a>
    </div>

    <div class="affiliate">
        <a href="http://oregonfairs.org/index.php?bypassCookie=1" target="_blank" class="affiliateLink">Oregon Fair Association</a>
    </div>

    <div class="affiliate">
        <a href="http://www.nicainc.org/" target="_blank" class="affiliateLink">National Independent Concessionaires Association (NICA)</a>
    </div>

    <div class="affiliate">
        <a href="https://www.fairsandexpos.com/" target="_blank" class="affiliateLink">International Association of Fairs and Expositions (IAFE)</a>
    </div>
</main>
<Footer />

<style lang="less">
.affiliatesPage {
    text-align: center;
    color: #fff;

    @media screen and (min-width: 720px) {
        margin-top: 50px;
    }

    .affiliatesTitle {
        padding: 25px 0px;
    }

    .affiliate {
        margin-bottom: 20px;

        .affiliateLink {
            display: inline-block;
            color: #fff;
            padding: 5px 0px;
        }
    }
}
</style>
