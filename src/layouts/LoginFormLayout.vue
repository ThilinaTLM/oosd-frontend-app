<template>
    <v-app>
        <v-app-bar max-height="48" color="darken-2 yellow" dense>
            <router-link class="mr-5" to="/">
                <img
                        title="Galle District Secretariat Office"
                        :src="require('../assets/main-gov.png')"
                        height="40"
                />
            </router-link>
            <v-toolbar-title>Galle Public Complaint Management System</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                    v-for="b in $props.config.buttons"
                    :key="b.id"
                    rounded
                    small
                    :disabled="b.disabled"
                    :color="b.color"
                    class="black--text ma-2"
                    @click="b.callback"
            >
                {{b.text}}
            </v-btn>
        </v-app-bar>
        <v-container fill-height fluid class="lighten-3 grey">
            <v-row justify="center"><slot/></v-row>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "LoginFormLayout",
        props: ['config'],
        data: () => ({
            buttons: this.$props.config.buttons
        }),
        created() {
            console.log(this.$props.config.buttons)
        }
    }
</script>

<style>
    html {
        overflow-y: hidden;
    }
</style>