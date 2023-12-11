<script>
import { menu } from "../store.js" //state management

export default {
    data() {
        return {
            menu
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="navBar">
        <img class="logo" src="/img/logo-img-01.png" alt="">
        <nav>
            <ul>
                <li v-for="i in menu.menuLinks"> {{ i.text }} </li>
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" rotation=90 />
                <font-awesome-icon :icon="['fas', 'bars-staggered']" />
            </ul>
            <!-- <img class="arrow" src="/svg/svg-6.svg" alt=""> -->
        </nav>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7em;
}

.logo {
    max-width: 9em;
    object-fit: contain;
}

.arrow {
    width: 1.7em;
    filter: invert(38%) sepia(93%) saturate(3245%) hue-rotate(350deg) brightness(104%) contrast(109%);
}

ul {
    display: flex;
    list-style: none;

    svg {
        padding: 0 1em;

        &:hover {
            color: #FF4613;
        }
    }

    li {
        padding: 0 1.5em;
        font-size: 0.85em;
        font-weight: bold;
        color: #212121f0;

        &:hover {
            color: #FF4613;
        }
    }
}
</style>