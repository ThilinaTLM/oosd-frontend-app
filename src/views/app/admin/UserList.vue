<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="users" :loading="loading">
      <template v-slot:actions>
        <v-btn
            style="grid-column: 1/2"
            color="success"
            width="100"
            rounded
            disabled
            @click="dialogBox = true"
        >
          <v-icon>mdi-sticker-plus</v-icon> <span class="ml-2"> Add</span>
        </v-btn>
      </template>
      <template v-slot:item-action="{ item }">
        <v-btn
            v-if="item.verified"
            :disabled="item.role === 'Administrator'"
            x-small
            rounded
            width="60"
            color="red"
            @click="disableUser(item)"
        >
          Disable
        </v-btn>
        <v-btn
            v-else
            x-small
            rounded
            width="60"
            color="green"
            @click="verifyUser(item)"
        >
          Verify
        </v-btn>
      </template>
    </DataTable>
  </v-container>
</template>

<script>
import DataTable from "../../../components/app/DataTable";
import {api} from "../../../api";

export default {
  name: "UserList",
  components: {
    DataTable
  },
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'Username',
        align: 'start',
        sortable: true,
        value: 'username',
        width: 200,
      },
      {
        text: 'First Name',
        value: 'firstName'
      },
      {
        text: 'Last Name',
        value: 'lastName'
      },
      {
        text: 'Role',
        value: 'role'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        width: 200
      }
    ],
    users: []
  }),
  methods: {
    async verifyUser(user) {
      this.loading = true;
      const status = await api.user.verifyUser(user.userId)
      if (status.code === 200) {
        user.verified = 1
      }
      this.loading = false;
    },

    async disableUser(user) {
      this.loading = true;
      const status = await api.user.disableUser(user.userId)
      if (status.code === 200) {
        user.verified = 0
      }
      this.loading = false;
    }
  },
  async created() {
    this.loading = true
    const [userList, status] = await api.user.getUser({})
    if (status.code === 200) {
      this.users = userList
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

<style lang="scss">
  .action-button {

  }
</style>