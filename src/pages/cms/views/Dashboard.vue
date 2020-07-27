<template>   
<v-container fluid style="padding:0px">
    <v-row no-gutters>

      <v-col
        cols="3" 
      >
        <v-container class="allcom">
            <v-col>
              <v-container>
                <v-col >
                  <v-row class="centeralign">
                     <v-avatar size="150px">
                        <img
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                           alt="John"
                           >
                         </v-avatar>
                  </v-row>
                  
                  <v-row class="centeralign">
                    Name
                  </v-row>
                  <v-row class="centeralign">
                    Position
                  </v-row>
                </v-col>
              </v-container>

              <v-spacer style="height: 25px"
             > </v-spacer>

              <v-container>

                  <v-tabs 
      v-model="tab"
     
      class="elevation-2"
      dark
      :centered="centered"
      :grow="grow"
      :vertical="vertical"
      :right="right"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      :icons-and-text="icons"
    >
      <v-tabs-slider></v-tabs-slider>

       <v-tab href="#tab1">Tab 1 </v-tab>
       <v-tab href="#tab2">Tab 2 </v-tab>
                  </v-tabs>
              </v-container>
            </v-col>
        </v-container>
      </v-col>


      <v-col
        cols="9" 
      >
        <v-container style="background-color: rgba(248, 192, 49,0.25) !important;">
          <v-tabs>
             <v-tabs-items>
            <v-tab-item key="tab1">
              <div style="color:black">dfgfdgfdgfgd</div>
            </v-tab-item>
            <v-tab-item key="tab2">
                dfgfdgfdgfgd
            </v-tab-item>
            </v-tabs-items>
            </v-tabs>    
                  
        </v-container>
      </v-col>

      

    </v-row>
    </v-container>
</template>

<script>
import Vue from 'vue';


export default {
    name: 'Dashboard',
  components: {
   
    
  },
  data(){
    return{
      tab: null,
        icons: false,
        centered: false,
        grow: false,
        vertical: true,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 4,
    }
  }
}
</script>

<style scoped>

.allcom{
    background-color: rgba(248, 192, 49);
    height: 100%; 
}

.centeralign{
  display:flex; 
  justify-content:space-around
}

</style>