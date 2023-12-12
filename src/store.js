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
            title: "Our Team",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/img/rev-slider-main-home-img-03.jpg",
        },
        {
            title: "Help you achieve anything",
            text: "",
            img: "/img/rev-slider-main-home-img-02.jpg",
        },
    ],

    counter: 0,
});