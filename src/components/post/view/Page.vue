<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <profile-post-component></profile-post-component>
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
    }
  }
}
</script>

<style scoped>

</style>