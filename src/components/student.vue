<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex 2>
          <v-btn large outline flat dark color="indigo">Sort by Progress</v-btn>
        </v-flex>
        <v-flex 2>
<v-select height="30"
          :items="items"
          solo
          label="Select Student Status"
          single-line
        ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-btn icon @click="changeShowForm('web')"><v-icon>web</v-icon></v-btn>
        <v-btn icon @click="changeShowForm('table')"><v-icon>dehaze</v-icon></v-btn>
      </v-layout>
    </v-container>
    <v-container grid-list-md fluid>
      <v-layout wrap class="mb-5">
          <v-toolbar dense>
            <v-text-field hide-details prepend-icon="search" single-line></v-text-field>
          </v-toolbar>
      </v-layout>
      <v-data-table v-if="showForm == 'table'" :headers="headers" :items="desserts" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>   
      <v-layout wrap row v-if="showForm=='web'">
        <v-flex xs3>
          <v-card>
            <v-card-text>
              <span class="subheading">Tony</span>
             
              <v-btn color="blue" dark small fab absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="bg.png"></v-img>   
            <v-card-actions>
              
              <v-btn icon><v-icon>touch_app</v-icon></v-btn>
              <v-btn icon><v-icon>thumb_up</v-icon></v-btn>
              <v-btn icon><v-icon>add_alert</v-icon></v-btn>
              <v-btn icon><v-icon>live_help</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-icon>done</v-icon>
              <v-progress-circular :value="100" :size="20"></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <v-card-text>
              <span class="subheading">Amy</span>
             
              <v-btn @click="chat" color="blue" fab dark small absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="bg.png"></v-img>   
            <v-card-actions>
              <v-btn icon><v-icon>touch_app</v-icon></v-btn>
              <v-btn icon><v-icon>thumb_up</v-icon></v-btn>
              <v-btn icon><v-icon>add_alert</v-icon></v-btn>
              <v-btn icon @click="jumphelp"><v-icon>live_help</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-icon>error</v-icon>
              <v-progress-circular :value="20" :size="20"></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <v-card-text>
              <span class="subheading">Sam</span>
             
              <v-btn color="blue" dark fab small absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="bg.png"></v-img>   
            <v-card-actions>
              <v-btn icon><v-icon>touch_app</v-icon></v-btn>
              <v-btn icon><v-icon>thumb_up</v-icon></v-btn>
              <v-btn icon><v-icon>add_alert</v-icon></v-btn>
                            <v-btn icon><v-icon>live_help</v-icon></v-btn>

              <v-spacer></v-spacer>
              <v-icon>warning</v-icon>
              <v-progress-circular :value="20" :size="20"></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <v-card-text>
              <span class="subheading">John</span>
             
              <v-btn color="blue" dark small fab absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="bg.png"></v-img>   
            <v-card-actions>
              <v-btn icon><v-icon>touch_app</v-icon></v-btn>
              <v-btn icon><v-icon>thumb_up</v-icon></v-btn>
              <v-btn icon><v-icon>add_alert</v-icon></v-btn>
                            <v-btn icon><v-icon>live_help</v-icon></v-btn>

              <v-spacer></v-spacer>
              <v-icon>pause_presentation</v-icon>
              <v-progress-circular :value="20" :size="20"></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>  
    </v-container>
  </div>
</template>
<script>

export default {
  name: 'student',
  components: {
  },
  data () {
    return {
      showForm: "web",
      items: ['Running', 'Warning', 'Error', 'Done'],
      headers: [
        {
          text: 'Name',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Status', value: 'calories', align:"right"},
        { text: 'Progress', value: 'fat',  align:"right"},
        
      ],
      desserts: [
        {
          name: 'Amy',
          calories: "Done",
          fat: "100%"
        },
        {
          name: 'Tony',
          calories: "Running",
          fat: "29%"
        },
        {
          name: 'Sam',
          calories: "Out of Mind!",
          fat: "40%"
        },
        {
          name: 'John',
          calories: "Error!",
          fat: "50%"
          
        },
        {
          name: "Cindy",
          calories: "Warning!",
          fat: "69%"
        }
        
      ]
    }
  },
  methods: {
    changeShowForm(method) {
      this.showForm = method;
    },
    jumphelp: function() {
      this.$router.push('/singleT');
    },
    chat: function() {
      this.$router.push('/sc');
    }
  }
}
</script>
