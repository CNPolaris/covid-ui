<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getProvinceCompare } from '@/api/china'
export default {
  name: 'ProvinceCompare',
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
      provinces: [],
      confirmAdd: [],
      dead: [],
      heal: []
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
      await getProvinceCompare().then(re => {
        for (let item in re.provinceCompare){
          this.provinces.push(item)
          this.confirmAdd.push(re.provinceCompare[item].confirmAdd)
          this.dead.push(re.provinceCompare[item].dead)
          this.heal.push(re.provinceCompare[item].heal)
        }
      })
      this.chart.setOption({
        title: {
          text: '国内各省目前趋势'
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
            data: this.provinces
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '新增确诊',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: this.confirmAdd
          },
          {
            name: '新增死亡',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: this.dead
          },
          {
            name: '新增治愈',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: this.heal
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
