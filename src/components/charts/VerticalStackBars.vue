<template>
<ApexChart
      type="bar"
      :height="height"
      :width="width"
      :options="chartOptions"
      :series="dataSource.series"
    ></ApexChart>
  </template>
  
  <script>
  import ApexChart from 'vue-apexcharts';
  
  export default {
    name: 'VerticalStackBars',
    components: {
      ApexChart,
    },
    props: {
    height: {
      type: [Number, String],
      default: 200,
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    columnWidth: {
      type: String,
      default: '35%',
    },
    stacked: {
      type: Boolean,
      default: false, 
    },
    legend: {
      type: Boolean,
      default: false, 
    },
    distributed: {
      type: Boolean,
      default: true, 
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
  computed: {
    chartOptions() {
      return {
        chart: {
          height: this.height,
          type: 'bar',
          toolbar: { show: false },
          stacked: this.stacked,
        },
        plotOptions: {
          bar: {
            dataLabels: {
            position: 'top',    
          },
          columnWidth: this.columnWidth, 
          distributed: this.distributed
        },
      },
      fill: {
        colors: this.dataSource.colors,
      },
      dataLabels: {
        enabled: true,
        offsetY: -18,
        formatter: (val) => val, 
        style: {
          fontFamily: 'Montserrat-Regular, sans-serif',
          fontSize: '11px', 
          fontWeight: 400, 
          colors: ['#ffffff'],
        },
      },
      grid: {
        show: false, 
      },
      xaxis: {
        categories: this.dataSource.categories,
          labels: {
            style: {
              colors: '#ffffff', 
              fontSize: '11px',
            },
          },
          position: 'bottom', 
            axisBorder: {
              show: true, 
              color: '#4b3f3f'
            },
            axisTicks: {
              show: true, 
              color: '#4b3f3f'
            },
      },
      yaxis: {
        tickAmount: 6, 
          axisBorder: {
            show: true, 
            color: '#4b3f3f'
          },
          axisTicks: {
            show: true, 
            color: '#4b3f3f'
          },
          labels: {
            show: true,
            formatter: function (val) {
              return val; 
            },
            style: {
              colors: '#ffffff', 
            },
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
            const value = series[seriesIndex][dataPointIndex]; 
            const color = w.globals.colors[dataPointIndex]; 
            return `
                <div style="padding: 5px; background: ${color}; color: #fff; border-radius: 0; font-size: 10px; border: none;">
                    <strong>${category}:</strong> ${value}
                </div>
            `; 
            },
      },
      legend: {
          show: this.legend,
          position: 'bottom',
          offsetY: -10,
          fontSize: '9px',
          markers: {
            width: 10,
            height: 10,
            borderRadius: 10,
            strokeWidth: 0,
          },
          itemMargin: {
            horizontal: 5,
            vertical: 15,
          },
          formatter: (seriesName, opts) => {
            return `<span style="color: ${opts.w.globals.colors[opts.seriesIndex]}">${seriesName}</span>`;
          },
        },
      colors: this.dataSource.colors,
    };
    },
  },
};
  </script> 