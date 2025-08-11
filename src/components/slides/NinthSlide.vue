<template>
  <div class="grid-container ninth-page">
    <v-card class="chart-card chart-card-object-first">
      <v-card-title class="card-header">Культура, ед.</v-card-title>
      <v-card-text class="card-content">
        <vertical-stack-bars height="100%" :distributed="false" :legend="true" :stacked="true" :data-source="verticalChartData1" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-object-second">
      <v-card-title class="card-header">Спорт, ед.</v-card-title>
      <v-card-text class="card-content">
        <vertical-stack-bars height="100%" :distributed="false" :legend="true" :stacked="true" :data-source="verticalChartData2" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-object-third">
      <v-card-title class="card-header">Туризм, ед.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 17</p>
        </div>
       <vertical-stack-bars height="100%" :data-source="verticalChartData3" /> 
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-object-four">
      <v-card-title class="card-header">Туристическая зона</v-card-title>
      <v-card-text class="card-content">
        <div class="tour-item" v-for="(item, index) in tours" :key="index">
          <v-icon size="40" class="tour-icon" color="black">fas fa-walking</v-icon>
          <span class="tour-text">{{ item }}</span>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import VerticalStackBars from '../charts/VerticalStackBars.vue';

export default {
  name: 'NinthSlide',
  components: {
    VerticalStackBars
  },
  data() {
    return {
      selectedRegionId: null,
      tooltipHtml: '',
      tooltipEvent: null,
      verticalChartData1: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: 'Действующие',
              data: [5, 3, 3, 1],
            },
            {
              name: 'Недействующие',
              data: [0, 1, 0, 1],
            },
          ],
          categories: ['Дома культуры', 'Библиотеки', 'Кинотеатры', 'Музеи'],
          colors: ['#93c47d', '#f6b26b'], 
      },
      verticalChartData2: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: 'Действующие',
              group: 'budget',
              data: [5, 3, 2, 5, 0, 2],
            },
            {
              name: 'Недействующие',
              group: 'budget',
              data: [0, 0, 1, 0, 0, 0],
            },
            {
              name: 'Требуется ремонт',
              group: 'actual',
              data: [0, 1, 1, 2, 0, 0],
            },
          ],
          categories: ['ДЮСШ', 'Стадионы', 'Крытые комплексы', 'Спортивные залы', 'Бассейны', 'Лыжные базы'],
          colors: ['#ffd966', '#e06666', '#6fa8dc'], 
      },
      verticalChartData3: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: '',
              data: [1, 6, 3, 2, 1, 4],
            },
          ],
          categories: ['Гостиницы', 'Гостевые дома', 'Охотничьи дома', 'Дома отдыха', 'Санатории', 'Другие'],
          colors: ['#45818e'], 
      },
      tours: [
        'Посещение озера Жаманколь: отдых у озера, рыбалка и наблюдение за природой.',
        'Участие в агротуристических программах: проживание в гостевых домах, участие в сельскохозяйственных работах и знакомство с традиционной кухней.',
        'Экскурсии по культурным объектам: посещение библиотеки, Дома культуры и центра досуга для знакомства с местной культурой.'
      ],
      };
  },
  methods: {
  },
  computed: {
  },
};
</script>