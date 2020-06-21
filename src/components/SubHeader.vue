<template>

    <v-container fluid class="subheader" style="padding:0px ; margin:0px">
        <v-row style="margin:0px; height:50px">
            <v-col class="col1style"> 
                   <v-btn class="primary" color="#C70925 !important">Make a New Grievance</v-btn>
            </v-col>
            <v-col class="col2style">
                <v-btn text small ><router-link to="/login"> Login </router-link></v-btn>
                <v-btn text small >Register</v-btn>
            </v-col>
        </v-row>

    </v-container>




</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "SubHeader"  
})

</script>


<style scoped>


.subheader{
    height: 50px;
    background-color: #F8C031;
}
.col1style{
    padding:0px; 
     margin-left:25px;
     display: flex;
      align-items:center
}


.col2style{
    display: flex; 
    justify-content: flex-end; 
    margin-right:25px
}

</style>