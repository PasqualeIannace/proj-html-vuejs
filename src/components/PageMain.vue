<script>
import { store } from "../store.js" //state management

export default {
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
    <div class="jumbo">
        <img src="/img/h1-rev-img-01.jpg" alt="">
        <p>Sono un componente!</p>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.jumbo {
    max-width: 100%;

    img {
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        object-fit: cover;
    }
}
</style>