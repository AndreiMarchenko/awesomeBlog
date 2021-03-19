import Login from "../components/login/Page.vue";
import Registration from "../components/registration/Page.vue";
import ResetPassword from "../components/resetPassword/Page.vue";

export default [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/sign-up",
        name: "signUp",
        component: Registration
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        component: ResetPassword
    },
    {
        path: "/logout",
        name: "logout",
        component: Login
    },
]