<template>
<div>
  <header-component :nav-items="navItems"></header-component>
  <reset-password-component></reset-password-component>
</div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import ResetPasswordComponent from "./ResetPasswordComponent.vue";

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