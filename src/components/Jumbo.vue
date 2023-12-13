<script>
import { jumbo } from "../store.js" //state management

export default {
    data() {
        return {
            jumbo,

            counter: 0,
        }
    },
    methods: {
        next() {
            if (this.counter < this.jumbo.slides.length - 1) {
                this.counter++;
            } else {
                this.counter = 0;
            }

        },

        back() {
            if (this.counter > 0) {
                this.counter--;
            } else {
                this.counter = this.jumbo.slides.length - 1;
            }

        }
    },
    mounted() {

    }
}
</script>

<template>
    <div class="jumbo">
        <div class="relative">
            <!-- immagine jumbo -->
            <img class="jumboImg" :src="jumbo.slides[counter].img" alt="">

            <!-- tasti direzionali -->
            <a v-on:click="back()" href="#">
                <img class="arrow left rotate180" src="/svg/svg-6.svg" alt="">
            </a>
            <a v-on:click="next()" href="#">
                <img class="arrow right" src="/svg/svg-6.svg" alt="">
            </a>

            <!-- testo del jumbo -->
            <div class="description">
                <h2>{{ jumbo.slides[counter].title }}</h2>
                <span class="dot">.</span>

                <p>{{ jumbo.slides[counter].text }}</p>

                <div class="dFlex">
                    <div class="btn bgWhite">
                        <a href="#">READ MORE
                            <div class="bgBlack"></div>
                            <img class="btnArrow arrowBlack" src="/svg/svg-6.svg" alt="">
                        </a>
                    </div>

                    <div class="btn bgOrange">
                        <a href="#">PURCHASE
                            <div class="bgWhite"></div>
                            <img class="btnArrow" src="/svg/svg-6.svg" alt="">
                        </a>
                    </div>
                </div>

            </div>
        </div>
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
        height: 100%;

        .jumboImg {
            width: 100vw;
            height: 100vh;
            max-width: 100%;
            object-fit: cover;
            position: absolute;
            z-index: -1;
        }

        .arrow {
            width: 3em;
            top: 44%;
            position: absolute;
            filter: brightness(0) saturate(100%) invert(18%) sepia(0%) saturate(2684%) hue-rotate(308deg) brightness(100%) contrast(91%);
        }

        .left {
            left: 5%;
        }

        .right {
            right: 5%;
        }

        .description {
            position: absolute;
            top: 30%;
            left: 15%;

            h2 {
                font-size: 6em;
                font-family: serif;
                display: inline-block;
                color: #1E1E1E;
            }

            .dot {
                font-family: serif;
                font-size: 8em;
                color: #FF4613;
            }

            p {
                color: #1E1E1E;
                padding: 0 0.5em;
                font-weight: lighter;
                font-size: 1.3em;
                font-family: system-ui;
                width: 70%;
            }
        }
    }
}
</style>