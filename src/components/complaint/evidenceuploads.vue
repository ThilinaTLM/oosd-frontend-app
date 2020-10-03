<template>
<div>
  <v-row>
    <v-col cols="8"
    >
           <v-file-input
          chips
          counter
          multiple
          show-size
          truncate-length="7"
          label="Uploads"
          style="padding:2% 5%"
      ></v-file-input>
    </v-col>
    <v-col cols="3"
           style="display: grid; align-items: center"
          >
      <v-btn rounded>
        <v-icon>
          mdi-upload
        </v-icon>
        Upload
      </v-btn>
    </v-col>

  </v-row>


</div>
</template>

<script>
export default {
name: "evidenceuploads"
}
</script>

<style scoped>

</style>