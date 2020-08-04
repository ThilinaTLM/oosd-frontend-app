<template>
<div>
  <SubHeader />
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
import SubHeader from '../../../components/old/SubHeader.vue';
import Carousel from '../../../components/old/Carousel.vue';
import CounterBar from '../../../components/old/CounterBar.vue';
import Description from '../../../components/old/Description.vue';
import Description2 from '../../..//components/Description2.vue';
export default {
  name: 'Home',
  components: {
    Carousel,
    CounterBar,
    Description,
    Description2,
    SubHeader
  }
}
</script>
