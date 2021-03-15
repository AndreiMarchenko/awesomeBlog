<template>
<div>
  <header-component :nav-items="navItems"></header-component>
  <reset-password-component></reset-password-component>
</div>
</template>

<script>
import HeaderComponent from "../Header.vue";
import ResetPasswordComponent from "./Main.vue";

export default {
  data() {
    return {
      navItems: ['Login', 'Sign up']
    }
  },
  components: {HeaderComponent, ResetPasswordComponent}
}
</script>

<style lang="scss" scoped>

</style>