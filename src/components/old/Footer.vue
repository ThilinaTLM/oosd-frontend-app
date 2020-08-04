<template>
   
    <v-footer
      absolute
      class="font-weight-medium"
      color="#F8C031"
      height="80px"
    >
      <v-col
        class="text-left"
        cols="12"
        style="margin-left:25px; color:#707070; font-size:15px"
      >
      <v-row>
          Copyright Â© {{ new Date().getFullYear() }} Galle District Grievance Management.
      </v-row>
      <v-row>
        All Rights Reserved.
         
    </v-row>
      </v-col>
    </v-footer>
 
</template>


</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: "Footer"  
})

</script>


<style scoped>



</style>