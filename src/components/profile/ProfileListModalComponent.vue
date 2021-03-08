<template>
  <div class="profile-list-modal" :class="{'profile-list-modal_active': isModalActive}">
    <div class="profile-list-modal__header">
      <div @click="setAllTabActive" class="profile-list-modal__all-tab" :class="{'profile-list-modal__tab_active': isAllTabActive}">
        All
      </div>
      <div @click="setSameTabActive" class="profile-list-modal__same-tab" :class="{'profile-list-modal__tab_active': !isAllTabActive}">
        Common
      </div>
      <div @click="closeModal" class="profile-list-modal__close-cross">

      </div>
    </div>
    <div class="profile-list-modal__items_all profile-list-modal__items" :class="{'profile-list-modal__items_active': isAllTabActive}">
      <div v-for="user in usersAllList" class="profile-list-modal__item">
        <div class="profile-list-modal__item-picture-wrapper">
          <a class="profile-list-modal__item-picture-ref" href="">
            <img class="profile-list-modal__item-picture" :src="user.pictureSrc" alt="">
          </a>
        </div>
        <div class="profile-list-modal__item-name">
          {{ user.name }}
        </div>
      </div>
    </div>
    <div class="profile-list-modal__items_same profile-list-modal__items" :class="{'profile-list-modal__items_active': !isAllTabActive}">
      <div v-for="user in usersSameList" class="profile-list-modal__item">
        <div class="profile-list-modal__item-picture-wrapper">
          <a class="profile-list-modal__item-picture-ref" href="">
            <img class="profile-list-modal__item-picture" :src="user.pictureSrc" alt="">
          </a>
        </div>
        <div class="profile-list-modal__item-name">
          {{ user.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalName: String,
    isModalActive: Boolean,
    usersAllList: Array,
    usersSameList: Array
  },
  mounted() {
    const PROFILE_LIST_MODAL_ITEMS_SELECTOR = ".profile-list-modal__items";
    const profileListModalItems = document.querySelectorAll(PROFILE_LIST_MODAL_ITEMS_SELECTOR);
    profileListModalItems.forEach((modalItem) => {
      modalItem.style.height = window.innerHeight/2 +  "px";
    });
  },
  watch: {
    isModalActive() {
      if (this.isModalActive === true) {
        this.openModal();
      }
    }
  },
  data() {
    return {
      isAllTabActive: true,
    }
  },
  methods: {
    openModal() {
      const DARK_BODY_SELECTOR = ".dark-body";
      const DARK_BODY_ACTIVE_CLASS = "dark-body_active";
      const BODY_LOCK_CLASS = "body_lock";
      const darkBody = document.querySelector(DARK_BODY_SELECTOR);
      const body = document.querySelector("body");

      darkBody.classList.add(DARK_BODY_ACTIVE_CLASS);
      body.classList.add(BODY_LOCK_CLASS);

      this.setAllTabActive();

      darkBody.addEventListener("click", this.closeModal);
    },
    closeModal() {
      const DARK_BODY_SELECTOR = ".dark-body";
      const DARK_BODY_ACTIVE_CLASS = "dark-body_active";
      const BODY_LOCK_CLASS = "body_lock";
      const darkBody = document.querySelector(DARK_BODY_SELECTOR);
      const body = document.querySelector("body");


      darkBody.classList.remove(DARK_BODY_ACTIVE_CLASS);
      body.classList.remove(BODY_LOCK_CLASS);

      this.$emit(`closed-${this.modalName}-modal`);
    },
    setAllTabActive() {
      this.isAllTabActive = true;
    },
    setSameTabActive() {
      this.isAllTabActive = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-list-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 299px;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 500;
  padding: 4px;
  background-color: $burgerMenuColor;

  &_active {
    display: block;
    opacity: 1;
  }
  &__header {
    display: flex;
    margin-bottom: 2px;
    padding-top: 15px;
    position: relative;
  }
  &__close-cross {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 0;
    cursor: pointer;
  }
  &__close-cross:before,
  &__close-cross:after {
    content: '';
    width: 30px;
    height: 1px;
    position: absolute;
    background-color: $mainColor;
  }
  &__close-cross:after {
    top: 10px;
    right: 0;
    transform: rotate(45deg);
  }
  &__close-cross:before {
    top: 10px;
    right: 0;
    transform: rotate(-45deg);
  }
  &__items {
    scrollbar-width: none;
    padding-top: 10px;
    display: none;
    overflow-y: auto;
    padding-right: 40px;
  }
  &__items::-webkit-scrollbar {
    display: none;
  }
  &__items_active {
    display: block;
  }
  &__all-tab {
    margin-left: 15px;
    text-align: center;
    font-size: 22px;
    padding-bottom: 10px;
    flex: 1;
  }
  &__same-tab {
    margin-right: 30px;
    text-align: center;
    font-size: 22px;
    padding-left: 10px;
    padding-bottom: 10px;
    flex: 1;
  }
  &__tab_active {
    border-bottom: 1px solid $mainColor;
  }
  &__item {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  &__item-picture-wrapper {
    border-radius: 50%;
    overflow: hidden;
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }
  &__item-picture {
    width: 30px;
    height: 30px;
    display: block;
  }
  &__item-name {
    font-size: 22px;
    margin-left: 13px;
  }
}
.body_lock {
  overflow: hidden;
}
</style>

<style lang="scss">
.dark-body {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 499;
  display: none;
}
.dark-body_active {
  display: block;
  background-color: black;
  opacity: 0.5;
}
</style>