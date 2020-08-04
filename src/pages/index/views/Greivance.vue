<template>
<v-container  fluid style="padding:0px; height:100%">
  <GrievanceHeader />
<v-container class="mainContainer">
  <ValidationObserver ref="observer" v-slot="{ /*validate, reset */}">
    <form>
      <ValidationProvider v-slot="{ errors }" name="Grievance in Brief" rules="">
        <v-text-field
          v-model="complaintbrief"
          :counter="30"
          :error-messages="errors"
          label="Grievance in Brief"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="NIC Number" rules="">
        <v-textarea
          v-model="nic"
          :error-messages="errors"
          label="Grievance In Detail"
          required
        ></v-textarea>
      </ValidationProvider>
      <v-file-input
      label="Upload Instances"
      >
      </v-file-input>
      <v-btn class="mr-4" style="background-color:#F8C031; width:40%" @click="submit">Submit Grievance</v-btn>
    </form>
  </ValidationObserver>
  </v-container>
  </v-container>
</template>  


<script>
  import Vue from 'vue';
  import GrievanceHeader from '../../../components/old/GrievanceHeader.vue';
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      GrievanceHeader
    },
    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>

<style  scoped>

.mainContainer{
  max-width: 50%;
  margin: 0px auto;
  padding: 5%;
  text-align: center;
  background-color:rgba(248, 192, 49, 0.25) ;
  height: 90%;
  margin-bottom: 2%;
}




</style>