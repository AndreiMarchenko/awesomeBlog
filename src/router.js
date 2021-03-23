import Vue from "vue";
import Router from "vue-router";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

import NewsPageComponent from "./components/news/Page.vue";
import AddPostPageComponent from "./components/addPost/Page.vue";
import NotFound from "./components/NotFound.vue";

import getCookie from "./helpers/cookie/getCookie";

Vue.use(Router);

const routes = [...authRoutes, ...profileRoutes];

let router =  new Router({
    routes: [
        {
            path: "/news",
            name: "news",
            component: NewsPageComponent,
            beforeEnter: (to, from, next) => {
                if (typeof getCookie("Token") === "undefined") {
                    next({name: 'login'});
                } else {
                    next();
                }
            }
        },
        {
            path: "/add-post",
            name: "addPost",
            component: AddPostPageComponent,
            beforeEnter: (to, from, next) => {
                if (typeof getCookie("Token") === "undefined") {
                    next({name: 'login'});
                } else {
                    next();
                }
            }
        },
        ...routes,
        {
            path: "*",
            name: "notFound",
            component: NotFound,
            beforeEnter: (to, from, next) => {
                if (typeof getCookie("Token") === "undefined") {
                    next({name: 'login'});
                } else {
                    next();
                }
            }
        }
    ],
    mode: "history",
});

export default router;