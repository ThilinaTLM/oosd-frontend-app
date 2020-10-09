<template>
    <v-form
        ref="form"
        @submit.prevent="submit"
        v-model="valid"
    >
        <v-row>
          <v-col cols="5" class="pa-0">
            <v-select
                prepend-inner-icon="mdi-format-list-checks"
                label="Complaint Type"
                v-model="complaintData.type"
                :items="comTypes"
                required
            ></v-select>
          </v-col>
          <v-col cols="1"/>
          <v-col cols="6" class="pa-0">
            <v-text-field
                prepend-inner-icon="mdi-card-bulleted"
                label="Reference Number"
                v-if="!complaintData.type.includes('Direct')"
                v-model="complaintData.refNo"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-text-field
              label="Subject"
              required
              v-model="complaintData.subject"
          ></v-text-field>

        </v-row>

        <v-row>
          <v-textarea
              label="Description"
              required
              flat
              outlined
              class="rounded-0"
              v-model="complaintData.description"

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
              @click="cancel"
          >
            Cancel
          </v-btn>

        </v-row>
    </v-form>
</template>

<script>
export default {
  name: "ComplaintDetails",
  props: [
    'loading'
  ],
  data: () => ({
    valid: false,
    // loading: false,
    complaintData: {
      subject: '',
      description: '',
      type: '',
      refNo: ''
    }
  }),
  computed: {
    comTypes() {
      return this.$store.state.utils.comTypes;
    }
  },
  methods: {
    async submit() {
      await this.$refs.form.validate();
      if (this.valid) {
        if (this.complaintData.type.includes('Direct')) {
          this.complaintData.refNo = 'auto'
        }
        this.$emit('submit', this.complaintData)
      }
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>

</style>