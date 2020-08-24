<template>
  <v-app>
    <v-app-bar
            app
            collapse-on-scroll
            flat
            color="primary"
    >
      <HomeButton/>
      <v-spacer/>
      <v-toolbar-title class="ma-5 title"> Galle Public Complaint Management </v-toolbar-title>
      <v-spacer/>
      <LoginButton/>

    </v-app-bar>

  <v-main class="bg">
    <v-container
            fluid
            class="fill-height"
    >
      <v-spacer/>
      <v-row style="justify-content: center"><v-btn color="error"> Make A Complaint </v-btn></v-row>
      <v-spacer/>

    </v-container>
  </v-main>
  </v-app>
</template>

<script>
import HomeButton from "@/components/HomeButton";
import LoginButton from "@/components/LoginButton";

export default {
  name: "Home",
  components: {
    HomeButton,
    LoginButton
  }
};
</script>


<style>


</style>