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