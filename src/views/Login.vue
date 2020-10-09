<template>
    <v-app>
        <v-main class="bg2">
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
        <HomeButton />
        <PopAlert/>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'
    import store from '../store'
    import LoginForm from "../components/user/LoginForm.vue";
    import LoggedInfo from "../components/user/LoggedInfo";
    import PopAlert from "../components/PopAlert";
    import HomeButton from "../components/home/HomeButton";

    export default {
        name: 'Login',
        components: {
            HomeButton,
            PopAlert,
            LoginForm,
            LoggedInfo
        },
        computed: {
            ...mapGetters('user', ['isAuth'])
        },
        async beforeRouteEnter(from, to, next) {
            await store.dispatch('user/loadLocalStorage')
            next()
        }
    }
</script>