<script>
    import {link} from 'svelte-navigator'
</script>

<nav class="menu">
    <a use:link href="/" class="menu_link">Home</a>
    <a use:link href="/gallery" class="menu_link">Gallery</a>
    <a use:link href="/contact" class="menu_link">Contact</a>
    <a use:link href="/events" class="menu_link">Events</a>
    <a use:link href="/menus" class="menu_link">Menus</a>
    <a use:link href="/recommendations" class="menu_link">Recommendations</a>
    <a use:link href="/affiliates" class="menu_link">Affiliates</a>
</nav>

<style lang="less">
.menu {
    text-align: center;
    font-family: "Open Sans";
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 150;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);

    .menu_link {
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