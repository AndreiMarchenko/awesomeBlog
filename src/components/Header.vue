<template>
  <header class="header" :class="{'header_active': isBurgerActive}">
    <div class="container">
      <div class="header__content">
        <div @click="requestToServer" class="logo">
          <router-link class="logo__ref" :class="{'logo__ref_active': isBurgerActive}" to="Friend">Awesome Blog</router-link>
        </div>
        <nav class="header__list-wrapper" :class="{'header__list_active': isBurgerActive}">
          <ul class="header__list">
            <li v-for="item in navItems" class="header__list-item"><router-link :to="{name: toName(item)}">{{ item }}</router-link></li>
          </ul>
        </nav>
        <div @click="activateBurger" class="burger" :class="{'burger_active': isBurgerActive}">
          <span></span>
        </div>
      </div>
      <hr class="header__line">
    </div>
  </header>
</template>

<script>
const bodyLockClass = "body_lock";
import axios from "../api/axiosConf";

export default {
  data() {
    return {
      isBurgerActive: false
    }
  },
  props: {
    navItems: {
      type: Array,
      default: []
    }
  },
  methods: {
    activateBurger() {
      const body = document.querySelector("body");

      this.$emit("clicked-burger");
      this.isBurgerActive = !this.isBurgerActive;

      body.classList.toggle(bodyLockClass);
    },
     toName(str) {
       str = str.trim();
       let words = [];
       str.split(' ').forEach(word => {
           words.push(word[0].toUpperCase() + word.slice(1));
       });

       let joinedWords = words.join('');
       return joinedWords[0].toLowerCase() + joinedWords.slice(1);
     },
    requestToServer() {
      axios.get("/test")
      .then((resp) => {
        console.log(resp);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.burger {
  display: none;
}
.header {
  width: 100%;
  position: fixed;

  &__content {
      display: flex;
      justify-content: space-between;
  }
  &__list-wrapper {
     margin-right: 90px;
  }
  &__list {
    font-size: 22px;
    margin-top: 46px;
  }
  &__list-item {
    margin-right: 35px;
  }
  &__line {
    display: block;
    max-width: 1220px;
    height: 1px;
    border: 0;
    margin-bottom: 2px;
    padding-bottom: 1px;
    padding-right: 100px;
    border-top: 1px solid $mainColor;
  }
}
.logo {
  margin-top: 35px;
  margin-left: 90px;
  font-size: 34px;
}
@media(max-width: 1000px) {
  .header__list-wrapper {
    margin-right: 10px;
  }
}
@media(max-width: 768px) {
  .logo {
    position: relative;
    margin-top: 15px;
    margin-left: 40px;
    font-size: 34px;
    z-index: 3;
  }
  .logo__ref_active {
    color: $white;
  }
  .header {
    &_active:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: $mainColor;
    }
    &__list-wrapper {
      position: fixed;
      top: -100%;
      width: 100%;
      height: 100%;
      background-color: $burgerMenuColor;
      transition: all 0.3s ease;
      overflow: auto;
    }
    &__list_active {
      top: 0;
      transition: all 0.3s ease;
    }
    &__list {
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: 22px;
      margin-top: 90px;
      margin-bottom: 0;
    }
    &__list-item {
      margin-bottom: 16px;
    }
  }
  .burger {
    z-index: 3;
    margin-top: 26px;
    margin-right: 30px;
    display: block;
    position: relative;
    width: 30px;
    height: 20px;

    &:before,
    &:after {
      height: 2px;
      content: '';
      width: 100%;
      position: absolute;
      background-color: $mainColor;
      transition: all 0.3s ease;
    }
    & span {
      position: absolute;
      top: 9px;
      height: 2px;
      width: 100%;
      background-color: $mainColor;
      transition: all 0.3s ease;
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
    &_active:after {
      bottom: 9px;
      background-color: $white;
      transform: rotate(45deg);
      transition: all 0.3s ease;
    }
    &_active:before {
      top: 9px;
      background-color: $white;
      transform: rotate(-45deg);
      transition: all 0.3s ease;
    }
    &_active span {
      background-color: $white;
      transform: scale(0);
      transition: all 0.3s ease;
    }
  }
  .body_lock {
    overflow: hidden;
  }
  body {
    background-color: $bgColor;
  }
  .login__title {
    padding-top: 100px;
  }
}
@media (max-width: 450px) {
  .logo {
    margin-left: 10px;
  }
  .burger {
    margin-right: 10px;
  }
}
</style>