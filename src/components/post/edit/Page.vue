<template>
  <div>
    <header-component :nav-items="navItems"></header-component>
    <edit-post-component></edit-post-component>
  </div>
</template>

<script>
import HeaderComponent from "../../Header.vue";
import EditPostComponent from "./Main.vue";

export default {
  components: {
    HeaderComponent, EditPostComponent
  },
  data(){
    return {
      navItems:  ['My page', 'News', 'Logout']
    }
  }
}
</script>
