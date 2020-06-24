<template>
    <v-container fluid class="registerheader" style="padding:0px ; margin:0px">
        <v-row style="margin:0px; height:50px">
            <v-col class="col1style" > 
                   <v-btn disabled="" class="primary" color="#C70925 !important">Tell The Grievance</v-btn>
            </v-col>
            <v-col style="text-align:center; font-weight:bold">
                Tell The Grievance To Galle DS
            </v-col>
            <v-col class="col2style">
                <router-link class="navlink" to="/login"><v-btn text small >Login</v-btn></router-link>
                <router-link class="navlink" to="/register"><v-btn text small >Register</v-btn></router-link>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "GrievanceHeader"  
})

</script>


<style scoped>

.registerheader{
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


.navlink{
    text-decoration:none; 
    color:black
}

</style>