<template>
  <div class="grid-container seventh-page">
    <v-card class="chart-card chart-card-resource-first">
      <v-card-title class="card-header">Земли, га</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Общая площадь 305,2</p>
        </div>
        <vertical-stack-bars height="100%" :data-source="verticalChartData1" />  
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-resource-second">
      <v-card-title class="card-header">Земли запаса и спецземфонда, га</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Общая площадь 35,2</p>
        </div>
       <vertical-stack-bars height="100%" :data-source="verticalChartData2" />  
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-resource-third">
      <v-card-title class="card-header">Земли сельхозназначения, га</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Общая площадь 35,2</p>
        </div>
       <vertical-stack-bars height="100%" :data-source="verticalChartData3" />
      </v-card-text>
    </v-card>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-resource-fourth">
        <v-card-title class="card-header">Пашни, га</v-card-title>
        <v-card-text class="card-content">
          <div class="ring-charts-container">
            <div
              v-for="(item, index) in charts"
              :key="index"
              class="ring-chart-block"
              >
              <div class="chart-label">{{ item.label }}</div>
              <div class="chart-km">{{ item.km }}</div>
              <ringprocent-chart height="100%" :data-source="getChartData(item)"
              />
            </div>
          </div>
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-resource-fifth">
        <v-card-title class="card-header">Пастбища</v-card-title>
        <v-card-text class="card-content">
          <ring-charts height="100%" operation="sum" :data-source="ringChartData1" />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import RingCharts from '../charts/RingCharts.vue';
import RingprocentChart from '../charts/RingprocentChart.vue';
import VerticalStackBars from '../charts/VerticalStackBars.vue';


export default {
  name: 'SeventhSlide',
  components: {
    RingCharts,
    VerticalStackBars,
    RingprocentChart
  },
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      selectedChart: 'chart1',
      verticalChartData1: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: '',
              data: [100, 100, 35.2, 20, 50],
            },
          ],
          categories: ['СНП', 'Сельхозназначения', 'Запаса и спецземфонда', 'Прочие', 'Посеяные'],
          colors: ['#597eaa'], 
      },
      verticalChartData2: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: '',
              data: [10, 7.2, 8, 10],
            },
          ],
          categories: ['Пашни', 'Сенокосы', 'Пастбища', 'Прочие'],
          colors: ['#e69138'], 
      },
      verticalChartData3: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: '',
              data: [40, 10, 30, 20],
            },
          ],
          categories: ['Пашни', 'Сенокосы', 'Пастбища', 'Прочие'],
          colors: ['#6aa84f'], 
      },
      charts: [
        { label: 'Орашаемые', km: 30, percent: 75, color: '#45818e' },
      ],
      ringChartData1: {
        colors: ['#a7a7a7', '#e6e6e6'],
        series: [7, 23], 
        categories: ['Посевы кормовых культур', 'Естественные'], 
      },
    };
  },
  methods: {
    getChartData(item) {
      return {
        series: [item.percent],
        categories: ['', ''],
        colors: [item.color],
      };
    },
  },
  computed: {
  },
};
</script>