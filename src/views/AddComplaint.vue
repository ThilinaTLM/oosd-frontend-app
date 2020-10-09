<template>
  <v-app>
    <v-main class="bg2">
      <v-container
          fluid
          class="fill-height"
          style="padding-left: 25%; padding-right: 25%"
      >
        <ComplaintForm />
      </v-container>

    </v-main>

    <HomeButton />

  </v-app>
</template>

<script>


import HomeButton from "../components/home/HomeButton";
import ComplaintForm from "../components/user/ComplaintForm";

export default {
  name: "AddComplaint",
  components: {
    ComplaintForm,
    HomeButton,
  }
}
</script>

<style scoped>
</style>