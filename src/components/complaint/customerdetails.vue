<template>

  <div>

    <v-form ref="newCustomerAddition" @submit.prevent="$emit('submit',{NIC, fullname, email, telephone, address, dsoffice, gnoffice})">
      <v-container>

        <v-row style="display: flex; ">
          <v-col
              cols="12"
              md="6"

          >
            <v-text-field
                v-model="NIC"
                label="NIC"
                required

                prepend-icon="mdi-account-circle"
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="6"
          >

            <v-btn rounded color="success" style=" vertical-align: middle" >
              Check
            </v-btn>

          </v-col>
        </v-row>

        <v-row>
          <v-col>
          <v-text-field
              v-model="fullname"
              label="Full name"
              prepend-icon="mdi-account-circle"
              required
          ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                v-model="email"
                label="Email"
                required
                prepend-icon="mdi-account-circle"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                v-model="telephone"
                label="Telephone"
                required
                prepend-icon="mdi-account-circle"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
                v-model="address"
                label="Address"
                required
                prepend-icon="mdi-account-circle"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select
                v-model="dsoffice"
                label="Divisional Secretariat"
                :items="items"
                prepend-icon="mdi-account-circle"
                required
            ></v-select>

          </v-col>
          <v-col>
            <v-select
                v-model="gnoffice"
                label="GN Office"
                :items="items"
                required
                prepend-icon="mdi-account-circle"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>

          <v-btn
              color="success"
              rounded
              class="ma-2"
              type="submit"
              :loading="loading"
          >
            Continue
          </v-btn>

          <v-btn
              rounded
              text
              color="secondary"
              class="ma-2"
              to="/"
          >
            Cancel
          </v-btn>

        </v-row>

      </v-container>
    </v-form>

    <!-- end of new customer addition form -->


  </div>


</template>

<script>
export default {
  name: "customerdetails",
  data(){
    return{
      items:["Akmeemana","Ambalangoda","Baddegama","Balapitiya","Bope-poddala","Benthota","Elpitiya","Galle Four Gravets","Habaraduwa","Imaduwa","Hikkaduwa","Karandeniya","Nagoda","Neluwa","Niyagama","Welivitiya-Divithura","Yakkalamulla","Gonapinuwala"]
    }
  },
  props:[
      "fullname", "NIC", "email", "Telephone", "Address", "dsoffice", "gnoffice"
  ]
}
</script>

<style scoped>

</style>