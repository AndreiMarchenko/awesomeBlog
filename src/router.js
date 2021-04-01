import Vue from "vue";
import Router from "vue-router";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import postRoutes from "./routes/post.js";

import NewsPageComponent from "./components/news/Page.vue";
import NotFound from "./components/NotFound.vue";

import getCookie from "./helpers/cookie/getCookie";

Vue.use(Router);

const routes = [...authRoutes, ...profileRoutes, ...postRoutes];

let router =  new Router({
    routes: [
        {
            path: "/news",
            name: "news",
            component: NewsPageComponent,
        },
        ...routes,
        {
            path: "*",
            name: "notFound",
            component: NotFound,
        },
    ],
    mode: "history",
});

router.beforeEach((to, from, next) => {
    const permittedForNonAuth = ['login', 'signUp', 'resetPassword'];
    const isAuthorized = typeof getCookie("Token") !== "undefined";

    if (! isAuthorized) {
        if (permittedForNonAuth.includes(to.name)) {
            next();
        } else {
            next({name: 'login'});
        }
    }

    if (isAuthorized) {
        if (permittedForNonAuth.includes(to.name)) {
            next({name: 'myPage'});
        } else {
            next();
        }
    }
});

export default router;