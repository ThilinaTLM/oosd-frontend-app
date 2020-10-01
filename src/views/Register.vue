<template>
    <v-app>
        <v-main class="bg2">
            <v-container
                    fluid
                    class="fill-height"
                    style="padding-left: 25%; padding-right: 25%"
            >
                <RegisterForm/>
            </v-container>

        </v-main>
        <PopAlert />
        <HomeButton />

    </v-app>
</template>

<script>
    import RegisterForm from "../components/user/RegisterForm";
    import PopAlert from "../components/PopAlert";
    import HomeButton from "../components/home/HomeButton";

    export default {
        name: "Register",
        components: {
            HomeButton,
            PopAlert,
            RegisterForm
        }
    }
</script>

<style scoped>
</style>