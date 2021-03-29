<template>
  <div class="profile-editor">
    <div class="container">
      <div class="profile-editor__picture-wrapper">
        <div class="profile-editor__picture-content">
          <img class="profile-editor__picture" :src="this.$store.state.user.picture | apiFile" alt="">
        </div>
        <form class="profile-editor__picture-form">
          <label>
            <span class="profile-editor__picture-ref submit-input">
              Edit profile picture
            </span>
            <input @change="editPicture" class="profile-editor__picture-input_hidden" type="file">
          </label>
          <input class="profile-editor__picture-submit_hidden" type="submit">
        </form>
      </div>
      <div class="profile-editor-info">
        <div class="profile-editor-info__titles">
          <div class="profile-editor-info__email-title">Email:</div>
          <div class="profile-editor-info__name-title">Profile name:</div>
        </div>
        <div class="profile-editor-info__values">
          <div class="profile-editor-info__email">
            {{ this.$store.state.user.email }}
          </div>
          <div class="profile-editor-info__name">
            {{ this.$store.state.user.name }}
          </div>
        </div>
      </div>
      <div class="profile-editor-modification">
        <form @submit.prevent="changeName()" action="#" class="profile-editor__name-form">
          <label class="profile-editor__name-label">
            Change your name:
            <input v-model="name" type="text" class="profile-editor__name-input text-input">
          </label>
          <div class="profile-editor__name-submit-wrapper">
            <input type="submit" value="Change" class="profile-editor__name-submit submit-input">
          </div>
        </form>

        <div class="profile-editor__password-title">
          Change your password
        </div>
        <hr class="profile-editor__line">

        <form  @submit.prevent="changePassword()" class="profile-editor__password-form" action="#">
          <label class="profile-editor__current-password-label">
            Type in your current password:
            <input v-model="password" type="password" class="profile-editor__current-password-input text-input">
          </label>
          <label class="profile-editor__new-password-label_first">
            Type in new password:
            <input v-model="newPassword" type="password" class="profile-editor__new-password-input_first text-input">
          </label>
          <div class="profile-editor__password-submit-content">
            <label class="profile-editor__new-password-label_second">
              Type in new password again:
              <input v-model="newPassword_confirmation" type="password" class="profile-editor__new-password-input_second text-input">
            </label>
            <div class="profile-editor__password-submit-wrapper">
              <input type="submit" value="Change" class="profile-editor__password-submit submit-input">
            </div>
          </div>
        </form>
      </div>
      <div class="profile-editor__about">
        <div class="container">
          <div class="profile-editor__about-title">
            About me
          </div>
          <div class="profile-editor__about-textarea-wrapper">
            <textarea v-model="profileInfo.text" class="profile-editor__about-textarea"></textarea>
          </div>
          <div class="profile-editor__about-edit">
            <a href="#" class="profile-editor__about-ref submit-input"> Change</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import EditProfileApi from "../../../api/EditProfileApi";

const PROFILE_PICTURE_SELECTOR = ".profile-editor__picture";
const PROFILE_PICTURE_INPUT_SELECTOR = ".profile-editor__picture-input_hidden";
const PROFILE_PICTURE_FORM_SELECTOR = ".profile-editor__picture-form";

export default {
  props: {
    profileInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: null,
      password: null,
      newPassword: null,
      newPassword_confirmation: null
    }
  },
  filters: {
    apiFile(value) {
      return env.API_ENDPOINT + '/' + value;
    }
  },
  methods: {
    editPicture() {
      const profilePicture = document.querySelector(PROFILE_PICTURE_SELECTOR);
      const profilePictureInput = document.querySelector(PROFILE_PICTURE_INPUT_SELECTOR);
      const profilePictureForm = document.querySelector(PROFILE_PICTURE_FORM_SELECTOR);

      let picture = profilePictureInput.files[0];
      let reader = new FileReader();

      let formData = new FormData();
      formData.append("picture", picture);

      reader.readAsDataURL(picture);
      reader.addEventListener("load", () => {
        profilePicture.setAttribute("src", reader.result);
      });

      EditProfileApi.changePicture.bind(this)(formData);
    },
    changeName() {
      EditProfileApi.changeName.bind(this)();
    },
    changePassword() {
      EditProfileApi.changePassword.bind(this)();
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  width: 401px;
}
.profile-editor {
  font-size: 20px;
  height: 100%;

  &__picture-wrapper {
    margin: 0 86px 0 106px;
    padding-top: 150px;
    float: left;
  }
  &__picture {
    width: 320px;
    height: 331px;
  }
  &__picture-form {
    margin-left: 32px;
    margin-top: 15px;
    height: 37px;
  }
  &__picture-ref {
    display: inline-block;
    padding-top: 7px;
  }
  &__picture-input_hidden {
    display: none;
  }
  &__picture-submit_hidden {
    display: none;
  }
  &-info {
    padding-top: 150px;
    display: flex;
    justify-content: flex-start;
  }
  &-info__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 25px;
  }
  &-info__email-title {
    margin-bottom: 20px;
  }
  &-info__email {
    margin-bottom: 20px;
  }
  &-modification {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__name-form {
    display: flex;
    justify-content: flex-start;
    margin-top: 37px;
  }
  &__name-submit {
    margin-left: 30px;
  }
  &__name-label {
    display: flex;
    flex-direction: column;
  }
  &__name-input {
    margin-top: 17px;
  }
  &__name-submit-wrapper {
    display: flex;
    align-self: flex-end;
  }
  &__password-title {
    margin-top: 20px;
  }
  &__line {
    display: block;
    width: 350px;
    height: 1px;
    border: 0;
    margin-left: -10px;
    border-top: 1px solid $mainColor;
  }
  &__current-password-label {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  &__current-password-input {
    margin-top: 17px;
  }
  &__new-password-label_first {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  &__new-password-input_first {
    margin-top: 17px;
  }
  &__password-submit-content {
    display: flex;
    justify-content: flex-start;
  }
  &__new-password-label_second {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  &__new-password-input_second {
    margin-top: 17px;
  }
  &__password-submit-wrapper {
    display: flex;
    align-items: flex-end;
  }
  &__password-submit {
    margin-left: 30px;
  }
  &__about {
    padding-bottom: 20px;
  }
  &__about-title {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 1000px;
  }
  &__about-textarea-wrapper {
    display: flex;
    justify-content: center;
  }
  &__about-textarea {
    margin-top: 20px;
    font-size: 18px;
    resize: none;
    width: 1000px;
    height: 150px;
    border-radius: 10px;
    border-color: $mainColor;
    padding: 5px;
  }
  &__about-edit {
    margin-top: 25px;
    display: flex;
    justify-content: center;
  }
  &__about-ref {
    padding-top: 5px;
  }
}
@media (max-width: 1140px) {
  .profile-editor__picture-wrapper {
    float: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 130px;
    margin: 0;
  }
  .profile-editor__picture-form {
    margin-left: 0;
  }
  .profile-editor-info {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
  .profile-editor-modification {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-editor__name-form {
    display: block;
    margin-top: 60px;
  }
  .profile-editor__name-submit-wrapper {
    justify-content: center;
  }
  .profile-editor__name-submit {
    margin-left: 0;
    margin-top: 20px;
  }
  .profile-editor__password-submit-content {
    display: block;
  }
  .profile-editor__password-submit-wrapper {
    justify-content: center;
  }
  .profile-editor__password-submit {
    margin-left: 0;
    margin-top: 20px;
  }
  .profile-editor__line {
    margin-left: auto;
  }
  .profile-editor__about-textarea {
    margin-left: 10px;
    margin-right: 10px;
  }
}
@media (max-width: 880px) {
  .profile-editor__picture-wrapper {
    padding-top: 100px;
  }
  .profile-editor-info__values {
    overflow-wrap: break-word;
  }
  .profile-editor-info__email {
    word-break: break-all;
  }
  .profile-editor-info__titles {
    min-width: 121px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
@media (max-width: 450px) {
  .profile-editor__picture {
    width: 290px;
    height: 300px;
  }
  .text-input {
    width: 300px;
  }
  .profile-editor__line {
    width: 320px;
  }
  .profile-editor-info__titles {
    margin-left: 3px
  }
  .profile-editor-info__values {
    margin-right: 3px
  }
}
</style>