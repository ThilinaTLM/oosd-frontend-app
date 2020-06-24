<template>

    <v-container fluid class="loginheader" style="padding:0px ; margin:0px">
        <v-row style="margin:0px; height:50px">
            <v-col class="col1style" >
                    <router-link style="text-decoration:none" to="/grievance"> 
                   <v-btn class="primary" color="#C70925 !important">Tell The Grievance</v-btn>
                    </router-link>
            </v-col>
            <v-col style="text-align:center; font-weight:bold">
                Grievance Dashboard
            </v-col>
            <v-col class="col2style" style="padding:5px">
            <v-avatar height="40px" width="40px">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="User"
                
                 >
                </v-avatar>
                </v-col>
        </v-row>
    </v-container>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "DashboardHeader"  
})

</script>


<style scoped>


.loginheader{
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