<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getProvinceDaily } from '@/api/china'

export default {
  name: 'JSProvinceDaily',
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
      queryParam: {
        provinceCode: 'JS'
      },
      date: [],
      confirmed: [],
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
      await getProvinceDaily(this.queryParam).then(re => {
        this.date = re.date
        this.confirmed = re.confirmed
        this.daed = re.date
      })
      this.chart.setOption({
        title: {
          text: '江苏疫情',
          left: 'left'
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
