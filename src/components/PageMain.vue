<script>
import { store } from "../store.js" //state management
import { register } from 'swiper/element/bundle'; //caroselli!!!

register();
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import Jumbo from "./Jumbo.vue"
import Section1 from "./Section1.vue"
import Section2 from "./Section2.vue"

export default {
    components: {
        Jumbo,
        Section1,
        Section2,
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },

    data() {
        return {
            store,
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
    <!-- sezione 1 e 2 -->
    <Section1 />
    <!-- sezione 3 e 4 -->
    <Section2 />
    <!-- sezione 5 -->
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

        <div class="carosello px5">

            <a v-on:click="back()" href="#">
                <img class="arrow left rotate180" src="/svg/svg-6.svg" alt="">
            </a>
            <a v-on:click="next()" href="#">
                <img class="arrow right" src="/svg/svg-6.svg" alt="">
            </a>


            <div class="card relative">
                <img src="/img/h1-img-01.jpg" alt="">
                <div class="infoImg bgOrange absolute">
                    <span>Business, Leading</span>
                </div>

                <div class="infoEvent dFlex">
                    <div class="date">
                        <a href="#">5 May, 2019</a>
                    </div>
                    <div class="guest">
                        <a href="#">Amanda Doe</a>
                    </div>
                </div>
                <div class="cardTitle">
                    <a class="title" href="#">Team Business</a>
                    <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor</p>
                    <p class="rMore">READ MORE</p>
                </div>
            </div>

            <!-- swiper test -->
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="card relative">
                        <img src="/img/h1-img-01.jpg" alt="">
                        <div class="infoImg bgOrange absolute">
                            <span>Business, Leading</span>
                        </div>

                        <div class="infoEvent dFlex">
                            <div class="date">
                                <a href="#">5 May, 2019</a>
                            </div>
                            <div class="guest">
                                <a href="#">Amanda Doe</a>
                            </div>
                        </div>
                        <div class="cardTitle">
                            <a class="title" href="#">Team Business</a>
                            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus
                                dolor</p>
                            <p class="rMore">READ MORE</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
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
    width: 23em;

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
        bottom: 40%;
        right: 5%;
        padding: 0.8em 1.3em;
        font-size: 0.9em;
    }

    .infoEvent {
        padding: 1.4em 0 0.5em 0;
    }
}

// SWIPER
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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