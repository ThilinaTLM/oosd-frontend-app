<template>
    <v-row class="content-center">
        <v-btn
                v-bind:small="small"
                dark
                class="ma-2"
                width="90%"
                @click="logout"
        >
            LOGOUT
        </v-btn>
    </v-row>
</template>

<script>
    export default {
        name: "LogoutButton",
        props: [
            'small'
        ],
        methods: {
            async logout() {
                await this.$store.dispatch('user/logout')
                await this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .content-center {
        justify-content: center
    }
</style>