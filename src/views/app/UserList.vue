<template>
    <v-container>
        <v-data-table
                style="margin: 8px 60px"
                :loading="loading"
                :headers="headers"
                :items="users"
                :search="search"
        >
            <template v-slot:top>
                <div class="table-heading" >
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
                <v-btn
                        v-if="item.verified === 0"
                        dark
                        small
                        rounded
                        width="80"
                        color="success"
                        class="ma-2"
                        @click="verifyUser(item)"
                >
                    verify
                </v-btn>
                <v-btn
                        v-if="item.verified === 1"
                        dark
                        small
                        rounded
                        width="80"
                        color="red"
                        class="ma-2"
                        @click="disableUser(item)"
                >
                    disable
                </v-btn>
            </template>

        </v-data-table>
    </v-container>
</template>

<script>
    import {api} from "../../api";

    export default {
        name: "UserList",
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
                    text: 'Status',
                    value: 'actions',
                    width: 90
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

<style scoped>
    .table-heading {
        display: grid;
        grid-template-columns: 1fr 7fr 3fr;
    }
</style>