<template>
<v-container  fluid style="padding:0px; ">
  
<v-container class="mainContainer">
  <ValidationObserver ref="observer" v-slot="{ /*validate, reset */}">
    <form>
      <ValidationProvider v-slot="{ errors }" name="Name" rules="">
        
        <v-text-field
          v-model="name"
    
          :error-messages="errors"
          label="Username / Email address"
          required
        ></v-text-field>
      </ValidationProvider>
     
      <ValidationProvider v-slot="{ errors }" name="Password" rules="">
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="Password"
          required
        ></v-text-field>
      </ValidationProvider>
      <v-btn class="mr-4" style="background-color:#F8C031; width:20%" @click="submit">Login</v-btn>
      
    </form>
  </ValidationObserver>
  </v-container>
  </v-container>
</template>

<script>
  import Vue from 'vue';
  import LoginHeader from './LoginHeader.vue';
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
      LoginHeader
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

<style scoped>

.mainContainer{
  
  margin: 0px auto;
  padding: 5%;
  text-align: center;
  background-color:rgba(248, 192, 49, 0.25) ;
  

}



</style>