<template>   
<v-container fluid style="padding:0px">
    <v-row no-gutters>

      <v-col
        cols="3" 
      >
       dsfdsfdsf
       sdsd
      </v-col>

      <v-col
        cols="9" 
      >
        <v-container style="padding:0px">
            
            <v-container style="padding:20px 50px">
                <v-col>
                    <v-row>
                        <v-col cols="3">
                        <v-text>Transit Organization</v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-select 
                            :items="items"
                             label="Transit Organization"
                            outlined
                        ></v-select>
                        </v-col>
                    </v-row>
                    <v-row style="align">
                        <v-col cols="3">
                        <v-text>Origin Organization</v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-select
                            :items="items"
                             label="Origin Organization"
                            outlined
                        ></v-select>
                        </v-col>
                    </v-row>

                    <v-row style="align">
                         <v-col cols="3">
                        <v-text>Assign Organization</v-text>
                         </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                         <v-select
                            :items="items"
                            label="Assign Organization"
                             outlined
                        ></v-select>
                         </v-col>

                    </v-row>
                </v-col>
            </v-container>

            <v-container class="latterpart" style="padding:20px 50px">
                <v-col>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Reference Number
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Reference Number"
                            outlined
                        ></v-text-field> 
                        </v-col>                     
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Customer Name
                        </v-text
                        ></v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Customer Name"
                            outlined
                        ></v-text-field>                      
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Address
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Address"
                            outlined
                        ></v-text-field> 
                        </v-col>                     
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Contact Number
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Contact number"
                            outlined
                        ></v-text-field> 
                        </v-col>                     
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Email 
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Email"
                            outlined
                        ></v-text-field>   
                        </v-col>                   
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Title
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-text-field
                            label="Title"
                            outlined
                        ></v-text-field>   
                        </v-col>                   
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Description
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-textarea
                            label="Description"
                            outlined
                        ></v-textarea>    
                        </v-col>                  
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                        <v-text>
                            Upload Evidences
                        </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                        <v-file-input
                        label="Upload Instances"
                        >
                        </v-file-input>  
                        </v-col>                  
                    </v-row>

                    <v-row style="display: flex; justify-content: flex-end ">
                         <v-btn class="mr-4" style="background-color:#F8C031; width:20%" @click="submit">Submit</v-btn>
                    </v-row>

                </v-col>
            </v-container>

        </v-container>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
import Vue from 'vue';


export default {
    name: 'SystemComplaint',
  components: {
   
    
  },
}
</script>

<style scoped>

.latterpart{
    background-color: rgba(248, 192, 49, 0.2);
}

</style>