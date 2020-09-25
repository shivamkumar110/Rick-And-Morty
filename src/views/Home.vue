<template>
  <div>
    <el-row>
      <el-col :span="6">
        <locations @on-location-select="handleLocationSelect"/>
      </el-col>
      <el-col :span="18">
        <location-details :details="selectedLocationDetails"/>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./js/home.js"></script>
<style lang="scss" scoped>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
