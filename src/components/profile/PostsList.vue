<template>
<section class="posts-list">
  <div class="posts-list__items-wrapper container">
    <div class="posts-list__items-content">
      <div class="posts-list__item" v-for="post in posts">
        <router-link :to="{
                      name: 'postView',
                      params: {id: post.id},
                    }">
          <img class="posts-list__item-img" :src="post.picture | apiFile" alt="">
        </router-link>
      </div>
      <div v-if="posts.length === 0" class="no-posts">
        No posts yet!
      </div>
    </div>
  </div>
</section>
</template>

<script>
import {mapState} from "vuex";
export default {
  computed : {
    ...mapState(['posts'])
  }
}
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex: 1;
}
.no-posts {
  display: flex;
  align-items: center;
  color: $mainColor;
  font-size: 30px;
}
.posts-list__items-wrapper {
  background-color: $bgColor;
  display: flex;
  justify-content: center;
}
.posts-list__items-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 920px;
  overflow: hidden;
}
.posts-list__item-img {
  width: 294px;
  height: 200px;
  display: block;
  margin-right: 10px;
  margin-top: 10px;
}
</style>