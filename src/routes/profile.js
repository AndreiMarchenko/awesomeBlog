import MainProfile from "../components/profile/main/Page.vue";
import FriendProfile from "../components/profile/friend/Page.vue";
import EditProfile from "../components/profile/edit/Page.vue";

export default [
    {
        path: "/",
        alias: "/my-page",
        name: "myPage",
        component: MainProfile,
    },
    {
        path: "/friend",
        name: "friend",
        component: FriendProfile,
    },
    {
        path: "/edit-profile",
        name: "editProfile",
        component: EditProfile,
    },
]