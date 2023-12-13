<script>
import { upcomingEvents } from "../store.js"


export default {
    components: {

    },

    data() {
        return {
            upcomingEvents,
            counter: 0,
        }
    },
}
</script>

<template>
    <!-- section 3 -->
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


    <!-- section 4 -->
    <div class="creative dFlex px5">
        <div class="left">
            <h3>Creative Leader</h3>
            <span>.</span>
            <div class="line bgOrange"></div>
            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla eiusmod tempor incididunt
                ut labore et
                dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in sociis.

            </p>
            <p class="rMore">READ MORE</p>
        </div>

        <div class="right">
            <div class="skill">
                <span>Mentorship</span>
                <span>78%</span>
            </div>
            <div class="bar">
                <div class="allBar">
                    <div class="bgOrange w78"></div>
                </div>
            </div>

            <div class="skill">
                <span>Education</span>
                <span>95%</span>
            </div>
            <div class="bar">
                <div class="allBar">
                    <div class="bgOrange w95"></div>
                </div>
            </div>

            <div class="skill">
                <span>Learning</span>
                <span>65%</span>
            </div>
            <div class="bar">
                <div class="allBar">
                    <div class="bgOrange w65"></div>
                </div>
            </div>

            <div class="skill">
                <span>Motivation</span>
                <span>83%</span>
            </div>
            <div class="bar">
                <div class="allBar">
                    <div class="bgOrange w83"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// section 3
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

// section 4
.creative {

    .left {
        width: 50%;

        h3 {
            font-size: 2.5em;
            font-family: serif;
            display: inline-block;
        }

        span {
            font-family: serif;
            font-size: 3em;
            color: #FF4613;
        }

        .line {
            height: 0.15em;
            width: 4em;
            margin: 1em 0;

        }

        .lorem {
            padding-right: 4em;
        }
    }

    .right {
        width: 50%;

        .skill {
            display: flex;
            justify-content: space-between;

            span {
                font-family: serif;
                font-size: 1.3em;
                font-weight: bold;
            }
        }

        .bar {
            width: 100%;
            padding: 0.5em 0;
            margin-bottom: 1.4em;

            .bgOrange {
                height: 0.3em;
            }

            .w78 {
                width: 78%;
            }

            .w95 {
                width: 95%;
            }

            .w65 {
                width: 65%;
            }

            .w83 {
                width: 83%;
            }

            .allBar {
                width: 100%;
                background-color: #e1e1e1;
                height: 0.01em;
            }
        }
    }
}
</style>