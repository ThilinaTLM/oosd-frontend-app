<template>
  <v-container class="pl-10 pr-10">
    <DataTable :loading="loading" :items="complaints" :headers="headers">
      <template v-slot:item-action="{item}">
        <ActionButton
                color="orange"
                class="ma-1"
                @click="$router.push({path: '/app/complaint/view/' + item.complaintId})"
        >
          View
        </ActionButton>
        <ActionButton
                color="green"
                class="ma-1"
                v-if="!item.assignedDiv"
                @click="selectForAssign(item)"
        >
          Assign
        </ActionButton>
        <ActionButton
                v-else
                color="blue"
                class="ma-1"
                @click="selectForReassign(item)"
        >
          ReAssign
        </ActionButton>
        <ActionButton
                color="orange"
                class="ma-1"
                v-if="item.assignedDiv"
                @click="markForApproval(item)"
        >
          Forward
        </ActionButton>
      </template>
    </DataTable>

    <ChooseDivision
            :show="dialogBox"
            :ref-no="selectedComplaint.refNo"
            @cancel="cancelSelect"
            @choose="submitDivision"
    />
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ChooseDivision from "../../../components/app/dialogs/ChooseDivision";
import ActionButton from "../../../components/app/data-table/ActionButton";

export default {
    name: "DraftComplaint",
    components: {
        ActionButton,
        ChooseDivision,
        DataTable
    },
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
        dialogBox: false,
        selectedComplaint: {},
        selectFor: ''
    }),
    methods: {
        selectForAssign(item) {
            this.selectedComplaint = item
            this.selectFor = 'assignDivision'
            this.dialogBox = true
        },
        selectForReassign(item) {
            this.selectedComplaint = item
            this.selectFor = 'reassignDivision'
            this.dialogBox = true
        },
        cancelSelect() {
            this.selectedComplaint = {}
            this.selectFor = ''
            this.dialogBox = false
        },
        async submitDivision(division) {
            this.loading = true
            const status = await api.complaint[this.selectFor](this.selectedComplaint.complaintId, division)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                this.dialogBox = false
                return
            }
            this.$notify("Successfully assigned", 'success')
            this.selectedComplaint.assignedDiv = division
            this.dialogBox = false
            this.loading = false
        },
        async markForApproval(item) {
            this.loading = true
            const status = await api.complaint.mark.markForApproval(item.complaintId)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                return
            }
            this.$notify("Send to District Secretariat", 'success')
            this.complaints = this.complaints.filter((c) => c.complaintId !== item.complaintId)
            this.loading = false
        }
    },
    async created() {
        this.loading = true
        const [complaintList, status] = await api.complaint.getComplaints({status: 'Draft'})
        if (status.code === 200) {
            this.complaints = complaintList
            this.complaints.forEach(c => {
                c.createdDate = new Date(c.createdDate).toLocaleDateString()
            })
        } else {
            this.$notify("Something Wrong!", 'error')
        }
        this.loading = false
    }
}
</script>