<template>
      <div class="container" id="APP">
        <router-view />  
      </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  })
});
</script>

<style lang="css">
  @import "../src/assets/styles/resp-styes.css";
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>
<style lang="scss">
  @import "../src/assets/styles/global.scss";
</style>
