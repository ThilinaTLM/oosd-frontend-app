<template>
  <v-container class="elevation-1">
    <v-row>
      <v-col cols="14">
        <v-card class="elevation-3">

        <v-card-title class="pa-10" >
          <v-icon x-large color="black" class="pr-5"> mdi-email-check-outline </v-icon>
          {{ Subject }}

            <v-spacer></v-spacer>

            <v-chip
                close-icon="mdi-delete"
                color="orange"
            ><b> {{ referencenumber }} </b></v-chip>

        </v-card-title>
          <v-divider ></v-divider>
          <v-card-text class="pa-10">
            {{ Description }}
          </v-card-text>
          <v-divider></v-divider>

          <!-- Complaint Log Section  -->

          <v-expansion-panels
              v-model="panel"

              multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header><v-card-title class="pa-5"> <v-icon color="black" class="pr-5"> mdi-calendar-check </v-icon> Activity Log</v-card-title>
              </v-expansion-panel-header>
              <v-expansion-panel-content>

                <v-timeline class="pa-10 mt-5">
                  <v-timeline-item
                      v-for="(log, i) in LogDetails"
                      :key="i"
                      small
                  >
                    <template v-slot:opposite>
        <span
            :class="`headline font-weight-bold`"
            v-text="log.date"
        ></span>
                    </template>
                    <div class="py-4">
                      <h2 :class="`headline font-weight-light mb-4 `">
                        {{ log.title }}
                      </h2>
                      <div>
                        {{ log.description }}

                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>

              </v-expansion-panel-content>
            </v-expansion-panel>

          </v-expansion-panels>



          <!-- End of Complaint Log Section  -->

        </v-card>
      </v-col>
      <v-col cols="4" >
        <v-card class="pa-0 elevation-3 pa-3">

          <v-card-title> <v-icon color="black" class="pr-3"> mdi-account </v-icon>  Customer Details</v-card-title>

          <v-divider></v-divider>

          <v-row>
            <v-col> <v-chip small label class="chip" >  Name  </v-chip> </v-col>
            <v-col > <b> {{ name }} </b>  </v-col>
          </v-row>

          <v-row>
            <v-col> <v-chip small label class="chip">  NIC  </v-chip> </v-col>
            <v-col> <b> {{ NIC }} </b>  </v-col>
          </v-row>

          <v-row>
            <v-col> <v-chip small label class="chip">  Telephone  </v-chip> </v-col>
            <v-col> <b> {{ Telephone }} </b>  </v-col>
          </v-row>

          <v-row>
            <v-col> <v-chip small label class="chip">  Email  </v-chip> </v-col>
            <v-col> <b> {{ Email }} </b>  </v-col>
          </v-row>

          <v-row>
            <v-col> <v-chip small label class="chip">  Address  </v-chip> </v-col>
            <v-col> <b> {{ Address }} </b>  </v-col>
          </v-row>

          <v-row>
            <v-col> <v-chip small label class="chip">  Division  </v-chip> </v-col>
            <v-col> <b> {{ Division }} </b>  </v-col>
          </v-row>

          <v-row>
            <v-col> <v-chip small label class="chip">  GN_Division  </v-chip> </v-col>
            <v-col> <b> {{ GN_Division }} </b>  </v-col>
          </v-row>



          <v-divider class="pt-3"></v-divider>

          <v-row style="justify-content:center" class="pa-10" >

          <v-img max-width="30%" src="@/assets/pdf-logo.png">

          </v-img>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "ViewComplaint",
  data(){
    return{
      referencenumber: "#123456",
      name:"Pasan Madushan",
      NIC:"983123545v",
      Telephone:"05467564532",
      Email:"psdsda@dgfds.com",
      Address:"323,sfdg,fdg",
      Division: "SAdsdasd",
      GN_Division:"sadasdsad",

      Subject:'road repair near galle rd baddegama.',
      Description: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae' +
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae',
      LogDetails: [
        {
          date: '1960',
          title:'title ',
          description:"dasdsadkjsdsajkdhsadsad"
        },
        {
          date: '1960',
          title:'title ',
          description:"dasdsadkjsdsajkdhsadsad"
        },
        {
          date: '1960',
          title:'title ',
          description:"dasdsadkjsdsajkdhsadsad"
        },
        {
          date: '1960',
          title:'title ',
          description:"dasdsadkjsdsajkdhsadsad"
        },
        {
          date: '1960',
          title:'title ',
          description:"dasdsadkjsdsajkdhsadsad"
        },
      ],
      panel: [],

    }
  }
}
</script>

<style scoped>

  .chip{
    width: 80px;
  }
</style>