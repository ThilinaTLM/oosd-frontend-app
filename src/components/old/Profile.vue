<template>
    <v-col style="padding:20px">
              <v-row > 
                   <v-text style="color:black; font-weight:bold; margin:20px auto"> Profile </v-text> 
              </v-row>
              <v-row> 
                   <v-text class="tags"> Full Name </v-text>
                    <v-spacer></v-spacer>
                   <v-text class="credentials"> Thilina Lakshan </v-text> 
              </v-row>
              <v-row> 
                   <v-text class="tags"> NIC </v-text> 
                   <v-spacer></v-spacer>
                   <v-text class="credentials"> 5589632555v </v-text> 
              </v-row>
              <v-row> 
                   <v-text class="tags"> Address </v-text> 
                   <v-spacer></v-spacer>
                   <v-text class="credentials"> 187/B, Temple Rd, Galle </v-text> 
              </v-row>
              <v-row> 
                   <v-text class="tags"> GN Division </v-text> 
                   <v-spacer></v-spacer>
                   <v-text class="credentials"> Baddegama </v-text> 
              </v-row>
              <v-row> 
                   <v-text class="tags"> Divisional Secretariat </v-text> 
                   <v-spacer></v-spacer>
                   <v-text class="credentials">  Baddegama </v-text> 
              </v-row>
          </v-col>
</template>

<script>
import Vue from 'vue';


export default {
    name: 'Profile'
}
</script>


<style scoped>

.credentials{
    color: #707070;
    padding: 5px;
}

.tags{
    color:rgba(112, 112, 112, 0.5);
    padding: 5px;
}

</style>