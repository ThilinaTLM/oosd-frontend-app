<template>
<v-app>
  <v-toolbar
  class="app-bar"
  >
    <Header />
  </v-toolbar>
  <v-content>
  <v-layout>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Veritatis minus optio, quis dolore ad temporibus ullam provident
          iste modi fugit! Nostrum blanditiis eos veniam, odit eligendi 
          porro illo adipisci id?</p>
  </v-layout>
    
  </v-content>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header
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