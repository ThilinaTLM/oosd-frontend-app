<template>   
<v-container fluid style="padding:20px">
    <v-row no-gutters>

      <v-col
        cols="3" 
      >
        <v-container class="allcom">
        </v-container>
            
        </v-col>
        

 


      <v-col
        cols="9" 
      >

        <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
       
      </v-col>

      

    </v-row>
    </v-container>
</template>

<script>
import Vue from 'vue';


export default {
    name: 'Dashboard',
  components: {
   
    
  },
  
}
</script>

<style scoped>


</style>