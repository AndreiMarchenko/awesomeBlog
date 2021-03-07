<template>
  <div :class="{'profile-info__edit': infoType === 'mainPage',
                'profile-info__follow': infoType === 'friendPage'}">
    <a href="#"
       :class="{'profile-info__edit-ref': infoType === 'mainPage',
                'profile-info__follow-ref': infoType === 'friendPage'}">
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
@import "../common";
@import "../variables";
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
  color: #BF3075;
  border: #BF3075 1px solid;
  transition: background-color .4s ease-out,
  color .1s ease-out;
  border-radius: 5px;
}
.profile-info__follow-ref:hover{
  background-color: #BF3075;
  border: grey 1px solid;
  color: #fff;
  transition: background-color .5s ease-out,
  color .1s ease-out,
  border .4s ease-out;
}
.profile-info__follow-ref:active{
  background-color: #F5F5F5;
  color: #BF3075;
  border: #BF3075 1px solid;
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
}
</style>