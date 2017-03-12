<template>
    <div>
    	<h1>Some Images of our Operation</h1>
    	<img class="gallery left" src="~img/operations/yreka.jpg" alt="A 30ft tent in Yreka, CA.">
        <img class="gallery right" src="~img/operations/deschutes.jpg" alt="Another 30ft tent in Deschutes County, OR">
        <br />

        <img class="gallery left" src="~img/operations/red_crew.jpg" alt="One of our crews in new red uniforms">
        <img class="gallery right" src="~img/operations/tule.jpg" alt="Our popular Mix it up frozen drink stand">
        <br />

        <img class="gallery left" src="~img/operations/trailer.jpg" alt="One of our top of the line food trailers">
        <img class="gallery right" src="~img/operations/yreka2.jpg" alt="One of our standard 20ft tents">
        <br />

        <div style="text-align: center;">
        	<img class="gallery center full" src="~img/operations/50ft.png" alt="50 foot food stand at the Jackson County Fair">
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
