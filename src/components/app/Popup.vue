<template>
    <v-snackbar
            right
            bottom
            tile
            timeout="5000"
            :color="color"
            v-model="show"
    >
        <v-row>
            <v-icon class="ma-2">{{icon}}</v-icon>
            <p class="ma-2">{{message.msg}}</p>
        </v-row>

        <template v-slot:action="{ attrs }">
            <v-btn
                    dark
                    text
                    v-bind="attrs"
                    @click="show = false"
            >
                CLOSE
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        name: "Popup",
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
                    return this.$store.state.app.showMessage
                },
                set(newValue) {
                    return this.$store.state.app.showMessage = newValue
                }
            },

            message() {
                return this.$store.state.app.message
            },

            color() {
                return this[this.message.type].color
            },

            icon() {
                return this[this.message.type].icon
            }

        }
    }
</script>

<style scoped>

</style>