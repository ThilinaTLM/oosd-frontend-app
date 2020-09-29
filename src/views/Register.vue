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
        <Popup/>

    </v-app>
</template>

<script>
    import RegisterForm from "../components/user/RegisterForm";
    import Popup from "../components/app/Popup";

    export default {
        name: "Register",
        components: {
            Popup,
            RegisterForm
        }
    }
</script>

<style scoped>
</style>