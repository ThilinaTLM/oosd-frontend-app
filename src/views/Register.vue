<template>
    <v-app>
        <v-main class="bg">
            <v-container
                    fluid
                    class="fill-height"
                    style="padding-left: 25%; padding-right: 25%"
            >
                <RegisterForm/>
            </v-container>

        </v-main>
        <PopAlert/>

    </v-app>
</template>

<script>
    import RegisterForm from "../components/user/RegisterForm";
    import PopAlert from "../components/PopAlert";

    export default {
        name: "Register",
        components: {
            PopAlert,
            RegisterForm
        }
    }
</script>

<style scoped>
</style>