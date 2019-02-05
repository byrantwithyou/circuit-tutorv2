<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right fixed app>
      <sidebar></sidebar>
    </v-navigation-drawer>
    <v-toolbar dense app>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn icon @click="back"><v-icon>arrow_back</v-icon></v-btn>
          <v-divider vertical></v-divider>
          <v-btn  @click="jump2Home" ripple flat value="overview">Overview</v-btn>
          <v-divider vertical></v-divider>
          <v-btn  @click="jump2Student" ripple flat value="student">Student</v-btn>
      <v-divider class="mr-2" vertical></v-divider>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title>Fritzing</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from "./components/sidebar";
export default {
  name: 'App',
  components: {
    sidebar
  },
  data () {
    return {
      drawer: true,
    }
  },
  methods: {
    jump2Home: function() {
      this.$router.push("/");
    },
    jump2Student: function () {
      this.$router.push("/student");
    },
    back: function() {
      this.$router.go(-1);
    }
  },
  created: function() {
    this.$router.push("/");
  }
}
</script>
