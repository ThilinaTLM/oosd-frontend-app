<template>
<div>
  <Carousel />
  <CounterBar />
  <Description />
  <hr>
  <Description2 />
  <v-container style="height:80px">
  </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Carousel from '../components/Carousel.vue';
import CounterBar from '../components/CounterBar.vue';
import Description from '../components/Description.vue';
import Description2 from '../components/Description2.vue';
export default {
  name: 'Home',
  components: {
    Carousel,
    CounterBar,
    Description,
    Description2
  }
}
</script>
