<template>
  <div class="profile-list-modal" :class="{'profile-list-modal_active': isModalActive}">
    <div class="profile-list-modal__title">
      {{this.capitalizedModalName}}
    </div>
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
    <div @scroll="getMoreUsersAllIfNeed" class="profile-list-modal__items_all profile-list-modal__items" :class="{'profile-list-modal__items_active': isAllTabActive}">
      <div v-for="item in usersAllList" class="profile-list-modal__item">
        <div class="profile-list-modal__item-picture-wrapper">
          <router-link :to="{path: '/user/' + item.id}" class="profile-list-modal__item-picture-ref" >
            <img class="profile-list-modal__item-picture" :src="item.picture | apiFile" alt="">
          </router-link>
        </div>
        <div class="profile-list-modal__item-name">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div @scroll="getMoreUsersSameIfNeed" class="profile-list-modal__items_same profile-list-modal__items" :class="{'profile-list-modal__items_active': !isAllTabActive}">
      <div v-for="item in usersSameList" class="profile-list-modal__item">
        <div class="profile-list-modal__item-picture-wrapper">
          <router-link :to="{path: '/user/' + item.id}" class="profile-list-modal__item-picture-ref" href="">
            <img class="profile-list-modal__item-picture" :src="item.picture | apiFile" alt="">
          </router-link>
        </div>
        <div class="profile-list-modal__item-name">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import UserApi from "../../api/user/UserApi";

const DARK_BODY_SELECTOR = ".dark-body";
const DARK_BODY_ACTIVE_CLASS = "dark-body_active";
const BODY_LOCK_CLASS = "body_lock";
const PROFILE_LIST_MODAL_ITEMS_SELECTOR = ".profile-list-modal__items";
const PROFILE_LIST_MODAL_ITEMS_ALL_SELECTOR = ".profile-list-modal__items_all";
const PROFILE_LIST_MODAL_ITEMS_SAME_SELECTOR = ".profile-list-modal__items_same";

const SCROLL_LEFT_TRIGGER = 1000;

export default {
  props: {
    modalName: {
      type: String,
      required: true
    },
    usersAllList: {
      type: Array,
      default: () => []
    },
    usersSameList: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.darkBody = document.querySelector(DARK_BODY_SELECTOR);
    this.body = document.querySelector("body");
    this.profileListModalItemAll = document.querySelector(PROFILE_LIST_MODAL_ITEMS_ALL_SELECTOR);
    this.profileListModalItemSame = document.querySelector(PROFILE_LIST_MODAL_ITEMS_SAME_SELECTOR);

    this.openModal();

    const profileListModalItems = document.querySelectorAll(PROFILE_LIST_MODAL_ITEMS_SELECTOR);

    profileListModalItems.forEach((modalItem) => {
      modalItem.style.height = window.innerHeight/2 + "px";
    });

  },
  data() {
    return {
      isModalActive: false,
      isAllTabActive: true,
      profileListModalItemAll: null,
      profileListModalItemSame: null,
      darkBody: null,
      body: null
    }
  },
  computed: {
    ...mapState(['user']),
    capitalizedModalName() {
      return this.modalName.charAt(0).toUpperCase() + this.modalName.slice(1);
    }
  },
  methods: {
    openModal() {
      if (this.usersAllList.length === 0) {
        this.$emit(`closed-${this.modalName}-modal`);
        return;
      }
      this.isModalActive = true;

      this.darkBody.classList.add(DARK_BODY_ACTIVE_CLASS);
      this.body.classList.add(BODY_LOCK_CLASS);

      this.setAllTabActive();

      this.darkBody.addEventListener("click", this.closeModal);
    },
    closeModal() {
      this.darkBody.classList.remove(DARK_BODY_ACTIVE_CLASS);
      this.body.classList.remove(BODY_LOCK_CLASS);

      this.$emit(`closed-${this.modalName}-modal`);
    },
    setAllTabActive() {
      this.isAllTabActive = true;
    },
    setSameTabActive() {
      this.isAllTabActive = false;
    },
    getMoreUsersAllIfNeed() {
      if(this.scrolledAllModalToBottom()) {
        this.$emit('scrolled-all-modal-to-bottom');
      }
    },
    getMoreUsersSameIfNeed() {
      if(this.scrolledSameModalToBottom()) {
        this.$emit('scrolled-same-modal-to-bottom');
      }
    },
    scrolledAllModalToBottom() {
        let scrollLeft = this.profileListModalItemAll.scrollHeight - this.profileListModalItemAll.scrollTop;

        return scrollLeft < SCROLL_LEFT_TRIGGER;
    },
    scrolledSameModalToBottom() {
      let scrollLeft = this.profileListModalItemSame.scrollHeight - this.profileListModalItemSame.scrollTop;

      return scrollLeft < SCROLL_LEFT_TRIGGER;
    }
  },
  beforeDestroy() {
    if (this.body) {
      this.body.classList.remove(BODY_LOCK_CLASS);
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
  &__title {
    text-align: center;
    font-size: 26px;
    margin-top: 10px;
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
    top: -27px;
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
.body_lock {
  overflow: hidden;
}
</style>