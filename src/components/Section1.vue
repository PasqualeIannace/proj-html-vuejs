<script>
import { somePic } from "../store.js"

export default {
    data() {
        return {
            somePic,
            counter: 0,
        }
    },
    methods: {
        next() {
            if (this.counter < this.somePic.slides.length - 1) {
                this.counter++;
            } else {
                this.counter = 0;
            }

        },

        back() {
            if (this.counter > 0) {
                this.counter--;
            } else {
                this.counter = this.somePic.slides.length - 1;
            }

        }
    },
}

</script>

<template>
    <!-- section 2 -->
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

    <!-- sezione 2 -->
    <div class="container relative">
        <!-- carosello -->
        <div class="carosello relative">
            <img class="pic" :src="somePic.slides[counter].img" alt="">

            <!-- tasti direzionali -->
            <div class="btn absolute">
                <button v-on:click="back()" href="#">
                    <img class="arrow left rotate180" src="/svg/svg-6.svg" alt="">
                </button>
                <button v-on:click="next()" href="#">
                    <img class="arrow right arrowFix" src="/svg/svg-6.svg" alt="">
                </button>
            </div>

            <div class="card bgWhite absolute">
                <h3>Jason Bickford</h3>
                <span class="text">Founder ad Executive Director</span>
                <div class="bgOrange line"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et
                    dolore
                    magna aliqua...</p>
                <span class="signature">Jason Bickford</span>
            </div>


            <div class="absolute circle">
                <img src="/svg/svg-4.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// section 2
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

// section 2
.container {
    background-color: #FAFAFA;
    height: 45em;
    overflow: hidden;

    .carosello {
        padding: 10em 0 0 10em;
        width: 53em;

        .pic {
            width: 100%
        }

        .btn {
            bottom: 9px;
            left: 160px;

            button {
                background-color: #FF4613;
                border: none;
                height: 5em;
                width: 4em;
            }
        }

        .card {
            width: 46em;
            height: 26em;
            left: 88%;
            bottom: 7%;
            z-index: 1;
            padding: 3em;

            h3 {
                font-family: serif;
                font-size: 2.5em;
                color: #1E1E1E;
            }

            .signature {
                font-family: "Tuesday Night Regular";
                color: #FF4613;
                font-size: 2em;
            }

            .text {
                color: #1E1E1E;
                font-weight: lighter;
                font-family: system-ui;
                font-size: 0.9em;
            }

            p {
                color: #1E1E1E;
                font-weight: lighter;
                font-family: system-ui;
                font-size: 1.1em;
            }

            .line {
                height: 0.1em;
                width: 4em;
                margin: 1em 0;
            }
        }

        .circle {
            left: 140%;
            top: 7%;
        }
    }


}
</style>