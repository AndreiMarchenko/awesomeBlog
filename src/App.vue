<template>
  <router-view :key="$route.params.id"></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("setAuthenticatedUser")
         .catch(err => this.$router.go);
  },
}
</script>
