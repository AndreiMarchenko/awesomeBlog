import MainProfile from "../components/profile/main/Page.vue";
import FriendProfile from "../components/profile/friend/Page.vue";
import EditProfile from "../components/profile/edit/Page.vue";

import getCookie from "../helpers/cookie/getCookie";


export default [
    {
        path: "/",
        alias: "/my-page",
        name: "myPage",
        component: MainProfile,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") === "undefined") {
                next({name: 'login'});
            } else {
                next();
            }
        }
    },
    {
        path: "/friend",
        name: "friend",
        component: FriendProfile,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") === "undefined") {
                next({name: 'login'});
            } else {
                next();
            }
        }
    },
    {
        path: "/edit-profile",
        name: "editProfile",
        component: EditProfile,
        beforeEnter: (to, from, next) => {
            if (typeof getCookie("Token") === "undefined") {
                next({name: 'login'});
            } else {
                next();
            }
        }
    },
]