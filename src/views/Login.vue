+
<template>
    <v-app>
        <v-main class="bg">
            <v-container
                    fluid
                    class="fill-height"
            >
                <v-spacer/>
                <LoggedInfo v-if="isAuth"/>
                <LoginForm v-else/>
                <v-spacer/>
            </v-container>
        </v-main>
        <PopAlert/>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'
    import store from '../store'
    import LoginForm from "@/components/user/LoginForm.vue";
    import LoggedInfo from "../components/user/LoggedInfo";
    import PopAlert from "../components/PopAlert";

    export default {
        name: 'Login',
        components: {
            PopAlert,
            LoginForm,
            LoggedInfo
        },
        computed: {
            ...mapGetters('user', ['isAuth'])
        },
        beforeRouteEnter(from, to, next) {
            store.dispatch('user/loadLocalStorage')
            next()
        }
    }
</script>

<style>
    /* html {
        overflow-y: hidden;
    } */
</style>