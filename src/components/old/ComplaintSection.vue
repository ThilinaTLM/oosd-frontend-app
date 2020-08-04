<template>
    
    <v-container>
        <v-text style="font-weight:bold; font-size:20px">Grievance Dashboard</v-text>
        <v-spacer></v-spacer>
        <br>
        <v-text>Grievances In Progress</v-text>
        <ComplaintCard />
        <ComplaintCard />
        <br>
        <v-text>Grievance History</v-text>
        <ComplaintCard />
        <ComplaintCard />

    </v-container>

</template>

<script>
import Vue from 'vue';
import ComplaintCard from './ComplaintCard.vue'

export default {
    name:"ComplaintSection",
    components:{
        ComplaintCard
    }
}
</script>

<style scoped>

</style>