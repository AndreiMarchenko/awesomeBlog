<template>
  <div :class="{'profile-info__edit': infoType === 'mainPage',
                'profile-info__follow': infoType === 'friendPage'}">
    <router-link v-if="infoType === 'mainPage'"
                 class="profile-info__edit-ref"
                 :to="{name: 'editProfile'}">
      {{ btnText }}
    </router-link>
    <a v-else-if="infoType === 'friendPage'"
       href="#"
       class="profile-info__follow-ref">
      {{ btnText }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    infoType: String
  },
  computed: {
    btnText() {
      switch (this.infoType) {
        case "mainPage":
          return "Edit";
        case "friendPage":
          return "Follow";
      }
    }
  }
}
</script>

<style lang="scss">
.profile-info__edit {
  font-size: 18px;
  margin-left: 3px;
  margin-top: 25px;
}
.profile-info__edit-ref {
  height: 37px;
  padding: 2px 50px;
  color: $mainColor;
  border: $mainColor 1px solid;
  transition: background-color .4s ease-out,
  color .1s ease-out;
  border-radius: 5px;
}
.profile-info__edit-ref:hover{
  background-color: $mainColor;
  border: grey 1px solid;
  color: $white;
  transition: background-color .5s ease-out,
  color .1s ease-out,
  border .4s ease-out;
}
.profile-info__edit-ref:active{
  background-color: $bgColor;
  color: $mainColor;
  border: $mainColor 1px solid;
  transition: background-color .1s ease-out,
  color .4s ease-out;
}
.profile-info__follow {
  font-size: 18px;
  margin-left: 3px;
  margin-top: 25px;
}
.profile-info__follow-ref {
  height: 37px;
  padding: 2px 50px;
  color: $followBtnColor;
  border: $followBtnColor 1px solid;
  transition: background-color .4s ease-out,
  color .1s ease-out;
  border-radius: 5px;
}
.profile-info__follow-ref:hover{
  background-color: $followBtnColor;
  border: grey 1px solid;
  color: $white;
  transition: background-color .5s ease-out,
  color .1s ease-out,
  border .4s ease-out;
}
.profile-info__follow-ref:active{
  background-color: $bgColor;
  color: $followBtnColor;
  border: $followBtnColor 1px solid;
  transition: background-color .1s ease-out,
  color .4s ease-out;
}
@media (max-width: 375px) {
  .profile-info__edit {
    display: flex;
    justify-content: center;
  }
  .profile-info__edit-ref {
    height: 29px;
  }
  .profile-info__follow {
    display: flex;
    justify-content: center;
  }
  .profile-info__follow-ref {
    height: 29px;
  }
}
</style>