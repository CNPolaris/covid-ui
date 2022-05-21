<template>
  <div class="dashboard-editor-container">
    <el-row v-loading="listLoading">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-XG" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-TW" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-HLJ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-QH" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-SX" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-CQ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-LN" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-GZ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-XZ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-FJ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-GS" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-AM" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-HN" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-HB" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-HN-2" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-ZJ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-HN-1" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-HB-1" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-JX" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-JS" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-XJ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-GX" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-GD" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-SX-1" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-SD" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-AH" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-NX" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-TJ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-SC" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-JL" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-BJ" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-NMG" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-YN" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div id="charts-SH" style="width: 100%; height: 300px" class="chart-wrapper" />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { getProvinceAll, getProvinceData } from '@/api/china'
import echarts from 'echarts'
export default {
  name: 'Province',
  data() {
    return {
      echartsXGAction: null,
      echartsTWAction: null,
      echartsHLJAction: null,
      echartsQHAction: null,
      echartsSXAction: null,
      echartsCQAction: null,
      echartsLNAction: null,
      echartsGZAction: null,
      echartsXZAction: null,
      echartsFJAction: null,
      echartsGSAction: null,
      echartsAMAction: null,
      echartsHNAction: null,
      echartsHBAction: null,
      echartsHN2Action: null,
      echartsZJAction: null,
      echartsHN1Action: null,
      echartsHB1Action: null,
      echartsJXAction: null,
      echartsJSAction: null,
      echartsXJAction: null,
      echartsGXAction: null,
      echartsGDAction: null,
      echartsSX1Action: null,
      echartsSDAction: null,
      echartsAHAction: null,
      echartsNXAction: null,
      echartsTJAction: null,
      echartsSCAction: null,
      echartsJLAction: null,
      echartsBJAction: null,
      echartsNMGAction: null,
      echartsYNAction: null,
      echartsSHAction: null,
      confirmedCount:[],
      confirmedIncreased: [],
      curedCount: [],
      curedRate: [],
      deadCount: [],
      deadRate: [],
      deadIncreased: [],
      insickCount: [],
      updateTime: [],
      listLoading: true
    }
  },
  mounted() {
    this.listLoading = true
    this.echartsXGAction = echarts.init(document.getElementById('charts-XG'),'macarons')
    this.echartsTWAction = echarts.init(document.getElementById('charts-TW'),'macarons')
    this.echartsHLJAction = echarts.init(document.getElementById('charts-HLJ'),'macarons')
    this.echartsQHAction = echarts.init(document.getElementById('charts-QH'),'macarons')
    this.echartsSXAction = echarts.init(document.getElementById('charts-SX'),'macarons')
    this.echartsCQAction = echarts.init(document.getElementById('charts-CQ'),'macarons')
    this.echartsLNAction = echarts.init(document.getElementById('charts-LN'),'macarons')
    this.echartsGZAction = echarts.init(document.getElementById('charts-GZ'),'macarons')
    this.echartsXZAction = echarts.init(document.getElementById('charts-XZ'),'macarons')
    this.echartsFJAction = echarts.init(document.getElementById('charts-FJ'),'macarons')
    this.echartsGSAction = echarts.init(document.getElementById('charts-GS'),'macarons')
    this.echartsAMAction = echarts.init(document.getElementById('charts-AM'),'macarons')
    this.echartsHNAction = echarts.init(document.getElementById('charts-HN'),'macarons')
    this.echartsHBAction = echarts.init(document.getElementById('charts-HB'),'macarons')
    this.echartsHN2Action = echarts.init(document.getElementById('charts-HN-2'),'macarons')
    this.echartsZJAction = echarts.init(document.getElementById('charts-ZJ'),'macarons')
    this.echartsHN1Action = echarts.init(document.getElementById('charts-HN-1'),'macarons')
    this.echartsHB1Action = echarts.init(document.getElementById('charts-HB-1'),'macarons')
    this.echartsJXAction = echarts.init(document.getElementById('charts-JX'),'macarons')
    this.echartsJSAction = echarts.init(document.getElementById('charts-JS'),'macarons')
    this.echartsXJAction = echarts.init(document.getElementById('charts-XJ'),'macarons')
    this.echartsGXAction = echarts.init(document.getElementById('charts-GX'),'macarons')
    this.echartsGDAction = echarts.init(document.getElementById('charts-GD'),'macarons')
    this.echartsSX1Action = echarts.init(document.getElementById('charts-SX-1'),'macarons')
    this.echartsSDAction = echarts.init(document.getElementById('charts-SD'),'macarons')
    this.echartsAHAction = echarts.init(document.getElementById('charts-AH'),'macarons')
    this.echartsNXAction = echarts.init(document.getElementById('charts-NX'),'macarons')
    this.echartsTJAction = echarts.init(document.getElementById('charts-TJ'),'macarons')
    this.echartsSCAction = echarts.init(document.getElementById('charts-SC'),'macarons')
    this.echartsJLAction = echarts.init(document.getElementById('charts-JL'),'macarons')
    this.echartsBJAction = echarts.init(document.getElementById('charts-BJ'),'macarons')
    this.echartsNMGAction = echarts.init(document.getElementById('charts-NMG'),'macarons')
    this.echartsYNAction = echarts.init(document.getElementById('charts-YN'),'macarons')
    this.echartsSHAction = echarts.init(document.getElementById('charts-SH'),'macarons')
    const _this = this
    getProvinceAll().then(re => {
      const provinces = re.provinces
      for(let i = 0; i < provinces.length; i++) {
        // let records = provinces[i].records
        let provinceName = provinces[i].provinceName
        let confirmedCount = []
        let confirmedIncreased = []
        let curedCount = []
        let curedRate = []
        let deadCount = []
        let deadIncreased = []
        let deadRate = []
        let updateTime = []
        getProvinceData(provinceName).then(re => {
          for (let j=0; j < re.data.length; j++) {
            updateTime.push(re.data[j].date)
            // 累计确诊
            confirmedCount.push(re.data[j].confirm)
            // 累计死亡
            deadCount.push(re.data[j].dead)
            // 新增死亡
            deadIncreased.push(re.data[j].newDead)
            // 累计治愈
            curedCount.push(re.data[j].heal)
            // 新增确诊
            confirmedIncreased.push(re.data[j].newConfirm)
            // 治愈率
            curedRate.push(Math.round(re.data[j].heal / re.data[j].confirm * 10000) / 100.00 + '%')
            // 死亡率
            deadRate.push(Math.round(re.data[j].dead / re.data[j].confirm * 10000) / 100.00 + '%')
          }
          switch (provinceName) {
            case '香港':
              _this.echartsXGAction.setOption(this.option('香港',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '黑龙江':
              _this.echartsHLJAction.setOption(this.option('黑龙江',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '青海':
              _this.echartsQHAction.setOption(this.option('青海',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '陕西':
              _this.echartsSXAction.setOption(this.option('陕西', updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '重庆':
              _this.echartsCQAction.setOption(this.option('重庆',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '辽宁':
              _this.echartsLNAction.setOption(this.option('辽宁', updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '贵州':
              _this.echartsGZAction.setOption(this.option('贵州', updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '西藏':
              _this.echartsXZAction.setOption(this.option('西藏',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '福建':
              _this.echartsFJAction.setOption(this.option('福建',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '甘肃':
              _this.echartsGSAction.setOption(this.option('甘肃',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '澳门':
              _this.echartsAMAction.setOption(this.option('澳门',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '湖南':
              _this.echartsHNAction.setOption(this.option('湖南',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '湖北':
              _this.echartsHBAction.setOption(this.option('湖北',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '海南':
              _this.echartsHN2Action.setOption(this.option('海南',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '浙江':
              _this.echartsZJAction.setOption(this.option('浙江',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '河南':
              _this.echartsHN1Action.setOption(this.option('河南',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '河北':
              _this.echartsHB1Action.setOption(this.option('河北',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '江西':
              _this.echartsJXAction.setOption(this.option('江西',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '江苏':
              _this.echartsJSAction.setOption(this.option('江苏',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '新疆':
              _this.echartsXJAction.setOption(this.option('新疆',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '广西':
              _this.echartsGXAction.setOption(this.option('广西',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '广东':
              _this.echartsGDAction.setOption(this.option('广东',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '山西':
              _this.echartsSX1Action.setOption(this.option('山西',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '山东':
              _this.echartsSDAction.setOption(this.option('山东',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '安徽':
              _this.echartsAHAction.setOption(this.option('安徽',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '宁夏':
              _this.echartsNXAction.setOption(this.option('宁夏',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '天津':
              _this.echartsTJAction.setOption(this.option('天津',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '四川':
              _this.echartsSCAction.setOption(this.option('四川',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '吉林':
              _this.echartsJLAction.setOption(this.option('吉林',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '台湾':
              _this.echartsTWAction.setOption(this.option('台湾',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '北京':
              _this.echartsBJAction.setOption(this.option('北京',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '内蒙古':
              _this.echartsNMGAction.setOption(this.option('内蒙古',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '云南':
              _this.echartsYNAction.setOption(this.option('云南',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
            case '上海':
              _this.echartsSHAction.setOption(this.option('上海',updateTime,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate))
              break
          }
        })
      }
    })
    setTimeout(() => {
      this.listLoading = false
    }, 1000*5)
  },
  methods: {
    option(title, label,confirmedCount,deadCount,deadIncreased,curedCount,confirmedIncreased,curedRate,deadRate) {
      return {
        title: {
          text: title,
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
        legend: {
          left: 'right',
          data: ['累计确诊','新增确诊','累计死亡','新增死亡','死亡率','治愈率','治愈病例']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: label
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        yAxis: [
          {
            type: 'value'
          },
          {
            type: 'value'
          },
          {
            type: 'value'
          },
          {
            type: 'value'
          },
          {
            type: 'value'
          },
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
            type: 'line',
            data: confirmedCount
          },
          {
            name: '新增确诊',
            type: 'line',
            data: confirmedIncreased
          },
          {
            name: '累计死亡',
            type: 'bar',
            data: deadCount
          },
          {
            name: '新增死亡',
            type: 'line',
            data: deadIncreased
          },
          {
            name: '死亡率',
            type: 'line',
            data: deadRate
          },
          {
            name: '治愈率',
            type: 'line',
            data: curedRate
          },
          {
            name: '治愈病例',
            type: 'line',
            data: curedCount
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
