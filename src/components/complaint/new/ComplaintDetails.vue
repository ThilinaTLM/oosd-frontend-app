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
                v-show="!directOnly"
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
      <v-col cols="5">
        <v-checkbox
                v-model="specifyDivisionNow"
                :disabled="divisionRequired"
                label="Pre assign to a divisional secretariat office."
        />
      </v-col>
      <v-col cols="7">
        <v-select
                v-show="specifyDivisionNow || divisionRequired"
                v-model="complaintData.assignedDiv"
                :items="divisions"
                label="Select Divisional Secretariat Office"
        />

      </v-col>
    </v-row>

    <v-divider/>
    <v-row class="mt-5">
      <v-btn
              color="success"
              class="ma-2"
              type="submit"
              :loading="loading"
              :disabled="!valid"
      >
        Submit
      </v-btn>

      <v-btn
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
        'loading',
        'directOnly'
    ],
    data: () => ({
        valid: false,
        specifyDivisionNow: false,
        // loading: false,
        complaintData: {
            subject: '',
            description: '',
            type: '',
            refNo: '',
            assignedDiv: ''
        }
    }),
    computed: {
        comTypes() {
            const types = this.$store.getters["utils/getNameOnly_ComTypes"]
            if (this.directOnly) {
                console.log(types)
                return types.filter((t) => t.includes("Direct"))
            }
            return types;
        },
        divisions() {
            return this.$store.getters["utils/getNameOnly_Divisions"]
        },
        divisionRequired() {
            if (this.complaintData.type === 'Direct to Division') {
                this.specifyDivisionNow = true
                return true
            }
            return false
        }
    },
    methods: {
        async submit() {
            await this.$refs.form.validate();
            if (this.valid) {
                if (this.complaintData.type.includes('Direct')) {
                    this.complaintData.refNo = 'auto'
                }

                if (!this.specifyDivisionNow && !this.divisionRequired) {
                   delete this.complaintData.assignedDiv
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