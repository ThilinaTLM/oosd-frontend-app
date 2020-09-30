<template>
    <v-dialog
            persistent
            width="350px"
            class="rounded-0"
            v-model="dialog"
    >
        <v-card outlined class="pa-3">
            <v-form @submit.prevent="submit">
            <v-card-title></v-card-title>

            <v-card-text>
                <v-text-field
                        label="Name"
                        prepend-icon="mdi-rename-box"
                        required
                        v-model="item.name"
                />
                <v-text-field
                        label="Address"
                        prepend-icon="mdi-map-marker"
                        v-model="item.address"
                />
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <v-btn
                        small
                        outlined
                        rounded
                        :disabled="item.name.length == 0"
                        width="80px"
                        color="success"
                        type="submit"
                >
                    Add
                </v-btn>
                <v-btn
                        small
                        outlined
                        rounded
                        width="80px"
                        color="warning"
                        @click="$emit('close')"
                >
                    Cancel
                </v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "AddOffice",
        props: [
            'dialog'
        ],
        data: () => ({
            item: {
                name: '',
                address: ''
            }
        }),
        methods: {
            submit() {
                this.$emit('submit', {...this.item})
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>