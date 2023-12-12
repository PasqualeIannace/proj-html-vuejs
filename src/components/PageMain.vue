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
        <div class="relative">
            <img src="/img/h1-rev-img-01.jpg" alt="">

            <div class="description">
                <h2>We are Everlead</h2>
                <span>.</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
            </div>
        </div>
    </div>

    <div>
        sezione 2
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;


// JUMBO
.jumbo {
    width: 100%;
    height: 100vh;

    .relative {
        position: relative;
        height: 100%;

        img {
            width: 100vw;
            height: 100vh;
            max-width: 100%;
            object-fit: cover;
            position: absolute;
            z-index: -1;
        }

        .description {
            position: absolute;
            top: 30%;
            left: 15%;
            width: 37%;

            h2 {
                font-size: 6em;
                font-family: serif;
                display: inline-block;
                color: #1E1E1E;
            }

            span {
                font-family: serif;
                font-size: 8em;
                color: #FF4613;
            }

            p {
                color: #1E1E1E;
                padding: 0 1em;
                font-weight: lighter;
                font-size: 1.3em;
                font-family: system-ui;
            }
        }
    }
}
</style>