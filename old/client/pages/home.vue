<template>
    <div>
        <h1>Southern Oregon Food &amp; Beverage</h1>
        <p>
            Southern Oregon Food &amp; Beverage is the finest provider of fair food in Southern Oregon and Northern California.
            With over 30 years of experience, our hard working team provides great food at a great price!
        </p>
        <img class="home_trailer_img" src="/img/operations/new-trailer.jpg" alt="Our most versatile trailer"/>
        <p>
            Over the past 30 years we've sold a wide variety of food, from our signature Fresh Giant Kurly Fries, to our famous Hand Dipped Corn Dogs.
            From our enormous jumbo burritos, to deep fried candy bars and funnel cakes, we have the flexibility to serve the perfect menu at any event.
        </p>
        <p>
            With a large arrangement of tents and trailers, we are able to serve at anything from state fairs to small festivals.
            If you're interested in having us serve at your event you can contact us in a variety of ways from our Contact Page.
        </p>
        <p>
            We strongly support the industry and are members of Western Fairs Association, Oregon Fair Association, National Independent Concessionaires Association (NICA), and International Association of Fairs and Expositions (IAFE).
        </p>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<style lang="less">

.home_trailer_img {
    width: 50%;
    margin: 10px;
    float: right;
    border: 2px solid;

    @media screen and (max-width: 600px) {
        display: none;
    }
}
</style>
