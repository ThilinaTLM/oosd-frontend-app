<template>
    <v-container
            style="width: 350px; border-radius: 5px; overflow: hidden"
            class="elevation-4 white pa-0">
        <v-toolbar
                dense
                flat
                color="primary"
        >
            <v-toolbar-title class="subtitle-2"> {{title}}</v-toolbar-title>
        </v-toolbar>
        <v-form
                ref="form"
                v-model="valid"
                class="ma-4 pa-4"
                @submit.prevent="$emit('submit', username, password)"
        >
            <v-text-field
                    v-model="username"
                    label="Username"
                    type="text"
                    required
                    dense
                    class="ma-2"
            ></v-text-field>

            <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    dense
                    class="ma-2"
            ></v-text-field>

            <v-row
                    justify="center"
                    class="ma-3"
            >
                <v-btn
                        color="success"
                        class="mr-2"
                        type="submit"
                >
                    Login
                </v-btn>


                <v-btn
                        color="blue"
                        @click="$refs.form.reset()"
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
        })
    }
</script>

<style scoped>
    .text-field {
        font-size: 10pt;
    }
</style>