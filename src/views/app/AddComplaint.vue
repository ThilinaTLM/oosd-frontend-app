<template>
  <v-container>
    <v-card-title>Add New Complaint</v-card-title>
    <v-divider></v-divider>


    <v-stepper
        v-model="e6"
        vertical
    >

      <!-- customer details section -->

      <v-stepper-step
          :complete="e6 > 1"
          step="1"
      >
        Customer Details

      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card
            color=" lighten-1"
            class="mb-12 elevation-0"
            style="padding: 1% 2%"
        >

          <Customerdetails  @submit="e6 = 2"/>

        </v-card>


      </v-stepper-content>


      <!-- Complaint Details Section -->


      <v-stepper-step
          :complete="e6 > 2"
          step="2"
      >
        Customer Grievance Details
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card
            color=" lighten-1"
            class="mb-5 elevation-0"

        >

          <complaintdetails @submit="e6=3" />

        </v-card>

      </v-stepper-content>

      <!-- Upload Evidences Section -->

      <v-stepper-step
          :complete="e6 > 3"
          step="3"
      >
        Upload Evidences
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card
            color=" lighten-1"
            class="mb-5 elevation-0"
        >

          <evidenceuploads />

        </v-card>

      </v-stepper-content>


    </v-stepper>



  </v-container>


</template>

<script>

import Customerdetails from "@/components/complaint/customerdetails";
import Evidenceuploads from "@/components/complaint/evidenceuploads";
import Complaintdetails from "@/components/complaint/complaintdetails";

export default {
  name: "AddComplaint",
  components: {Complaintdetails, Evidenceuploads, Customerdetails},
  data () {
    return {
      e6: 1,
      }
  },



}
</script>

<style scoped>



</style>