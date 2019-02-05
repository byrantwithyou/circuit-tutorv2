<template>
<v-layout wrap row>
  <v-flex 12>
    <v-card>
      <v-toolbar dense color="blue" dark> 
        <v-toolbar-title>Question</v-toolbar-title>
        <v-icon>question_answer</v-icon>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>sort</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list dense>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" avatar ripple @click="jump2Student">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
              <v-icon color="grey lighten-1">chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
    <v-flex 12>
    <v-card>
      <v-toolbar dense color="pink" dark> 
        <v-toolbar-title>Error</v-toolbar-title>
        <v-icon>error</v-icon>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>sort</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in errorItems">
          <v-list-tile :key="index" avatar ripple @click="jump2Student">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
              <v-icon color="grey lighten-1">chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
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
      items: [
        { action: '2 min', title: 'Amy', subtitle: "I need peer help" },
        { action: '15 min', title: 'Tony', subtitle: "How to connect the resistor?" },
        { action: '30 min', title: 'Sam', subtitle: 'What is the negative side of a LED?' },
      ],
      errorItems: [
        { action: '2 min', title: 'Amy', subtitle: "Drag A Wrong Component!", headline:"Level 1" },
        { action: '15 min', title: 'Tony', subtitle: "The negative side is wrong!", headline: "Level 2"},
        { action: '30 min', title: 'Sam', subtitle: 'Wrong Component!', headline: "Level 3" },
      ],
      
    }
  },
  methods: {
    jump2Student: function() {
      this.$router.push("/single");
    }
  }
}
</script>
