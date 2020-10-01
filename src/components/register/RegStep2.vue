<template>
    <v-form v-model="valid" @submit.prevent="submit">
        <v-row>
            <v-col>
                <v-text-field
                        prepend-icon="mdi-rename-box"
                        label="First Name"
                        type="text"
                        required
                        v-model="firstName"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                        prepend-icon="mdi-rename-box"
                        label="Last Name"
                        type="text"
                        required
                        v-model="lastName"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-text-field
                prepend-icon="mdi-email"
                label="Email"
                type="text"
                required
                v-model="email"
        ></v-text-field>

        <v-text-field
                prepend-icon="mdi-phone"
                label="Telephone"
                type="text"
                required
                v-model="telephoneNumber"
        ></v-text-field>

        <v-row>
            <v-col>
                <v-select
                        prepend-icon="mdi-format-list-bulleted"
                        label="Type"
                        :items="roles"
                        v-model="role"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                        v-if="role.includes('Divisional')"
                        prepend-icon="mdi-home-account"
                        label="Division"
                        :items="divisions"
                        v-model="office"
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
                to="/login"
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

            firstName: '',
            lastName: '',
            email: '',
            telephoneNumber: '',
            role: '',
            office: '',
        }),
        computed: {
            divisions() {
                const divisions = this.$store.state.utils.divisions || []
                for (let i = 0; i < divisions.length; i++) {
                    divisions[i] = divisions[i].name
                }
                return divisions
            },
            roles() {
                return this.$store.state.utils.roles
            }
        },
        methods: {
            submit() {
                if (this.valid) {
                    if (!this.needOffice()) {
                        this.office = null
                    }
                    const {
                        firstName, lastName,
                        email,
                        telephoneNumber,
                        role,
                        office
                    } = this
                    this.$emit('submit', {
                        firstName, lastName,
                        email,
                        telephoneNumber,
                        role,
                        office
                    })
                }
            },

            needOffice() {
                if (this.role || this.role.includes('Divisional')) {
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>

</style>