<template>
  <div class="home">
    <h3>CMS - OOSD</h3>
    <br>
    <v-btn to="/login" small class="ma-4">Login</v-btn>
    <v-btn to="/dashboard" small class="ma-4">Dashboard</v-btn>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", EmptyLayout);
  }
};
</script>
