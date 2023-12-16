<script>

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/vue';


export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
        };
    },

    data() {
        return {
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

<template>
    <div class="bgGray relative">
        <div class="absolute bgRounded">
            <img src="/svg/svg-4.svg" alt="">
        </div>

        <div class="titleSection">
            <h3>Latest news</h3>
            <span>.</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div class="bgOrange line"></div>
        </div>

        <div class="carosello px10">

            <!-- <a v-on:click="back()" href="#">
                <img class="arrow left rotate180" src="/svg/svg-6.svg" alt="">
            </a>
            <a v-on:click="next()" href="#">
                <img class="arrow right" src="/svg/svg-6.svg" alt="">
            </a> -->

            <!-- swiper test -->
            <swiper :slidesPerView="3" :spaceBetween="30" :loop="true" :navigation="true" :modules="modules"
                class="mySwiper">
                <swiper-slide>
                    <div class="card">
                        <div class="imgCard relative">
                            <img src="/img/h1-img-01.jpg" alt="">
                            <div class="infoImg bgOrange absolute">
                                <font-awesome-icon :icon="['fas', 'tag']" style="color: #ffffff;" />
                                <span>Business, Leading</span>
                            </div>
                        </div>

                        <div class="infoEvent dFlex">
                            <div class="date">
                                <font-awesome-icon :icon="['far', 'clock']" size="xs" style="color: #ff4613;" />
                                <a href="#">5 May, 2019</a>
                            </div>
                            <div class="guest">
                                <font-awesome-icon :icon="['far', 'user']" size="xs" style="color: #ff4613;" />
                                <a href="#">Amanda Doe</a>
                            </div>
                        </div>
                        <div class="cardTitle">
                            <a class="title" href="#">Team Building</a>
                            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus
                                dolor</p>
                            <p class="rMore">READ MORE</p>
                        </div>
                    </div>
                </swiper-slide>


                <swiper-slide>
                    <div class="card">
                        <div class="imgCard relative">
                            <img src="/img/h1-blog-img-01.jpg" alt="">
                            <div class="infoImg bgOrange absolute">
                                <font-awesome-icon :icon="['fas', 'tag']" style="color: #ffffff;" />
                                <span>Business, Leading</span>
                            </div>
                        </div>

                        <div class="infoEvent dFlex">
                            <div class="date">
                                <font-awesome-icon :icon="['far', 'clock']" size="xs" style="color: #ff4613;" />
                                <a href="#">5 May, 2019</a>
                            </div>
                            <div class="guest">
                                <font-awesome-icon :icon="['far', 'user']" size="xs" style="color: #ff4613;" />
                                <a href="#">Amanda Doe</a>
                            </div>
                        </div>
                        <div class="cardTitle">
                            <a class="title" href="#">New Business Day</a>
                            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus
                                dolor</p>
                            <p class="rMore">READ MORE</p>
                        </div>
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="card">
                        <div class="imgCard relative">
                            <img src="/img/h1-blog-img-02.jpg" alt="">
                            <div class="infoImg bgOrange absolute">
                                <font-awesome-icon :icon="['fas', 'tag']" style="color: #ffffff;" />
                                <span>Business, Leading</span>
                            </div>
                        </div>

                        <div class="infoEvent dFlex">
                            <div class="date">
                                <font-awesome-icon :icon="['far', 'clock']" size="xs" style="color: #ff4613;" />
                                <a href="#">5 May, 2019</a>
                            </div>
                            <div class="guest">
                                <font-awesome-icon :icon="['far', 'user']" size="xs" style="color: #ff4613;" />
                                <a href="#">Amanda Doe</a>
                            </div>
                        </div>
                        <div class="cardTitle">
                            <a class="title" href="#">Boost Motivation</a>
                            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus
                                dolor</p>
                            <p class="rMore">READ MORE</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card">
                        <div class="imgCard relative">
                            <img src="/img/h1-blog-img-03.jpg" alt="">
                            <div class="infoImg bgOrange absolute">
                                <font-awesome-icon :icon="['fas', 'tag']" style="color: #ffffff;" />
                                <span>Business, Leading</span>
                            </div>
                        </div>

                        <div class="infoEvent dFlex">
                            <div class="date">
                                <font-awesome-icon :icon="['far', 'clock']" size="xs" style="color: #ff4613;" />
                                <a href="#">5 May, 2019</a>
                            </div>
                            <div class="guest">
                                <font-awesome-icon :icon="['far', 'user']" size="xs" style="color: #ff4613;" />
                                <a href="#">Amanda Doe</a>
                            </div>
                        </div>
                        <div class="cardTitle">
                            <a class="title" href="#">Next Investment</a>
                            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus
                                dolor</p>
                            <p class="rMore">READ MORE</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.bgRounded {
    top: -14%;
    left: 6%;
}

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

.carosello {

    a {
        img {
            filter: brightness(0) saturate(100%) invert(18%) sepia(0%) saturate(2684%) hue-rotate(308deg) brightness(100%) contrast(91%);
        }
    }

    .lorem {
        padding: 0.8em 0;
    }
}

.card {

    a {
        text-decoration: none;
        color: #1E1E1E;

        &:hover {
            color: #FF4613;
        }
    }

    .title {
        font-size: 2em;
        font-family: serif;
        font-weight: bold;
    }

    img {
        width: 100%;
    }

    .infoImg {
        bottom: -10px;
        right: 5%;
        padding: 0.9em 1.3em;
        font-size: 0.9em;

        span {
            padding-left: 0.5em;
        }
    }

    .infoEvent {
        padding: 1.4em 0 0.5em 0;

        .date {
            padding-right: 0.3em;
        }

        a {
            padding: 0 0.3em;
        }
    }
}

// SWIPER
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>