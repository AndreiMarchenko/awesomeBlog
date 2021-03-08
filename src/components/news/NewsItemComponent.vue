<template>
  <div class="news-item">
    <div class="news-item__header">
      <div class="news-item__owner-picture-wrapper">
        <img :src="ownerPictureSrc" class="news-item__owner-picture">
      </div>
      <div class="news-item__info-wrapper">
        <div class="news-item__owner-name">
          {{ownerName}}
        </div>
        <div class="news-item__time">
         {{time}}
        </div>
      </div>
    </div>
    <div class="news-item__text">
      {{text}}
    </div>
    <div class="news-item__picture-wrapper">
      <img class="news-item__picture" :src="pictureSrc" alt="">
    </div>
    <hr class="news-item__line">
    <div class="news-item__footer">
      <div class="like__wrapper" @click="like">
        <a class="like__ref" href="#">
          <svg class="like__icon" :class="{'like__icon_active': isLikeActive}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4204 8.86946L12.7739 9.22302L13.1275 8.86946C15.2838 6.71312 18.7799 6.71312 20.9363 8.86946C23.0926 11.0258 23.0926 14.5219 20.9363 16.6783L12.7739 24.8406L4.61157 16.6783C2.45523 14.5219 2.45523 11.0258 4.61157 8.86946C6.76791 6.71312 10.264 6.71312 12.4204 8.86946Z" stroke="black"/>
          </svg>
          <div class="like__count">
            {{likeCount}}
          </div>
        </a>
      </div>
      <div class="comment-icon__wrapper" @click="comment">
        <a class="comment-icon__ref" href="#">
          <svg class="comment-icon" width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.0864 12.9785C2.07179 12.8115 2.06137 12.6451 2.05506 12.4794M2.05506 12.4794C1.85348 7.18625 5.84198 2.61178 11.1768 2.14504C16.6786 1.6637 21.5289 5.7336 22.0103 11.2354L25.2852 19.9833L12.3348 21.1166M2.05506 12.4794C2.77569 17.7271 7.49794 21.5395 12.8328 21.0727M2.05506 12.4794C2.0325 12.3151 2.01386 12.1494 1.99925 11.9824" stroke="black"/>
          </svg>

          <div class="comment__count">
            {{comments.length}}
          </div>
        </a>
      </div>
    </div>
    <div class="comment__wrapper" :class="{'comment__wrapper_active': isCommentsActive}">
      <hr class="news-item__line">
      <template  v-for="(comment, i) in comments">
        <comment-item-component
            :key="comment.id"
            :author="comment.author"
            :picture-src="comment.pictureSrc"
            :text="comment.text"
            :time="comment.time"
        ></comment-item-component>
        <hr v-if="i !== comments.length - 1" class="news-item__line">
      </template>
    </div>
  </div>
</template>

<script>
import CommentItemComponent from "./CommentItemComponent.vue";
export default {
  components: {CommentItemComponent},
  props: {
    text: String,
    ownerName: String,
    ownerPictureSrc: String,
    time: String,
    pictureSrc: String,
    likeCount: Number,
    comments: Array
  },
  data() {
    return {
      isLikeActive: false,
      isCommentsActive: false
    }
  },
  methods: {
    comment() {
      this.isCommentsActive = !this.isCommentsActive;
    },
    like() {
      this.isLikeActive = !this.isLikeActive;
    }
  },
  name: "NewsItemComponent"
}
</script>

<style lang="scss">
.news-item {
  border: $mainColor 1px solid;
  margin-bottom: 20px;

  &__header {
    display: flex;
  }
  &__owner-picture-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 20px;
    margin-left: 20px;
  }
  &__owner-picture {
    width: 80px;
    height: 80px;
  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 35px;
    margin-left: 20px;
  }
  &__time {
    color: $lightGrey;
    font-size: 12px;
  }
  &__picture-wrapper {
    padding-bottom: 58%;
    margin-left: 20px;
    margin-right: 20px;
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
  &__line {
    display: block;
    max-width: 650px;
    height: 1px;
    border: 0;
    margin-left: 20px;
    margin-right: 20px;
    border-top: 1px solid grey;
  }
  &__text {
    margin: 10px 20px 5px;
  }
  &__footer {
    display: flex;
  }
}
.like__wrapper {
  margin-left: 11px;
}
.like__ref {
  display: flex;
}
.like__icon {
  margin-top: -5px;
  margin-bottom: 5px;
  margin-right: 2px;
}
.like__icon_active {
  fill: $likeColor;
}
.like__count {
  margin-top: 1px;
}
.comment-icon__wrapper {
  margin-left: 13px;
}
.comment-icon__ref {
  display: flex;
}
.comment-icon {
  margin-top: -1px;
  margin-right: 3px;
}
.comment__count {
  margin-top: 1px
}
.comment__wrapper {
  display: none;
}
.comment__wrapper_active {
  display: block;
}
@media (max-width: 840px) {
  .news-item__picture {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
  .news-item__line {
    max-width: 750px;
  }
  .news-item__footer {
    padding: 8px 0px 12px 10px;
  }
}
</style>