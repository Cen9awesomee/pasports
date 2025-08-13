<template>
  <div class="grid-container second-page">
    <v-card class="chart-card chart-card-water-first">
      <v-card-title class="card-header">Водоснабжение</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-faucet-drip</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="8">
                <p>Групповой водопровод</p>
                <p><strong>Система водоснабжения</strong></p>
              </v-col>
              <v-col cols="4">
                <p>Есильский</p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <p>Год постройки</p>
                <p>Собственность</p>
                <p>Обслуживает</p>
              </v-col>
              <v-col cols="6">
                <p>2020 г.</p>
                <p>ТОО "Заградовское"</p>
                <p>ТОО "Заградовское"</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-second">
      <v-card-title class="card-header">Источник забора воды</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-tint</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="7">
                <p>с. Заградовка</p>
                <p>с. Тонкошуровка</p>
                <p>с. Горное</p>
                <p>с. Жамбыл</p>
              </v-col>
              <v-col cols="5">
                <p>Подземный</p>
                <p>Подземный</p>
                <p>Подземный</p>
                <p>Поверхностный</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-third">
      <v-card-title class="card-header">Водопровод, км</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :data-source="waterChartData" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-fourth">
      <v-card-title class="card-header">Подключено домов</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :total="false" :data-source="houseChartData" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-fifth">
      <v-card-title class="card-header">Пользователи, чел.</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :data-source="usersChartData" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-sixth">
      <v-card-title class="card-header">Централизованное</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :data-source="centerChartData" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-seventh">
      <v-card-title class="card-header">Децентрализованное</v-card-title>
      <v-card-text class="card-content">
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="8">
                <p><strong>Подземные</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p>Пункты раздачи воды</p>
                <p>Комплексные блоки модуля</p>
                <p>Скважины</p>
                <p>Колодцы</p>
              </v-col>
              <v-col align="end" cols="3">
                <p>30 (5)</p>
                <p>10 (3)</p>
                <p>10 (5)</p>
                <p>0 (0)</p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Поверхностные (река, родник, озеро)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p>С водоочистной системой</p>
                <p>Без водоочистной системы</p>
              </v-col>
              <v-col align="end" cols="3">
                <p>30 (5)</p>
                <p>10 (3)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-water-eighth">
      <v-card-title class="card-header">Привозная вода</v-card-title>
      <v-card-text class="card-content">
       <v-icon color="#45818e" size="80" class="water-icon">fas fa-truck-moving</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Пользователи, чел. (Расст. подвоза, км)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p>с. Заградовка</p>
                <p>с. Тонкошуровка</p>
                <p>с. Горное</p>
                <p>с. Жамбыл</p>
              </v-col>
              <v-col align="end" cols="3">
                <p>30 (5)</p>
                <p>10 (3)</p>
                <p>10 (5)</p>
                <p>0 (0)</p>
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
  name: 'SecondSlide',
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
        colors: ['#a64d79', '#674ea7'],
        series: [
          {
            name: 'Действующий',
            data: [30, 20, 20, 10],
          },
          {
            name: 'Недействующий',
            data: [10, 0, 0, 0],
          },
        ],
      },
      houseChartData: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#f1c232'],
        series: [
          {
            name: '',
            data: [110, 25, 40, 20],
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
    };
  },
  computed: {
  },
};
</script>