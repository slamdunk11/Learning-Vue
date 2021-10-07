import Vue from "vue";
import VueRouter from "vue-router";
import JobsView from "../views/JobsView";
import NewsView from "../views/NewsView";
import AskView from "../views/AskView";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/news",
        },
        {
            path: "/news",
            component: NewsView,
        },
        {
            path: "/ask",
            component: AskView,
        },
        {
            path: "/jobs",
            component: JobsView,
        },
        {
            path: "/user",
            component: UserView,
        },
        {
            path: "/item",
            component: ItemView,
        },
    ],
});