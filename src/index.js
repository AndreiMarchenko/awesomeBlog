import Vue from './bootstrap';
import App from './App.vue'

import LoginPageComponent from "./components/login/LoginPageComponent.vue"
import RegistrationPageComponent from "./components/registration/RegistrationPageComponent.vue";
import ResetPasswordPageComponent from "./components/resetPassword/ResetPasswordPageComponent.vue";
import NewsPageComponent from "./components/news/NewsPageComponent.vue";
import MainProfilePageComponent from "./components/profile/main/MainProfilePageComponent.vue";
import FriendProfilePageComponent from "./components/profile/friend/FriendProfilePageComponent.vue";
import EditProfilePageComponent from "./components/profile/edit/EditProfilePageComponent.vue";
import AddPostPageComponent from "./components/addPost/AddPostPageComponent.vue";

// createApp(LoginPageComponent).mount("#login-page");
// createApp(RegistrationPageComponent).mount("#registration-page");

new Vue(LoginPageComponent).$mount("#login-page");
new Vue(RegistrationPageComponent).$mount("#registration-page");
new Vue(ResetPasswordPageComponent).$mount("#reset-password-page");
new Vue(NewsPageComponent).$mount("#news-page");
new Vue(MainProfilePageComponent).$mount("#main-profile-page");
new Vue(FriendProfilePageComponent).$mount("#friend-profile-page");
new Vue(EditProfilePageComponent).$mount("#edit-profile-page");
new Vue(AddPostPageComponent).$mount("#add-post-page");

new Vue({
    el: '#app',
    data () {
        return {
        };
    },
    render: h => h(App)
});