<template>
    <v-app>
        <v-app-bar
                color="primary"
                class="pa-0"
                dense
                flat
                app
        >
            <div class="toggle--bg secondary">
                <v-icon v-if="drawer" @click="drawer = false">mdi-close-circle</v-icon>
                <v-icon v-else @click="drawer = true">mdi-chevron-double-right</v-icon>
            </div>

        </v-app-bar>

        <v-navigation-drawer
                class="pa-2"
                color="secondary"
                v-model="drawer"
                left
                app
        >

        </v-navigation-drawer>

        <v-main class="secondary">
            <div class="main fill-height">Content</div>
        </v-main>
    </v-app>

</template>

<script>
    export default {
        name: "Dashboard",
        data: () => ({
            drawer: true
        })
    }
</script>

<style>
    .v-navigation-drawer__border {
        width: 0;
    }

    .v-toolbar__content {
        padding-left: 0;
    }

    .toggle--bg {
        display: grid;
        justify-content: center;
        height: 100%;
        padding: 0 10px;
        border-bottom-right-radius: 20px;
    }

    .main {
        padding: 10px;
        border-top-left-radius: 10px;
        background-color: white;
    }
</style>