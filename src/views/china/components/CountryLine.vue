<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getChinaAll } from '@/api/china'

export default {
  name: 'CountryLine',
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
      records: [],
      confirmedCount: [],
      confirmedIncreased: [],
      curedCount: [],
      curedRate: [],
      deadCount: [],
      deadRate: [],
      deadIncreased: [],
      insickCount: [],
      updateTime: []
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
      await getChinaAll().then(re=> {
        this.records = re.records
      })
      const _this = this
      for (let i = 0; i < this.records.length; i++) {
        _this.updateTime.push(this.records[i].updateTime)
        _this.confirmedCount.push(this.records[i].confirmedCount)
        _this.confirmedIncreased.push(this.records[i].confirmedIncreased)
        _this.curedCount.push(this.records[i].curedCount)
        _this.curedRate.push(this.records[i].curedRate)
        _this.deadCount.push(this.records[i].deadCount)
        _this.deadRate.push(this.records[i].deadRate)
        _this.deadIncreased.push(this.records[i].deadIncreased)
        _this.insickCount.push(this.records[i].insickCount)
      }
      this.chart.setOption({
        title: {
          text: '全国疫情',
          left: 'left'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.updateTime
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '累计确诊',
            data: this.confirmedCount,
            stack: 'Total',
            type: 'bar'
          },
          {
            name: '累计治愈',
            data: this.curedCount,
            stack: 'Total',
            type: 'bar'
          },
          {
            name: '累计死亡',
            data: this.deadCount,
            stack: 'Total',
            type: 'bar'
          },
          {
            name: '治愈率',
            data: this.curedRate,
            type: 'line'
          },
          {
            name: '死亡率',
            data: this.deadRate,
            smooth: true,
            type: 'line'
          },
          {
            name: '现存确诊',
            data: this.insickCount,
            stack: 'Total',
            type: 'line'
          },
          {
            name: '新增确诊',
            data: this.confirmedIncreased,
            stack: 'Total',
            type: 'line'
          },
          {
            name: '新增死亡',
            data: this.deadIncreased,
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
