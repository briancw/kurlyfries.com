<script>
    import headerImg from '../img/new-trailer.jpg'
    // import contentImage from '../img/operations/kurly-fries.jpg'
    // import contentImage2 from '../img/operations/red-crew.jpg'
</script>

<main>
    <div class="headerSection">
        <img src={headerImg} class="headerImage" />
        <h1 class="headerTitle">Southern Oregon Food &amp; Beverage</h1>
    </div>
    
    <section class="homeContent">
        <div class="gridLeft">
            <div class="gridImage imageLeft"></div>
        </div>
        <div class="gridRight">
            <div class="gridImage imageRight"></div>
            <div class="homeContentText">
                <p>
                    Southern Oregon Food &amp; Beverage is the finest provider of fair food in Southern Oregon and Northern California.
                    With over 30 years of experience, our hard working team provides great food at a great price!
                </p>
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
        </div>
    </section>
</main>

<style lang="less">
.headerSection {
    display: block;
    min-height: 80%;
    position: relative;
    // background-image: url('{headerImg}');

    .headerImage {
        width: 100%;
        min-height: 80%;
        display: block;
    }
    .headerTitle {
        position: absolute;
        top: 50%;
        text-align: center;
        color: #fff;
        width: 100%;
        font-size: 72px;
        text-shadow: 3px 3px 0px #000;
    }
}
.homeContent {
    display: flex;

    .gridLeft, .gridRight {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 50%;
        position: relative;
    }
    .gridImage {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        z-index: 50;
        position: absolute;
    }
    .imageLeft {
        background-image: url('/img/operations/red_crew.jpg');
    }
    .imageRight {
        background-image: url('/img/operations/kurly-fries.jpg');
    }

    .homeContentText {
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        z-index: 60;
    }
}
</style>
