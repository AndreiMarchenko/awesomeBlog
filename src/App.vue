<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("setCurrentUser").then(() => {
      this.$store.dispatch("setPosts", this.$store.state.user.id);
    });
  }
}
</script>
