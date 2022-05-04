<template>
  <div class="app-container">
    <el-col :span="18">
      <el-row :gutter="40" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="confirmed" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                全国累计确诊
              </div>
              <count-to v-loading="loading" :start-val="0" :end-val="confirmedCount" :duration="2600" class="card-panel-num" />
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="confirmed" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                全国累计死亡病例
              </div>
              <count-to v-loading="loading" :start-val="0" :end-val="deadCount" :duration="2600" class="card-panel-num" />
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="confirmed" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                全国累计治愈
              </div>
              <count-to v-loading="loading" :start-val="0" :end-val="curedCount" :duration="2600" class="card-panel-num" />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12" class="chart-wrapper">
          <province-daily />
        </el-col>
        <el-col :span="12" class="chart-wrapper">
          <china-confirm-history />
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-form :inline="true">
        <el-form-item label="当前省份">
          <el-select v-model="queryPram.provinceCode">
            <el-option v-for="item in provinces" :key="item.key" :value="item.key" :label="item.value" />
          </el-select>
        </el-form-item>
      </el-form>
      <el-row>
        <ul>
          <li>
            累计确诊:{{ provinceConfirmed }}
          </li>
          <li style="margin-top: 10px">
            累计死亡:{{ provinceDead }}
          </li>
          <li>
            昨日新增：{{ dailyData.currentConfirmedCount }}
          </li>
          <li>
            高风险地区：{{ dailyData.highDangerCount }}
          </li>
          <li>
            中风险地区：{{ dailyData.midDangerCount }}
          </li>
        </ul>
      </el-row>
      <el-row>
        <el-button>查看更多疫情统计数据</el-button>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import { mapGetters } from 'vuex'
import ProvinceDaily from '@/views/dashboard/components/ProvinceDaily'
import ChinaConfirmHistory from '@/views/dashboard/components/ChinaConfirmHistory'
import { getChinaCumulateInfo, getYourAddressInfo } from '@/api/china'

export default {
  name: 'Dashboard',
  components: {
    CountTo, ProvinceDaily, ChinaConfirmHistory
  },
  data() {
    return {
      loading: false,
      confirmedCount: 0,
      curedCount: 0,
      deadCount: 0,
      queryPram: {
        provinceCode: 'JS'
      },
      dailyData: {
        currentConfirmedCount: 0,
        highDangerCount: 0,
        midDangerCount: 0
      },
      provinceConfirmed: 0,
      provinceCured: 0,
      provinceDead: 0,
      provinces: [
        { key: 'HLJ', value: '黑龙江' },
        { key: 'XG', value: '香港' },
        { key: 'QH', value: '青海' },
        { key: 'SX', value: '陕西' },
        { key: 'CQ', value: '重庆' },
        { key: 'LN', value: '辽宁' },
        { key: 'GZ', value: '贵州' },
        { key: 'XZ', value: '西藏' },
        { key: 'FJ', value: '福建' },
        { key: 'GS', value: '甘肃' },
        { key: 'AM', value: '澳门' },
        { key: 'HN', value: '湖南' },
        { key: 'HB', value: '湖北' },
        { key: 'HN-2', value: '海南' },
        { key: 'ZJ', value: '浙江' },
        { key: 'HN-1', value: '河南' },
        { key: 'HB-1', value: '河北' },
        { key: 'JX', value: '江西' },
        { key: 'JS', value: '江苏' },
        { key: 'XJ', value: '新疆' },
        { key: 'GX', value: '广西' },
        { key: 'GD', value: '广东' },
        { key: 'SX-1', value: '山西' },
        { key: 'SD', value: '山东' },
        { key: 'AH', value: '安徽' },
        { key: 'NX', value: '宁夏' },
        { key: 'TJ', value: '天津' },
        { key: 'SC', value: '四川' },
        { key: 'JL', value: '吉林' },
        { key: 'TW', value: '台湾' },
        { key: 'BJ', value: '北京' },
        { key: 'NMG', value: '内蒙古' },
        { key: 'YN', value: '云南' },
        { key: 'SH', value: '上海' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    getChinaCumulateInfo().then(re => {
      this.confirmedCount = re.confirmedCount
      this.curedCount = re.cureCount
      this.deadCount = re.deadCount
    })
    getYourAddressInfo(this.queryPram).then(re => {
      this.provinceConfirmed = re.rovinceConfirmed
      this.provinceDead = re.provinceDead
      this.dailyData = re.dailyData
    })
  }
}
</script>
