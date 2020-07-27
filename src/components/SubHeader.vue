<template>

    <v-container fluid class="subheader" style="padding:0px ; margin:0px">
        <v-row style="margin:0px; height:50px">
            <v-col class="col1style" >
                    <router-link style="text-decoration:none" to="/grievance"> 
                   <v-btn class="primary" color="#C70925 !important">Tell The Grievance</v-btn>
                    </router-link>
            </v-col>
            <v-col class="col2style">
                <router-link class="navlinks" to="/login"><v-btn text small > Login </v-btn></router-link>
                <router-link class="navlinks" to="/register"><v-btn text small >Register</v-btn></router-link>
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


.navlinks{
    text-decoration:none; 
    color:black
}


</style>