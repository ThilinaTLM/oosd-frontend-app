<template>
<v-app>
    <Header />
    <router-view></router-view>
    <v-container fluid>
      <Footer />
    </v-container>
  
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '../../components/old/Header.vue';
import Footer from '../../components/old/Footer.vue';

import Home from './views/Home.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    Footer,
   
    Home
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