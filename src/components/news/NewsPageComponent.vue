<template>
<div>
  <header-component @clicked-burger="changeBurgerState" :nav-items="navItems"></header-component>
  <news-component :burger-state="burgerState" :news-items="newsItems"></news-component>
</div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import NewsComponent from "./NewsComponent.vue";

export default {
  data() {
    return {
      burgerState: false,
      navItems: ["My page", "News", "Logout"],
      newsItems: [
        {
          id: 1,
          text: "text text text text text text text text text text text text text text text",
          ownerName: "valera",
          ownerPictureSrc: "../images/profile/profilePicture.jpg",
          time: "2 hours ago",
          pictureSrc: "../images/news/beach.jpg",
          likeCount: 22,
          comments: [
            {
              id: 1,
              author: "Andrei Marchenko",
              text: "text text text",
              time: "44 minutes ago",
              pictureSrc: "../images/profile/profilePicture.jpg"
            },
            {
              id: 1,
              author: "And enko",
              text: "text text text text text text text text text",
              time: "44 minutes ago",
              pictureSrc: "../images/profile/profilePicture.jpg"
            },
            {
              id: 1,
              author: "Andreiasdfasf Marchenkosdf",
              text: "text text text text text text text text text text text text text text text text text text text text text ",
              time: "44 minutes ago",
              pictureSrc: "../images/profile/profilePicture.jpg"
            }
          ]
        },
        {
          id: 2,
          text: "text text text text text text text text text text text text text text text",
          ownerName: "valera",
          ownerPictureSrc: "../images/profile/profilePicture.jpg",
          time: "2 hours ago",
          pictureSrc: "../images/news/beach.jpg",
          likeCount: 22,
          comments: [
            {
              id: 1,
              author: "Andrei Marchenko",
              text: "text text text",
              time: "44 minutes ago",
              pictureSrc: "../images/profile/profilePicture.jpg"
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeBurgerState() {
      this.burgerState = !this.burgerState;
    }
  },
  components: {
    HeaderComponent, NewsComponent
  },
  name: "NewsPageComponent"
}
</script>

<style scoped>

</style>