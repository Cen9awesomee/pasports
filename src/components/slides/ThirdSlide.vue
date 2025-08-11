<template>
  <div class="grid-container third-page">
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-road-first">
        <v-card-title class="card-header">Областные и районные дороги</v-card-title>
        <v-card-text class="card-content">
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
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-road-second">
        <v-card-title class="card-header">Требуется ремонт, км</v-card-title>
        <v-card-text class="card-content">
          <ring-charts height="100%" operation="sum" :data-source="ringChartData1" />
        </v-card-text>
      </v-card>
    </div>
    <v-card class="chart-card chart-card-road-third">
      <v-card-title class="card-header">Ремонтно-строительные работы, км</v-card-title>
      <v-card-text class="card-content">
        <vertical-stack-bars height="100%" :data-source="verticalChartData1" />   
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-road-fourth">
      <v-card-title class="card-header">По типам покрытия, км</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :data-source="horizontalChartData1" /> 
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-road-fifth">
      <v-card-title class="card-header">Состояние дорожного покрытия, км</v-card-title>
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
  </div>
</template>

<script>

import HorizontalStackBars from '../charts/HorizontalStackBars.vue';
import RingCharts from '../charts/RingCharts.vue';
import RingprocentChart from '../charts/RingprocentChart.vue';
import VerticalStackBars from '../charts/VerticalStackBars.vue';

export default {
  name: 'SecondSlide',
  components: {
    RingCharts,
    HorizontalStackBars,
    RingprocentChart,
    VerticalStackBars
  },
  data() {
    return {
      horizontalChartData1: {
        categories: ['Асфальтобетонное', 'Гравийно-щебеночное', 'Черное', 'Грунтовые'],
        colors: ['#45818e'],
        series: [
          {
            name: '',
            data: [30, 20, 7, 0],
          },
        ],
      },
      verticalChartData1: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: '',
              data: [0, 0, 5, 10, 20],
            },
          ],
          categories: ['Строительство', 'Реконструкция', 'Капитальный ремонт', 'Средний ремонт', 'Текущий ремонт'],
          colors: ['#45818e'], 
      },
      ringChartData1: {
        colors: ['#a7a7a7', '#e6e6e6'],
        series: [20, 7], 
        categories: ['Средний', 'Капитальный'], 
      },
      charts: [
        { label: 'Хорошее', km: 30, percent: 53, color: '#45818e' },
        { label: 'Удовлетворительное', km: 20, percent: 35, color: '#45818e' },
        { label: 'Неудовлетворительное', km: 7, percent: 12, color: '#45818e' },
      ],
      headers: [
        { text: 'Индекс', value: 'index', sortable: true },
        { text: 'Наименование', value: 'name', sortable: true },
        { text: 'км', value: 'km', sortable: true },
      ],
      roadItems: [
        {
          index: 'КТ-29',
          name: 'Покровка-Корнеевка-Горное',
          km: '57 км',
        },
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