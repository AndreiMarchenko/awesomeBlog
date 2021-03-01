<template>
  <header-component :nav-items="['Sign up']"></header-component>
  <login-component></login-component>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue"
import LoginComponent from "./LoginComponent.vue"

export default {
  components: {
    HeaderComponent,
    LoginComponent
  }
}
</script>

<style lang="scss" scoped>

</style>