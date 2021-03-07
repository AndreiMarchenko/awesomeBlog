<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <registration-component></registration-component>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import RegistrationComponent from "./RegistrationComponent.vue";

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