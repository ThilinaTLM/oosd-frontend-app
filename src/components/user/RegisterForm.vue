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
                    <v-form v-model="valid">
                        <v-text-field
                                prepend-icon="mdi-account-circle"
                                label="Username"
                                class="ma-1"
                                type="text"
                                required
                                v-model="userData.username"
                                :rules="rules.username"
                                :error-messages="errors"
                        ></v-text-field>

                        <v-text-field
                                prepend-icon="mdi-lock"
                                label="Password"
                                type="password"
                                class="ma-1"
                                required
                                v-model="userData.password"
                                :rules="rules.password"
                        ></v-text-field>

                        <v-text-field
                                prepend-icon="mdi-lock"
                                label="Confirm Password"
                                type="password"
                                class="ma-1"
                                required
                                v-model="confirmPassword"
                                :rules="rules.confirmPassword"
                        ></v-text-field>

                        <v-btn
                                color="success"
                                class="ma-2"
                                type="submit"
                                @click="checkCredential"
                                :loading="loading"
                                :disabled="!valid"
                        >
                            Continue
                        </v-btn>

                        <v-btn
                                text
                                class="ma-2"
                        >
                            Cancel
                        </v-btn>
                    </v-form>
                </v-stepper-content>

                <v-stepper-content step="2" class="pa-10">

                    <v-row>
                        <v-col>
                            <v-text-field
                                    prepend-icon="mdi-rename-box"
                                    label="First Name"
                                    type="text"
                                    required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                    prepend-icon="mdi-rename-box"
                                    label="Last Name"
                                    type="text"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-text-field
                            prepend-icon="mdi-email"
                            label="Email"
                            type="text"
                    ></v-text-field>

                    <v-text-field
                            prepend-icon="mdi-phone"
                            label="Telephone"
                            type="text"
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
                            ></v-select>
                        </v-col>
                    </v-row>


                    <v-btn
                            color="success"
                            class="ma-2"
                            @click="stepCount = 3"
                    >
                        Register
                    </v-btn>

                    <v-btn
                            text
                            class="ma-2"
                    >
                        Cancel
                    </v-btn>
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
                                @click="stepCount = 1"
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
            step1_valid: true,
            step2_valid: true,

            roles: [
                'Administrator',
                'District Officer',
                'District Secretariat',
                'Divisional Officer',
                'Divisional Secretariat'
            ],

            divisions: [
                'Galle'
            ],

            userData: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                role: '',
                telephoneNumber: '',
                email: ''
            },
            confirmPassword: '',

            rules: {
                username: [],
                password: [p => p.length > 6 || 'must contains at least 6 characters'],
                confirmPassword: [p => (p === this.userData.password) || "confirmation doesn't match"]
            },

            username_errors: []
        }),
        methods: {
            submitStep1() {
                if (this.step1_valid) {
                    this.stepCount = 2
                }
            },
            submitStep2() {
                if (this.step1_valid) {
                    this.stepCount = 2
                }
            }
        },
        watch: {
            'userData.username': async function () {
                const [res, status] = await api.user.checkUsername(this.userData.username)
                if (status.code === 200 && res === false) {
                    this.errors = []
                } else {
                    this.errors = ['Username in use by someone']
                }
            }
        }
    }
</script>

<style scoped>
</style>