<template>
  <v-container class="pl-10 pr-10">
    <DataTable :loading="loading" :items="complaints" :headers="headers">
      <template v-slot:item-action="{item}">
        <v-btn
            x-small
            rounded
            color="blue"
            class="ma-1"
            v-if="item.assignedDiv === null"
            @click="dialogBox = true"
        >
          Assign
        </v-btn>
        <v-btn
                x-small
                rounded
                color="blue"
                class="ma-1"
                v-if="item.assignedDiv !== null"
                @click="dialogBox = true"
        >
          ReAssign
        </v-btn>
        <v-btn
            x-small
            rounded
            color="red"
            class="ma-1"
            v-if="item.assignedDiv !== null"
        >
          Forward
        </v-btn>
      </template>
    </DataTable>

    <ChooseDivision
        :show="dialogBox"
        @cancel="dialogBox = false"
        @choose="dialogBox = false"
    />
  </v-container>
</template>

<script>
import {api} from "../../api";
import DataTable from "../../components/app/DataTable";
import ChooseDivision from "../../components/app/dialogs/ChooseDivision";

export default {
  name: "DraftComplaint",
  components: {ChooseDivision, DataTable},
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'Ref',
        align: 'start',
        sortable: true,
        value: 'refNo',
        width: 80,
      },
      {
        text: 'Type',
        value: 'type'
      },
      {
        text: 'Date',
        value: 'createdDate'
      },
      {
        text: 'Subject',
        value: 'subject'
      },
      {
        text: 'Division',
        value: 'assignedDiv'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }
    ],

    complaints: [],
    dialogBox: false
  }),
  methods: {
    // async verifyUser(user) {
    //     this.loading = true;
    //     const status = await notificator.user.verifyUser(user.userId)
    //     if (status.code === 200) {
    //         user.verified = 1
    //     }
    //     this.loading = false;
    // },
    //
    // async disableUser(user) {
    //     this.loading = true;
    //     const status = await notificator.user.disableUser(user.userId)
    //     if (status.code === 200) {
    //         user.verified = 0
    //     }
    //     this.loading = false;
    // }
  },
  async created() {
    this.loading = true
    const [complaintList, status] = await api.complaint.getComplaints({status: 'Draft'})
    if (status.code === 200) {
      this.complaints = complaintList
    } else {
      this.$store.commit('app/SHOW_MSG', {
        text: 'Something wrong!',
        type: 'error'
      })
    }
    this.loading = false
  }
}
</script>

<style scoped>
.table-heading {
  display: grid;
  grid-template-columns: 1fr 7fr 3fr;
}
</style>