<script>
    import Footer from '../components/footer.svelte'
    import headerImg from '../img/new-trailer.jpg'
    
    let lightboxShow = false
    let lightboxImage = ''

    const images = [
        {
            src: '/img/operations/new-trailer.jpg',
            double: true,
            textTitle: 'The Best in the West',
            text: [
                `Southern Oregon Food & Beverage is the finest provider of fair food in Southern Oregon and Northern California. With over 30 years of experience, our hard working team provides great food at a great price!`,
                `With our iconic food stands, a flexible crew, and years of experience, we are able to provide concessions for events of any size.`,
                `If you're interested in having us serve at your event you can contact us in a variety of ways from our Contact Page.`,
                // `We strongly support the industry and are members of Western Fairs Association, Oregon Fair Association, National Independent Concessionaires Association (NICA), and International Association of Fairs and Expositions (IAFE).`,
                // `Daryl is currently serving as the President of the National Independent Concessionaires Association`,
            ],
        },
        {
            src: '/img/operations/sausage-trailer.jpg',
        },
        {
            src: '/img/operations/red_crew.jpg',
        },
        {
            src: '/img/operations/corndog-trailer.jpg',
        },
        {
            src: '/img/operations/yreka.jpg',
        },
        {
            src: '/img/operations/deschutes.jpg',
        },
        {
            src: '/img/operations/kurly-fries.jpg',
        },
        {
            src: '/img/operations/yreka2.jpg',
            double: true,
            textTitle: 'Strong Together',
            text: [
                `We strongly support the industry and are members of:`,
                `The Western Fairs Association`,
                `Oregon Fair Association`,
                `National Independent Concessionaires Association (NICA)`,
                `International Association of Fairs and Expositions (IAFE).`,
                `Daryl is currently serving as the President of NICA.`,
            ]
        },
        {
            src: '/img/operations/50ft.png',
        },
        {
            src: '/img/operations/gus_daryl.jpg',
        },
    ]

    function lightbox(img) {
        console.log(img)
        lightboxImage = img
        lightboxShow = true
    }

    function lightboxHide(e) {
        lightboxShow = false
    }
</script>

<main>
    <div class="headerSection">
        <!-- <img src={headerImg} class="headerImage" /> -->
        <h1 class="headerTitle">Southern Oregon Food & Beverage</h1>
    </div>
    
    <div class="homeText" style="display: none;">
        <h2>The Best in the West</h2>
        <p>Southern Oregon Food & Beverage is the finest provider of fair food in Southern Oregon and Northern California. With over 30 years of experience, our hard working team provides great food at a great price!</p>
        <p>With our iconic food stands, a flexible crew, and years of experience, we are able to provide concessions for events of any size.</p>
        <!-- <p>If you're interested in having us serve at your event you can contact us in a variety of ways from our Contact Page.</p> -->
        <p>We strongly support the industry and are members of Western Fairs Association, Oregon Fair Association, National Independent Concessionaires Association (NICA), and International Association of Fairs and Expositions (IAFE).</p>
        <p>Daryl is currently serving as the President of the National Independent Concessionaires Association</p>
    </div>

    <section class="homeGallery">
        {#each images as image, imageIndex}
            <div class="galleryItem" class:double={image.double} on:click={() => lightbox(image.src)}>
                <img src={image.src} class="galleryItemImage" />
                {#if image.text}
                <div class="galleryText">
                    <h2 class="galleryTextTitle">{image.textTitle}</h2>
                    {#each image.text as text}
                        <p>{text}</p>
                    {/each}
                </div>
                {/if}
            </div>
        {/each}
    </section>

    <div class="lightbox" class:show={lightboxShow} on:click|stopPropagation={lightboxHide}>
        <div class="lightboxInner">
            <img src={lightboxImage} class="lightboxImage" />
            <div class="closeButton">x</div>
            <a href={lightboxImage} target="__blank" class="fullscreenButton">View Fullscreen >></a>
        </div>
    </div>
</main>
<Footer />

<style lang="less">
.headerSection {
    display: block;
    height: 95vh;
    position: relative;
    background-image: url('/img/new-trailer.jpg');
    background-size: cover;
    background-position-x: center;

    @media screen and (max-width: 720px) {
        height: calc(95vh - 110px);
    }

    .headerTitle {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        color: #fff;
        width: 100%;
        font-size: 5.5vw;
        padding: 0px 20px;
        text-shadow: 6px 6px 10px #000;

        @media screen and (max-width: 720px) {
            font-size: 10vw;
            padding: 0px 20px;
        }
    }
}

// .homeText {
//     background-color: #02213c;
//     padding: 50px;
//     line-height: 2em;
//     font-size: 1.5em;
//     color: #fff;

//     h2 {
//         text-align: center;
//     }
// }

.homeGallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }

    .galleryItem {
        // min-height: 300px;
        width: 100%;
        aspect-ratio: 1;
        position: relative;
        overflow: hidden;
        user-select: none;
        
        &.double {
            grid-column: span 2;
            grid-row: span 2;

            @media screen and (max-width: 1024px) {
                grid-column: span 1;
                grid-row: span 1;
            }
        }
        
        &:hover {
            cursor: pointer;
            .galleryItemImage {
                transform: scale(1.1);
             
                @media screen and (max-width: 720px) {
                    transform: none;
                }
            }
        }
        
        .galleryItemImage {
            display: block;
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            transition: transform 0.5s;
        }

        .galleryText {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 100;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 5%;
            font-size: 24px;

            p {
                margin-bottom: 15px;
            }

            @media screen and (max-width: 1024px) {
                font-size: 18px;
            }

            @media screen and (max-width: 720px) {
                padding: 15px;
                line-height: 1.4em;
            }

            .galleryTextTitle {
                text-align: center;
                font-size: 36px;

                @media screen and (max-width: 720px) {
                    padding: 10px 0px;
                    font-size: 28px;
                }
            }
        }
        
        &:after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 90;
            box-shadow: inset 0px 0px 10px 0px #000;
        }
    }
}

.lightbox {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 500;
    user-select: none;

    &.show {
        display: block;
    }

    .lightboxInner {
        position: fixed;
        max-width: 90vw;
        max-height: 90vh;
        outline: 10px solid #fff;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);

        @media screen and (max-width: 1024px) {
            width: 95%;
            outline-width: 5px;
        }
        
        .lightboxImage {
            width: 100%;
            display: block;
        }
    
        .closeButton {
            position: absolute;
            top: -25px;
            right: -25px;
            background-color: #fff;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 35px;
            border-radius: 100px;
            color: #000;
            font-size: 30px;
            cursor: pointer;
            outline: 2px solid #000;

            @media screen and (max-width: 1024px) {
                right: 0px;
                top: -50px;
            }
        }

        .fullscreenButton {
            color: #000;
            display: block;
            position: absolute;
            right: 10px;
            bottom: -25px;
            font-size: 24px;
            // text-shadow: 2px 2px 0px #000;
            background-color: #fff;
            border-radius: 10px;
            padding: 5px 15px;

            @media screen and (max-width: 1024px) {
                right: 0px;
                bottom: -60px;
            }
        }
    }
}
</style>
