import Login from "../components/login/Page.vue";
import Registration from "../components/registration/Page.vue";
import ResetPassword from "../components/resetPassword/Page.vue";

import getCookie from "../helpers/cookie/getCookie";

export default [
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") !== "undefined") {
                next({name: 'myPage'});
            } else {
                next();
            }
        }
    },
    {
        path: "/sign-up",
        name: "signUp",
        component: Registration,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") !== "undefined") {
                next({name: 'myPage'});
            } else {
                next();
            }
        }
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        component: ResetPassword,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") !== "undefined") {
                next({name: 'myPage'});
            } else {
                next();
            }
        }
    },
    {
        path: "/logout",
        name: "logout",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") === "undefined") {
                next({name: 'login'});
            } else {
                next();
            }
        }
    },
]