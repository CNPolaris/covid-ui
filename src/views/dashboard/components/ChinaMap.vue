<template>
  <div :style="{height: height, width: width}" />
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
require('echarts/theme/macarons')
import { getProvinceCurrent } from '@/api/china'

export default {
  name: 'ChinaMap',
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
      default: '600px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      province: null
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
      await getProvinceCurrent().then(re=>{
        this.province = re
      })
      this.chart.setOption({
        title: {
          text: '全国新冠疫情'
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2
        },
        visualMap: {
          min: 1,
          max : 1500,
          text: ['严重', '一般'],
          realtime: true,
          calculable: true,
          inRange: {
            color: ['lightblue', 'yellow','orange', 'darkorange', 'red', 'darkred']
          }
        },
        series: [
          {
            name: '各省现存病例',
            type: 'map',
            map: 'china',
            roam: true,
            label:{
              show: true
            },
            data: [
              {name: this.province['name'][0], value: this.province['value'][0]},
              {name: this.province['name'][1], value: this.province['value'][1]},
              {name: this.province['name'][2], value: this.province['value'][2]},
              {name: this.province['name'][3], value: this.province['value'][3]},
              {name: this.province['name'][4], value: this.province['value'][4]},
              {name: this.province['name'][5], value: this.province['value'][5]},
              {name: this.province['name'][6], value: this.province['value'][6]},
              {name: this.province['name'][7], value: this.province['value'][7]},
              {name: this.province['name'][8], value: this.province['value'][8]},
              {name: this.province['name'][9], value: this.province['value'][9]},
              {name: this.province['name'][10], value: this.province['value'][10]},
              {name: this.province['name'][11], value: this.province['value'][11]},
              {name: this.province['name'][12], value: this.province['value'][12]},
              {name: this.province['name'][13], value: this.province['value'][13]},
              {name: this.province['name'][14], value: this.province['value'][14]},
              {name: this.province['name'][15], value: this.province['value'][15]},
              {name: this.province['name'][16], value: this.province['value'][16]},
              {name: this.province['name'][17], value: this.province['value'][17]},
              {name: this.province['name'][18], value: this.province['value'][18]},
              {name: this.province['name'][19], value: this.province['value'][19]},
              {name: this.province['name'][20], value: this.province['value'][20]},
              {name: this.province['name'][21], value: this.province['value'][21]},
              {name: this.province['name'][22], value: this.province['value'][22]},
              {name: this.province['name'][23], value: this.province['value'][23]},
              {name: this.province['name'][24], value: this.province['value'][24]},
              {name: this.province['name'][25], value: this.province['value'][25]},
              {name: this.province['name'][26], value: this.province['value'][26]},
              {name: this.province['name'][27], value: this.province['value'][27]},
              {name: this.province['name'][28], value: this.province['value'][28]},
              {name: this.province['name'][29], value: this.province['value'][29]},
              {name: this.province['name'][30], value: this.province['value'][30]},
              {name: this.province['name'][31], value: this.province['value'][31]},
              {name: this.province['name'][32], value: this.province['value'][32]},
              {name: this.province['name'][33], value: this.province['value'][33]}
            ]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
