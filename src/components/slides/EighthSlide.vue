<template>
  <div class="grid-container eighth-page">
    <v-card class="chart-card chart-card-education-first">
      <v-card-title class="card-header">Дети, чел.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 206</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData1" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-second">
      <v-card-title class="card-header">Школьники, чел.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 138</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData2" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-third">
      <v-card-title class="card-header">ДО, ед.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 1</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData3" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-fourth">
      <v-card-title class="card-header">Вместимость ДО, мест</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 55</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData4" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-fifth">
      <v-card-title class="card-header">Школы, ед.</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 2</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData5" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-sixth">
      <v-card-title class="card-header">Вместимость школ, мест</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 190</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData6" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-seventh">
      <v-card-title class="card-header">Школы-интернаты, мест</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего школ 0</p>
        </div>
        <horizontal-stack-bars height="100%" :data-source="educationChartData7" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-education-eighth">
      <v-card-title class="card-header">Удаленность, км</v-card-title>
      <v-card-text class="card-content">
       <v-icon color="#45818e" size="80" class="water-icon">fas fa-bus-alt</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>От ближайшей школы, км (Подвоз)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p><strong>с. Заградовка</strong></p>
                <p><strong>с. Тонкошуровка</strong></p>
                <p><strong>с. Горное</strong></p>
                <p><strong>с. Жамбыл</strong></p>
              </v-col>
              <v-col align="end" cols="3">
                <p>0 (нет)</p>
                <p>10 (да)</p>
                <p>0 (нет)</p>
                <p>10 (нет)</p>
             </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HorizontalStackBars from '../charts/HorizontalStackBars.vue';


export default {
  name: 'EightSlide',
  components: {
    HorizontalStackBars,
  },
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      selectedChart: 'chart1',
      educationChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#ff9900', '#2b78e4', '#009e0f'],
        series: [
          {
            name: 'До 6 лет',
            data: [30, 10, 10, 11],
          },
          {
            name: 'От 6 до 14 лет',
            data: [138, 0, 7, 0],
          },
          {
            name: 'От 15 лет и старше',
            data: [0, 0, 0, 0],
          },
        ],
      },
      educationChartData2: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#f1c232', '#45818e', '#674ea7'],
        series: [
          {
            name: 'От 6 до 10 лет',
            data: [0, 0, 7, 0],
          },
          {
            name: 'От 11 до 14 лет',
            data: [100, 0, 0, 0],
          },
          {
            name: 'От 15 лет и старше',
            data: [38, 0, 0, 0],
          },
        ],
      },
      educationChartData3: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#a64d79', '#351c75'],
        series: [
          {
            name: 'Детские сады',
            data: [0, 0, 0, 0],
          },
          {
            name: 'Мини-центры',
            data: [1, 0, 0, 0],
          },
        ],
      },
      educationChartData4: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#f1c232', '#45818e'],
        series: [
          {
            name: 'Занято',
            data: [30, 0, 0, 0],
          },
          {
            name: 'Свободно',
            data: [20, 0, 0, 0],
          },
        ],
      },
      educationChartData5: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#597eaa', '#085394', '#073763'],
        series: [
          {
            name: 'Начальная',
            data: [0, 0, 1, 0],
          },
          {
            name: 'Основная',
            data: [0, 0, 0, 0],
          },
          {
            name: 'Средняя',
            data: [1, 0, 0, 0],
          },
        ],
      },
      educationChartData6: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#009e0f', '#93c47d'],
        series: [
          {
            name: 'Занято',
            data: [138, 0, 7, 0],
          },
          {
            name: 'Свободно',
            data: [12, 0, 33, 0],
          },
        ],
      },
      educationChartData7: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#9900ff', '#8e7cc3'],
        series: [
          {
            name: 'Занято',
            data: [0, 0, 0, 0],
          },
          {
            name: 'Свободно',
            data: [0, 0, 0, 0],
          },
        ],
      },
    };
  },
  computed: {
  },
};
</script>