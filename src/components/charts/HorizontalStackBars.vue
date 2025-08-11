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
  name: 'HorizontalStackBars',
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
    total: {
      type: Boolean,
      default: true,
    },
    datalabels: {
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
          stacked: true,
          height: '100%',
          fontFamily: 'Montserrat-Regular',
          animations: {
            enabled: true,
            speed: 800,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: this.datalabels,
          position: 'center',
          offsetX: -6,
          style: {
            fontSize: '11px',
            fontWeight: 400,
            colors: ['#ffffff'],
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '70%',
            dataLabels: {
              total: {
                enabled: this.total,
                    offsetX: 0,
                    style: {
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#fff'
                    }
                  }
            },
          },
        },
        grid: {
          show: false,
        },
        stroke: {
          show: false,
        },
        tooltip: {
          shared: false,
          intersect: true,
          custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            const category = w.config.xaxis.categories[dataPointIndex];
            const value = series[seriesIndex][dataPointIndex];
            const color = w.globals.colors[seriesIndex];
            return `
              <div style="padding: 5px; background: ${color}; color: #fff; font-size: 10px;">
                <strong>${category}:</strong> ${value}
              </div>
            `;
          },
        },
        xaxis: {
          categories: this.dataSource.categories,
          labels: {
            show: false,
            style: {
              colors: '#ffffff',
              fontSize: '11px',
            },
          },
          axisBorder: {
            show: true,
            color: '#4b3f3f',
          },
          axisTicks: {
            show: true,
            color: '#4b3f3f',
          },
        },
        yaxis: {
          labels: {
            offsetX: 5,
            style: {
              colors: '#ffffff',
            },
          },
          axisBorder: {
            show: true,
            color: '#4b3f3f',
          },
          axisTicks: {
            show: true,
            color: '#4b3f3f',
          },
        },
        legend: {
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