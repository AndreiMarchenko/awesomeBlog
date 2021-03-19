<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <edit-profile-component :profile-info="profileInfo" ></edit-profile-component>
  </div>
</template>

<script>
import HeaderComponent from "../../Header.vue";
import EditProfileComponent from "./Main.vue";

export default {
  components: {
    HeaderComponent,
    EditProfileComponent
  },
  data() {
    return {
      navItems: ["My page", "News", "Logout"],
      profileInfo: {
        name: "John Smith",
        email: "j.smith@gmail.com",
        pictureSrc: "../images/profile/profilePicture.jpg",
        text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      }
    }
  }
}
</script>

<style scoped>

</style>