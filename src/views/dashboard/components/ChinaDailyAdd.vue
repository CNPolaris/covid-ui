<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getChinaDailyList } from '@/api/china'

export default {
  name: 'ChinaDailyAdd',
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
      date: [],
      confirmed: []
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
      const _this = this
      await getChinaDailyList().then(re => {
        for(let item of re.data.chinaDayAddList){
          this.date.push(item.date)
          this.confirmed.push(item.confirm)
        }
      })
      this.chart.setOption({
        title: {
          text: '近期全国新增病例趋势'
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
          axisPointer: {
            type: 'shadow'
          }
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: ['本土新增确诊']
        },
        series: [
          {
            name: '新增确诊',
            type: 'line',
            data: this.confirmed
          }
        ]
      })
    }
  }
}
</script>
