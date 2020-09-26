<template>
  <v-app>

  <!-- App bar -->
    <v-app-bar
            app
        
            flat
            color="primary"
    >
      <HomeButton/>
      <v-spacer/>
      <v-toolbar-title class="ma-5 title"> Galle Public Grievance Management </v-toolbar-title>
      <v-spacer/>
      <LoginButton/>

    </v-app-bar>

  <v-main class="bg">
  <!--  Opening Banner  -->
    <v-container
            fluid
            style="height:600px"
            class="fill-height"
    >
      <v-spacer/>
      <v-row style="justify-content: center"><v-btn color="error"> Tell the Grievance </v-btn></v-row>
      <v-spacer/>
    </v-container>

<!-- Stats section -->

  <v-bottom-navigation height="120px" background-color="primary" 
    v-model="bottomNav"
  >

<v-row style="align-content: center">
  <v-col >
       <v-row class="stats values" style="padding:0px; margin:0px"><ProgressIndicator value="100" color="black"/></v-row>
      <v-row class="stats">Registered Users</v-row>
  </v-col>  

   <v-col>
      <v-row class="stats values" style="padding:0px; margin:0px"><ProgressIndicator value="75" color="red" /></v-row>
      <v-row class="stats">In Progress</v-row>
  </v-col> 

   <v-col>
       <v-row class="stats values" style="padding:0px; margin:0px"><ProgressIndicator value="25" color="green"/></v-row>
      <v-row class="stats">Problems Solved</v-row>
  </v-col> 
  </v-row> 

  </v-bottom-navigation>



<!-- How to make a complaint to galle DS  -->
<section id="container-fluid" class="section">
    <v-container style="height:500px">
       <v-row style="align-content:center">
         <v-col>
           <v-row class="content" style="font-weight:bold">Tell the Grievance to Galle District Secretariat</v-row>
                     <v-row class="content">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur imperdiet arcu, ullamcorper commodo diam. Etiam a leo ante. Integer quis semper sapien, sit amet auctor nisl. Sed non ex sit amet ante interdum vulputate ut at ipsum. Fusce at sapien non enim porta dapibus. Curabitur tempus, libero sit amet interdum dignissim, orci lorem tincidunt mauris, sit amet ultrices risus neque at sapien. Vestibulum suscipit iaculis neque, a molestie ligula. Nullam justo erat, suscipit non accumsan id, iaculis at justo. Fusce tristique ligula elementum tellus dictum scelerisque. Sed a erat sem. Etiam in dui sit amet nibh pretium posuere vel sit amet libero. Nullam imperdiet id lorem id pellentesque. Sed ac rhoncus leo, nec ullamcorper diam. Aliquam facilisis hendrerit odio, a imperdiet tortor gravida iaculis. Mauris in justo augue. Aliquam finibus sed mauris ut fermentum.
           </v-row>
         </v-col>
         <v-col>
           <v-row class="content">sadsada</v-row>
         </v-col>
       </v-row>
    </v-container>
</section>


<!--  How to make a complaint to your divisional secretariat -->
<section id="container-fluid" class="section">
    <v-container style="height:500px;" >
       <v-row style="align-content:center">
         <v-col>
           <v-row class="content">
             <img src="" alt="">
           </v-row>
         </v-col>
         <v-col>
           <v-row class="content" style="font-weight:bold">Tell the Grievance to Your Divisional Secretariat</v-row>
           <v-spacer/>
           <v-row class="content">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur imperdiet arcu, ullamcorper commodo diam. Etiam a leo ante. Integer quis semper sapien, sit amet auctor nisl. Sed non ex sit amet ante interdum vulputate ut at ipsum. Fusce at sapien non enim porta dapibus. Curabitur tempus, libero sit amet interdum dignissim, orci lorem tincidunt mauris, sit amet ultrices risus neque at sapien. Vestibulum suscipit iaculis neque, a molestie ligula. Nullam justo erat, suscipit non accumsan id, iaculis at justo. Fusce tristique ligula elementum tellus dictum scelerisque. Sed a erat sem. Etiam in dui sit amet nibh pretium posuere vel sit amet libero. Nullam imperdiet id lorem id pellentesque. Sed ac rhoncus leo, nec ullamcorper diam. Aliquam facilisis hendrerit odio, a imperdiet tortor gravida iaculis. Mauris in justo augue. Aliquam finibus sed mauris ut fermentum.
           </v-row>
         </v-col>
       </v-row>
    </v-container>
    </section>
  </v-main>

<v-divider></v-divider>

<!--  Footer   -->

<v-footer padless color="primary">
  <FooterCard/>
</v-footer>
  
  </v-app>
</template>

<script>
import HomeButton from "@/components/HomeButton";
import LoginButton from "@/components/LoginButton";
import FooterCard from "@/components//FooterCard";
import ProgressIndicator from "@/components/ProgressIndicator";

export default {
  name: "Home",
  components: {
    HomeButton,
    LoginButton,
    FooterCard,
    ProgressIndicator
    
  },
   
  
};
</script>

<style scoped>

.content{
  justify-content: center;
}

.section{
  background-color: rgba(255,193,7,0.5) 
}


.stats{
    justify-content: center;
}
    

.values{
    font-size:2em;
}

</style>