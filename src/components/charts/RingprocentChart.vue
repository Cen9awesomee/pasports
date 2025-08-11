<template>
    <ApexChart
      type="radialBar"
      :height="height"
      :width="width"
      :options="chartOptions"
      :series="dataSource.series"
    ></ApexChart>
  </template>
  
  <script>
  import ApexChart from 'vue-apexcharts';
  
  export default {
    name: 'RingprocentChart',
    components: {
      ApexChart,
    },
    props: {
      height: {
      type: [Number, String],
      default: '100%',
    },
    width: {
      type: [Number, String],
      default: '80%',
    },
    dataSource: {
      type: Object,
      required: true,
      default: () => ({
        series: [],
        colors: [],
      }),
    },
    },
    computed: {
    chartOptions() {
      return {
        chart: {
      height: 165,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '65%',
        },
        dataLabels: {
          name: {
            offsetY: 10, 
            color: '#ffffff', 
            fontSize: '16px', 
            show: true, 
          },
          value: {
            offsetY: -10, 
            color: '#ffffff', 
            fontSize: '18px', 
            show: true, 
            formatter: function (val) {
            return val + '%'; 
            }
          }
        }
      }
    },
    colors: this.dataSource.colors,
    labels: [''],
  };
  },
},
};
            
  </script>