<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <edit-profile-component></edit-profile-component>
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
    }
  }
}
</script>

<style scoped>

</style>