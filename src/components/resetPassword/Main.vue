<template>
  <section class="reset-password">
    <div class="container">
      <div class="reset-password__title">
        Reset password
      </div>
      <form action="#" class="reset-password__form">
        <div class="reset-password__email-wrapper">
          Enter your email:
          <input :value="userEmail" v-model="email" type="text" class="reset-password__email-input text-input">
        </div>
        <div class="reset-password__submit-wrapper">
          <input type="submit" value="Reset" class="reset-password__submit submit-input">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      email: ""
    }
  },
  computed: {
    ...mapState({
      userEmail: state => state.user.email
    })
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  height: 100%;

  &__form {
    margin-left: 90px;
    font-size: 18px;
  }
  &__title {
    padding-top: 150px;
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
  &__submit-wrapper {
    display: flex;
    margin-top: 30px;
  }
}
@media (max-width: 768px) {
  .reset-password__title {
    padding-top: 100px;
  }
}
@media (max-width: 600px) {
  .reset-password__title {
    margin-left: 40px;
  }
  .reset-password__form {
    margin-left: 40px;
  }
}
@media (max-width: 450px) {
  .registration__title {
    margin-left: 115px;
  }
  .reset-password__form {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>