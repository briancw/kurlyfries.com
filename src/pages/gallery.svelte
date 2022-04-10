<script>
    import Footer from '../components/footer.svelte'

    let lightboxShow = false
    let lightboxImage = ''

    const images = [
        {
            src: '/img/operations/newSausageTrailer.jpg',
        },
        {
            src: '/img/operations/newTrailer.jpg',
        },
        {
            src: '/img/operations/darylAndKristen.jpg',
        },
        {
            src: '/img/operations/darylAndAlaina.jpg',
        },
        {
            src: '/img/operations/alaina.jpg',
        },
        {
            src: '/img/operations/oakland.jpg',
        },
        {
            src: '/img/operations/sausageTrailer.jpg',
        },
        {
            src: '/img/operations/redCrew.jpg',
        },
        {
            src: '/img/operations/corndogTrailer.jpg',
        },
        {
            src: '/img/operations/yreka.jpg',
        },
        {
            src: '/img/operations/deschutes.jpg',
        },
        {
            src: '/img/operations/kurlyFries.jpg',
        },
        {
            src: '/img/operations/yreka2.jpg',
        },
        {
            src: '/img/operations/50ft.png',
        },
        {
            src: '/img/operations/gusDaryl.jpg',
        },
        {
            src: '/img/operations/weddingParty.jpg',
        },
        {
            src: '/img/operations/wedding.jpg',
        },
        {
            src: '/img/operations/sausageTrailer.jpg',
        },
        {
            src: '/img/operations/sausage.jpg',
        },
        {
            src: '/img/operations/newSausageTrailerInside.jpg',
        },
        {
            src: '/img/operations/oakland2.jpg',
        },
    ]

    function lightbox(img) {
        lightboxImage = img
        lightboxShow = true
    }

    function lightboxHide(e) {
        lightboxShow = false
    }
</script>

<main class="galleryPage">
    <section class="homeGallery">
        {#each images as image, imageIndex}
            <div class="galleryItem" class:double={image.double} on:click={() => lightbox(image.src)}>
                <img src={image.src} alt={image.alt || 'operation image'} class="galleryItemImage" />
                {#if image.text}
                <div class="galleryText">
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
            <img src={lightboxImage} alt="lightbox zoom" class="lightboxImage" />
            <div class="closeButton">x</div>
        </div>
    </div>

</main>
<Footer />

<style lang="less">
.galleryPage {
    @media screen and (min-width: 720px) {
        margin-top: 50px;
    }
}

.homeGallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
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
        }
        
        &:hover {
            cursor: pointer;
            .galleryItemImage {
                transform: scale(1.1);
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
            background-color: rgba(0, 0, 0, 0.5);
            padding: 10%;
            font-size: 24px;
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
            top: -20px;
            right: -20px;
            background-color: #fff;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 35px;
            border-radius: 100px;
            color: #000;
            font-size: 30px;
            cursor: pointer;
        }
    }
}
</style>
