<template>
  <ApexChart
    type="bar"
    :width="width"
    :height="height"
    :options="chartOptions"
    :series="dataSource.series"
  />
</template>

<script>
import ApexChart from 'vue-apexcharts';

export default {
  name: 'PopulationChart',
  components: {
    ApexChart,
  },
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    dataSource: {
      type: Object,
      required: true,
      default: () => ({
        series: [],
        categories: [],
        colors: [],
      }),
    },
  },
  data() {
    return {
      horizontalTotal: true,
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
              type: 'bar',
              height: 440,
              stacked: true,
              toolbar: {
                show: false
              }
            },
            colors: this.dataSource.colors,
            plotOptions: {
              bar: {
                borderRadius: 0,
                horizontal: true,
                barHeight: '70%',
              },
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
            return Math.abs(val).toFixed(1); 
        },
              style: {
      fontSize: '11px',
      fontWeight: 400, 
      fontFamily: 'Montserrat-Regular, sans-serif', 
      colors: ['#fff'], 
    }
            },
            stroke: {
              width: 0,
              colors: ["#fff"]
            },
            
            grid: {
        show: false, 
    },
            yaxis: {
              stepSize: 1,
              labels: {
            show: true,
            formatter: function (val) {
                return val; 
            },
            style: {
                colors: '#ffffff', 
            },
        },
              axisBorder: {
            show: true, 
            color: '#4b3f3f'
        },
        axisTicks: {
            show: true, 
            color: '#4b3f3f'
        },
            },
            tooltip: {
        shared: false, 
        intersect: true, 
        style: {
            fontFamily: 'Montserrat-Regular, sans-serif', 
            fontSize: '10px', 
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const category = w.config.xaxis.categories[dataPointIndex]; 
            const value = Math.abs(series[seriesIndex][dataPointIndex]).toFixed(1); 
            const color = w.globals.colors[seriesIndex]; 

            return `
                <div style="padding: 5px; background: ${color}; color: #fff; border-radius: 0; font-size: 10px; border: none;">
                    <strong>${category}:</strong> ${value}
                </div>
            `; 
        },
    },
            
            xaxis: {
              categories: this.dataSource.categories,
              
              labels: {
                show: false
              },
              axisBorder: {
            show: true, 
            color: '#4b3f3f'
        },
        axisTicks: {
            show: false, 
            color: '#4b3f3f'
        },
            },
            legend: {
        position: "bottom",
        
        fontSize: '10px', 
        markers: {
          width: 10,  
          height: 10,
          borderRadius: 10,
          strokeWidth: 0,  
        },
        itemMargin: {
          horizontal: 5, 
          
        },
        inverseOrder: false,
        formatter: function(seriesName, opts) {
          return `<span style="color: ${opts.w.globals.colors[opts.seriesIndex]}">${seriesName}</span>`;
        }
      },
          }
    },
  },
};
</script>