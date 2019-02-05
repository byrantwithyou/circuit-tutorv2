<template>
  <div>
    <v-container grid-list-lg>
      <v-layout class="mt-5 ml-5" row wrap>
      <v-flex xs6>
          <v-card>
            <v-card-text>
              <span class="subheading">Amy</span>
             
              <v-btn color="blue" dark small absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="bg.png"></v-img>   
            <v-card-actions>
              <v-btn icon><v-icon>touch_app</v-icon></v-btn>
              <v-btn icon><v-icon>thumb_up</v-icon></v-btn>
              <v-btn icon><v-icon>add_alert</v-icon></v-btn>
              <v-btn icon @click="toggleHelp"><v-icon>live_help</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-icon>error</v-icon>
              <v-progress-circular :value="20" :size="20"></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex v-if="show" xs6>
          <v-card>
          <v-card-title>
           TA
            <v-spacer></v-spacer>
      <v-text-field
      
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
          <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template slot="items" slot-scope="props">
           <td>
            <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
          </td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
      </v-data-table>
      <v-card-actions>
      <v-spacer></v-spacer>
        <v-btn icon @click="toggleHelp"><v-icon>call_made</v-icon></v-btn>
      </v-card-actions>
          </v-card>
        </v-flex>
         <v-flex v-if="chat" xs6>
          <chat></chat>
        </v-flex>
      </v-layout>  
    </v-container>
  </div>
</template>
<script>
import chat from "@/components/chat";
export default {
  name: 'student',
  components: {
    chat
  },
  data () {
    return {
      show: true,
      chat: false,
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
    toggleHelp: function() {
      this.show = !this.show;
    }
  }
}
</script>
