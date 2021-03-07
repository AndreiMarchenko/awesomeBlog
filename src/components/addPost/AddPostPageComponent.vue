<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <add-post-component></add-post-component>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import AddPostComponent from "./AddPostComponent.vue";

export default {
  components: {
    HeaderComponent, AddPostComponent
  },
  data(){
    return {
      navItems:  ['My page', 'News', 'Logout']
    }
  }
}
</script>

<style scoped>

</style>