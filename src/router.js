import Vue from "vue";
import Router from "vue-router";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

import NewsPageComponent from "./components/news/Page.vue";
import AddPostPageComponent from "./components/addPost/Page.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(Router);

const routes = [...authRoutes, ...profileRoutes];

export default new Router({
    routes: [
        {
            path: "/news",
            name: "news",
            component: NewsPageComponent
        },
        {
            path: "/add-post",
            name: "addPost",
            component: AddPostPageComponent
        },
        ...routes,
        {
            path: "*",
            name: "notFound",
            component: NotFound
        }
    ]
});