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
    width: 100vw;

    img {
        width: 100%;
        height: 68em;
        object-fit: cover;
    }
}
</style>