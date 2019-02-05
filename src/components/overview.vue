<template>
  <div>
    <br v-for="index in 5" :key="index">
    <v-container grid-list-md fluid align-content-end justify-end>
      <v-layout wrap row align-space-around justify-space-around fill-height>
        <v-flex xs4>
          <v-card ripple elevation="4" flat tile>
            <GChart type="PieChart" :data="chartData" :options="chartOptions"/>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card ripple elevation="4" flat tile>
            <GChart type="PieChart" :data="barChartData" :options="chartOptions1"/>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card ripple elevation="4" flat tile>
            <GChart type="ColumnChart" :data="codata" :options="chartOptions2"/>
          </v-card>
        </v-flex>
        
         
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'overview',
  components: {
  },
  data () {
    return {
      chartData: [
        ['Step', 'Student Number'],
        ['Step1', 10],
        ['Step2', 20],
        ['Step3', 10],
        ['Step4', 10]
      ],
      codata: [
        ['Status', 'N'],
        ['Active', 10],
        ['Running', 20],
        ['Done', 10],
        ['Error', 10]
      ],
      chartOptions: {
          title: 'Overall Progress',
  
      },
      barChartData: [
        ['Level', 'N'],
        ['Level1', 10,],
        ['Level2', 20, ],
        ['Level3', 10, ],
        ['Level4', 10, ]
      ],
      chartOptions1: {
          title: 'Error Statistics',
          pieHole: 0.4
      },
      chartOptions2: {
          title: 'Student Status',
      },
    }
  },
  methods: {
  }
}
</script>
