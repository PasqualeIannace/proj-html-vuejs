import { reactive } from 'vue'

export const store = reactive({
    chiave: "valore"
});

export const menu = reactive({
    menuLinks: [
        {
            text: "HOMES",
            url: "#",
        },
        {
            text: "PAGES",
            url: "#",
        },
        {
            text: "BLOG",
            url: "#",
        },
        {
            text: "SHOP",
            url: "#",
        },
        {
            text: "EVENTS",
            url: "#",
        },
        {
            text: "ELEMENTS",
            url: "#",
        },
    ]
});

export const jumbo = reactive({
    slides: [
        {
            title: "We are Everlead",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/img/h1-rev-img-01.jpg",
        },
        {
            title: "Help you achieve anything",
            text: "",
            img: "/img/rev-slider-main-home-img-02.png",
        },
        {
            title: "Our Team",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/img/rev-slider-main-home-img-03.jpg",
        },
    ],
});

export const somePic = reactive({
    slides: [
        {
            img: "/img/h1-img-01.jpg",
        },
        {
            img: "/img/h1-img-02.jpg",
        },
        {
            img: "/img/h1-img-03.jpg",
        },
    ],
});

export const upcomingEvents = reactive({
    slides: [
        {
            img: "/img/h1-img-07.jpg",
        },
        {
            img: "/img/h1-img-08.jpg",
        },
        {
            img: "/img/h1-img-09.jpg",
        },
    ],
});