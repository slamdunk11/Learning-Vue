import Vue from "vue";
import VueRouter from "vue-router";
import { JobsView, AskView, NewsView } from "../views";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/news",
            component: "NewsView",
        },
        {
            path: "/ask",
            component: "AskView",
        },
        {
            path: "/jobs",
            component: "JobsView",
        },
    ],
});