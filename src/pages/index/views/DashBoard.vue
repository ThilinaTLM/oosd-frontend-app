<template>   
<v-container fluid style="padding:0px">
    <DashboardHeader />
    
    <v-row no-gutters>
      <v-col
        cols="9" 
      >
        <v-card
          
          class="pa-2 allcom"
          outlined
          tile
        >
          <ComplaintsSection />
        </v-card>
      </v-col>
      <v-col
        cols="3"
       
      >
        <v-card
          class="pa-2"
          outlined
          tile
          
        >
           <Profile />
           <ComplaintStats />

        </v-card>
      </v-col>
    </v-row>

</v-container>
</template>

<script>
import Vue from 'vue';
import DashboardHeader from '../../../components/old/DashBoardHeader.vue';
import Profile from '../../../components/old/Profile.vue';
import ComplaintStats from '../../../components/old/ComplaintStats.vue';
import ComplaintsSection from '../../../components/old/ComplaintSection.vue'

export default {
    name: 'Dashboard',
  components: {
    DashboardHeader,
    Profile,
    ComplaintStats,
    ComplaintsSection
    
  }
}
</script>

<style scoped>

.allcom{
    background-color: rgba(248, 192, 49, 0.25);
    height: 100%;
    padding-left: 200px;
}

</style>