<template>
  <div class="comment-item">
    <div class="comment-item__header">
      <div class="comment-item__picture-wrapper">
        <a class="comment_item__picture-ref" href="">
          <img class="comment-item__picture" :src="pictureSrc" alt="">
        </a>
      </div>
      <div class="comment-item__author">
        {{author}}
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
export default {
  props: {
    author: {
      type: String,
      required: true
    },
    text:  {
      type: String,
      required: true
    },
    time:  {
      type: String,
      required: true
    },
    pictureSrc:  {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss">
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
  margin: 10px 10px 6px;
}
.comment-item__time {
  color: grey;
  font-size: 10px;
  margin-left: 15px;
}
</style>