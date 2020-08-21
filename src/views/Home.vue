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
      <v-btn to="/login" small color="success">LOGIN</v-btn>

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

export default {
  name: "Home",
  components: {
    HomeButton
  }
};
</script>


<style>
  .bg {
    background: rgb(255,193,7);
    background: linear-gradient(180deg, rgba(255,193,7,1) 100px, rgba(255,193,7,0) 700px, rgba(255,255,255,1) 100%);
  }

</style>