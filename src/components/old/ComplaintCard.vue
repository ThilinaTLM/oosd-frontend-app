<template>
    
    <v-container class="card">
        
        <v-row >
            <v-col  style="font-size:20px; font-weight:bold">
                Not Receiving Funds
            </v-col>
            <v-col class="colclass">
                <v-row style="color:#C70925">Galle District</v-row>
                <v-row>Reviewed by DS</v-row>
                <v-row>23 days ago</v-row>
            </v-col>
        </v-row>

    </v-container>

</template>

<script>
export default {
    name:"ComplaintCard",


}
</script>

<style scoped>

.card{
    background-color: #F8C031;
    width: 500px;
    padding: 0px 20px;
    margin:20px;
    border-radius: 15px;
    }


.colclass{
    padding-left: 150px;
}

</style>