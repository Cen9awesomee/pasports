<template>
  <div class="grid-container eleventh-page">
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-agro-industry-first">
        <v-card-title class="card-header">Сельские дворы, ед.</v-card-title>
        <v-card-text class="card-content">
          <div class="population-title d-flex flex-column justify-center align-center">
            <p>360</p>
          </div>
          <horizontal-stack-bars height="100%" :datalabels="false" :data-source="agroChartData1" /> 
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-agro-industry-second">
        <v-card-title class="card-header">Объем урожая, тонн</v-card-title>
        <v-card-text class="card-content">
          <ring-charts height="100%" operation="sum" :data-source="ringChartData1" /> 
        </v-card-text>
      </v-card>
    </div>
    <div class="horizontal-cards">
      <v-card class="chart-card chart-card-agro-industry-third">
        <v-card-title class="card-header">Перерабатывающие цеха, ед.</v-card-title>
        <v-card-text class="card-content">
          <ring-charts height="100%" operation="sum" :data-source="ringChartData2" />
        </v-card-text>
      </v-card>
      <v-card class="chart-card chart-card-agro-industry-fourth">
        <v-card-title class="card-header">С/х техника, ед.</v-card-title>
        <v-card-text class="card-content">
          <ring-charts height="100%" operation="sum" :data-source="ringChartData3" />
        </v-card-text>
      </v-card>
    </div>
    <v-card class="chart-card chart-card-agro-industry-fifth">
      <v-card-title class="card-header">Хозяйствующие субъекты, ед.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 15</p>
        </div>
        <vertical-stack-bars height="100%" :data-source="verticalChartData1" /> 
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-agro-industry-sixth">
      <v-card-title class="card-header">Численность с\х животных, голов</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Птица всех видов 360</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="agroChartData2" /> 
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HorizontalStackBars from '../charts/HorizontalStackBars.vue';
import RingCharts from '../charts/RingCharts.vue';
import VerticalStackBars from '../charts/VerticalStackBars.vue';


export default {
  name: 'EleventhSlide',
  components: {
    RingCharts,
    HorizontalStackBars,
    VerticalStackBars
  },
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      selectedChart: 'chart1',
      agroChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#45818e'],
        series: [
          {
            name: '',
            data: [302, 13, 32, 13],
          },
        ],
      },
      agroChartData2: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#a64d79', '#674ea7'],
        series: [
          {
            name: 'Племенной скот',
            data: [97, 20, 100, 125, 200],
          },
          {
            name: 'Обычный скот',
            data: [278, 77, 129, 550, 340],
          },
        ],
      },
      verticalChartData1: {
        height: 200,
        columnWidth: '35%',
          series: [
            {
              name: '',
              data: [0, 4, 0, 1, 0, 0, 0, 8, 2],
            },
          ],
          categories: ['АО', 'ТОО', 'ПК', 'КХ', 'СЗЦ', 'СПК', 'СХПК', 'ИП', 'Другие'],
          colors: ['#6fa8dc'], 
      },
      ringChartData1: {
        colors: ['#ff9900', '#e69138', '#b45f06'],
        series: [16, 37, 47], 
        categories: ['Бахчевые', 'Масличные', 'Зерно'], 
      },
      ringChartData2: {
        colors: ['#2b78e4','#085394', '#6fa8dc', '#597eaa'],
        series: [1, 1, 2, 5], 
        categories: ['Другие','Рыбной продукции', 'Животн. продукции', 'Растен. продукции'], 
      },
      ringChartData3: {
        colors: ['#ff9900', '#e69138', '#b45f06'],
        series: [3, 6, 10], 
        categories: ['Прочее', 'Тракторы', 'Комбайны'], 
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