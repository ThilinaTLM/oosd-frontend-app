<template>
  <v-container>
    <DataTable :headers="headers" :items="divisions" :loading="loading">
      <template v-slot:actions>
        <v-btn
            style="grid-column: 1/2"
            color="success"
            @click="dialogBox = true"
        >
          <v-icon>mdi-plus</v-icon>
          ADD
        </v-btn>
      </template>
      <template v-slot:item-action="{ item }">
        <v-btn x-small rounded color="red" @click="removeDivision(item)"> DELETE </v-btn>
      </template>
    </DataTable>
    <AddOffice
        :dialog="dialogBox"
        @submit="addNewDivision"
        @close="dialogBox = false"
    />
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import AddOffice from "../../components/app/dialogs/AddOffice";
import DataTable from "../../components/app/DataTable";

export default {
  name: "Division",
  components: {
    DataTable,
    AddOffice
  },
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'Divisional Office',
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

    dialogBox: false
  }),
  methods: {
    async addNewDivision(data) {
      this.loading = true
      const status = await this.$store.dispatch('utils/addDivision', data)
      if (status.code !== 200) {
        this.$store.commit('app/SHOW_MSG', {
          text: status.message,
          type: 'error'
        })
      }
      this.loading = false
    },
    removeDivision(item) {
      console.log(item)
    }
  },
  computed: {
    ...mapState({
      divisions: (state) => state.utils.divisions
    })
  },
  async created() {
    this.loading = true
    await this.$store.dispatch('utils/loadDivisions')
    this.loading = false
  }
}
</script>
