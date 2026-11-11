<script setup lang="ts">
import Footer from '../components/Footer.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import type { GalleryImage } from '../types'
import header from '../img/header.jpg'

const images: GalleryImage[] = [
  {
    src: '/img/operations/newTrailer.jpg',
    alt: 'SOFAB main food trailer',
    double: true,
    textTitle: 'The Best in the West',
    text: [
      `Southern Oregon Food & Beverage is the finest provider of fair food in Southern Oregon and Northern California. With over 30 years of experience, our hard working team provides great food at a great price!`,
      `With our iconic food stands, a flexible crew, and years of experience, we are able to provide concessions for events of any size.`,
      `If you're interested in having us serve at your event you can contact us in a variety of ways from our Contact Page.`,
    ],
  },
  {
    src: '/img/operations/darylAndKristen.jpg',
    alt: 'Daryl and Kristen',
  },
  {
    src: '/img/operations/redCrew.jpg',
    alt: 'The SOFAB crew in red shirts',
  },
  {
    src: '/img/operations/corndogTrailer.jpg',
    alt: 'Corn dog trailer',
  },
  {
    src: '/img/operations/yreka.jpg',
    alt: 'SOFAB concessions in Yreka',
  },
  {
    src: '/img/operations/newSausageTrailer.jpg',
    alt: 'Taylor’s sausage trailer',
  },
  {
    src: '/img/operations/kurlyFries.jpg',
    alt: 'Giant kurly fries stand',
  },
  {
    src: '/img/operations/yreka2.jpg',
    alt: 'Food stands at the Siskiyou Golden Fair',
    double: true,
    textTitle: 'Strong Together',
    text: [
      `We strongly support the industry and are members of:`,
      `The Western Fairs Association`,
      `Oregon Fair Association`,
      `National Independent Concessionaires Association (NICA)`,
      `International Association of Fairs and Expositions (IAFE).`,
      `Daryl is currently serving as the President of NICA.`,
    ],
  },
  {
    src: '/img/operations/50ft.png',
    alt: 'SOFAB 50-foot food stand',
  },
  {
    src: '/img/operations/alaina.jpg',
    alt: 'Alaina at the food stand',
  },
]
</script>

<template>
  <main>
    <div
      class="relative h-[calc(95vh-110px)] bg-cover bg-top min-[721px]:h-[95vh]"
      :style="{ backgroundImage: `url(${header})` }"
    >
      <h1
        class="absolute top-1/2 w-full -translate-y-1/2 px-5 text-center text-[10vw] font-bold text-white [text-shadow:6px_6px_10px_#000] min-[721px]:text-[5.5vw]"
      >
        Southern Oregon Food &amp; Beverage
      </h1>
    </div>
    <PhotoGallery :images="images" home />
  </main>
  <Footer />
</template>
