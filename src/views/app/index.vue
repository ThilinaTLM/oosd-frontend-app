<template>
    <v-app>
        <v-app-bar
                color="primary"
                class="pa-0"
                dense
                flat
                app
        >
            <DrawerToggle
                    :drawer="drawer"
                    @toggle="(args) => this.drawer = args"
            />

            <v-spacer/>

            <v-btn
                    icon
                    small
                    color="dark"
                    class="ma-3"
            >
                <v-icon>mdi-bell</v-icon>
            </v-btn>
        </v-app-bar>

        <NavDrawer :toggle="drawer" @close="$store.commit('app/SHOW_MSG', {text:'Closed'})"/>

        <v-main class="secondary">
            <div class="main fill-height">
                <router-view/>
            </div>
        </v-main>

        <PopAlert/>
    </v-app>

</template>

<script>
    import store from "../../store"
    import NavDrawer from "../../components/app/nav-drawer/NavDrawer";
    import DrawerToggle from "../../components/app/nav-drawer/DrawerToggle";
    import PopAlert from "../../components/PopAlert";

    export default {
        name: "App",
        components: {
            NavDrawer,
            DrawerToggle,
            PopAlert
        },
        data: () => ({
            drawer: true
        }),

        async beforeRouteEnter(from, to, next) {
            await store.dispatch('user/loadLocalStorage');
            if (store.getters['user/isAuth'] === false) {
                next('/login');
                return;
            }
            next();
        }
    }
</script>

<style scoped>
    .main {
        padding: 10px;
        border-top-left-radius: 6px;
        background-color: white;
    }


</style>