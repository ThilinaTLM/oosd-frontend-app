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
                        to="/register"
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
    export default {
        name: "LoginForm",
        data: () => ({
            valid: false,
            isTrying: false,

            username: '',
            password: '',

            snackbar: false,
            snackbarMsg: "",
            snackbarColor: ""
        }),
        methods: {
            async clickLogin() {
                let {username, password} = this
                this.isTrying = true
                const status = await this.$store.dispatch('user/login', {username, password});
                if (status.code === 200) {
                    // this.notify('Login Successful')
                    await this.$router.push('/app')
                } else {
                    this.$store.commit('app/SHOW_MSG', {
                        title: '',
                        msg: 'Incorrect username or password',
                        type: 'ERROR'
                    })
                    // this.notify('Incorrect username or password', 'red')
                }
                this.isTrying = false
            },

            notify(msg, color = "success") {
                this.snackbar = false
                this.snackbarMsg = msg;
                this.snackbarColor = color;
                this.snackbar = true;
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