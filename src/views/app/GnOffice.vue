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
                <div class="table-heading">
                    <v-btn
                            style="grid-column: 1/2"
                            color="success"
                            @click="dialogBox = true"
                    >
                        <v-icon>mdi-plus</v-icon>
                        ADD
                    </v-btn>
                    <AddOffice
                            :dialog="dialogBox"
                            @submit="addNewGNOffice"
                            @close="dialogBox = false"
                    />
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
    import AddOffice from "../../components/app/dialogs/AddOffice";

    export default {
        name: "GnOffice",
        components: {
            AddOffice
        },
        data: () => ({
            loading: false,
            search: '',
            headers: [
                {
                    text: 'Grama Niladhari Office',
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

            dialogBox: false,

        }),
        methods: {
            async addNewGNOffice(data) {
                this.loading = true
                const status = await this.$store.dispatch('utils/addGNOffice', data)
                if (status.code !== 200) {
                    this.$store.commit('app/SHOW_MSG', {
                        text: status.message,
                        type: 'error'
                    })
                }
                this.loading = false
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