<template>
  <router-view :key="$route.params.id"></router-view>
</template>

<script>
import parseJwt from "./helpers/jwt/parseJWT";
import getCookie from "./helpers/cookie/getCookie";

export default {
  created() {
    this.$store.dispatch("setAuthenticatedUser");
    //     .then(() => {
    //   this.$store.dispatch("setPosts", this.$store.state.user.id);
    // });
    // let authenticatedId = parseJwt(getCookie("Token")).id;
    // this.$store.dispatch("setAuthenticatedUser", authenticatedId);
  }
}
</script>
