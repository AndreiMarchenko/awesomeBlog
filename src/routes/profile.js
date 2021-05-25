import MainProfile from "../components/profile/main/Page.vue";
import EditProfile from "../components/profile/edit/Page.vue";

export default [
    {
        path: "/user/:id",
        name: "myPage",
        alias: "user",
        component: MainProfile,
    },
    {
        path: "/edit-profile/:id",
        name: "editProfile",
        component: EditProfile,
    },
]