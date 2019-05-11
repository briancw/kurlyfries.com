<template>
    <div class="page_wrapper">
        <main-header></main-header>
        <div class="content_wrapper">
            <router-view></router-view>
            <div style="height: 30px; clear: both;"></div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import mainHeader from './header.vue'
import mainFooter from './footer.vue'

export default {
    name: 'App',
    components: {
        mainHeader,
        mainFooter,
    },
}
</script>

<style lang="less">
@import '../styles/_main.less';
@import '../styles/mixins.less';

body {
    background-color: #054278;
}

.page_wrapper {
    max-width: 900px;
    width: 100%;
    display: block;
    margin: 0px auto;

    .content_wrapper {
        background-color: #f7f2df;
        padding: 10px 30px;
        font-size: 16px;
        font-family: Tahoma;

        h1 {
            .crimson();
            border-bottom: 2px solid #222222;
            text-align: center;
            font-size: 56px;
            font-variant: small-caps;
            margin-bottom: 10px;

            @media screen and (max-width: 900px) {
                font-size: 40px;
            }

            @media screen and (max-width: 360px) {
                font-size: 34px;
            }
        }

        p {
            margin: 10px auto;
            text-indent: 25px;
            line-height: 22px;
        }
    }
}

</style>
