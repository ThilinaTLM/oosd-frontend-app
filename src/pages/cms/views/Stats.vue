<template>   
<v-container fluid style="padding:0px">
    <v-row no-gutters>

      <v-col
        cols="3" 
      >
       dsfdsfdsf
       sdsd
      </v-col>

      <v-col
        cols="9" 
      >
        <v-container style="padding:0px">
            <v-container fluid class="datetimeview">
                <v-row class="rowitems">
                    <v-col>{{ new Date().getHours() + ":" + new Date().getMinutes()  }}</v-col>
                    <v-col style="text-align:right">{{ new Date().toJSON().slice(0,10).replace(/-/g,'/') }}</v-col>
                </v-row>
            </v-container>

            <v-container class="firstline">
                <v-row>
                  <Card1 />
                  <Card1 />
                  <Card1 />
                  <Card1 />
                </v-row>
            </v-container>

            <v-container class="firstline" style="background-color:rgba(248, 192, 49) !important">
                <v-row>
                  <Card1 />
                  <Card1 />
                  <Card1 />
                  <Card1 />
                </v-row>
            </v-container>

        </v-container>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
import Vue from 'vue';
import Card1 from '../../../components/old/DashboardCard.vue'

export default {
    name: 'Stats',
  components: {
   Card1
    
  },
}
</script>

<style scoped>

.datetimeview{
    height: 65px;
    background-color: #707070;
    color:white; 
    padding: 0px 50px;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


.rowitems{
    display: flex;
    justify-content: space-between;
}

.firstline{
    height: 150px; 
    background-color: rgba(248, 192, 49,0.25); 
    margin: 20px 0px;
}


</style>