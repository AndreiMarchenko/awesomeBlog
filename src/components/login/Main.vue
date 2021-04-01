<template>
  <section class="login">
    <div class="container">
      <div class="login__title">
        Login
      </div>
      <form @submit.prevent="login" action="#" class="login__form">
        <div class="login__email-wrapper">
          Enter your email:
          <input v-model="email" type="text" class="login__email-input text-input">
        </div>
        <div class="login__password-wrapper">
          Enter your password:
          <input v-model="password" type="password" class="login__password-input text-input">
        </div>
        <div class="login__submit-wrapper">
          <input type="submit" value="Login" class="login__submit submit-input">
          <div class="login__forgot-password-wrapper">
            <router-link :to="{name: 'resetPassword'}" class="login__forgot-password-ref">
              Forgot your password?
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AuthApi from "../../api/AuthApi";
import setCookie from "../../helpers/cookie/setCookie";

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      let req = AuthApi.login({
        email: this.email,
        password: this.password
      });

      req.then(resp => {
        if (resp.status === 200) {
          this.$store.commit('setCurrentUser', {
            email: resp.data.user.email,
            name: resp.data.user.name,
            picture: resp.data.user.profile_picture,
            info: resp.data.user.info
          })
          setCookie("Token", resp.data.access_token, {
            "max-age": resp.data.expires_in,
            samesite: "lax"
          });
          this.$router.push({name: "myPage"});
        }
      }).catch(err => {
        this.$toasted.error("User doesn't exist");
      });

    }
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex: 1;

  &__title {
    padding-top: 150px;
  }
  &__form {
    margin-left: 90px;
    font-size: 18px;
  }
  &__title {
    font-size: 22px;
    margin-left: 100px;
  }
  &__email-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
  }
  &__email-input {
    margin-top: 17px;
  }
  &__password-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
  }
  &__password-input {
    margin-top: 17px;
  }
  &__submit-wrapper {
    display: flex;
    margin-top: 30px;
  }
  &__forgot-password-wrapper {
    margin-top: 4px;
    margin-left: 30px;
  }
  &__forgot-password-ref {
    font-size: 14px;
    color: #308CBF;
  }
}
@media(max-width: 768px) {
  .login__title {
    padding-top: 100px;
  }
}
@media (max-width: 600px) {
  .login__title {
    margin-left: 40px;
  }
  .login__form {
    margin-left: 40px;
  }
}
@media (max-width: 450px) {
  .login__title {
    margin-left: 140px;
  }
  .login__form {
    margin-left: 5px;
    margin-right: 5px;
  }
  .login__forgot-password-wrapper {
    margin-left: 13px;
  }
}
</style>