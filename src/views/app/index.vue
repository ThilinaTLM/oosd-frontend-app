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

        <NavDrawer :toggle="drawer"/>

        <v-main class="secondary">
            <div class="main fill-height">Content</div>
        </v-main>
    </v-app>

</template>

<script>
    import store from "../../store"
    import NavDrawer from "../../components/app/NavDrawer";
    import DrawerToggle from "../../components/app/DrawerToggle";

    export default {
        name: "Dashboard",
        components: {
            NavDrawer,
            DrawerToggle
        },
        data: () => ({
            drawer: true
        }),
        beforeRouteEnter(from, to, next) {
            store.dispatch('user/loadLocalStorage')
            if (store.getters['user/isAuth'] === false) {
                next('/login')
                return
            }
            next()
        }
    }
</script>

<style>
    .v-navigation-drawer__border {
        width: 0;
    }

    .v-toolbar__content {
        padding-left: 0;
    }

    .main {
        padding: 10px;
        border-top-left-radius: 6px;
        background-color: white;
    }
</style>