<template>
  <div class="edit-post__component-wrapper">
    <section class="post-form__wrapper">
      <div class="container">
        <div class="post-form__content">
          <div class="post-form__title">
            Edit post
          </div>
          <form action="#" class="post-form">
            <div class="post-form__textarea-wrapper">
              Edit post text:
              <label class="post-form__textarea-label">
                <textarea v-model="textAreaValue" class="post-form__textarea"></textarea>
              </label>
            </div>
            <div class="post-form__picture-input-wrapper">
              <div class="post-form__picture-wrapper">
                <img v-if="post" class="post-form__picture" :src="post.picture | apiFile" alt="">
              </div>
              <label class="post-form__picture-label">
                <span class="post-form__picture-input submit-input">Edit post picture...</span>
                <input @change="changePicture" class="post-form__picture-input_hidden" type="file">
              </label>
            </div>
            <hr class="post-form__line">
            <div class="post-form__submit-wrapper">
              <label class="post-form__submit-label">
                <input @click.prevent="editPost" class="post-form__submit submit-input" type="submit" value="Edit">
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex";
import PostApi from "../../../api/post/PostApi";
import timeAgo from "../../../helpers/time/timeAgo";

const IMG_WRAPPER_SELECTOR = ".post-form__picture-wrapper";
const IMG_SELECTOR = ".post-form__picture";



export default {
  mounted() {
    this.initPostEdit();
  },
  data() {
    return {
      post: null,
      textAreaValue: "",
      imgWrapper: null,
      img: null,
      image: null
    }
  },
  computed: {
    ...mapState(['posts', 'user'])
  },
  watch: {
    posts() {
      this.initPostEdit();
    }
  },
  methods: {
    initPostEdit() {
      if (this.posts.length !== 0) {
        this.setPostFromStore();
        return;
      }

      let req = PostApi.get({
        id: this.$route.params.id
      });

      req.then(resp => {
        this.post = resp.data.data;

        this.textAreaValue = this.post.text;

        this.$nextTick(() => {
          this.imgWrapper = document.querySelector(IMG_WRAPPER_SELECTOR);
          this.img = document.querySelector(IMG_SELECTOR);
        });
      });
    },
    setPostFromStore() {
      this.post = this.posts.find(post => {
        return post.id === this.$route.params.id;
      });
      this.textAreaValue = this.post.text;
      this.$nextTick(() => {
        this.imgWrapper = document.querySelector(IMG_WRAPPER_SELECTOR);
        this.img = document.querySelector(IMG_SELECTOR);
      });
    },
    changePicture(event) {
      this.image = event.currentTarget.files[0];
      let reader = new FileReader();

      reader.addEventListener("load", () => {
        this.img.setAttribute("src", reader.result);
      });

      reader.readAsDataURL(this.image);
    },
    editPost() {
      let formData = new FormData();
      if (this.image) {
        formData.append("picture", this.image);
      }
      formData.append("text", this.textAreaValue);

      let req = PostApi.edit(this.$route.params.id, formData);

      req.then(resp => {
        this.$store.commit('editPost', resp.data.post);
        this.$router.push({name: 'myPage', params: {id: this.user.id}});
        this.$toasted.success("Post edited successfully!");
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-post__component-wrapper {
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