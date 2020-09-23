<template>
    <div class="toggle--bg secondary">
        <v-btn icon color="dark"
               small
               v-if="drawer" @click="$emit('toggle', false); drawer = false"
        >
            <v-icon>mdi-close-circle</v-icon>
        </v-btn>
        <v-btn icon color="dark"
               small
               v-else @click="$emit('toggle', true); drawer = true"
        >
            <v-icon>mdi-chevron-double-right</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "DrawerToggle",
        props: [
            'drawer'
        ]
    }
</script>

<style scoped>
    .toggle--bg {
        display: grid;
        justify-content: center;
        height: 100%;
        padding: 10px 10px;
        border-bottom-right-radius: 14px;
        border-top-right-radius: 5px;
    }
</style>