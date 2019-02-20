<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right fixed app>
      <sidebar></sidebar>
    </v-navigation-drawer>
    <v-toolbar dense app>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn  @click="jump2Student" ripple flat value="student">Student</v-btn>
      <v-divider class="mr-2" vertical></v-divider>
      </v-toolbar-items>
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
    jump2Student: function () {
      this.$router.push("/student");
    }
  },
  created: function() {
    this.$router.push("/student");
  }
}
</script>
