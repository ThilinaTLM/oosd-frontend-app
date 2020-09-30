<template>
    <v-container>
        <v-data-table
                style="margin: 8px 60px"
                :loading="loading"
                :headers="headers"
                :items="gnOffices"
                :search="search"
        >
            <template v-slot:top>
                <div class="table-heading" >
                    <v-dialog v-model="dialogBox" persistent width="450px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    style="grid-column: 1/2"
                                    color="success"
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <v-icon>mdi-plus</v-icon>
                                ADD
                            </v-btn>
                        </template>
                        <v-card class="pa-5">
                            <v-card-title>
                                New divisional office
                            </v-card-title>
                            <v-form
                                    class="pa-5"
                                    @submit.prevent="submitDivisionForm"
                            >
                                <v-text-field
                                        label="name"
                                        required
                                        clear-icon="mid-close"
                                        v-model="editItem.name"
                                />
                                <v-text-field
                                        label="address"
                                        v-model="editItem.address"
                                />

                                <v-row>
                                    <v-col cols="5" class="ma-3">
                                        <v-btn
                                                width="100%"
                                                color="success"
                                                type="submit"
                                                :loading="savingData"
                                        >
                                            Save
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="5" class="ma-3">
                                        <v-btn
                                                width="100%"
                                                color="warning"
                                                @click="dialogBox = false"
                                        >
                                            Cancel
                                        </v-btn>
                                    </v-col>
                                </v-row>

                            </v-form>
                        </v-card>
                    </v-dialog>
                    <v-text-field
                            style="grid-column: 3/4"
                            append-icon="mdi-magnify"
                            label="Quick Search"
                            flat
                            outlined
                            dense
                            v-model="search"
                    ></v-text-field>
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="ma-2"
                        @click="$emit('some')"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        class="ma-2"
                        @click="$emit('some')"
                >
                    mdi-delete
                </v-icon>
            </template>

        </v-data-table>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "GnOffice",
        data: () => ({
            loading: false,
            search: '',
            headers: [
                {
                    text: 'G.N Office',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                    width: 250,
                },
                {text: 'Address', value: 'address'},
                {
                    text: 'Actions',
                    value: 'actions',
                    width: 100
                }
            ],

            // dialog ------------------------------

            dialogBox: false,
            savingData: false,
            editItem: {
                name: '',
                address: ''
            }
        }),
        methods: {
            async submitDivisionForm() {
                this.savingData = true
                const status = await this.$store.dispatch('utils/addGNOffice', this.editItem)
                if (status.code !== 200) {
                    this.$store.commit('app/SHOW_MSG', {
                        msg: status.message,
                        type: 'error'
                    })
                }
                this.savingData = false
                this.dialogBox = false
            }
        },
        computed: {
            ...mapState({
                gnOffices: (state) => state.utils.gn_offices
            })
        },
        async created() {
            this.loading = true
            await this.$store.dispatch('utils/loadGNOffices')
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