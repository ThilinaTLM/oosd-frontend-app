<template>
  <v-row style="padding:0; margin:0px">
    <v-spacer />
    <v-btn dark rounded :text="isEnglish" small color="red" @click="sinhalaSelector">English</v-btn>
    <v-btn dark rounded :text="!isEnglish" small color="red" @click="englishSelector">සිංහල</v-btn>

  </v-row>
</template>

<script>
export default {
  name:"LanguageSelector",
  data: () => ({
    isEnglish: true
  }),
  methods:{
    sinhalaSelector() {
      this.$emit('toggle', 'english');
      this.isEnglish = false

},
    englishSelector() {
      this.$emit('toggle', 'sinhala');
      this.isEnglish = true

    }
  }
}
</script>