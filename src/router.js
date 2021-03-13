import Vue from "vue";
import Router from "vue-router";

import MainProfilePageComponent from "./components/profile/main/Page.vue";
import FriendProfilePageComponent from "./components/profile/friend/Page.vue";
import NewsPageComponent from "./components/news/Page.vue";
import AddPostPageComponent from "./components/addPost/Page.vue";
import EditProfilePageComponent from "./components/profile/edit/Page.vue";

import LoginPageComponent from "./components/login/Page.vue";
import RegistrationPageComponent from "./components/registration/Page.vue";
import ResetPasswordPageComponent from "./components/resetPassword/Page.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            alias: "/My-page",
            name: "main",
            component: MainProfilePageComponent
        },
        {
            path: "/Friend",
            name: "friend",
            component: FriendProfilePageComponent
        },
        {
            path: "/News",
            name: "news",
            component: NewsPageComponent
        },
        {
            path: "/Add-post",
            name: "addPost",
            component: AddPostPageComponent
        },
        {
            path: "/Edit-profile",
            name: "editProfile",
            component: EditProfilePageComponent
        },
        {
            path: "/Login",
            name: "login",
            component: LoginPageComponent
        },
        {
            path: "/Sign-up",
            name: "signUp",
            component: RegistrationPageComponent
        },
        {
            path: "/Reset-password",
            name: "resetPassword",
            component: ResetPasswordPageComponent
        },
        {
            path: "/Logout",
            name: "logout",
            component: LoginPageComponent
        },
    ]
});