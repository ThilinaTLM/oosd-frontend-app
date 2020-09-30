<template>
    <v-snackbar
            right
            rounded
            timeout="5000"
            dark
            v-model="show"
    >
        <v-alert :type="type" style="font-size: 11pt">
            {{text}}
            <template v-slot:close>

                <v-btn
                        dark
                        icon
                        small
                        style="margin-left: 5px"
                        @click="show = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-alert>
    </v-snackbar>
</template>

<script>
    export default {
        name: "PopAlert",
        computed: {
            show: {
                get() {
                    return this.$store.state.app.showMessage
                },
                set(newValue) {
                    return this.$store.state.app.showMessage = newValue
                }
            },

            text() {
                return this.$store.state.app.message.text
            },

            type() {
                return this.$store.state.app.message.type
            }
        }
    }
</script>