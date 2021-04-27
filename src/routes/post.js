import ViewPostPageComponent from "../components/post/view/Page.vue";
import AddPostPageComponent from "../components/post/add/Page.vue";
import EditPostPageComponent from "../components/post/edit/Page.vue";

export default [
    {
        path: "/post/view/:id",
        name: "postView",
        component:  ViewPostPageComponent
    },
    {
        path: "/post/add",
        name: "postAdd",
        component:  AddPostPageComponent
    },
    {
        path: "/post/edit/:id",
        name: "postEdit",
        component:  EditPostPageComponent
    }
]



