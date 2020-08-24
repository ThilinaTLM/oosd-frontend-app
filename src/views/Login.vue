<template>
  <v-app>
    <v-app-bar
            app
            collapse
            flat
            color="primary"
    >
      <HomeButton/>
    </v-app-bar>

    <v-main class="bg">
      <v-container
              fluid
              class="fill-height"
      >
        <v-spacer/>
        <LoginForm @submit="onSubmit" title="User Login"/>
        <v-spacer/>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue";
  import HomeButton from "@/components/HomeButton";
  import Home from "@/views/Home";
  import router from "@/router";

  export default {
    name: 'Login',
    components: {
      Home,
      LoginForm,
      HomeButton
    },
    methods: {
      onSubmit(username, password) {
        if (username === "thilina" && password === "12345") {
          router.push('/dashboard')
        }
      }
    }
  }
</script>

<style>
    html {
        overflow-y: hidden;
    }
</style>