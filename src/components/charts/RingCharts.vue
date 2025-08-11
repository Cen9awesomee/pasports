<template>
  <ApexChart
    type="donut"
    :width="width"
    :height="height"
    :options="chartOptions"
    :series="dataSource.series"
  />
</template>

<script>
import ApexChart from 'vue-apexcharts';

export default {
  name: 'RingCharts',
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
    operation: { 
      type: String,
      default: 'sum',
      validator: (val) => ['sum', 'subtract'].includes(val),
    },
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'donut',
          height: 200,
        },
        labels: this.dataSource.categories,
        colors: this.dataSource.colors,
        legend: {
          position: 'bottom',
          fontSize: '10px',
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
          },
          itemMargin: {
            horizontal: 5,
            vertical: 5,
          },
          inverseOrder: true,
          formatter: function (seriesName, opts) {
            if (opts?.w?.globals?.colors?.[opts.seriesIndex]) {
              const color = opts.w.globals.colors[opts.seriesIndex];
              return `<span style="color: ${color}">${seriesName}</span>`;
            }
            return seriesName;
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: '45%',
              labels: {
                show: true,
                name: {
                  show: false,
                },
                value: {
                  show: true,
                  fontSize: '15px',
                  color: '#ffffff',
                },
                total: {
                  show: true,
                  label: '',
                  formatter: (w) => {
                    if (this.operation === 'sum') {
                      return w.config.series.reduce((a, b) => a + b, 0);
                    } else if (this.operation === 'subtract') {
                      return w.config.series.reduce((a, b) => b - a);
                    }
                    return 0;
                  },
                  style: {
                    fontSize: '5px',
                    fontWeight: 600,
                  },
                },
              },
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex];
          },
          style: {
            fontWeight: 100,
          },
        },
        tooltip: {
          theme: 'dark',
        },
        fill: {
          opacity: 1,
        },
        stroke: {
          show: false,
        },
      };
    },
  },
};
</script>