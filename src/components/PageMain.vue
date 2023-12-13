<script>
import { store } from "../store.js" //state management

import Jumbo from "./Jumbo.vue"
import Section1 from "./Section1.vue"

export default {
    components: {
        Jumbo,
        Section1
    },

    data() {
        return {
            store,

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
    <!-- sezione 1 -->
    <Section1 />
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
</style>