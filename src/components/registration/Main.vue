<template>
  <section class="registration">
    <div class="container">
      <div class="registration__title">
        Registration
      </div>
      <form action="#" class="registration__form">
        <div class="registration__name-wrapper">
          Enter your name:
          <input v-model="name" type="text" class="registration__name-input text-input">
        </div>
        <div class="registration__surname-wrapper">
          Enter your surname:
          <input v-model="surname" type="text" class="registration__surname-input text-input">
        </div>
        <div class="registration__email-wrapper">
          Enter your email:
          <input v-model="email" type="text" class="registration__email-input text-input">
        </div>
        <div class="registration__submit-wrapper">
          <input type="submit" value="Sign up" class="registration__submit submit-input">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: ""
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../common";
.registration {
  &__form {
    margin-left: 90px;
    font-size: 18px;
  }
  &__title {
    padding-top: 150px;
    font-size: 22px;
    margin-left: 100px;
  }
  &__name-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
  }
  &__name-input {
    margin-top: 17px;
  }
  &__surname-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
  }
  &__surname-input {
    margin-top: 17px;
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
@media(max-width: 768px) {
  .registration__title {
    padding-top: 100px;
  }
}
@media (max-width: 600px) {
  .registration__title {
    margin-left: 40px;
  }
  .registration__form {
    margin-left: 40px;
  }
}
@media (max-width: 450px) {
  .registration__title {
    margin-left: 115px;
  }
  .registration__form {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>