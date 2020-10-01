<template>
  <v-container>
    <v-card-title>Add New Complaint</v-card-title>
    <v-divider></v-divider>


    <v-stepper
        v-model="e6"
        vertical
    >
      <v-stepper-step
          :complete="e6 > 1"
          step="1"
      >
        Customer Details

      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card
            color=" lighten-1"
            class="mb-12"
            style="padding: 1% 2%"
        >

          <div>
            <v-radio-group
                v-model="column"
                column
            >
              <v-radio
                  label="Search Existing Customer"
                  value="radio-1"
              >
              </v-radio>

              <v-text-field
                  style="grid-column: 3/4; width: 50%"
                  append-icon="mdi-magnify"
                  label="Customer Search"
                  outlined
                  dense
                  v-model="search"

              ></v-text-field>

              <v-radio
                  label="Add New Customer"
                  value="radio-2"
              >

              </v-radio>

              <!-- new customer addition form -->

              <v-form ref="newCustomerAddition">
                <v-container>
                  <v-row >
                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-text-field
                          class="addnewcustomerform"
                          v-model="fullname"
                          label="Full name"
                          outlined
                          required
                      ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-text-field
                          class="addnewcustomerform"
                          v-model="NIC"
                          label="NIC"
                          required
                          outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-text-field
                          class="addnewcustomerform"
                          v-model="email"
                          label="Email"
                          required
                          outlined
                      ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-text-field
                          class="addnewcustomerform"
                          v-model="Telephone"
                          label="Telephone"
                          required
                          outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                          class="addnewcustomerform"
                          v-model="Address"
                          label="Address"
                          style="width: 50%"
                          required
                          outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-select
                          v-model="dsoffice"
                          label="Divisional Secretariat"
                          :items="items"
                          outlined
                          required
                      ></v-select>

                    </v-col>
                    <v-col>
                      <v-text-field
                          class="addnewcustomerform"
                          v-model="gnoffice"
                          label="GN Office"
                          required
                          outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                </v-container>
              </v-form>

              <!-- end of new customer addition form -->

              </v-radio-group>
          </div>

        </v-card>
        <v-btn
            color="#FF8015"
            @click="e6 = 2"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
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
            class="mb-12"

        >

          <v-form
              style="padding:2% 5%"
              ref="form"
          >
            <v-text-field
                label="Reference Number"
                v-model="referencenumber"
                required

            ></v-text-field>

            <v-text-field
                label="Subject"
                required
                v-model="subject"
            ></v-text-field>

            <v-textarea
                label="Description"
                required
                v-model="description"

            ></v-textarea>

          </v-form>


        </v-card>
        <v-btn
            color="#FF8015"
            @click="e6 = 3"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
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
            class="mb-12"

        >


          <v-file-input
              chips
              counter
              multiple
              show-size
              truncate-length="7"
              label="Uploads"
              style="padding:2% 5%"
          ></v-file-input>


        </v-card>
        <v-btn
            color="#FF8015"
            @click="e6 = 4"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>


    </v-stepper>



  </v-container>


</template>

<script>
export default {
  name: "AddComplaint",
  data () {
    return {
      e6: 1,
      items:["Akmeemana","Ambalangoda","Baddegama","Balapitiya","Bope-poddala","Benthota","Elpitiya","Galle Four Gravets","Habaraduwa","Imaduwa","Hikkaduwa","Karandeniya","Nagoda","Neluwa","Niyagama","Welivitiya-Divithura","Yakkalamulla","Gonapinuwala"]
    }
  },
  props:[
      "description",
      "subject",
      "referencenumber"
  ]


}
</script>

<style scoped>

.addnewcustomerform{
  grid-column: 3/4;
}

</style>