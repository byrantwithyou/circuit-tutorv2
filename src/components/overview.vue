<template>
  <div>
    <v-container grid-list-md fluid>
      <v-layout wrap row align-start justify-center fill-height>
        <v-flex v-for="n in 6" :key="n" xs4>
          <v-card ripple elevation="4" flat tile>
            <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
          </v-card>
          <v-card-title primary-title>
          <div>
            <h5 class="grey--text headline mb-0">Kangaroo Valley Safari</h5>
          </div>
        </v-card-title>
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
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  },
  methods: {
  }
}
</script>
