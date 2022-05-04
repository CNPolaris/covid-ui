<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <country-line />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountryLine from '@/views/china/components/CountryLine'
export default {
  name: 'China',
  components: {
    CountryLine
  }
}
</script>

<style scoped>

</style>
