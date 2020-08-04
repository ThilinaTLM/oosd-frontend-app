<template>
<v-container fluid style="padding:0px">
  <Header />
<v-container  fluid style="padding:0px; height:100%">
  
  <LoginHeader />

  <v-container class="mainContainer">

    <v-tabs
      v-model="tab"
      background-color="rgba(248, 192, 49,1.0)"
      class="elevation-2"
      dark
      :centered="centered"
      :grow="grow"
      :vertical="vertical"
      :right="right"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      :icons-and-text="icons"
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab style="color:black !important"
      >
        Login to Galle District Secretariat
      </v-tab>

      <v-tab-item>
        <v-card 
          flat
          tile
        >
        <District />
        </v-card>
      </v-tab-item>


       <v-tab style="color:black !important"
      >
        Login to Divisional Secretariat
      </v-tab>

      <v-tab-item
      
      >
        <v-card
          flat
          tile
        >
          <Division />
        </v-card>
      </v-tab-item>


    </v-tabs>
  </v-container>

 <v-container fluid>
      <Footer />
    </v-container>
  </v-container>
  </v-container>
</template>

<script>
  import Vue from 'vue';
  import LoginHeader from '../../../components/old/SystemsubHeader.vue';
  import District from '../../../components/old/DistrictLogin.vue';
  import Division from '../../../components/old/DivisionalLogin.vue';
  import Header from '../../../components/old/SystemHeader.vue';
  import Footer from '../../../components/old/Footer.vue'
 
  export default {
    components: {
      LoginHeader,
      District,
      Division,
      Header,
      Footer
    },
    data: () => ({
      tab: null,
        icons: false,
        centered: false,
        grow: true,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 2,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>

<style scoped>

.mainContainer{
  max-width: 50%;
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  background-color:rgba(248, 192, 49, 0.25) ;
  height: 90%;
 

}



</style>