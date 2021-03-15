<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <add-post-component></add-post-component>
  </div>
</template>

<script>
import HeaderComponent from "../Header.vue";
import AddPostComponent from "./Main.vue";

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
