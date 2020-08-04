<template>
<v-app>
    
    <router-view></router-view>
    
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'SystemApp',

  components: {
    
  },

  data: () => ({
    //
  }),
});
</script>

<style>
.app-bar {
  overflow: hidden;
  padding: 0;
  margin: 0;
  height: auto;
}
</style>