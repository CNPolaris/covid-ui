<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getProvinceDailyData } from '@/api/province'

export default {
  name: 'ProvinceDaily',
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
      province: [],
      confirmedCount: [],
      curedCount: [],
      deadCount: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    this.timer = setInterval(() => {
      setTimeout(this.initChart, 0)
    }, 1000 * 60 * 10)
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
      await getProvinceDailyData().then(re => {
        this.province = re.province
        this.confirmedCount = re.confirmedCount
        this.curedCount = re.curedCount
        this.deadCount = re.deadCount
        // console.log(_this.deadCount)
      })
      this.chart.setOption({
        title: {
          text: '昨日各省疫情',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          left: 'right'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.province
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '确诊人数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: this.confirmedCount
          },
          {
            name: '痊愈人数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: this.curedCount
          },
          {
            name: '死亡人数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: this.deadCount
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
