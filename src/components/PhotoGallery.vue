<script setup lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'reka-ui'
import type { GalleryImage } from '../types'

withDefaults(defineProps<{
  images: GalleryImage[]
  home?: boolean
}>(), { home: false })
</script>

<template>
  <section
    aria-label="Photo gallery"
    class="grid"
    :class="
      home ? 'grid-cols-1 min-[721px]:grid-cols-2 min-[1025px]:grid-cols-4' : 'grid-cols-2 min-[721px]:grid-cols-4'
    "
  >
    <DialogRoot v-for="(image, index) in images" :key="`${image.src}-${index}`">
      <DialogTrigger
        class="group relative isolate block w-full cursor-pointer overflow-hidden text-left select-none after:pointer-events-none after:absolute after:inset-0 after:z-1 after:shadow-[inset_0_0_10px_0_#000] focus-visible:z-10 focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-yellow-300"
        :class="[
          image.double && home ? 'min-[1025px]:col-span-2 min-[1025px]:row-span-2' : '',
          image.text ? 'min-h-fit min-[721px]:aspect-square' : 'aspect-square',
        ]"
        :aria-label="`Enlarge ${image.alt}`"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          class="block aspect-square w-full object-cover transition-transform duration-500 min-[721px]:group-hover:scale-110 motion-reduce:transition-none"
          :class="image.text ? 'absolute inset-0 h-full' : ''"
        />
        <div
          v-if="image.text"
          class="relative z-2 min-h-full bg-black/60 p-[15px] text-[18px] leading-[1.4] text-white min-[721px]:p-[5%] min-[721px]:leading-normal min-[1025px]:text-[24px]"
        >
          <h2 class="py-[10px] text-center text-[28px] font-bold min-[721px]:py-0 min-[721px]:text-[36px]">
            {{ image.textTitle }}
          </h2>
          <p v-for="paragraph in image.text" :key="paragraph" class="mb-[15px]">{{ paragraph }}</p>
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay class="fixed inset-0 z-500 bg-black/50" />
        <DialogContent
          class="fixed top-1/2 left-1/2 z-501 w-max max-w-[90vw] -translate-x-1/2 -translate-y-1/2 bg-white outline-[5px] outline-white min-[1025px]:outline-[10px]"
        >
          <DialogTitle class="sr-only">{{ image.alt }}</DialogTitle>
          <DialogDescription class="sr-only"
            >
Enlarged gallery photo. Press Escape or use the close button to return to the gallery.
</DialogDescription
          >
          <img :src="image.src" :alt="image.alt" class="block max-h-[75dvh] max-w-[90vw] object-contain" />
          <DialogClose
            aria-label="Close image"
            class="absolute -top-[20px] -right-[15px] flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-[30px] leading-none text-black outline-2 outline-black focus-visible:ring-4 focus-visible:ring-yellow-300"
            >
×
</DialogClose
          >
          <a
            v-if="home"
            :href="image.src"
            target="_blank"
            rel="noreferrer"
            class="absolute right-0 -bottom-[55px] rounded-[10px] bg-white px-[15px] py-[5px] text-[20px] text-black underline min-[1025px]:text-[24px]"
            >View Fullscreen &gt;&gt;</a
          >
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </section>
</template>
