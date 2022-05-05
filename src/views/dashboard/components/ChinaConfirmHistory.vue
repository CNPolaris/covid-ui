<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getChinaConfirmHistory } from '@/api/china'

export default {
  name: 'ChinaConfirmHistory',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      date: [],
      confirmed: [],
      cured: [],
      dead: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    this.timer = setInterval(() => {
      setTimeout(this.initChart, 0)
    }, 1000 * 60 * 24)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    async initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      await getChinaConfirmHistory().then(re => {
        this.date = re.date
        this.confirmed = re.confirmed
        this.cured = re.cured
        this.dead = re.dead
      })
      this.chart.setOption({
        title: {
          text: '全国近30天疫情趋势',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
          axisPointer: {
            type: 'shadow'
          }
        },
        yAxis: [
          {
            type: 'value'
          },
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '累计确诊',
            type: 'bar',
            data: this.confirmed
          },
          {
            name: '累计治愈',
            stack: 'Total',
            type: 'bar',
            data: this.cured
          },
          {
            name: '累计死亡',
            type: 'line',
            data: this.dead,
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
