<template>
  <header-component :nav-items="['Login']"></header-component>
  <registration-component></registration-component>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import RegistrationComponent from "./RegistrationComponent.vue";

export default {
  components: {
    HeaderComponent,
    RegistrationComponent
  }
}
</script>

<style scoped>

</style>