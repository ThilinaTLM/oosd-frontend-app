<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                left
                clipped
                color="primary"
        >
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
                clipped-left
                dense
        >
            <router-link class="mr-5" to="/">
                <img
                        title="Galle District Secretariat Office"
                        :src="require('../assets/main-gov.png')"
                        height="35"
                />
            </router-link>

            <v-tabs
                    v-model="tab"
                    align-with-title
                    color="blue"
            >
                <v-tabs-slider color="blue"></v-tabs-slider>

                <v-tab @click="drawer = !drawer">Home</v-tab>
                <v-tab to="/login">Tab2</v-tab>
                <v-tab to="#">Tab3</v-tab>
                <v-tab to="#">Tab4</v-tab>
            </v-tabs>
            <v-spacer/>
            <v-icon class="ma-4">mdi-bell</v-icon>
            <v-icon class="ma-4">mdi-account</v-icon>
        </v-app-bar>


        <v-main>
            <slot/>
        </v-main>

        <v-footer
                app
                color="primary"
        >
            <v-toolbar-title class="subtitle-2">Complaint Management System</v-toolbar-title>
            <v-spacer></v-spacer>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },

        data: () => ({
            drawer: false,
            tab: null
        }),
        computed: {
            drawerHidden: () => !this.drawer
        }
    }
</script>

<style>
    html {
        overflow-y: hidden;
    }
</style>