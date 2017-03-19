<template>
    <menu class="menu">
        <router-link to="/" class="menu_link">Home</router-link>
        <router-link to="/photos" class="menu_link">Photos</router-link>
        <router-link to="/contact" class="menu_link">Contact</router-link>
        <router-link to="/events" class="menu_link">Events</router-link>
        <router-link to="/menus" class="menu_link">Menus</router-link>
        <router-link to="/reccomendations" class="menu_link">Reccomendations</router-link>
        <router-link to="/affiliates" class="menu_link">Affiliates</router-link>
    </menu>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../styles/mixins.scss';
.menu {
    text-align: center;

    .menu_link {
        @include roboto;
        color: #fff;
        font-size: 24px;
        text-decoration: none;
        display: inline-block;
        padding: 10px 14px;

        @media screen and (max-width: 900px) {
            font-size: 18px;
        }

        @media screen and (max-width: 360px) {
            font-size: 14px;
        }

        &:hover {
            color: yellow;
        }
    }
}
</style>
