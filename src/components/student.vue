<template>
  <div>
    <v-container grid-list-md fluid>
     <br>
     <br>
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
              <span class="subheading">Sam--Pending!!</span>
             
              <v-btn @click="chat"  dark fab small absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="step2.jpg"></v-img>   
            <v-card-actions height="20px">
              <v-spacer></v-spacer>
              <v-btn icon><v-icon>check</v-icon></v-btn>
              <v-btn icon><v-icon>close</v-icon></v-btn>            
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <v-card-text>
              <span class="subheading">John--Give FeedBack</span>
             
              <v-btn @click="chat"  dark small fab absolute top right>
                <v-icon>chat</v-icon>
              </v-btn>              
            </v-card-text>
            <v-img src="step2.jpg"></v-img>   
            <v-card-actions>
              <v-btn icon><v-icon>thumb_up</v-icon></v-btn>
              <v-btn icon><v-icon>thumb_down</v-icon></v-btn>

            </v-card-actions>
          </v-card>
        </v-flex>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title>
              Send Text Message
            </v-card-title>
            <v-card-text>
              <v-text-field
          v-model="comment"
          box
          color="deep-purple"
          label="Comment"
          style="min-height: 96px"
        ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="closeDialog" flat outline>Send</v-btn>
            </v-card-actions>
          </v-card>          
        </v-dialog>
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
      dialog: false,
      comment: "",
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
      this.dialog = true;
    },
    closeDialog: function() {
      this.dialog = false;
    }
  }
}
</script>
