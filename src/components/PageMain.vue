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

    <!-- sezione 1 -->
    <div class="bgGray">
        <div class="bgWhite mx5">
            <div class="titleSection">
                <h3>Our specialities</h3>
                <span>.</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div class="bgOrange line"></div>
            </div>

            <div class="specialities px5">
                <div class="miniature">
                    <img src="/svg/svg-0.svg" alt="">
                    <h3>Knowing</h3>
                    <p>Lorem ipsum dolor sit amet, quis consect.</p>
                </div>
                <div class="miniature">
                    <img src="/svg/svg-1.svg" alt="">
                    <h3>Selling</h3>
                    <p>Lorem ipsum dolor sit amet, quis consect.</p>
                </div>
                <div class="miniature">
                    <img src="/svg/svg-2.svg" alt="">
                    <h3>Learning</h3>
                    <p>Lorem ipsum dolor sit amet, quis consect.</p>
                </div>
                <div class="miniature">
                    <img src="/svg/svg-3.svg" alt="">
                    <h3>Contact</h3>
                    <p>Lorem ipsum dolor sit amet, quis consect.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// sezione 1
.titleSection {
    text-align: center;
    padding-top: 2.5em;

    h3 {
        font-size: 3.3em;
        font-family: serif;
        display: inline-block;
    }

    span {
        font-family: serif;
        font-size: 4em;
        color: #FF4613;
    }

    p {
        color: #1E1E1E;
        padding: 0 0.5em;
        font-weight: lighter;
        font-size: 1.3em;
        font-family: system-ui;
    }
}

.specialities {
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    .miniature {
        padding: 2em 0 10em 0;

        h3 {
            font-family: serif;
            font-size: 1.3em;
            padding: 1em 0 0.5em 0;
        }

        p {
            color: #1E1E1E;
            font-weight: lighter;
            font-family: system-ui;
            padding: 0 1em;
            font-size: 1.1em;
        }
    }
}
</style>