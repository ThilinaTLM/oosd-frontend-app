<template>
 <v-container fluid style="padding:0px">
      <v-row>
         <v-col>
           <router-link to="/">
            <v-img 
            :src="require('../../assets/main-gov.png')"
            contain
            height="80px"/> 
             </router-link>
        </v-col>
         
        <v-col style="display:inline-block">
            <v-row align="center" justify="center"> 
            <h1>Galle District</h1>
            </v-row>
            <v-row align="center" justify="center"> 
            <h2>Public Grievance Management System </h2>
            </v-row>
        </v-col>
        <v-col>
            <v-row align="center" justify="center">
                <h3>Visit Galle District Secretariat</h3>
            </v-row>
            <v-row >
              <v-col align="center" justify="center" style="padding-left:35px">
                  Sinhala
            </v-col>
            <v-col align="center" justify="center">
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
.container-1 {  
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



