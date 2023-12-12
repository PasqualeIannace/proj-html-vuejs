<script>
import { store } from "../store.js" //state management
import Jumbo from "./Jumbo.vue"

export default {
    components: {
        Jumbo
    },

    data() {
        return {
            store
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

    <div>
        sezione 2
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
</style>