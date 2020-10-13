<template>
  <v-menu
          transition="slide-y-transition"
          offset-x
          rounded
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
              icon
              small
              v-bind="attrs"
              v-on="on"
      >
        <v-icon>mdi-arrow-right-circle</v-icon>
      </v-btn>
    </template>

    <slot name="actions" style="display: grid; align-items: center" />

  </v-menu>
</template>

<script>
export default {
    name: "ActionMenu",
    props: [
        'actions'
    ]
}
</script>

<style scoped>

</style>