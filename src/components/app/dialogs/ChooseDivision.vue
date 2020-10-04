<template>
  <DialogBox :show="show" @submit="choose" @cancel="$emit('cancel')">
    <template v-slot:fields>
      <v-select
          v-model="division"
          :items="divisions"
          :rules="[
              d => d.length > 0? true : 'Cannot be empty!'
          ]"
          required
      ></v-select>
    </template>
  </DialogBox>
</template>

<script>
import DialogBox from "./DialogBox";

export default {
  name: "ChooseDivision",
  components: {
    DialogBox
  },
  props: [
    'show',
    'item'
  ],
  data: () => ({
    division: ''
  }),
  computed: {
    divisions() {
      return this.$store.getters["utils/getNameOnly_Divisions"]
    }
  },
  methods: {
    choose() {
      this.$emit('choose', this.division)
    }
  },
  created() {
    this.$store.dispatch('utils/loadDivisions')
  }
}
</script>