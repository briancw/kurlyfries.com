<script>
    import img1 from '../img/operations/new-trailer.jpg'
    import img2 from '../img/operations/sausage-trailer.jpg'
    import img3 from '../img/operations/red_crew.jpg'
    import img4 from '../img/operations/corndog-trailer.jpg'
    import img5 from '../img/operations/yreka.jpg'
    import img6 from '../img/operations/deschutes.jpg'
    import img7 from '../img/operations/kurly-fries.jpg'
    import img8 from '../img/operations/yreka2.jpg'
    import img9 from '../img/operations/50ft.png'
    import img10 from '../img/operations/gus_daryl.jpg'
</script>

<main class="gallery_page">
    <h1>Some Images of our Operation</h1>
    <img class="gallery left" src={img1} alt="Kurly Fry concessions trailer">
    <img class="gallery right" src={img2} alt="Sausage concessions trailer">
    
    <img class="gallery left" src={img3} alt="One of our crews in new red uniforms">
    <img class="gallery right" src={img4} alt="Corn Dog concession trailer">
    <br />

    <img class="gallery left" src={img5} alt="30 foot tent style concessions stand">
    <img class="gallery right" src={img6} alt="30 foot tent style concessions stand">
    <br />

    <img class="gallery left" src={img7} alt="Fresh Giant Kurly Fries">
    <img class="gallery right" src={img8} alt="20 foot tent style concessions stand">
    <br />

    <div style="text-align: center;">
        <img class="gallery center full" src={img9} alt="50 foot tent style concessions stand">
        <br />
        <img class="gallery center" src={img10} alt="Founder Daryl Whicheloe and Son.">
        <br />
    </div>
</main>

<style lang="less">
.gallery {
    width: 50%;
    float: left;
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
