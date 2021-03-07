<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <login-component></login-component>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue"
import LoginComponent from "./LoginComponent.vue"

export default {
  data() {
    return {
      navItems: ['Sign up']
    }
  },
  components: {
    HeaderComponent,
    LoginComponent
  }
}
</script>

<style lang="scss" scoped>

</style>