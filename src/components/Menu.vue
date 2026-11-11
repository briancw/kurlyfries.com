<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links: [path: string, label: string][] = [
  ['/', 'Home'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
  ['/events', 'Events'],
  ['/recommendations', 'Recommendations'],
  ['/affiliates', 'Affiliates'],
]
</script>

<template>
  <nav
    aria-label="Main navigation"
    class="relative top-0 left-0 z-150 min-h-25 w-full bg-black/50 text-center min-[721px]:fixed min-[721px]:h-12.5 min-[721px]:min-h-0"
  >
    <RouterLink
      v-for="[path, label] in links"
      :key="path"
      :to="path"
      class="inline-block px-3.5 py-2.5 text-[14px] text-white no-underline hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-yellow-300 min-[361px]:text-[18px] min-[901px]:text-[24px]"
      >{{ label }}</RouterLink
    >
  </nav>
</template>
