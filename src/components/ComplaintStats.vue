<template>
    <v-col style="padding: 40px">
        <v-row>
            <v-text class="inp">Complaints in Progress</v-text>
            <v-spacer></v-spacer>
            <v-text class="inp">2</v-text>
        </v-row>
        <v-row>
            <v-text class="res">Complaints Resolved</v-text>
            <v-spacer></v-spacer>
            <v-text class="res">2</v-text>
        </v-row>
    </v-col>
</template>

<script>
export default {
    name: "ComplaintStats"
}
</script>

<style scoped>

.inp{
    color:#C70925; 
    font-weight:bold;
}

.res{
    color:#F8C031;
    font-weight: bold;
}

</style>