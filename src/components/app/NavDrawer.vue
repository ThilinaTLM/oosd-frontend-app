<template>
    <v-navigation-drawer
            class="pa-2"
            color="secondary"
            v-model="toggle"
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

            <v-divider/>

            <v-list-item link to="/app/">
                <v-list-item-icon>
                    <v-icon>mdi-file-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/app/divisions">
                <v-list-item-icon>
                    <v-icon>mdi-file-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Divisions</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/app/">
                <v-list-item-icon>
                    <v-icon>mdi-file-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>GN Offices</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <LogoutButton small/>
            </div>
        </template>

    </v-navigation-drawer>
</template>

<script>
    import ProfileCard from "../user/ProfileCard";
    import LogoutButton from "../user/LogoutButton";

    export default {
        name: "NavDrawer",
        components: {
            ProfileCard,
            LogoutButton
        },
        props: [
            'toggle'
        ]
    }
</script>

<style scoped>

</style>