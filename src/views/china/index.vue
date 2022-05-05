<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <country-line />
      </el-col>
      <el-col :span="12">
        <JSProvinceDaily />
      </el-col>
    </el-row>
    <el-row>
      <province-compare />
    </el-row>
    <el-row>
      <china-map />
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

<style scoped>

</style>
