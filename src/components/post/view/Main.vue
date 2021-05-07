<template>
  <section class="profile-post container">
    <div v-if="owner" class="profile-post__content">
      <div class="profile-post__header">
        <div @click="$router.back()" class="go-back">
          <svg class="go-back__svg" width="42" height="20" viewBox="0 0 33 16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM33 7L1 7V9L33 9V7Z"
                fill="#308CBF"/>
          </svg>
          <div class="go-back__text">
            Go back
          </div>
        </div>
        <div class="profile-post__owner-picture-wrapper">
          <img :src="owner.picture | apiFile" alt="" class="profile-post__owner-picture">
        </div>
        <div class="profile-post__info-wrapper">
          <div class="profile-post__owner-name">
            {{ owner.name }}
          </div>
          <div class="profile-post__time">
            {{ time }}
          </div>
        </div>
        <div v-if="isMyPost" class="profile-post__change-wrapper">
          <router-link :to="{name: 'postEdit', params: {id: this.$route.params.id}}" class="profile-post__change-ref">Change</router-link>
        </div>
      </div>
      <div class="profile-post__text">
        {{ post.text }}
      </div>
      <div class="profile-post__picture-wrapper">
        <img class="profile-post__picture" :src="post.picture | apiFile" alt="">
      </div>
    </div>
    <div class="profile-post__footer">
      <div class="like__wrapper" @click="likeAction">
        <a class="like__ref" href="javascript:void(0)">
          <svg class="like__icon" :class="{'like__icon_active': isLikeActive}" viewBox="0 0 26 26" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.4204 8.86946L12.7739 9.22302L13.1275 8.86946C15.2838 6.71312 18.7799 6.71312 20.9363 8.86946C23.0926 11.0258 23.0926 14.5219 20.9363 16.6783L12.7739 24.8406L4.61157 16.6783C2.45523 14.5219 2.45523 11.0258 4.61157 8.86946C6.76791 6.71312 10.264 6.71312 12.4204 8.86946Z"
                stroke="black"/>
          </svg>
          <div class="like__count">
            {{ likeCount }}
          </div>
        </a>
      </div>
      <div class="comment-icon__wrapper" @click="toggleComments">
        <a class="comment-icon__ref" href="javascript:void(0)">
          <svg class="comment-icon" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.0864 12.9785C2.07179 12.8115 2.06137 12.6451 2.05506 12.4794M2.05506 12.4794C1.85348 7.18625 5.84198 2.61178 11.1768 2.14504C16.6786 1.6637 21.5289 5.7336 22.0103 11.2354L25.2852 19.9833L12.3348 21.1166M2.05506 12.4794C2.77569 17.7271 7.49794 21.5395 12.8328 21.0727M2.05506 12.4794C2.0325 12.3151 2.01386 12.1494 1.99925 11.9824"
                stroke="black"/>
          </svg>

          <div class="comment__count">
            {{ commentCount }}
          </div>
        </a>
      </div>
    </div>
    <div v-if="isCommentsActive">
      <template v-for="(comment, i) in comments">
        <comment-item-component class="comment-item"
                                :key="comment.id"
                                :author="comment.author"
                                :picture="comment.picture"
                                :text="comment.text"
                                :ago="comment.created_at"
        ></comment-item-component>
      </template>
      <hr class="profile-post__line">
      <div class="new-comment">
        <div class="new-comment__title">
          Add new comment
        </div>
        <textarea v-model="commentText" class="new-comment__text" name="" id="" cols="30" rows="10"></textarea>
        <div class="new-comment__submit-wrapper">
          <label class="new-comment__submit-label">
            <input @click.prevent="addComment" class="new-comment__submit submit-input" type="submit" value="Add">
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import CommentItemComponent from "../CommentItem.vue";
import UserApi from "../../../api/user/UserApi";
import PostApi from "../../../api/post/PostApi";
import timeAgo from "../../../helpers/time/timeAgo";
import CommentApi from "../../../api/comment/CommentApi";
import LikeApi from "../../../api/like/LikeApi";

export default {
  components: {
    CommentItemComponent
  },
  mounted() {
    this.initPost();
  },
  data() {
    return {
      post: null,
      time: null,
      owner: null,
      ownerPictureSrc: null,
      ownerName: null,
      comments: [],
      commentCount: null,
      isLikeActive: false,
      isCommentsActive: false,
      commentText: null,
      likeCount: null
    }
  },
  computed: {
    ...mapState(['posts', 'authenticatedUser']),
    isMyPost() {
      return this.authenticatedUser.id === this.owner.id;
    }
  },
  methods: {
    initPost() {
      let req = PostApi.get({
        id: this.$route.params.id
      });

      req.then(resp => {
        this.post = resp.data.data;
        this.time = timeAgo(new Date(this.post.created_at));

        this.likeCount = resp.data.data.likeNumber;
        this.commentCount = resp.data.data.commentNumber;
        this.isLikeActive = resp.data.data.isLikedByAuth;

        this.setPostOwner();
      });
    },
    setPostOwner() {
      let req = UserApi.get({
        id: this.post.user_id
      });

      req.then(resp => {
        this.owner = resp.data;
      });
    },
    addComment() {
      let req = CommentApi.add({
        id: this.post.id,
        text: this.commentText
      });

      req.then(resp => {
        this.comments.push(resp.data.comment);
        this.commentCount++;
        this.commentText = null;
      });
    },
    toggleComments() {
      if (this.comments.length > 0) {
        this.isCommentsActive = !this.isCommentsActive;
        return;
      }

      let req = CommentApi.getAll({
        id: this.post.id
      });

      req.then(resp => {
        this.comments = resp.data;
        this.isCommentsActive = !this.isCommentsActive;
      });

    },
    likeAction() {
      let req = LikeApi.likeAction({
        id: this.post.id
      });

      req.then(resp => {
        if(resp.data.currentState) {
          this.likeCount++;
        } else {
          this.likeCount--;
        }
        this.isLikeActive = !this.isLikeActive;
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.go-back {
  position: absolute;
  left: 55px;
  bottom: 155px;
  display: flex;
  cursor: pointer;
}
.go-back__text {
  color: $mainColor;
  margin-bottom: 10px;
  margin-left: 5px;
}
.profile-post {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 20px;

  &__header {
    padding-top: 165px;
    display: flex;
    justify-content: flex-start;
    position: relative;
  }

  &__owner-picture-wrapper {
    margin-left: 60px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__owner-picture {
    display: block;
    width: 140px;
    height: 140px;
  }

  &__owner-name {
    font-size: 28px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &__info-wrapper {
    margin-left: 30px;
  }

  &__time {
    color: $lightGrey;
    font-size: 14px;
  }

  &__text {
    margin-top: 40px;
    font-size: 22px;
    margin-left: 60px;
    margin-right: 60px;
  }

  &__picture-wrapper {
    margin: 60px auto 20px auto;
    max-width: 1000px;
    height: auto;
  }

  &__picture {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__change-wrapper {
    flex: 1;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 30px;
    padding-bottom: 20px;
    text-align: center;
  }

  &__change-ref {
    height: 37px;
    padding: 4px 50px;
    font-size: 18px;
    color: $mainColor;
    border: $mainColor 1px solid;
    transition: background-color .4s ease-out,
    color .1s ease-out;
    border-radius: 5px;
  }

  &__change-ref:hover{
    background-color: $mainColor;
    border: grey 1px solid;
    color: $white;
    transition: background-color .5s ease-out,
    color .1s ease-out,
    border .4s ease-out;
  }
  &__footer {
    display: flex;
    justify-content: flex-start;
    margin-left: 60px;
  }
}

.comment-icon__wrapper {
  margin-top: 4px;
  margin-left: 20px;
}

.like__icon {
  width: 52px;
  height: 52px;
}

.comment-icon {
  width: 52px;
  height: 46px;
}

.like__count {
  font-size: 22px;
  margin-top: 10px;
  margin-left: 3px;
}

.comment__count {
  font-size: 22px;
  margin-top: 6px;
  margin-left: 5px;
}

.comment__wrapper {
  margin: 20px 0 40px;
}

.comment__wrapper_active {
  display: block;
}

.like__icon_active {
  fill: $likeColor;
}

.comment-item {
  margin: 0 50px 10px;
  padding: 10px;
  border: 1px grey solid;
  border-radius: 10px;
}

.new-comment {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.new-comment__title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.new-comment__text {
  font-size: 18px;
  color: $textareaColor;
  height: 110px;
  max-width: 800px;
  width: 100%;
  padding: 5px;
  resize: none;
  border-radius: 10px;
  border-color: $textareaBorder;
  background-color: $textareaBg;
}

.new-comment__submit-wrapper {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .go-back {
    bottom: 145px;
    left: 30px;
  }
  .profile-post {
    &__header {
      padding-top: 120px;
    }

    &__owner-picture-wrapper {
      margin-left: 20px;
    }

    &__text {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 18px;
    }

    &__picture-wrapper {
      margin: 40px 30px 20px;
    }

    &__footer {
      margin-left: 20px;
    }
  }
  .like__icon {
    width: 39px;
    height: 39px;
  }
  .comment-icon {
    width: 39px;
    height: 35px;
  }
  .comment-icon__wrapper {
    margin-top: 2px;
  }
  .like__count {
    margin-top: 5px;
    margin-left: 3px;
  }
  .comment__count {
    margin-top: 2px;
    margin-left: 5px;
  }
  .comment-item {
    margin: 0 20px 20px;
  }
}

@media (max-width: 510px) {
  .profile-post__header {
    margin-bottom: 100px;
  }
  .profile-post__change-wrapper {
    position: absolute;
    top: 265px;
    left: 50%;
    margin-left: -84px;
  }
}

@media (max-width: 425px) {
  .go-back {
    bottom: 95px;
    left: 30px;
  }
  .profile-post__header {
    margin-bottom: 80px;
  }
  .profile-post__change-wrapper {
    top: 210px;
  }
  .profile-post__owner-picture-wrapper {
    width: 90px;
    height: 90px;
  }
  .profile-post__owner-picture {
    width: 90px;
    height: 90px;
  }
  .profile-post__info-wrapper {
    margin-top: -25px;
  }
}
</style>