<script>
import { store } from "../store.js" //state management
import { upcomingEvents } from "../store.js"

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
            upcomingEvents,
            counter: 0,
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

    <div class="container relative">
        <div class="absolute">
            <img :src="upcomingEvents.slides[counter].img" alt="">

            <div class="upcoming">
                <div class="title">
                    <h3>Upcoming Events</h3>
                </div>
                <div class="card" @mouseover="counter = 0">
                    <div class="date bgOrange">
                        <p>19</p>
                        <span>Jan. 2024</span>
                    </div>
                    <div class="spec">
                        <a href="">London Coaching</a>
                        <div>
                            <span>9:00 am - 5:00 pm, Jan 19, 2024</span>
                        </div>
                        <div>
                            <span>Cambridge, MA 02138, USA</span>
                        </div>

                        <p>READ MORE</p>
                    </div>
                </div>
                <div class="card border" @mouseover="counter = 1">
                    <div class="date bgOrange">
                        <p>11</p>
                        <span>Jan. 2024</span>
                    </div>
                    <div class="spec">
                        <a href="">
                            New York Coaching</a>
                        <div>
                            <span>9:00 am - 5:00 pm, Jan 19, 2024</span>
                        </div>
                        <div>
                            <span>Cambridge, MA 02138, USA</span>
                        </div>

                        <p>READ MORE</p>
                    </div>
                </div>
                <div class="card" @mouseover="counter = 2">
                    <div class="date bgOrange">
                        <p>05</p>
                        <span>Jan. 2024</span>
                    </div>
                    <div class="spec">
                        <a href="">
                            Melbourne Coaching</a>
                        <div>
                            <span>9:00 am - 5:00 pm, Jan 19, 2024</span>
                        </div>
                        <div>
                            <span>Cambridge, MA 02138, USA</span>
                        </div>

                        <p>READ MORE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.container {
    height: 70em;

    img {
        width: 100vw;
        max-width: 100%;
        min-width: 90em;
        z-index: -1;
    }

    .upcoming {
        background: white;
        width: 32em;
        margin: 0 20em;
        top: 15%;
        position: absolute;

        .title {
            font-family: serif;
            font-size: 1.5em;
            color: #1E1E1E;
            padding: 1em 0 1.5em 2em;
            box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, .09);
        }

        .card {
            display: flex;
            padding: 2em;
            background-color: #FAFAFA;

            &:hover {
                background-color: white;
            }

            .date {
                width: 5em;
                height: 4em;
                padding: 0.5em 0;
                text-align: center;

                p {
                    font-family: serif;
                    font-size: 1.2em;
                    font-weight: bold;
                }

                span {
                    font-weight: lighter;
                    font-family: system-ui;
                    font-size: 0.9em;
                }
            }

            .spec {
                padding-left: 1.5em;

                a {
                    font-family: serif;
                    font-size: 1.3em;
                    color: #1E1E1E;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                    padding-bottom: 0.5em;

                    &:hover {
                        color: #FF4613;
                    }
                }

                span {
                    color: #1E1E1E;
                    font-weight: lighter;
                    font-family: system-ui;
                    font-size: 0.8em;
                }

                p {
                    padding-top: 1em;
                    font-size: 0.8em;
                    font-weight: bold;
                }
            }
        }

        .border {
            border: 1px solid #ececec;
            border-style: solid none solid none;
        }
    }
}
</style>