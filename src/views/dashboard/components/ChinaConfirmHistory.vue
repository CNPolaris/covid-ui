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
      await getChinaConfirmHistory().then(re=>{
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
          trigger: 'axis'
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
          data: this.date
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '累计确诊',
            data: this.confirmed,
            stack: 'Total',
            type: 'line'
          },
          {
            name: '累计治愈',
            data: this.cured,
            stack: 'Total',
            type: 'line'
          },
          {
            name: '累计死亡',
            data: this.dead,
            stack: 'Total',
            type: 'line'
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
