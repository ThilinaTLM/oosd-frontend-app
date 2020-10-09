<template>
    <v-form v-model="valid" @submit.prevent="submit">
        <v-row>
            <v-col>
                <v-text-field
                        prepend-icon="mdi-rename-box"
                        label="First Name"
                        type="text"
                        required
                        v-model="userData.firstName"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                        prepend-icon="mdi-rename-box"
                        label="Last Name"
                        type="text"
                        required
                        v-model="userData.lastName"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-text-field
                prepend-icon="mdi-email"
                label="Email"
                type="text"
                required
                v-model="userData.email"
        ></v-text-field>

        <v-text-field
                prepend-icon="mdi-phone"
                label="Telephone"
                type="text"
                required
                v-model="userData.telephoneNumber"
        ></v-text-field>

        <v-row>
            <v-col>
                <v-select
                        prepend-icon="mdi-format-list-bulleted"
                        label="Type"
                        :items="roles"
                        v-model="userData.role"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                        v-if="userData.role.includes('Divisional')"
                        prepend-icon="mdi-home-account"
                        label="Division"
                        :items="divisions"
                        v-model="userData.office"
                ></v-select>
            </v-col>
        </v-row>


        <v-btn
                color="success"
                rounded
                class="ma-2"
                type="submit"
                :loading="loading"
                :disabled="!valid"
        >
            Register
        </v-btn>

        <v-btn
                color="secondary"
                rounded
                class="ma-2"
                @click="$emit('cancel')"
        >
            Cancel
        </v-btn>
    </v-form>
</template>

<script>
    export default {
        name: "RegStep2",
        props: [
            'loading'
        ],
        data: () => ({
            valid: false,
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                telephoneNumber: '',
                role: '',
                office: ''
            }
        }),
        computed: {
            divisions() {
                return this.$store.getters["utils/getNameOnly_Divisions"]
            },
            roles() {
                return this.$store.state.utils.roles
            }
        },
        methods: {
            submit() {
                if (this.valid) {
                    if (!this.userData.role.includes('Divisional')) {
                        delete this.userData.office
                    }

                    this.$emit('submit', this.userData)
                }
            }
        }
    }
</script>

<style scoped>

</style>