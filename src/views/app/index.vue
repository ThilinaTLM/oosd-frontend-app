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
                <v-btn icon color="dark"
                       small
                       v-if="drawer" @click="drawer = false"
                >
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
                <v-btn icon color="dark"
                       small
                       v-else @click="drawer = true"
                >
                    <v-icon>mdi-chevron-double-right</v-icon>
                </v-btn>
            </div>

        </v-app-bar>

        <v-navigation-drawer
                class="pa-2"
                color="secondary"
                v-model="drawer"
                left
                app
        >
            <ProfileCard/>
            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-file-document-edit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Draft Complaints</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-file-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Create Complaint</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider/>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-file-certificate</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Approve Complaints</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-file-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>New Complaint</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <LogoutButton small/>
                </div>
            </template>

        </v-navigation-drawer>

        <v-main class="secondary">
            <div class="main fill-height">Content</div>
        </v-main>
    </v-app>

</template>

<script>
    import ProfileCard from "../../components/user/ProfileCard";
    import LogoutButton from "../../components/user/LogoutButton";

    export default {
        name: "Dashboard",
        components: {
            ProfileCard,
            LogoutButton
        },
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
        padding: 10px 10px;
        border-bottom-right-radius: 20px;
    }

    .main {
        padding: 10px;
        border-top-left-radius: 6px;
        background-color: white;
    }
</style>