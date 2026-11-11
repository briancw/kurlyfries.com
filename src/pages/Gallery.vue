<script setup lang="ts">
import Footer from '../components/Footer.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import type { GalleryImage } from '../types'

const images: GalleryImage[] = [
  {
    src: '/img/operations/newSausageTrailer.jpg',
    alt: 'Taylor’s sausage trailer',
  },
  {
    src: '/img/operations/newTrailer.jpg',
    alt: 'SOFAB main food trailer',
  },
  {
    src: '/img/operations/darylAndKristen.jpg',
    alt: 'Daryl and Kristen',
  },
  {
    src: '/img/operations/darylAndAlaina.jpg',
    alt: 'Daryl and Alaina',
  },
  {
    src: '/img/operations/alaina.jpg',
    alt: 'Alaina at the food stand',
  },
  {
    src: '/img/operations/oakland.jpg',
    alt: 'SOFAB concessions in Oakland',
  },
  {
    src: '/img/operations/sausageTrailer.jpg',
    alt: 'SOFAB sausage trailer',
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
    src: '/img/operations/deschutes.jpg',
    alt: 'SOFAB at the Deschutes County Fair',
  },
  {
    src: '/img/operations/kurlyFries.jpg',
    alt: 'Giant kurly fries stand',
  },
  {
    src: '/img/operations/yreka2.jpg',
    alt: 'Food stands at the Siskiyou Golden Fair',
  },
  {
    src: '/img/operations/50ft.png',
    alt: 'SOFAB 50-foot food stand',
  },
  {
    src: '/img/operations/gusDaryl.jpg',
    alt: 'Gus and Daryl',
  },
  {
    src: '/img/operations/weddingParty.jpg',
    alt: 'Wedding party',
  },
  {
    src: '/img/operations/wedding.jpg',
    alt: 'Wedding celebration',
  },
  {
    src: '/img/operations/sausageTrailer.jpg',
    alt: 'SOFAB sausage trailer',
  },
  {
    src: '/img/operations/sausage.jpg',
    alt: 'Taylor’s gourmet sausages',
  },
  {
    src: '/img/operations/newSausageTrailerInside.jpg',
    alt: 'Inside the sausage trailer',
  },
  {
    src: '/img/operations/oakland2.jpg',
    alt: 'SOFAB food stand in Oakland',
  },
]

</script>

<template>
  <main class="min-[721px]:mt-[50px]">
    <PhotoGallery :images="images" />
  </main>
  <Footer />
</template>
