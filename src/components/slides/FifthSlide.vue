<template>
  <div class="grid-container fifth-page">
    <v-card class="chart-card chart-card-optional-first">
      <v-card-title class="card-header">Удалённость, км</v-card-title>
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
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-optional-second">
        <v-card-title class="card-header">Жилой фонд, кв.м</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего 19412</p>
          </div>
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="fondChartData1" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-optional-third">
        <v-card-title class="card-header">Жильё, кв.м/чел.</v-card-title>
        <v-card-text class="card-content">
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="houseChartData" />
        </v-card-text>
      </v-card>
    </div>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-optional-fourth">
        <v-card-title class="card-header">Семьи, ед.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего 256</p>
          </div>
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="familyChartData1" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-optional-fifth">
        <v-card-title class="card-header">Получатели АСП, чел.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего 207</p>
          </div>
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="aspChartData1" />
        </v-card-text>
      </v-card>
    </div>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-optional-sixth">
        <v-card-title class="card-header">Сфера обслуживания, ед.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего объектов 20</p>
          </div>
          <horizontal-stack-bars height="100%" :data-source="serviceChartData" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-optional-seventh">
        <v-card-title class="card-header">Сфера обслуживания, чел.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>Всего работает 65</p>
          </div>
          <horizontal-stack-bars height="100%" :data-source="servicepeopleChartData" />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import HorizontalStackBars from '../charts/HorizontalStackBars.vue';


export default {
  name: 'SecondSlide',
  components: {
    HorizontalStackBars,
  },
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      selectedChart: 'chart1',
      fondChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#e06666'],
        series: [
          {
            name: '',
            data: [16800, 1470, 666, 476],
          },
        ],
      },
      familyChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#597eaa'],
        series: [
          {
            name: '',
            data: [210, 24, 10, 12],
          },
        ],
      },
      aspChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#597eaa'],
        series: [
          {
            name: '',
            data: [160, 22, 18, 7],
          },
        ],
      },
      serviceChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#c27ba0', '#a64d79', '#674ea7'],
        series: [
          {
            name: 'Торговля',
            data: [6, 3, 3, 1],
          },
          {
            name: 'Бытовое обслуживание',
            data: [3, 0, 0, 0],
          },
          {
            name: 'Общественное питание',
            data: [3, 1, 0, 0],
          },
        ],
      },
      servicepeopleChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#c27ba0', '#a64d79', '#674ea7'],
        series: [
          {
            name: 'Торговля',
            data: [18, 9, 9, 3],
          },
          {
            name: 'Бытовое обслуживание',
            data: [12, 0, 0, 0],
          },
          {
            name: 'Общественное питание',
            data: [10, 4, 0, 0],
          },
        ],
      },
      houseChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#f1c232'],
        series: [
          {
            name: '',
            data: [20, 15, 18, 14],
          },
        ],
      },
      usersChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#45818e', '#e69138'],
        series: [
          {
            name: 'Централизованное',
            data: [600, 60, 80, 50],
          },
          {
            name: 'Децентрализованное',
            data: [50, 20, 20, 0],
          },
        ],
      },
      centerChartData: {
        categories: ['Резервуар', 'Башня', 'Колонка'],
        colors: ['#6aa84f', '#e06666'],
        series: [
          {
            name: 'Действующий',
            data: [2, 1, 6],
          },
          {
            name: 'Недействующий',
            data: [1, 1, 0],
          },
        ],
      },
      headers: [
        { text: 'Удаленность', value: 'index', sortable: true },
        { text: 'с.Заградовка', value: '', sortable: true },
        { text: 'с.Тонкошуровка', value: '', sortable: true },
        { text: 'с.Горное', value: '', sortable: true },
        { text: 'с.Жамбыл', value: '', sortable: true },
      ],
      roadItems: [
        {
          index: 'от областного центра',
          
        },
        {
          index: 'от райцентра',
          
        },
        {
          index: 'от центра сельского округа',
          
        },
        {
          index: 'от железнодорожной станции',
          
        },
        {
          index: 'от ближайшего города',
          
        },
      ],
      
    };
  },
  computed: {
  },
};
</script>