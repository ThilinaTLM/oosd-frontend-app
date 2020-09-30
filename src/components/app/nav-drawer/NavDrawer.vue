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
            <NavItem name="Dashboard" icon="mdi-view-dashboard" link="/app"/>
            <NavItem
                    v-for="item in navItemData"
                    :key="item.name"
                    :name="item.name"
                    :icon="item.icon"
                    :link="item.link"
            />

        </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <LogoutButton small/>
                </div>
            </template>

    </v-navigation-drawer>
</template>

<script>
    import ProfileCard from "../../user/ProfileCard";
    import LogoutButton from "../../user/LogoutButton";
    import NavItem from "./NavItem";
    import { admin, dis_officer, dis_sec, div_officer, div_sec } from './nav-items'

    export default {
        name: "NavDrawer",
        components: {
            NavItem,
            ProfileCard,
            LogoutButton
        },
        props: [
            'toggle'
        ],
        computed: {
            navItemData() {
                switch (this.$store.state.user.userData.role) {
                    case 'Administrator':
                        return admin
                    case 'District Officer':
                        return dis_officer
                    case 'District Secretariat':
                        return dis_sec
                    case 'Divisional Officer':
                        return div_officer
                    case 'Divisional Secretariat':
                        return div_sec
                }
            }
        }
    }
</script>

<style scoped>

</style>