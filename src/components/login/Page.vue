<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <login-component></login-component>
  </div>
</template>

<script>
import HeaderComponent from "../Header.vue"
import LoginComponent from "./Main.vue"

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
