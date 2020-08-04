<template>
    <v-container fluid class="mainContainer">
        <v-row>  
        <v-col class="CounterColumns">
            <v-row class="counters" align="center" justify="center">
                56
            </v-row>
            <v-row align="center" justify="center">
                Registered Users
            </v-row>
        </v-col>
           
        <v-col class="CounterColumns">
             <v-row class="counters" align="center" justify="center">
                56
            </v-row>
            <v-row align="center" justify="center">
                Complaints In Progress
            </v-row>
        </v-col>

        <v-col class="CounterColumns">
            <v-row class="counters" align="center" justify="center">
                56
            </v-row>
            <v-row align="center" justify="center">
                Cases Resolved
            </v-row>
        </v-col>
        </v-row>

  </v-container>
</template>


<script>
import Vue from 'vue';


export default Vue.extend({
    name:"CounterBar"
})
</script>

<style scoped>

.mainContainer{
    height: 100px;
    background-color:#F8C031;
    margin:0px;
    padding:0px
    
}

.counters{
    font-size: 45px;
    margin: 0px;
    padding: 0px;
}

.CounterColumns{
    margin: 0px ;
    padding: 0px;
   

}


</style>