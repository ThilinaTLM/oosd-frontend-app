<template>
  <v-container
      class="elevation-4  pa-0 white">
    <v-stepper v-model="stepCount">
      <v-stepper-header>
        <v-stepper-step :complete="stepCount > 1" step="1">Customer Details</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="stepCount > 2" step="2">Complaint Details</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Upload Evidences</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="pa-10">
            <customerdetails @submit="submitStep1" />
<!--          <RegStep1 @submit="submitStep1"/>-->
        </v-stepper-content>

        <v-stepper-content step="2" class="pa-10">
          <complaintdetails @submit="submitStep2" />
        </v-stepper-content>

        <v-stepper-content step="3" class="pa-10">
          <Evidenceuploads />




        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import {api} from "../../api";
import RegStep1 from "../register/RegStep1";
import RegStep2 from "../register/RegStep2";
import Customerdetails from "@/components/complaint/customerdetails";
import Complaintdetails from "@/components/complaint/complaintdetails";
import Evidenceuploads from "@/components/complaint/evidenceuploads";

export default {
  name: "ComplaintForm",
  components: {Evidenceuploads, Complaintdetails, Customerdetails},
  data: () => ({
    stepCount: 1,

    userData: {}
  }),
  methods: {
    async submitStep1(data) {
      Object.assign(this.userData, data)
      this.stepCount = 2
    },

    async submitStep2(data) {
      Object.assign(this.userData, data)
      this.loading = true

      this.stepCount = 3
    }
  },
  created() {
    this.$store.dispatch('utils/loadDivisions')
  }
}
</script>

<style scoped>
</style>