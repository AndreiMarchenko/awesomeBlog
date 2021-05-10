<template>
  <div class="comment-item">
    <div class="comment-item__header">
      <div class="comment-item__picture-wrapper">
        <router-link :to="{alias: 'user', params: {id : authorId}}" class="comment_item__picture-ref">
          <img class="comment-item__picture" :src="picture | apiFile" alt="">
        </router-link>
      </div>
      <div class="comment-item__author">
        {{authorName}}
      </div>
    </div>
    <div class="comment-item__text">
      {{text}}
    </div>
    <div class="comment-item__time">
      {{time}}
    </div>
  </div>
</template>

<script>
import timeAgo from "../../helpers/time/timeAgo";

export default {
  props: {
    authorName: {
      type: String,
      required: true
    },
    authorId: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    ago: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
  },
  computed: {
    time() {
      return timeAgo(new Date(this.ago));
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-item__header {
  display: flex;
  justify-content: flex-start;
}
.comment-item__picture-wrapper {
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
}
.comment-item__picture {
  width: 30px;
  height: 30px;
  display: block;
}
.comment-item__author {
  margin-left: 15px;
  margin-top: 6px;
}
.comment-item__text {
  font-size: 16px;
  word-break: break-word;
  margin: 10px 10px 6px;
}
.comment-item__time {
  color: grey;
  font-size: 10px;
  margin-left: 15px;
}
</style>