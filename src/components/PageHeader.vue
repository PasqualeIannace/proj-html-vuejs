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
    <div class="relative">
        <div class="navBar">
            <img class="logo" src="/img/logo-img-01.png" alt="">
            <nav>
                <ul>
                    <li v-for="i in menu.menuLinks">
                        <img class="arrow" src="/svg/svg-6.svg" alt="">
                        <a href="#"> {{ i.text }} </a>
                    </li>
                    <a href=""><font-awesome-icon :icon="['fas', 'magnifying-glass']" rotation=90 /></a>
                    <a href=""><font-awesome-icon :icon="['fas', 'bars-staggered']" /></a>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.navBar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7em;
    width: 100vw;
    max-width: 100%;
}

.logo {
    max-width: 9em;
    object-fit: contain;
}

.arrow {
    width: 1.7em;
    filter: brightness(0) saturate(100%) invert(54%) sepia(93%) saturate(1192%) hue-rotate(341deg) brightness(100%) contrast(100%);
}

.relative {
    position: relative;
    z-index: 1;
}

a:visited {
    color: #212121f0;
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
        position: relative;
        padding: 0 1.5em;
        font-size: 0.85em;
        font-weight: bold;
        color: #212121f0;

        img {
            position: absolute;
            left: -0.5em;
            top: -0.2em;
            opacity: 0;
        }

        &:hover img {
            transition: 200ms;
            opacity: 1;
        }


        &:hover a {
            color: #FF4613;
            transition: 200ms;
        }

        a {
            text-decoration: none;
        }
    }
}
</style>