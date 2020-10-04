<template>

  <div>

    <v-form v-model="valid" ref="newCustomerAddition" @submit.prevent="submit" lazy-validation>
      <v-container>

        <v-row style="display: flex; ">
          <v-col
              cols="12"
              md="6"

          >
            <v-text-field
                v-model="NIC"
                label="NIC"
                :rules="rules.nic"
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
                :items="divisions"
                prepend-icon="mdi-account-circle"
                required
            ></v-select>

          </v-col>
          <v-col>
            <v-select
                v-model="gnoffice"
                label="GN Office"
                :items="gnoffices"
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
              :disabled="!valid"
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

      valid: false,
      loading:false,

      NIC: '',
      fullname: '',
      email: '',
      telephone: '',
      address:'',
      dsoffice: '',
      gnoffice: '',

      rules:{
        nic:[
            s => s.length > 12? true : "Invalid NIC"
        ]
      }

    }
  },
  computed: {
    divisions() {
      const divisions = this.$store.state.utils.divisions || []
      for (let i = 0; i < divisions.length; i++) {
        divisions[i] = divisions[i].name
      }
      return divisions
    },
    gnoffices() {
      const gnoffice = this.$store.state.utils.gn_offices || []
      for (let i = 0; i < gnoffice.length; i++) {
        gnoffice[i] = gnoffice[i].name
      }
      return gnoffice
    },
  },

  created() {
    this.$store.dispatch('utils/loadDivisions');
    this.$store.dispatch('utils/loadGNOffices');
  },

  methods:{

    async submit() {
      await this.$refs.newCustomerAddition.validate();
      if(this.valid){

        this.loading = true
        const {NIC, fullname, email, telephone, address, dsoffice, gnoffice} = this
        this.$emit('submit',{NIC, fullname, email, telephone, address, dsoffice, gnoffice});
        this.loading = false;

      }
    },
  }


}
</script>

<style scoped>

</style>