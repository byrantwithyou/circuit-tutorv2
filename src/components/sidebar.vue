<template>
<v-layout wrap row>

    <v-flex 12>
    <v-card>
      <v-toolbar dense> 
        <v-toolbar-title>Behavior List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="toggleAddDialog" color="orange" dark icon><v-icon>add</v-icon></v-btn>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in errorItems">
          <v-list-tile :key="index" @click="edit" avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click="edit"><v-icon>edit</v-icon></v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
    <v-dialog v-model="editDialog">
      <v-card>
        <v-card-title>
          <span class="headline">Authoring Tool</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field placeholder="Gauge the resister" label="Behavior Name*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" hint="Add your description here"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  :items="['1', '2', '3', '4']"
                  label="Level*" 
                  v-model="levelDefault"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="editFalse">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="addDialog">
      <v-card>
        <v-card-title>
          <span class="headline">Authoring Tool</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Behavior Name*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" hint="Add your description here"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  :items="['1', '2', '3', '4']"
                  label="Level*" 
                  v-model="levelDefault"
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-card>
                  <v-card-title>
                    Good Example Snapshot
                  </v-card-title>
                  <v-card-text>
                    <input type="file">
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card>
                  <v-card-title>Bad Behavior Snapshot</v-card-title>
                  <v-card-text>
                    <input type="file">
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="toggleAddDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</v-layout>
  
</template>

<script>
export default {
  name: 'sidebar',
  components: {
  },
  data () {
    return {
      addDialog: false,
      editDialog: false,
      levelDefault: "3",
      items: [
        { action: '2 min', title: 'Amy', subtitle: "I need peer help" },
        { action: '15 min', title: 'Tony', subtitle: "How to connect the resistor?" },
        { action: '30 min', title: 'Sam', subtitle: 'What is the negative side of a LED?' },
      ],
      errorItems: [
        { action: '2 min', title: 'Gauge the resister', subtitle: "Drag A Wrong Component!", headline:"Level 3" },
        { action: '15 min', title: 'Avoid Crossing Wires', subtitle: "Avoid Crossing Wires!", headline: "Level 2"},
        { action: '30 min', title: 'Color your circuit', subtitle: 'Wrong Compon', headline: "Level 1" },
      ],
      
    }
  },
  methods: {
    jump2Student: function() {
      this.$router.push("/single");
    },
    be: function() {

    },
    edit: function() {
      this.editDialog = true;
    },
    editFalse: function() {
      this.editDialog = false;
    },
    toggleAddDialog: function() {
      this.addDialog = !this.addDialog;
    }
  }
}
</script>
