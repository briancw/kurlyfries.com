<template>
    <footer>
        &copy; 2017 Southern Oregon Food &amp; Beverage
    </footer>
</template>

<script>
export default {
    name: 'footer',
}
</script>

<style lang="scss">
@import '../styles/mixins.scss';
footer {
    @include crimson;
    border-top: 2px solid #222222;
    background-color: #f7f2df;
    font-size: 24px;
    padding: 20px 0px;
    text-align: center;
}
</style>
