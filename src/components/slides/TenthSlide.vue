<template>
  <div class="grid-container tenth-page">
    <v-card class="chart-card chart-card-infrastructure-first">
      <v-card-title class="card-header">Линии электропередач</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-bolt</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
            <v-col cols="12">
              <p><strong>Линии электропередач, км (износ, %)</strong></p>
            </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p><strong>с. Заградовкаа</strong></p>
                <p><strong>с. Тонкошуровка</strong></p>
                <p><strong>с. Горное</strong></p>
                <p><strong>с. Жамбыл</strong></p>
              </v-col>
              <v-col align="end" cols="3">
                <p>15 (20)</p>
                <p>10 (50)</p>
                <p>10 (80)</p>
                <p>5 (50)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-second">
      <v-card-title class="card-header">КТП, ТП</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-plug</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Трансформаторные подстанции (износ, %)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p><strong>с. Заградовкаа</strong></p>
                <p><strong>с. Тонкошуровка</strong></p>
                <p><strong>с. Горное</strong></p>
                <p><strong>с. Жамбыл</strong></p>
              </v-col>
              <v-col align="end" cols="3">
                <p>3 (50)</p>
                <p>2 (20)</p>
                <p>1 (34)</p>
                <p>1 (54)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-third">
      <v-card-title class="card-header">Газоснабжение в домах, %</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :total="false" :data-source="infrastructureChartData1" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-fourth">
      <v-card-title class="card-header">Охват газоснабжением, чел.</v-card-title>
      <v-card-text class="card-content">
        <horizontal-stack-bars height="100%" :total="false" :data-source="infrastructureChartData2" />
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-fifth">
      <v-card-title class="card-header">Газ в балонах</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-fire</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Наличие сжиженного газа (пункты обмена)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="9">
                <p><strong>с. Заградовкаа</strong></p>
                <p><strong>с. Тонкошуровка</strong></p>
                <p><strong>с. Горное</strong></p>
                <p><strong>с. Жамбыл</strong></p>
              </v-col>
              <v-col align="end" cols="3">
                <p>Нет (0)</p>
                <p>Да (2)</p>
                <p>Да (2)</p>
                <p>Да (1)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-sixth">
      <v-card-title class="card-header">Мобильная связь</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-phone-volume</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Мобильная связь (интернет)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <p><strong>с. Заградовкаа</strong></p>
                <p><strong>с. Тонкошуровка</strong></p>
                <p><strong>с. Горное</strong></p>
                <p><strong>с. Жамбыл</strong></p>
              </v-col>
              <v-col align="end" cols="6">
                <p>Active, Beeline (есть)</p>
                <p>Active, Beeline (есть)</p>
                <p>Active, Beeline (нет)</p>
                <p>Beeline (нет)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-seventh">
      <v-card-title class="card-header">Ширикополосный интернет</v-card-title>
      <v-card-text class="card-content">
        <v-icon color="#45818e" size="80" class="water-icon">fas fa-wifi</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Ширикополосный интернет (в гос. орг.)</strong></p>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="8">
                <p><strong>с. Заградовкаа</strong></p>
                <p><strong>с. Тонкошуровка</strong></p>
                <p><strong>с. Горное</strong></p>
                <p><strong>с. Жамбыл</strong></p>
              </v-col>
              <v-col align="end" cols="4">
                <p>Есть (есть)</p>
                <p>Есть (есть)</p>
                <p>Есть (нет)</p>
                <p>Нет (нет)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="chart-card chart-card-infrastructure-eighth">
      <v-card-title class="card-header">Почтовая связь</v-card-title>
      <v-card-text class="card-content">
       <v-icon color="#45818e" size="80" class="water-icon">fas fa-envelope</v-icon>
        <v-row class="water-info-general" no-gutters>
          <v-col cols="12" class="water-info">
            <v-row no-gutters>
              <v-col cols="12">
                <p><strong>Стационарные отделения (передвижные)</strong></p>
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
                <p>2 (1)</p>
                <p>2 (0)</p>
                <p>1 (0)</p>
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
  name: 'TenthSlide',
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
      infrastructureChartData1: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#45818e'],
        series: [
          {
            name: '',
            data: [100, 80, 81, 50],
          },
        ],
      },
      infrastructureChartData2: {
        categories: ['с.Заградовка', 'с.Тонкошуровка', 'с.Горное', 'с.Жамбыл'],
        colors: ['#45818e'],
        series: [
          {
            name: '',
            data: [650, 80, 100, 50],
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