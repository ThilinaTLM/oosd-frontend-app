<template>
<v-container  fluid style="padding:0px; height:100%">
  <RegisterHeader />
<v-container class="mainContainer">
  <ValidationObserver ref="observer" v-slot="{ /*validate, reset */}">
    <form>
      <ValidationProvider v-slot="{ errors }" name="Full Name" rules="">
        <v-text-field
          v-model="fullname"
          :counter="10"
          :error-messages="errors"
          label="Full Name"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="NIC Number" rules="">
        <v-text-field
          v-model="nic"
          :error-messages="errors"
          label="NIC Number"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="Username" rules="">
        <v-text-field
          v-model="username"
          :error-messages="errors"
          label="Username"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="Telephone" rules="">
        <v-text-field
          v-model="telephone"
          :error-messages="errors"
          label="Telephone"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="address" rules="">
        <v-text-field
          v-model="address"
          :error-messages="errors"
          label="Address"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="GNDivision" rules="">
        <v-text-field
          v-model="GNDivision"
          :error-messages="errors"
          label="Grama Niladari Division currently living"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="DSecretariat" rules="">
        <v-text-field
          v-model="DSecretariat"
          :error-messages="errors"
          label="Divisional Secretariat currently living"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="Password" rules="">
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Password"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="PasswordConfirmation" rules="">
        <v-text-field
          v-model="passwordconfirmation"
          :error-messages="errors"
          label="Confirm Your Password"
          required
        ></v-text-field>
      </ValidationProvider>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Details provided are accurate according to my acknowledgement"
        required
      ></v-checkbox>
      <v-btn class="mr-4" style="background-color:#F8C031; width:20%" @click="submit">Register</v-btn>
    </form>
  </ValidationObserver>
  </v-container>
  </v-container>
</template>  


<script>
  import Vue from 'vue';
  import RegisterHeader from '../../../components/old/RegHeader.vue';
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
      RegisterHeader
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
  margin-bottom: 4%;
}




</style>