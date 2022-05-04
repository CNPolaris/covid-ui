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
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import { mapGetters } from 'vuex'
import ProvinceDaily from '@/views/dashboard/components/ProvinceDaily'
import ChinaConfirmHistory from '@/views/dashboard/components/ChinaConfirmHistory'
import { getChinaCumulateInfo } from '@/api/china'

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
      deadCount: 0
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
      this.deadCount = re.cureCount
    })
  }
}
</script>
