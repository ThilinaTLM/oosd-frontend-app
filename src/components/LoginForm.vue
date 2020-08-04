<template>
    <v-container
            style="width: 350px; border-radius: 5px; overflow: hidden"
            class="elevation-4 white pa-0">
        <v-toolbar
                dense
                flat
                color="primary"
        >
            <v-toolbar-title class="subtitle-2"> {{title}} </v-toolbar-title>
        </v-toolbar>
        <v-form
                ref="form"
                v-model="valid"
                class="ma-4 pa-4"
        >
            <v-text-field
                    v-model="username"
                    label="username"
                    type="text"
                    required
                    outlined
                    dense
                    class="ma-2"
            ></v-text-field>

            <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    required
                    outlined
                    dense
                    class="ma-2"
            ></v-text-field>

            <v-row
                    justify="center"
                    class="ma-2"
            >

            <v-btn
                    rounded
                    color="success"
                    class="mr-4"
                    type="submit"
                    @click="login"
            >
                Login
            </v-btn>


            <v-btn
                    rounded
                    color="blue"
                    @click="reset"
            >
                Reset
            </v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "LoginForm",
        props: [
            'title'
        ],
        data: () => ({
            valid: false,
            username: '',
            password: ''
        }),

        methods: {
            login() {
                console.log("Submit")
                //this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            }
        }
    }
</script>

<style scoped>
</style>