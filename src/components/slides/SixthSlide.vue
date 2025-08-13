<template>
  <div class="grid-container sixth-page">
    <v-card class="chart-card chart-card-health-first">
      <v-card-title class="card-header">Медицинские организации, ед.</v-card-title>
      <v-card-text class="card-content">
        <div class="table-scroll-container">
          <v-data-table
            :headers="headers"
            :items="roadItems"
            :custom-sort="customSort"
            :sort-by="sortBy"
            :sort-desc="sortDesc"
            height="calc(20vh - 150px)"
            class="custom-table elevation-1"
            disable-pagination
            hide-default-footer>
          </v-data-table>
        </div>
      </v-card-text>
    </v-card>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-health-second">
        <v-card-title class="card-header">МО в аварийном состоянии</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего 1</p>
          </div>
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="alertChartData1" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-health-third">
        <v-card-title class="card-header">Аптеки, ед.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего 7</p>
          </div>
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="pharmacyChartData" />
        </v-card-text>
      </v-card>
    </div>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-health-fourth">
        <v-card-title class="card-header">Охват МО</v-card-title>
        <v-card-text class="card-content">
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="MOChartData" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-health-fifth">
        <v-card-title class="card-header">Уровень посещаемости</v-card-title>
        <v-card-text class="card-content">
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="trafficChartData1" />
        </v-card-text>
      </v-card>
    </div>
    <v-card class="chart-card chart-card-health-sixth">
      <v-card-title class="card-header">Численность медицинского персонала, чел.</v-card-title>
      <v-card-text class="card-content">
        <div class="ring-charts-container">
          <div class="ring-chart-block">
            <div class="chart-label">{{ charts[0].label }}</div>
            <div class="chart-top">{{ charts[0].value1 }}</div>
            <ringprocent-chart height="78%" :data-source="getChartData(charts[0])" />
            <div class="chart-bottom">{{ charts[0].value2 }}</div>
          </div>
          <div class="chart-text-block">
            <div class="text-top">Физические</div>
            <div class="text-center">Дефицит</div>
            <div class="text-bottom">Штатные</div>
          </div>
          <div class="ring-chart-block">
            <div class="chart-label">{{ charts[1].label }}</div>
            <div class="chart-top">{{ charts[1].value1 }}</div>
            <ringprocent-chart height="78%" :data-source="getChartData(charts[1])" />
            <div class="chart-bottom">{{ charts[1].value2 }}</div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HorizontalStackBars from '../charts/HorizontalStackBars.vue';
import RingprocentChart from '../charts/RingprocentChart.vue';


export default {
  name: 'SixthSlide',
  components: {
    HorizontalStackBars,
    RingprocentChart,
  },
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      selectedChart: 'chart1',
      alertChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#e06666'],
        series: [
          {
            name: '',
            data: [1, 0, 0, 0],
          },
        ],
      },
      pharmacyChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#f1c232'],
        series: [
          {
            name: '',
            data: [3, 2, 1, 1],
          },
        ],
      },
      trafficChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#009e0f'],
        series: [
          {
            name: '',
            data: [1.3, 5.1, 2.7, 1.7],
          },
        ],
      },
      MOChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#2b78e4'],
        series: [
          {
            name: '',
            data: [1101, 500, 101, 58],
          },
        ],
      },
      headers: [
        { text: 'МО', value: 'index', sortable: true },
        { text: 'с.Заградовка', value: 'value', sortable: true },
        { text: 'с.Тонкошуровка', value: 'value1', sortable: true },
        { text: 'с.Горное', value: 'value2', sortable: true },
        { text: 'с.Жамбыл', value: 'value3', sortable: true },
      ],
      roadItems: [
        {
          index: 'Центральная районная больница (Койки)',
          
        },
        {
          index: 'Районная больница (Койки)',
          
        },
        {
          index: 'Сельская больница (Койки)',
          
        },
        {
          index: 'Поликлиники',
          
        },
        {
          index: 'Врачебные амбулатория',
          
        },
        {
          index: 'Фельдшерско-акушерский пункт',
          value: '1',
          
        },
        {
          index: 'Меицинский пункт',
          value: '3',
          value1: '1',
          value2: '2',
          value3: '1',
        },
      ],
      charts: [
        { label: 'Врачи', value1: 8, value2: 20, percent: 60, color: '#45818e' },
        { label: 'Средний персонал', value1: 19, value2: 30, percent: 37, color: '#45818e' },
      ],
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