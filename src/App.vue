<template>
<v-app>
    <Header />
    <SubHeader />
    <Home />
  <Footer />
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SubHeader from './components/SubHeader.vue';
import Home from './views/Home.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    Footer,
    SubHeader,
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