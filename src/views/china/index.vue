<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <country-line />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <JSProvinceDaily />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="chart-wrapper">
          <province-compare />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :lg="24">
        <div  class="chart-wrapper">
          <china-map />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountryLine from '@/views/china/components/CountryLine'
import JSProvinceDaily from '@/views/china/components/JSProvinceDaily'
import ProvinceCompare from '@/views/china/components/ProvinceCompare'
import ChinaMap from '@/views/dashboard/components/ChinaMap'
export default {
  name: 'China',
  components: {
    ChinaMap,
    CountryLine, JSProvinceDaily, ProvinceCompare
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

