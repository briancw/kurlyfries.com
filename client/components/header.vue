<template>
    <header>
        <div id="logo"></div>
        <main-menu></main-menu>
    </header>
</template>

<script>
import mainMenu from './menu.vue'
export default {
    name: 'header',
    components: {
        mainMenu,
    },
}
</script>

<style lang="less">
#logo {
    background-image: url('~img/header.png');
    padding-top: 50px;
    font-size: 52px;
    color: yellow;
    text-align: center;
    width: 100%;
    // height: 150px;
    height: 350px;
}
</style>
