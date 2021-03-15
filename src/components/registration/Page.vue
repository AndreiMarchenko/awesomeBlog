<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <registration-component></registration-component>
  </div>
</template>

<script>
import HeaderComponent from "../Header.vue";
import RegistrationComponent from "./Main.vue";

export default {
  data() {
    return {
      navItems: ['Login']
    }
  },
  components: {
    HeaderComponent,
    RegistrationComponent
  }
}
</script>

<style scoped>

</style>