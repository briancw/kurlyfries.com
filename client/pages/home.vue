<template>
    <div>
        <h1>Southern Oregon Food &amp; Beverage</h1>
        <p>Southern Oregon Food &amp; Beverage is the finest provider of fair food in Southern Oregon and Northern California. With over 25 years of experience, our hard working team provides great food at a great price!</p>
        <img class="home_trailer_img" src="~img/trailerfrontpage.png" alt="Our most versatile trailer"/>
        <p>Over the past 25 years we've sold a wide variety of food, from our signature Fresh Giant Kurly Fries, to our famous Polish Log Dog. From our enormous jumbo burritos, to sizzling teriyaki chicken sticks, we've tried almost everything. After great success with some items, and less with others, we've worked out exactly how to best serve our customers and our community.</p>
        <p>With a large arrangement of tents and trailers, we are able to serve at anything from state fairs to small festivals. If you're interested in having us serve at your event you can contact us in a variety of ways from our Contact Page.</p>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<style lang="scss">

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
