<template>
  <section class="posts-list-mobile-wrapper">
    <div class="container">
      <div class="posts-list-mobile">
        <div v-if="posts.length > 0" class="posts-list-mobile__content">
          <news-item-component
              v-for="post in posts"
              @liked="handleLike"
              @unliked="handleUnlike"
              @commented="handleComment"
              @deleted-comment="deleteComment"
              :key="'news-item' + post.id"
              :id="post.id"
              :text="post.text"
              :owner-name="user.name"
              :owner-id="user.id"
              :owner-picture-src="user.picture | apiFile"
              :time="time(post.created_at)"
              :picture-src="post.picture | apiFile"
              :comment-count="post.commentNumber"
              :like-count="post.likeNumber"
              :is-like-active="post.isLikedByAuth"
              :comments="[]">
          </news-item-component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsItemComponent from "../news/Item.vue";
import timeAgo from "../../helpers/time/timeAgo";
import {mapState} from "vuex";
import {mapGetters} from "vuex";

const SCROLL_LEFT_TRIGGER = 1000;

export default {
  mounted() {
    document.addEventListener('scroll', this.getMorePostsIfNeed);
  },
  data() {
    return {
      page: 1,
      lastPage: Number.MAX_VALUE,
      addedPost: true,
    }
  },
  components: {
    NewsItemComponent
  },
  computed: {
    ...mapState(['user', 'posts']),
  },
  methods: {
    time(time) {
      return timeAgo(new Date(time));
    },
    getMorePostsIfNeed() {
      if(this.scrolledDocumentToBottom() &&
          this.page < this.lastPage &&
          this.addedPost === true
      ) {

        this.addedPost = false;
        this.$store.dispatch('addPosts', {
          id: this.user.id,
          page: ++this.page
        }).then((resp) => {
          this.lastPage = resp.last_page;
          this.addedPost = true;
        });
      }
    },
    scrolledDocumentToBottom() {
      let scrollLeft = document.documentElement.scrollHeight - document.documentElement.scrollTop;

      return scrollLeft < SCROLL_LEFT_TRIGGER;
    },
    handleLike(postId) {
      let post = this.posts.find(post => {
        return post.id === postId;
      });

      post.likeNumber++;
      post.isLikedByAuth = true;

      this.$store.commit('editPost', post);
    },
    handleUnlike(postId) {
      let post = this.posts.find(post => {
        return post.id === postId;
      });

      post.likeNumber--;
      post.isLikedByAuth = false;

      this.$store.commit('editPost', post);
    },
    handleComment(postId) {
      let post = this.posts.find(post => {
        return post.id === postId;
      });

      post.commentNumber++;
      this.$store.commit('editPost', post);
    },
    deleteComment(postId) {
      let post = this.posts.find(post => {
        return post.id === postId;
      });

      post.commentNumber--;
      this.$store.commit('editPost', post);
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-list-mobile__wrapper {
  width: 100%;
}
.posts-list-mobile {
  padding-top: 10px;
  padding-bottom: 1px;
  border-left: $black solid 1px;
  border-right: $black solid 1px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.posts-list-mobile__content {
  margin: 20px 60px;
}

@media (max-width: 840px) {
  .posts-list-mobile {
    border-left: none;
    border-right: none;
  }
  .posts-list-mobile__content {
    margin-left: 3px;
    margin-right: 3px;
  }
}
</style>