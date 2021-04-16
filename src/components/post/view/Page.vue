<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <profile-post-component
      :like-count="postInfo.likeCount"
      :comments="postInfo.comments">
    </profile-post-component>
  </div>
</template>

<script>
import HeaderComponent from "../../Header.vue";
import ProfilePostComponent from "./Main.vue";

export default {
  components: {
    HeaderComponent,
    ProfilePostComponent
  },
  data() {
    return {
      navItems: ['My page', 'News', 'Logout'],
      postInfo: {
        likeCount: 22,
        comments: [
          {
            id: 1,
            author: "Andrei Marchenko",
            text: "text text text",
            time: "44 minutes ago",
            pictureSrc: "../../images/profile/profilePicture.jpg"
          },
          {
            id: 2,
            author: "And enko",
            text: "text text text text text text text text text",
            time: "44 minutes ago",
            pictureSrc: "../../images/profile/profilePicture.jpg"
          },
          {
            id: 3,
            author: "Andreiasdfasf Marchenkosdf",
            text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ",
            time: "44 minutes ago",
            pictureSrc: "../../images/profile/profilePicture.jpg"
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>