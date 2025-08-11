<template>
  <div class="grid-container first-page">
    <v-card class="chart-card chart-card-first">
      <v-card-title class="card-header">Общие сведения</v-card-title>
      <v-card-text class="card-content">
        <v-row class="general-info" no-gutters>
          <v-col cols="8" class="general-info-left">
            <v-row no-gutters>
            <v-col cols="4">
              <p><strong>Админ. центр</strong></p>
              <p><strong>Аким</strong></p>
            </v-col>
            <v-col cols="7">
              <p>с. Заградовка</p>
              <p class="akim-name">Тулегенов Берик Тлегенович</p>
              <p class="akim-date">с 14.02.2008 г.</p>
            </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4"></v-col>
              <v-col cols="8">
                <v-img
                src="@/assets/Akim-photo.png"
                class="akim-photo"
                max-width="150"
                max-height="90"
                contain
                ></v-img>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4">
                <p><strong>Координаты</strong></p>
                <p><strong>Площадь</strong></p>
              </v-col>
              <v-col cols="7">
                <p>53°50'46" с.ш. 68°36'36" в.д.</p>
                <p>305,2 га</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="general-info-right">
            <v-row no-gutters>
              <v-col cols="8">
                <p><strong>СНП</strong></p>
                <p><strong>Население, чел.</strong></p>
                <p>с.Заградовка</p>
                <p>с.Тонкошуровка</p>
                <p>с.Горное</p>
                <p>с.Жамбыл</p>
              </v-col>
              <v-col cols="3" class="text-right">
                <p>5</p>
                <p>&nbsp;</p>
                <p>840</p>
                <p>98</p>
                <p>37</p>
                <p>34</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-second">
      <v-card-title class="card-header">Общая численность населения, чел.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Общая численность 1009</p>
        </div>
        <population-chart height="100%" :data-source="populationChartData" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-third">
      <v-card-title class="card-header">Движение населения, чел.</v-card-title>
      <v-card-text class="card-content">
        <div class="ring-charts">
          <div class="ring-chart-container">
            <ring-charts height="100%" operation="subtract" :data-source="ringChartData1" />
          </div>
          <div class="chart-divider">
            <v-icon color="#cf2a28">fas fa-caret-down</v-icon>
            <span class="divider-text">-3</span>
          </div>
          <div class="ring-chart-container">
            <ring-charts height="100%" operation="subtract" :data-source="ringChartData2" />
          </div>
        </div>
      </v-card-text>
    </v-card>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-four">
        <v-card-title class="card-header">Трудоспособность, чел.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>800 </p>
          </div>
          <horizontal-stack-bars height="100%" :total="false" :data-source="horizontalChartData1" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-four-2">
        <v-card-title class="card-header">Занятость, чел.</v-card-title>
        <v-card-text class="card-content">
          <horizontal-stack-bars height="100%" :total="false" :data-source="horizontalChartData2" />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import PopulationChart from '../charts/PopulationChart.vue';
import RingCharts from '../charts/RingCharts.vue';
import HorizontalStackBars from '../charts/HorizontalStackBars.vue';

export default {
  name: 'FirstSlide',
  components: {
    PopulationChart,
    RingCharts,
    HorizontalStackBars,
  },
  data() {
    return {
      selectedRegionId: null,
      tooltipHtml: '',
      tooltipEvent: null,

      horizontalChartData2: {
        categories: ['Промышленность', 'Строительство', 'Торговля', 'Транспорт', 'Туризм', 'Другие'],
        colors: ['#e69138'],
        series: [
          {
            name: '',
            data: [200, 111, 100, 100, 25, 86],
          },
        ],
      },
      horizontalChartData1: {
        categories: ['16-29 лет', 'Занятые', 'Наемные', 'Самозанятые', 'Безработные'],
        colors: ['#45818e'],
        series: [
          {
            name: '',
            data: [268, 406, 306, 100, 126],
          },
        ],
      },
      populationChartData: {
        categories: ['Всего', 'Дети', 'Молодёжь', 'Взрослые', 'Пожилые'],
        colors: ['#de4058', '#057fdc'],
        series: [
          {
            name: 'Женщины',
            data: [-509, -10, -149, -220, -130],
          },
          {
            name: 'Мужчины',
            data: [500, 16, 119, 245, 120],
          },
        ],
      },
      ringChartData1: {
        colors: ['#a7a7a7', '#e6e6e6'],
        series: [6, 5], 
        categories: ['Умерло', 'Родилось'], 
      },
      ringChartData2: {
        colors: ['#a7a7a7', '#e6e6e6'],
        series: [11, 9], 
        categories: ['Выбыло', 'Прибыло'], 
      },
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>