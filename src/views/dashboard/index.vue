<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="12">
        <province-daily />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProvinceDaily from '@/views/dashboard/components/ProvinceDaily'
export default {
  name: 'Dashboard',
  components: {
    ProvinceDaily
  },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
