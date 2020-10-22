<template>
  <v-navigation-drawer
          class="pa-2"
          color="secondary"
          v-model="show"
          stateless
          left
          app
          mini-variant-width="73"
          :mini-variant="!toggle"
  >
    <template v-slot:prepend>
      <ProfileCard/>
    </template>

    <v-divider/>

    <v-list
            dense
            nav
    >
      <NavItem name="Dashboard" icon="mdi-view-dashboard" link="/app"/>

      <v-divider/>

      <AdminNavItems v-if="role === 'Administrator'"/>
      <DisOffNavItems v-else-if="role === 'District Officer'" />
      <DisSecNavItems v-else-if="role === 'District Secretariat'" />

    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <LogoutButton small="true" :mini="!toggle" />
      </div>
    </template>

  </v-navigation-drawer>
</template>

<script>
import ProfileCard from "../../user/ProfileCard";
import LogoutButton from "../../user/LogoutButton";
import NavItem from "./NavItem";
import AdminNavItems from "./modules/AdminNavItems";
import DisOffNavItems from "./modules/DisOffNavItems";
import DisSecNavItems from "./modules/DisSecNavItems";

export default {
    name: "NavDrawer",
    components: {
        DisSecNavItems,
        DisOffNavItems,
        AdminNavItems,
        NavItem,
        ProfileCard,
        LogoutButton
    },
    props: [
        'toggle'
    ],
    data: () => ({
        show: true
    }),
    computed: {
        role() {
            return this.$store.getters["user/getRole"]
        }
    }
}
</script>

<style scoped>

</style>