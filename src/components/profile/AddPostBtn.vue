<template>
  <div class="profile-add-post">
    <div class="container">
      <div class="profile-add-post__ref-wrapper">
        <router-link :to="{name: 'postAdd'}" class="profile-add-post__ref">
          Add post
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.profile-add-post__ref-wrapper {
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;
}
.profile-add-post__ref {
  height: 37px;
  padding: 2px 50px;
  font-size: 18px;
  color: $mainColor;
  border: $mainColor 1px solid;
  transition: background-color .4s ease-out,
  color .1s ease-out;
  border-radius: 5px;
}
.profile-add-post__ref:hover{
  background-color: $mainColor;
  border: grey 1px solid;
  color: $white;
  transition: background-color .5s ease-out,
  color .1s ease-out,
  border .4s ease-out;
}
.profile-add-post__ref:active{
  background-color: $bgColor;
  color: $mainColor;
  border: $mainColor 1px solid;
  transition: background-color .1s ease-out,
  color .4s ease-out;
}
</style>