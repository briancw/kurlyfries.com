<template>
    <div>
    	<h1>Some Images of our Operation</h1>
    	<img class="gallery left" src="~img/operations/new-trailer.jpg" alt="Kurly Fry concessions trailer">
        <img class="gallery right" src="~img/operations/sausage-trailer.jpg" alt="Sausage concessions trailer">
        
        <img class="gallery left" src="~img/operations/red_crew.jpg" alt="One of our crews in new red uniforms">
        <img class="gallery right" src="~img/operations/corndog-trailer.jpg" alt="Corn Dog concession trailer">
        <br />

        <img class="gallery left" src="~img/operations/yreka.jpg" alt="30 foot tent style concessions stand">
        <img class="gallery right" src="~img/operations/deschutes.jpg" alt="30 foot tent style concessions stand">
        <br />

        <img class="gallery left" src="~img/operations/kurly-fries.jpg" alt="Fresh Giant Kurly Fries">
        <img class="gallery right" src="~img/operations/yreka2.jpg" alt="20 foot tent style concessions stand">
        <br />

        <div style="text-align: center;">
        	<img class="gallery center full" src="~img/operations/50ft.png" alt="50 foot tent style concessions stand">
            <br />
        	<img class="gallery center" src="~img/operations/gus_daryl.jpg" alt="Founder Daryl Whicheloe and Son.">
            <br />
    	</div>
    </div>
</template>

<script>
export default {
    name: 'photos',
}
</script>

<style lang="scss">
.gallery {
    width: 48%;
    float: left;
    border: 2px solid #4d0700;
    margin-bottom: 20px;

    &.left {
        margin-right: 2%;
    }

    &.right {
        margin-left: 2%;
    }

    &.center {
        float: none;
    }

    &.full {
        width: 100%;
    }
}
</style>
