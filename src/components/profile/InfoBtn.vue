<template>
  <div class="profile-info__btn">
    <a class="profile-info__btn-ref">
      <slot></slot>
    </a>
  </div>
</template>

<script>
const BTN_SELECTOR = ".profile-info__btn-ref";

export default {
  props: {
    color: {
      type: String,
      default: '#308CBF'
    }
  },
  mounted() {
    this.btn = document.querySelector(BTN_SELECTOR);
    this.btn.style.setProperty('--color', this.color);
  },
  data() {
    return {
      btn: null
    }
  },
}
</script>

<style lang="scss">
.profile-info__btn {
  cursor: pointer;
  font-size: 18px;
  margin-left: 3px;
  margin-top: 25px;
}
.profile-info__btn-ref {
  height: 37px;
  padding: 2px 50px;
  color: var(--color);
  border: var(--color) 1px solid;
  transition: background-color .4s ease-out,
  color .1s ease-out;
  border-radius: 5px;
}
.profile-info__btn-ref:hover{
  background-color: var(--color);
  border: grey 1px solid;
  color: $white;
  transition: background-color .5s ease-out,
  color .1s ease-out,
  border .4s ease-out;
}
.profile-info__btn-ref:active{
  background-color: $bgColor;
  color: var(--color);
  border: var(--color) 1px solid;
  transition: background-color .1s ease-out,
  color .4s ease-out;
}

@media (max-width: 375px) {
  .profile-info__btn {
    display: flex;
    justify-content: center;
  }
  .profile-info__btn-ref {
    height: 29px;
  }
}
</style>