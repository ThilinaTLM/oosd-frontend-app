<template>
    <v-card
        class="ma-5"
    >
        <v-card-title>
            Divisional Offices
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :loading="loading"
                :headers="headers"
                :items="divisions"
                :search="search"
        ></v-data-table>
    </v-card>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Division",
        data: () => ({
            loading: false,
            search: '',
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                {text: 'Address', value: 'address'},
            ]
        }),
        computed: {
            ...mapState({
                divisions: (state) => state.utils.divisions
            })
        },
        async created() {
            this.loading = true
            const status = await this.$store.dispatch('utils/loadDivisions')
            this.loading = false
        }
    }
</script>

<style scoped>

</style>