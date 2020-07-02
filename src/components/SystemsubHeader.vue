<template>

    <v-container fluid class="loginheader">
         <div style="font-weight:bold; font-size:20px; padding:10px"> Login </div>                         
        
    </v-container>




</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "SystemsubHeader"  
})

</script>


<style scoped>


.loginheader{
    height: 50px;
    background-color: #F8C031;
    padding:0px ;
    margin:0px auto; 
    text-align:center;
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