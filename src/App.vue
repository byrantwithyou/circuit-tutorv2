<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right fixed app>
    </v-navigation-drawer>
    <v-toolbar dense app>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn outline ripple flat value="overview">Overview</v-btn>
          <v-btn outline ripple flat value="class">Class</v-btn>
      <v-divider class="mr-2" vertical></v-divider>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title>Fritzing</v-toolbar-title>
    </v-toolbar>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer: true,
      nav: "overview"
    }
  },
  methods: {
  }
}
</script>
