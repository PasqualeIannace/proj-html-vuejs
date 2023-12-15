<script>
import PageMain from "./components/PageMain.vue"
import PageHeader from "./components/PageHeader.vue"
import PageFooter from "./components/PageFooter.vue"

import { store } from "./store.js" //state management
import { register } from 'swiper/element/bundle';
register();

export default {
	components: {
		PageHeader,
		PageMain,
		PageFooter,
	},
	data() {
		return {
			store,
		}
	},
	mounted() {

	},
	methods: {

	}
}
</script>

<template>
	<header class="px5">
		<PageHeader />
	</header>

	<main>
		<PageMain />
	</main>

	<footer>
		<PageFooter />
	</footer>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
@use './styles/partials/variables' as *;
</style>