<template>
    <v-tooltip right>
        <template v-slot:activator="{on, attrs}"  >
    <v-btn
            absolute
            fab
            small
            v-bind="attrs"
            v-on="on"
            color="secondary"
            class="logo"
            to="/"
    >
        <v-icon color="black">mdi-home</v-icon>
    </v-btn>

        </template>
        <span>Home</span>
    </v-tooltip>

</template>

<script>
    export default {
        name: "HomeButton"
    }
</script>

<style scoped>
    .logo {
        top: 20px;
        left: 20px;
    }
</style>