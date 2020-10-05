<template>
<div>
  <v-form
      style="padding:2% 5%"
      ref="form"
      @submit.prevent="$emit('submit',{referencenumber, subject, description})"
      v-model="valid"
  >

    <v-container>
    <v-row>
    <v-text-field
        prepend-icon="mdi-account-circle"
        label="Reference Number"
        v-model="referencenumber"
        required

    ></v-text-field>

    </v-row>


      <v-row>
        <v-text-field
        prepend-icon="mdi-account-circle"
        label="Subject"
        required
        v-model="subject"
    ></v-text-field>

      </v-row>

      <v-row>
      <v-textarea
        prepend-icon="mdi-account-circle"
        label="Description"
        required
        outlined
        v-model="description"

    ></v-textarea>
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
          Submit
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

</div>
</template>

<script>
export default {
  name: "complaintdetails",
  props:[
    "description",
    "subject",
    "referencenumber"
  ],
  data(){
    return{
      valid:false,
      loading:false,

    }
  }
}
</script>

<style scoped>

</style>