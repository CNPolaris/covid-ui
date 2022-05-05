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
          data: this.updateTime
        },
        yAxis: [
          {
            type: 'value',
          },
          {
            type: 'value',
          },
          {
            type: 'value',
          },
          {
            type: 'value',
          },
          {
            type: 'value',
          },
          {
            type: 'value',
          },
          {
            type: 'value',
          },
          {
            type: 'value',
          }
        ],
        series: [
          {
            name: '累计确诊',
            type: 'bar',
            data: this.confirmedCount
          },
          {
            name: '累计治愈',
            type: 'bar',
            data: this.curedCount
          },
          {
            name: '累计死亡',
            type: 'bar',
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            },
            data: this.deadCount
          },
          {
            name: '治愈率',
            type: 'line',
            data: this.curedRate
          },
          {
            name: '死亡率',
            type: 'line',
            data: this.deadRate
          },
          {
            name: '现存确诊',
            type: 'line',
            data: this.insickCount
          },
          {
            name: '新增确诊',
            type: 'line',
            data: this.confirmedIncreased
          },
          {
            name: '新增死亡',
            type: 'line',
            data: this.deadIncreased
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
