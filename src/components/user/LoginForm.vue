<template>
    <div>
        <v-container
                class="login-form-container elevation-4  pa-0">
            <v-form
                    ref="form"
                    v-model="valid"
                    class="ma-4 pa-4"
                    @submit.prevent="clickLogin"
            >
                <v-text-field
                        prepend-icon="mdi-account-circle"
                        v-model="username"
                        label="Username"
                        class="ma-1"
                        type="text"
                        required
                ></v-text-field>

                <v-text-field
                        prepend-icon="mdi-lock"
                        v-model="password"
                        label="Password"
                        type="password"
                        class="ma-1"
                        required
                ></v-text-field>


                <v-btn
                        dark
                        width="100%"
                        type="submit"
                        class="ma-2"

                        :loading="isTrying"
                >
                    LOGIN
                </v-btn>
                <v-btn
                        dark
                        color="success"
                        width="100%"
                        class="ma-2"
                >
                    REGISTER
                </v-btn>

            </v-form>
        </v-container>
        <v-snackbar
                dark
                :color="snackbarColor"
                right
                bottom
                timeout="5000"
                v-model="snackbar"
        >
            {{snackbarMsg}}
            <template v-slot:action="{ attrs }">
                <v-btn
                        dark
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'

    export default {
        name: "LoginForm",
        data: () => ({
            valid: false,
            username: '',
            password: '',

            snackbar: false,
            snackbarMsg: "Welcome!",
            snackbarColor: "success"
        }),
        computed: {
            ...mapState({
                authState: (state) => state.user.authState
            }),
            ...mapGetters('user', ['isTrying'])
        },
        methods: {
            clickLogin() {
                let {username, password} = this
                this.$store.dispatch('user/login', {username, password});
                this.$emit('logged-in')
            },

            notify(msg, color = "success") {
                this.snackbar = false
                this.snackbarMsg = msg;
                this.snackbarColor = color;
                this.snackbar = true;
            }
        },
        watch: {
            authState: function () {
                switch (this.authState) {
                    case "FAILED":
                        this.notify('Incorrect username or password', 'error');
                        break;
                    case "PASS":
                        this.notify('Successfully Logged In');
                        this.$router.push('/app')
                }
            }
        }
    }
</script>

<style>
    .login-form-container {
        background-color: #eeeeee;
        width: 350px;
        border-radius: 2px;
        overflow: hidden
    }
</style>