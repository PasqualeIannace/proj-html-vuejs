<script>
import AppComponent from "./components/AppComponent.vue"

import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
	},
	data() {
		return {
			store
		}
	},
	mounted() {

	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<main>
		<AppComponent />
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>