<template>

<v-container fluid style="padding:25px">
    <v-row>
        <v-col>
            <v-row align="center" justify="center">
            Tell Your Grievance to Galle District Secretariat <br>
            How to tell the grievance Galle District Secretariat
            </v-row>
            <v-row align="center" justify="center">
                 <v-btn class="primary" color="#C70925 !important" style="margin:15px">Tell the Grievance </v-btn>
            </v-row>
        </v-col>
        <v-col> 
            <v-row align="center" justify="center">
            <v-img 
            :src="require('../../assets/unnamed.jpg')"
            contain
            height="200px"/>
           </v-row>
        </v-col>
    </v-row>
</v-container>    


</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name:"Description"
})

</script>

<style scoped>

</style>