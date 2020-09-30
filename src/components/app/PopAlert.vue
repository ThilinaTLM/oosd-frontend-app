<template>
    <v-snackbar
            right
            bottom
            tile
            timeout="20000"
            :color="color"
            v-model="show"
            class="pa-0"
    >
<!--        <v-row>-->
<!--            <v-icon class="ma-2">{{icon}}</v-icon>-->
<!--            <p class="ma-2">{{message.msg}}</p>-->
<!--        </v-row>-->
        <template v-slot:default>
            <v-alert type="success">
                I'm a success alert.
            </v-alert>
        </template>
<!--        <template v-slot:action="{ attrs }">-->
<!--            <v-btn-->
<!--                    dark-->
<!--                    text-->
<!--                    v-bind="attrs"-->
<!--                    @click="show = false"-->
<!--            >-->
<!--                CLOSE-->
<!--            </v-btn>-->
<!--        </template>-->
    </v-snackbar>
</template>

<script>
    export default {
        name: "PopAlert",
        data: () => ({
            INFO: {
                icon: 'mdi-information',
                color: 'blue'
            },
            DONE: {
                icon: 'mdi-check-circle',
                color: 'green'
            },
            WARN: {
                icon: 'mdi-alert',
                color: 'orange'
            },
            ERROR: {
                icon: 'mdi-close-circle',
                color: 'red'
            }
        }),
        computed: {
            show: {
                get() {
                    // return this.$store.state.app.showMessage
                    return "true"
                },
                set(newValue) {
                    return this.$store.state.app.showMessage = newValue
                }
            },

            message() {
                // return this.$store.state.app.message
                return "Hello"
            },

            color() {
                // return this[this.message.type].color
                return "red"
            },

            icon() {
                // return this[this.message.type].icon
                return "mdi-home"
            }

        }
    }
</script>

<style>
    .v-snack__content {
        padding: 0;
    }
</style>