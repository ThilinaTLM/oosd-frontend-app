<template>
  <v-container class="container">
      <v-row>
         <v-col class="pa-1">
            <v-img
            :src="require('../assets/main-gov.png')"
            contain
            height="80px"/>
        </v-col>
        <v-col class="pa-3">
            <v-row> 
            <h1>Galle District</h1>
            </v-row>
            <v-row> 
            <h2>Public Grievances </h2>
            </v-row>
        </v-col>
        <v-col class="pa-1">
            <v-row>
                <h3>Visit Galle District Secretariat</h3>
            </v-row>
            <v-row>
              <v-col>
                  Sinhala
            </v-col>
            <v-col>
                Tamil
            </v-col>
            </v-row>
        </v-col>
      </v-row> 
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "Header"  
})
</script>

<style scopped>
.container {  
    background-color:#F9F6F3;
}

h1 {
    margin: 0;
    font-size: 1.5em;
}

h2{
    margin:0;
    font-size: 1em;
}
</style>