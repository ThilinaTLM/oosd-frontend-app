<template>
<v-card
    class="flex"
      flat
      tile
      color="primary"
    >
      <v-card-title >
        <a href="http://www.galle.dist.gov.lk/index.php/en/">
          <v-btn color="transparent" to="">Visit Galle District Secretariat</v-btn></a>
        <v-spacer></v-spacer>

        <a 
        v-for="icon in icons"
          :key="icon"
          :href="icon.url"
        >
        <v-btn
          class="mx-4"
          dark
          icon
          
        >
       
          <v-icon size="32px">{{ icon.name }}</v-icon>
        </v-btn>
        </a>
      </v-card-title>

      <v-card-text class="py-2 white--text">
       Copyright © {{ new Date().getFullYear() }} Galle District Public Grievance Management. All Rights Reserved.
      </v-card-text>
    </v-card>
 
</template>

<script>
  export default {
    data: () => ({
      icons: [
          {
        name:'mdi-facebook',
        url: 'https://www.facebook.com/Galle.DS/'
        },
        {
        name:'mdi-twitter',
        url:'https://twitter.com/DistrictGalle'
        }
      ],
    }),
  }
</script>

<style scoped>

</style>