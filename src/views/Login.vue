<template>
    <v-app>
        <v-main class="bg">
            <v-container
                    fluid
                    class="fill-height"
            >
                <v-spacer/>
                <LoggedInfo v-if="isAuthenticated"/>
                <LoginForm @logged-in="loginSuccess" v-else/>
                <v-spacer/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'
    import LoginForm from "@/components/user/LoginForm.vue";
    import LoggedInfo from "@/components/user/LoggedInfo";

    export default {
        name: 'Login',
        components: {
            LoginForm,
            LoggedInfo
        },
        computed: {
            ...mapGetters('user', ['isAuthenticated'])
        },
        methods: {
            loginSuccess() {
                // this.$router.push('/app')
            }
        }
    }
</script>

<style>
    html {
        overflow-y: hidden;
    }
</style>