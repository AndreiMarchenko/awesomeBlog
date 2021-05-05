<template>
  <div class="add-post__component-wrapper">
    <section class="post-form__wrapper">
      <div class="container">
        <div class="post-form__content">
          <div class="post-form__title">
            New post
          </div>
          <form action="#" class="post-form">
            <div class="post-form__textarea-wrapper">
              Enter post text:
              <label class="post-form__textarea-label">
                <textarea @change="storeText" v-model="textAreaValue" class="post-form__textarea"></textarea>
              </label>
            </div>
            <div class="post-form__picture-input-wrapper">
              <div class="post-form__picture-wrapper">
                <img class="post-form__picture" src="" alt="">
              </div>
              <label class="post-form__picture-label">
                <span class="post-form__picture-input submit-input">Choose post picture...</span>
                <input @change="changePicture" class="post-form__picture-input_hidden" type="file">
              </label>
            </div>
            <hr class="post-form__line">
            <div class="post-form__submit-wrapper">
              <label class="post-form__submit-label">
                <input @click.prevent="createPost" class="post-form__submit submit-input" type="submit" value="Post">
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import PostApi from "../../../api/post/PostApi";
import dataUrlToPicture from "../../../helpers/picture/dataUrlToPicture";

const PICTURE_WRAPPER_SELECTOR = ".post-form__picture-wrapper";
const PICTURE_SELECTOR = ".post-form__picture";

const PICTURE_WRAPPER_ACTIVE_CLASS = "picture-wrapper_active";


export default {
  mounted() {
    this.pictureWrapper = document.querySelector(PICTURE_WRAPPER_SELECTOR);
    this.picture = document.querySelector(PICTURE_SELECTOR);

    if (localStorage.getItem("postText")) {
      this.textAreaValue = localStorage.getItem("postText");
    }

    if (localStorage.getItem("postPicture")) {
      this.pictureWrapper.classList.add(PICTURE_WRAPPER_ACTIVE_CLASS);
      this.picture.setAttribute("src", localStorage.getItem("postPicture"));
    }
  },
  data() {
    return {
      textAreaValue: "",
      pictureWrapper: null,
      picture: null,
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    changePicture(event) {
      if (event.currentTarget.files[0] !== null) {
        this.pictureWrapper.classList.add(PICTURE_WRAPPER_ACTIVE_CLASS);
      } else {
        this.pictureWrapper.classList.remove(PICTURE_WRAPPER_ACTIVE_CLASS);
      }

      let selectedFile = event.currentTarget.files[0];
      let reader = new FileReader();

      reader.addEventListener("load", () => {
        this.picture.setAttribute("src", reader.result);
        this.storePicture(reader.result);
      });

      reader.readAsDataURL(selectedFile);
    },
    storeText() {
      localStorage.setItem("postText", this.textAreaValue);
    },
    storePicture(src) {
      localStorage.setItem("postPicture", src);
    },
    createPost() {
      dataUrlToPicture(localStorage.getItem("postPicture")).then(resp => {
        let formData = new FormData();

        if (this.picture) {
          formData.append("picture", resp);
        }
        formData.append("text", this.textAreaValue);

        let req = PostApi.create(formData);

        req.then(resp => {
          localStorage.removeItem("postText");
          localStorage.removeItem("postPicture");

          this.$store.commit('addPosts', [resp.data.post]);
          this.$router.push({name: 'myPage', params: { id: this.user.id}});
          this.$toasted.success("Post created successfully!");
        });
      }).catch(err => {
        this.$toasted.error("Please choose another file");
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.add-post__component-wrapper {
  display: flex;
  justify-content: center;
  flex: 1;
}
.post-form {
  font-size: 18px;
  margin-left: 20px;
  margin-right: 20px;

  &__wrapper {
    display: flex;
    width: 100%;
    max-width: 1300px;
  }
  &__content {
    padding-top: 150px;
  }
  &__title {
    font-size: 24px;
    text-align: center;
  }
  &__textarea-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__textarea {
    font-size: 18px;
    color: $textareaColor;
    margin-top: 15px;
    height: 150px;
    width: 800px;
    padding: 5px;
    resize: none;
    border-radius: 10px;
    border-color: $textareaBorder;
    background-color: $textareaBg;
  }
  &__textarea:focus {
    background-color: #faf9f5;
  }
  &__picture-input-wrapper {
    max-width: 600px;
    margin: 20px auto 30px;
  }
  &__picture-label {
    display: flex;
    justify-content: center;
  }
  &__picture-input {
    display: flex;
    align-items: center;
  }
  &__picture-input_hidden {
    display: none;
  }
  &__picture-wrapper {
    display: none;
    padding-bottom: 58%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  &__picture {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
  &__picture-input {
    margin-top: 20px;
  }
  &__line {
    display: block;
    max-width: 1220px;
    height: 1px;
    border: 0;
    margin-bottom: 2px;
    padding-bottom: 1px;
    border-top: 1px solid $mainColor;
  }
  &__submit-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
.picture-wrapper_active {
  display: block;
}
@media (max-width: 880px) {
  .post-form__content {
    padding-top: 100px;
  }
  .post-form__textarea {
    width: 600px;
  }
}
@media (max-width: 630px) {
  .post-form__textarea {
    width: 500px;
  }
}
@media (max-width: 530px) {
  .post-form__textarea {
    width: 400px;
    height: 130px;
  }
}
@media (max-width: 420px) {
  .post-form__textarea {
    width: 300px;
  }
}

</style>