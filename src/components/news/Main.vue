<template>
  <div>
    <section class="search__wrapper" :class="{'search__wrapper_active': burgerState}">
      <div class="search">
        <div class="container">
          <div class="search__content">
            <div class="search-panel">
              <svg class="search-panel__icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.220978 4.50195C0.220978 6.98242 1.97887 9.00195 4.13798 9.00195C5.05943 9.00195 5.89927 8.61914 6.56911 8.00195L10.9009 12.9785L11.5198 12.2754L7.18454 7.29492C7.72177 6.52539 8.05499 5.56055 8.05499 4.50195C8.05499 2.02148 6.29709 0.00195312 4.13798 0.00195312C1.97887 0.00195312 0.220978 2.02148 0.220978 4.50195ZM1.09142 4.50195C1.09142 2.56445 2.45149 1.00195 4.13798 1.00195C5.82447 1.00195 7.18454 2.56445 7.18454 4.50195C7.18454 6.43945 5.82447 8.00195 4.13798 8.00195C2.45149 8.00195 1.09142 6.43945 1.09142 4.50195Z" fill="black"/>
              </svg>
              <input class="search-panel__input" type="text" placeholder="Find post...">
            </div>
            <div class="sort-by-date" @click="sort">
              <div class="sort-by-date__text">
                <a href="#">Sort by date</a>
              </div>
              <svg class="sort-icon" :class="{'sort-icon_active': isSortActive}" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0L7.4641 5.25H0.535898L4 0Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="news__wrapper">
      <div class="container">
        <div class="news">
          <div class="news__content">
            <news-item-component
                v-for="item in newsItems"
                :key="'news-item' + item.id"
                :text="item.text"
                :owner-name="item.ownerName"
                :owner-picture-src="item.ownerPictureSrc"
                :time="item.time"
                :picture-src="item.pictureSrc"
                :like-count="item.likeCount"
                :comments="item.comments">
            </news-item-component>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsItemComponent from "./Item.vue";

export default {
  props: {
    newsItems: Array,
    burgerState: Boolean
  },
  components: {
    NewsItemComponent
  },
  data() {
    return {
      isSortActive: false,
    }
  },
  methods: {
    sort() {
      this.isSortActive = !this.isSortActive;
    }
  }
}
</script>

<style lang="scss" scoped>
.search__wrapper {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 105px;
}
.search {
  margin: 0 auto;
  max-width: 700px;
}
.search__content {
  display: flex;
  justify-content: center;
  padding: 20px 20px 10px;
  margin: 0 auto;
}
.search-panel {
  display: flex;
  background-color: $burgerMenuColor;
  font-size: 18px;
  width: 540px;
  height: 30px;
}
.search-panel__icon {
  margin: 8px 15px 6px 6px;
}
.search-panel__input {
  border: none;
  width: 100%;
  padding-right: 15px;
  background-color: $burgerMenuColor;
}
.search-panel__input:focus {
  outline: none;
}
.sort-by-date {
  display: flex;
  margin-left: 10px;
  margin-top: 4px;
}
.sort-by-date__text {
  white-space: nowrap;
}
.sort-icon {
  margin-top: 7px;
  margin-left: 5px;
}
.sort-icon_active {
  transform: rotate(180deg);
}
.news__wrapper {
  width: 100%;
}
.news {
  padding-top: 10px;
  padding-bottom: 1px;
  border-left: $black solid 1px;
  border-right: $black solid 1px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.news__content {
  padding-top: 155px;
  margin: 20px 60px;
}

@media (max-width: 840px) {
  .search__wrapper {
    top: 67px;
  }
  .news {
    border-left: none;
    border-right: none;
  }
  .news__content {
    padding-top: 118px;
  }
  .profile-editor__picture-wrapper {
    padding-top: 100px;
  }
  .search__wrapper_active {
    z-index: -1;
  }
  .news__content {
    margin-left: 3px;
    margin-right: 3px;
  }
  .search__wrapper {
    background-color: $bgColor;
  }
}
@media (max-width: 450px) {
  .news__content {
    padding-top: 100px;
  }
}
</style>