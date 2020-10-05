<template>
  <v-dialog
      persistent
      width="350px"
      class="rounded-0"
      v-model="show"
  >
    <v-card outlined class="pa-3">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
        <v-card-title></v-card-title>

        <v-card-text>
          <slot name="fields"></slot>
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn
              small
              outlined
              rounded
              width="80px"
              color="success"
              type="submit"
              :disabled="!valid"
          >
            OK
          </v-btn>
          <v-btn
              small
              outlined
              rounded
              width="80px"
              color="warning"
              @click="$emit('cancel')"
          >
            CANCEL
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogBox",
  props: [
      'show'
  ],
  data: () => ({
    valid: false
  }),
  methods: {
    async submit() {
      console.log(this.valid)
      await this.$refs.form.validate();
      if (this.valid) {
        this.$emit('submit')
      }
    }
  }
}
</script>

<style scoped>

</style>