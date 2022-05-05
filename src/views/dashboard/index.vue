<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="18">
        <el-row :gutter="20" class="panel-group">
          <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper">
                <svg-icon icon-class="confirmed" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  累计确诊
                </div>
                <count-to v-loading="loading" :start-val="0" :end-val="desc.confirmedCount" :duration="2600" class="card-panel-num" />
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper">
                <svg-icon icon-class="confirmedIncr" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  现有确诊
                </div>
                <count-to v-loading="loading" :start-val="0" :end-val="desc.currentConfirmedCount" :duration="2600" class="card-panel-num" />
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper">
                <svg-icon icon-class="serious" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  重症病例
                </div>
                <count-to v-loading="loading" :start-val="0" :end-val="desc.seriousCount" :duration="2600" class="card-panel-num" />
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper">
                <svg-icon icon-class="dead" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  累计死亡
                </div>
                <count-to v-loading="loading" :start-val="0" :end-val="desc.deadCount" :duration="2600" class="card-panel-num" />
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper">
                <svg-icon icon-class="cure" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  累计治愈
                </div>
                <count-to v-loading="loading" :start-val="0" :end-val="desc.curedCount" :duration="2600" class="card-panel-num" />
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper">
                <svg-icon icon-class="curedIncr" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  新增治愈
                </div>
                <count-to v-loading="loading" :start-val="0" :end-val="desc.curedIncr" :duration="2600" class="card-panel-num" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :lg="12">
            <div class="chart-wrapper">
              <province-daily />
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <div class="chart-wrapper">
              <china-confirm-history />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :lg="24">
            <div class="chart-wrapper">
              <ChinaDailyAdd />
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="40" style="margin-top: 10px">
          <el-col :xs="24" :sm="24" :lg="24">
            <div class="chart-wrapper">
              <china-map />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <el-form :inline="true">
          <el-form-item label="当前省份">
            <el-select v-model="queryPram.provinceCode" @change="getAddress">
              <el-option v-for="item in provinces" :key="item.key" :value="item.key" :label="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
        <el-row style="background: #fff; margin-top: 10px">
          <ul>
            <li>
              <h4 style="font-size: 14px">
                累计确诊:{{ provinceConfirmed }}
              </h4>
            </li>
            <li>
              <h4 style="font-size: 14px">
                累计死亡:{{ provinceDead }}
              </h4>
            </li>
            <li>
              <h4 style="font-size: 14px">
                昨日新增：{{ dailyData.currentConfirmedCount }}
              </h4>
            </li>
          </ul>
        </el-row>
        <el-row style="background: #fff; margin-top: 10px;">
          <div style="margin-left: 10px">
            <h3>
              疫情资讯
            </h3>
            <div v-for="item in news" :key="item.id">
              <h4>
                <a @click="sourceNew(item.sourceUrl)" style="font-size: 14px">{{ item.title }}</a>
              </h4>
            </div>
          </div>
        </el-row>
        <el-row style="background: #fff; margin-top: 10px">
          <div style="margin-left: 10px">
            <h3 style="color: #ef5610">
              高风险地区
            </h3>
            <div v-for="(item,index) in riskarea.high" :key="index">
              <a style="font-size: 14px">{{ item }}</a>
            </div>
          </div>
        </el-row>
        <el-row style="margin-top: 10px">
          <h3>较昨日各省市疫情变化</h3>
          <el-table :data="provinceCompareList" max-height="840">
            <el-table-column prop="name" label="省市" />
            <el-table-column prop="add" label="新增确诊" />
            <el-table-column prop="dead" label="新增死亡" />
            <el-table-column prop="heal" label="新增治愈" />
          </el-table>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import { mapGetters } from 'vuex'
import ProvinceDaily from '@/views/dashboard/components/ProvinceDaily'
import ChinaConfirmHistory from '@/views/dashboard/components/ChinaConfirmHistory'
import ChinaMap from '@/views/dashboard/components/ChinaMap'
import ChinaDailyAdd from '@/views/dashboard/components/ChinaDailyAdd'
import { getChinaCumulateInfo, getYourAddressInfo, getNewsList, getChinaDailyList } from '@/api/china'

export default {
  name: 'Dashboard',
  components: {
    CountTo, ProvinceDaily, ChinaConfirmHistory, ChinaMap, ChinaDailyAdd
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
      ],
      news: [],
      riskarea: {
        high: [],
        mid: []
      },
      desc: {
        confirmedCount: 0,
        confirmedIncr: 0,
        curedCount: 0,
        curedIncr: 0,
        currentConfirmedCount: 0,
        currentConfirmedIncr: 0,
        deadCount: 0,
        deadIncr: 0,
        seriousCount: 0
      },
      provinceCompareList: []
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
      this.curedCount = re.curedCount
      this.deadCount = re.deadCount
    })
    this.getAddress()
    getNewsList().then(re => {
      this.desc = re.newslist[0].desc
      this.news = re.newslist[0].news
      this.riskarea = re.newslist[0].riskarea
    })
    this.getChinaDaily()
  },
  methods: {
    getAddress() {
      getYourAddressInfo(this.queryPram).then(re => {
        this.provinceConfirmed = re.provinceConfirmed
        this.provinceDead = re.provinceDead
        this.dailyData = re.dailyData
      })
    },
    getChinaDaily() {
      getChinaDailyList().then(re => {
        for( let item in re.data.provinceCompare){
          this.provinceCompareList.push({name:item,add: re.data.provinceCompare[item].confirmAdd, dead:re.data.provinceCompare[item].dead, heal:re.data.provinceCompare[item].heal })
        }
      })
    },
    sourceNew(url) {
      window.open(url,'_blank')
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
