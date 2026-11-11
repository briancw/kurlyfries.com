<script setup lang="ts">
import Footer from '../components/Footer.vue'

const events = [
  {
    name: 'Red Bluff Bull Sale',
    website: 'http://www.redbluffbullsale.com/',
    websiteDisplay: 'redbluffbullsale.com',
    date: '',
  },
  {
    name: 'Norcal Boat Sport & RV Show',
    website: 'http://www.norcalsportshow.com/',
    websiteDisplay: 'norcalsportshow.com',
    date: '',
  },
  {
    name: "Jackson County Sportsmen's & Outdoor Recreation Show",
    website: 'http://www.exposureshows.com/our-shows/medford.html',
    websiteDisplay: 'exposureshows.com',
    date: '',
  },
  {
    name: 'Yreka Sportsman Show',
    website: 'http://www.sisqfair.com/',
    websiteDisplay: 'sisqfair.com',
    date: '',
  },
  {
    name: 'Red Bluff Rodeo',
    website: 'https://www.redbluffroundup.com/',
    websiteDisplay: 'RedBluffRoundup.com',
    date: 'April 15th to April 17th',
  },
  {
    name: 'Cottonwood Rodeo',
    website: '',
    websiteDisplay: '',
    date: '',
  },
  {
    name: 'Redding Rodeo',
    website: 'https://www.reddingrodeo.com/',
    websiteDisplay: 'ReddingRodeo.com',
    date: '',
  },
  {
    name: 'Boatnik',
    website: 'https://www.boatnik.com/',
    websiteDisplay: 'boatnik.com',
    date: '',
  },
  {
    name: 'Shasta District Fair',
    website: 'https://www.shastadistrictfairandeventcenter.com/',
    websiteDisplay: 'ShastaDistrictFairAndEventCenter.com',
    date: '',
  },
  {
    name: 'Crescent City 4th of July Celebration',
    website: 'http://www.delnorte.org/event/annual-4th-of-july-event/',
    websiteDisplay: 'delnorte.org',
    date: '',
  },
  {
    name: 'Jackson County Fair',
    website: 'https://attheexpo.com/fair/',
    websiteDisplay: 'AtTheExpo.com',
    date: '',
  },
  {
    name: 'Deschutes County Fair',
    website: 'http://www.expo.deschutes.org/',
    websiteDisplay: 'expo.deschutes.org',
    date: '',
  },
  {
    name: 'Del Norte County Fair',
    website: 'https://www.dnfair.org/',
    websiteDisplay: 'DNFair.org',
    date: '',
  },
  {
    name: 'Siskiyou Golden Fair',
    website: 'http://www.sisqfair.com/',
    websiteDisplay: 'sisqfair.com',
    date: '',
  },
  {
    name: 'Humboldt County Fair',
    website: 'http://www.humboldtcountyfair.org/',
    websiteDisplay: 'HumboldtCountyFair.org',
    date: '',
  },
  {
    name: 'Inter Mountain Fair',
    website: 'http://www.inter-mountainfair.com/',
    websiteDisplay: 'inter-mountainfair.com',
    date: '',
  },
  {
    name: 'Tulelake Butte Valley Fair',
    website: 'http://www.tbvfair.com/',
    websiteDisplay: 'tbvfair.com',
    date: '',
  },
  {
    name: 'Mendocino County Fair',
    website: 'http://www.mendocountyfair.com/',
    websiteDisplay: 'mendocountyfair.com',
    date: '',
  },
  {
    name: 'Tehama District Fair',
    website: 'http://www.tehamadistrictfair.com/',
    websiteDisplay: 'TehamaDistrictFair.com',
    date: '',
  },
  {
    name: 'Central Washington State Fair',
    website: 'https://www.statefairpark.org/',
    websiteDisplay: 'StateFairPark.org',
    date: '',
  },
]
</script>

<template>
  <main class="pb-[50px] min-[721px]:mt-[50px]">
    <h1 class="px-5 py-[25px] text-center text-[32px] font-bold text-white">Find us at these events this year</h1>
    <div
      class="mx-auto grid w-[90%] grid-cols-1 gap-x-[5%] min-[721px]:grid-cols-2 min-[1025px]:w-4/5 min-[1025px]:grid-cols-3"
    >
      <div
        v-for="event in events"
        :key="event.name"
        class="relative h-[150px] text-white after:absolute after:bottom-[10px] after:block after:h-px after:w-full after:bg-white"
      >
        <div class="text-[20px] italic">{{ event.name }}</div>
        <div v-if="event.date" class="text-[14px]">{{ event.date }}</div>
        <a
          v-if="event.website"
          :href="event.website"
          target="_blank"
          rel="noreferrer"
          class="absolute top-20 max-w-full text-[12px] break-words underline"
          >{{ event.websiteDisplay }}</a
        >
      </div>
    </div>
  </main>
  <Footer />
</template>
