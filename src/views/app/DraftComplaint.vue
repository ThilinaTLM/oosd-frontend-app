<template>
    <v-container>
        <v-data-table
                style="margin: 8px 60px"
                :loading="loading"
                :headers="headers"
                :items="complaints"
                :search="search"
        >
            <template v-slot:top>
                <div class="table-heading" >
                    <v-text-field
                            style="grid-column: 3/4"
                            append-icon="mdi-magnify"
                            label="Quick Search"
                            outlined
                            dense
                            v-model="search"
                    ></v-text-field>
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-btn
                        v-if="item.assignedDiv == null"
                        dark
                        small
                        rounded
                        color="success"
                        class="ma-1"
                >
                    Assign
                </v-btn>
                <v-btn
                        dark
                        small
                        rounded
                        color="red"
                        class="ma-1"
                >
                    Forward
                </v-btn>
            </template>

        </v-data-table>
    </v-container>
</template>

<script>
    import {api} from "../../api";

    export default {
        name: "DraftComplaint",
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
                }
            ],

            complaints: []
        }),
        methods: {
            // async verifyUser(user) {
            //     this.loading = true;
            //     const status = await api.user.verifyUser(user.userId)
            //     if (status.code === 200) {
            //         user.verified = 1
            //     }
            //     this.loading = false;
            // },
            //
            // async disableUser(user) {
            //     this.loading = true;
            //     const status = await api.user.disableUser(user.userId)
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