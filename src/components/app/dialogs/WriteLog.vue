<template>
  <DialogBox
          ok="OK"
          :title="title"
          :show="show"
          @submit="ok"
          @cancel="cancel"
  >
    <template v-slot:fields>
      <p>{{ refNo }}</p>
      <v-checkbox
              v-model="writeLog"
              v-show="!required"
              label="Write on complaint log"
      />
      <div v-show="writeLog || required">

        <v-text-field
                label="Subject"
        />
        <v-textarea
                label="Description"
                filled
                outlined
        />
      </div>
    </template>
  </DialogBox>
</template>

<script>
import DialogBox from "./DialogBox";

export default {
    name: "WriteLog",
    props: {

        'show' :{
          type: Boolean
        },
        'refNo': {
            type: String
        },
        'title': {
            type: String
        },
        'required': {
            type: Boolean,
            default: false
        }

    },
    components: {
        DialogBox
    },
    data: () => ({
        log: {
            subject: '',
            description: ''
        },
        writeLog: false
    }),
    methods: {
        ok() {
            if (this.writeLog || this.required) {
                this.$emit('ok', this.log)
            } else {
                this.$emit('ok', undefined)
            }
            this.writeLog = false
            this.log = {
                subject: '',
                description: ''
            }
        },
        cancel() {
            this.writeLog = false
            this.log = {
                subject: '',
                description: ''
            }
            this.$emit('cancel')
        }
    }
}
</script>

<style scoped>

</style>