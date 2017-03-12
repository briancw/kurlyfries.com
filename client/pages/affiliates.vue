<template>
    <div class="affiliates_page">
        <h1>Affiliates</h1>

        <a href="http://taylorsausage.com" target="_blank" class="affiliate_link">
            TaylorSausage.com
        </a>
        <br />
        We are proud to serve Taylor's Gourmet Sausages, a Fair Favorite.
    </div>
</template>

<script>
export default {
    name: 'affiliates',
}
</script>

<style lang="scss">
.affiliates_page {
    text-align: center;

    .affiliate_link {
        display: inline-block;
        color: #222;
        padding: 5px 0px;
    }
}
</style>
