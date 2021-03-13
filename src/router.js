import Vue from "vue";
import Router from "vue-router";

import MainProfilePageComponent from "./components/profile/main/MainProfilePageComponent.vue";
import FriendProfilePageComponent from "./components/profile/friend/FriendProfilePageComponent.vue";
import NewsPageComponent from "./components/news/NewsPageComponent.vue";
import AddPostPageComponent from "./components/addPost/AddPostPageComponent.vue";
import EditProfilePageComponent from "./components/profile/edit/EditProfilePageComponent.vue";

import LoginPageComponent from "./components/login/LoginPageComponent.vue";
import RegistrationPageComponent from "./components/registration/RegistrationPageComponent.vue";
import ResetPasswordPageComponent from "./components/resetPassword/ResetPasswordPageComponent.vue";

import NotFound from "./components/NotFound.vue";

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
        {
            path: "*",
            name: "notFound",
            component: NotFound
        },
    ]
});