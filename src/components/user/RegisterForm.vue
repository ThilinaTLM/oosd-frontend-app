<template>
    <v-container
            class="elevation-4  pa-0 white">
        <v-stepper v-model="stepCount">
            <v-stepper-header>
                <v-stepper-step :complete="stepCount > 1" step="1">Credentials</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="stepCount > 2" step="2">Basic Information</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Verification</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1" class="pa-10">
                    <v-form v-model="step1_valid" @submit.prevent="submitStep1" lazy-validation>
                        <v-text-field
                                prepend-icon="mdi-account-circle"
                                label="Username"
                                class="ma-1"
                                type="text"
                                required
                                v-model="userData.username"
                                :error-messages="username_errors"

                        ></v-text-field>

                        <v-text-field
                                prepend-icon="mdi-lock"
                                ref="password"
                                label="Password"
                                type="password"
                                class="ma-1"
                                required
                                v-model="userData.password"
                                :error-messages="password_errors"
                        ></v-text-field>

                        <v-text-field
                                prepend-icon="mdi-lock"
                                label="Confirm Password"
                                type="password"
                                class="ma-1"
                                required
                                v-model="confirmPassword"
                                :error-messages="confirm_password_errors"
                        ></v-text-field>

                        <v-btn
                                color="success"
                                class="ma-2"
                                type="submit"
                                :loading="loading"
                                :disabled="!step1_valid"
                        >
                            Continue
                        </v-btn>

                        <v-btn
                                text
                                class="ma-2"
                                to="/login"
                        >
                            Cancel
                        </v-btn>
                    </v-form>
                </v-stepper-content>

                <v-stepper-content step="2" class="pa-10">
                    <v-form v-model="step2_valid" @submit.prevent="submitStep2">
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
                                class="ma-2"
                                type="submit"
                                :loading="loading"
                                :disabled="!step2_valid"
                        >
                            Register
                        </v-btn>

                        <v-btn
                                text
                                class="ma-2"
                                to="/login"
                        >
                            Cancel
                        </v-btn>
                    </v-form>
                </v-stepper-content>
                <v-stepper-content step="3" class="pa-10">
                    <v-alert
                            color="success"
                            outlined
                    >
                        You are successfully registered as {{userData.role}} user.
                        Please contact an administrator to verify your account.
                        After verification is done, You will be able to login to the system.
                    </v-alert>

                    <v-row class="justify-center">
                        <v-btn
                                color="success"
                                width="150px"
                                class="ma-5"
                                to="/login"
                        >
                            LOGIN
                        </v-btn>
                    </v-row>

                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>
    import {api} from "../../api";

    export default {
        name: "RegisterForm",
        data: () => ({
            stepCount: 1,
            loading: false,
            step1_valid: false,
            step2_valid: false,

            roles: [
                'Administrator',
                'District Officer',
                'District Secretariat',
                'Divisional Officer',
                'Divisional Secretariat'
            ],

            userData: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                role: '',
                telephoneNumber: '',
                email: '',
                office: null
            },

            confirmPassword: '',
            username_errors: [],
            password_errors: [],
            confirm_password_errors: []
        }),
        methods: {
            submitStep1() {
                if (this.step1_valid) {
                    this.stepCount = 2
                }
            },
            async submitStep2() {
                if (!this.step1_valid) {
                    return
                }
                this.loading = true
                const [_, status] = await api.user.register(this.userData)
                if (status.code !== 200) {
                    console.log('Registration Failed')
                    return
                }

                this.loading = false
                this.stepCount = 3
            }
        },
        computed: {
            divisions() {
                return this.$store.state.utils.divisions
            }
        },
        watch: {
            'userData.username': async function () {
                if (this.userData.username.length < 6) {
                    this.username_errors = ['Username must be at least 6 character long']
                    return;
                }

                const [res, status] = await api.user.checkUsername(this.userData.username)
                if (status.code !== 200 || res !== false) {
                    this.username_errors = ['Username is taken']
                    return;
                }

                this.username_errors = []
            },

            'userData.password': async function () {
                if (this.userData.password.length < 6) {
                    this.password_errors = ['Password must be at least 6 character long']
                    return;
                }

                if (this.confirmPassword !== this.userData.password) {
                    this.confirm_password_errors = [`Password doesn't match`]
                }

                this.password_errors = []
                this.confirm_password_errors = []
            },

            'confirmPassword': async function () {
                if (this.confirmPassword !== this.userData.password) {
                    this.confirm_password_errors = [`Password doesn't match`]
                    return;
                }
                this.confirm_password_errors = []
            }
        }
    }
</script>

<style scoped>
</style>