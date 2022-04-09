<script>
const events = [
    // {
    //     name: 'Red Bluff Bull Sale',
    //     website: 'http://www.redbluffbullsale.com/',
    //     websiteDisplay: 'redbluffbullsale.com',
    //     date: '',
    // },
    // {
    //     name: 'Norcal Boat Sport & RV Show',
    //     website: 'http://www.norcalsportshow.com/',
    //     websiteDisplay: 'norcalsportshow.com',
    //     date: '',
    // },
    // {
    //     name: 'Jackson County Sportsmen\'s & Outdoor Recreation Show',
    //     website: 'http://www.exposureshows.com/our-shows/medford.html',
    //     websiteDisplay: 'exposureshows.com',
    //     date: '',
    // },
    // {
    //     name: 'Yreka Sportsman Show',
    //     website: 'http://www.sisqfair.com/',
    //     websiteDisplay: 'sisqfair.com',
    //     date: '',
    // },
    {
        name: 'Red Bluff Rodeo',
        website: 'https://www.redbluffroundup.com/',
        websiteDisplay: 'RedBluffRoundup.com',
        date: 'April 15th to April 17th',
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
    // {
    //     name: 'Mt. Shasta 4th of July Celebration',
    //     website: 'http://www.mtshastarunners.com/',
    //     websiteDisplay: 'mtshastarunners.com',
    //     date: '',
    // },
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
    // {
    //     name: 'Yamhill County Fair',
    //     website: 'http://www.co.yamhill.or.us/fair/',
    //     websiteDisplay: 'co.yamhill.or.us',
    //     date: '',
    // },
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
        name: 'Josephine County Fair',
        website: 'https://www.josephinecountyfairgrounds.com/',
        websiteDisplay: 'JosephineCountyFairgrounds.com',
        date: '',
    },
    // {
    //     name: 'Lake County Fair',
    //     website: 'http://www.lakecountyfair.com/',
    //     websiteDisplay: 'lakecountyfair.com',
    //     date: '',
    // },
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
    {
        name: 'River Banks Wine & Cheese Festival',
        website: 'http://www.riverbankcheeseandwine.org/',
        websiteDisplay: 'riverbankcheeseandwine.org',
        date: '',
    },
]
</script>

<main class="eventsPage">
	<h1 class="eventsTitle">Find us at these events this year</h1>

	<div class="events">
		{#each events as event}
		<div class="event">
			<div class="eventName">
				{event.name}
			</div>
			{#if event.date}
			<div class="eventDate">
				{event.date}
			</div>
			{/if}
			<a target="_blank" href={event.website} class="eventLink">
				{event.websiteDisplay}
			</a>
		</div>
		{/each}
	</div>
</main>

<style lang="less">
.eventsPage {
    margin-top: 50px;

	.eventsTitle {
		text-align: center;
		padding: 25px 20px;
		color: #fff;
	}

	.events {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 5%;
		row-gap: 10%;
		width: 80%;
		margin: 0px auto;

		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
			width: 90%;
		}

		.event {
			color: #fff;

			.eventName {
				font-size: 20px;
				font-style: italic;
			}
			.eventDate {
				font-size: 14px;
			}
			.eventLink {
				color: #fff;
				font-size: 12px;
			}
		}
	}
}
</style>
