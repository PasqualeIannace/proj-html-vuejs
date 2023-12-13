<script>
import { store } from "../store.js" //state management
import { upcomingEvents } from "../store.js"

import Jumbo from "./Jumbo.vue"
import Section1 from "./Section1.vue"
import Section2 from "./Section2.vue"

export default {
    components: {
        Jumbo,
        Section1,
        Section2,
    },

    data() {
        return {
            store,
            counter: 0,
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <Jumbo />
    <!-- sezione 1 e 2 -->
    <Section1 />
    <!-- sezione 3 e 4 -->
    <Section2 />
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
</style>