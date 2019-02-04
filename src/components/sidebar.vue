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
        { action: '15 min', title: 'Ali Connors', subtitle: "I need peer help" },
        { action: '2 hr', title: 'me, Scrott, Jennifer', subtitle: "How to connect the resistor." },
        { action: '6 hr', title: 'Sandra Adams', subtitle: 'I do not know what yo are taling about?' },
        { action: '12 hr', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
        { action: '18hr', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' },
        { action: '18hr', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' },
        { action: '18hr', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' },
      ]
    }
  },
  methods: {
    jump2Student: function() {
    }
  }
}
</script>
