<template>
  <div class="grid-container fourth-page">
    <v-card class="chart-card chart-card-roadlocal-first">
      <v-card-title class="card-header">До обл. и респ. дорог, км</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">far fa-code-branch</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="9">
                <p>с. Заградовка</p>
                <p>с. Тонкошуровка</p>
                <p>с. Горное</p>
                <p>с. Жамбыл</p>
              </v-col>
              <v-col align="end" cols="3">
                <p>75</p>
                <p>85</p>
                <p>75</p>
                <p>75</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-roadlocal-second">
      <v-card-title class="card-header">Дороги связывающие с райцентром, км</v-card-title>
      <v-card-text class="card-content">
        <div class="content-layout">
          <div class="chart-container">
          <horizontal-stack-bars height="100%" :data-source="waterChartData" />
          </div>
          <div class="state-info">
            <div class="state-header">Состояние</div>
            <ul class="state-list">
              <li>Удовлетворительное</li>
              <li>Хорошее</li>
              <li>Хорошее</li>
              <li>Удовлетворительное</li>
            </ul>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-roadlocal-third">
      <v-card-title class="card-header">Дороги с твердым покрытием, км</v-card-title>
      <v-card-text class="card-content">
        <div class="population-title d-flex flex-column justify-center align-center">
          <p>Всего 58</p>
        </div>
        <horizontal-stack-bars height="100%" :datalabels="false" :data-source="horizontalChartData1" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-roadlocal-fourth">
      <v-card-title class="card-header">Автобусное сообщение</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-bus-alt</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="9">
                <p>с. Заградовка</p>
                <p>с. Тонкошуровка</p>
                <p>с. Горное</p>
                <p>с. Жамбыл</p>
              </v-col>
              <v-col align="end" cols="3">
                <p>Есть</p>
                <p>Нет</p>
                <p>Нет</p>
                <p>Нет</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-roadlocal-fifth">
      <v-card-title class="card-header">Состояние внутрипоселковой дороги, км</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :data-source="levelroadChartData" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-roadlocal-sixth">
      <v-card-title class="card-header">Требуется ремонт, км</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :data-source="fixroadChartData" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HorizontalStackBars from '../charts/HorizontalStackBars.vue';

export default {
  name: 'FourthSlide',
  components: {
    HorizontalStackBars,
  },
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      selectedChart: 'chart1',
      waterChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#9fc5f8', '#6fa8dc', '#597eaa'],
        series: [
          {
            name: 'Твердое покрытие',
            data: [2, 2, 2, 0],
          },
          {
            name: 'Грунтовая',
            data: [2, 5, 5, 0],
          },
          {
            name: 'Бездорожье',
            data: [10, 0, 0, 10],
          },
        ],
      },
      horizontalChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#45818e'],
        series: [
          {
            name: '',
            data: [10, 5, 5, 10],
          },
        ],
      },
      levelroadChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#6aa84f', '#f1c232', '#cc0000'],
        series: [
          {
            name: 'Хорошее',
            data: [2, 2, 2, 0],
          },
          {
            name: 'Удовлетворительное',
            data: [2, 5, 5, 0],
          },
          {
            name: 'Неудовлетворительное',
            data: [10, 0, 0, 10],
          },
        ],
      },
      fixroadChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#a64d79', '#674ea7'],
        series: [
          {
            name: 'Капитальный',
            data: [10, 0, 0, 10],
          },
          {
            name: 'Средний',
            data: [2, 5, 5, 0],
          },
        ],
      },
      
    };
  },
  computed: {
  },
};
</script>