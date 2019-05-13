<template>
    <footer>
        &copy; Southern Oregon Food &amp; Beverage
    </footer>
</template>

<script>
export default {
    name: 'default-footer',
}
</script>

<style lang="less">
@import '../styles/mixins.less';
footer {
    .crimson();
    border-top: 2px solid #222222;
    background-color: #f7f2df;
    font-size: 24px;
    padding: 20px 0px;
    text-align: center;
}
</style>
