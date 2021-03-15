import Vue from './bootstrap';
import App from './App.vue'

import LoginPageComponent from "./components/login/Page.vue"
import RegistrationPageComponent from "./components/registration/Page.vue";
import ResetPasswordPageComponent from "./components/resetPassword/Page.vue";
import NewsPageComponent from "./components/news/Page.vue";
import MainProfilePageComponent from "./components/profile/main/Page.vue";
import FriendProfilePageComponent from "./components/profile/friend/Page.vue";
import EditProfilePageComponent from "./components/profile/edit/Page.vue";
import AddPostPageComponent from "./components/addPost/Page.vue";

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