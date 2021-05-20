<template>
  <div class="comment-item">
    <div class="comment-item__header">
      <div class="comment-item__picture-wrapper">
        <router-link :to="{path: '/user/' + authorId}" class="comment_item__picture-ref">
          <img class="comment-item__picture" :src="picture | apiFile" alt="">
        </router-link>
      </div>
      <div class="comment-item__author">
        {{authorName}}
      </div>
      <div v-if="isCommentOwner || isPostOwner" class="comment-item__delete">
        <a @click="deleteComment" href="javascript:;">
          <svg fill="grey" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10.3125 -0.03125 C 8.589844 -0.03125 7.164063 1.316406 7 3 L 2 3 L 2 5 L 6.96875 5 L 6.96875 5.03125 L 17.03125 5.03125 L 17.03125 5 L 22 5 L 22 3 L 17 3 C 16.84375 1.316406 15.484375 -0.03125 13.8125 -0.03125 Z M 10.3125 2.03125 L 13.8125 2.03125 C 14.320313 2.03125 14.695313 2.429688 14.84375 2.96875 L 9.15625 2.96875 C 9.296875 2.429688 9.6875 2.03125 10.3125 2.03125 Z M 4 6 L 4 22.5 C 4 23.300781 4.699219 24 5.5 24 L 18.59375 24 C 19.394531 24 20.09375 23.300781 20.09375 22.5 L 20.09375 6 Z M 7 9 L 8 9 L 8 22 L 7 22 Z M 10 9 L 11 9 L 11 22 L 10 22 Z M 13 9 L 14 9 L 14 22 L 13 22 Z M 16 9 L 17 9 L 17 22 L 16 22 Z"/></svg>
        </a>
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
import {mapState} from "vuex";
import CommentApi from "../../api/comment/CommentApi";

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    postId: {
      type: Number,
      required: true
    },
    postOwnerId: {
      type: Number,
      required: true
    },
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
    },
    isCommentOwner() {
      return this.authorId === this.authenticatedUser.id;
    },
    isPostOwner() {
      return this.postOwnerId === this.authenticatedUser.id;
    },
    ...mapState(['authenticatedUser'])
  },
  methods: {
    deleteComment() {
      let req = CommentApi.delete({
        postId: this.postId,
        commentId: this.id
      });
      this.$emit('comment-deleted', this.id);

      req.then(resp => {
        this.$toasted.success("Comment deleted!");
      });
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
.comment-item__delete {
  margin-left: auto;
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