<template>
  <div>
    <el-table v-loading="loading" :data="availableLocations" max-height="700" @row-click="handleLocationClick">
      <el-table-column prop="name" label="Locations"> </el-table-column>
    </el-table>
    <div class="stick-to-bottom">
    <el-pagination
      background
      hide-on-single-page
      @current-change="changeLocationsPage"
      layout="prev, pager, next"
      :page-size="20"
      :total="locationsInfo.count"
    >
    </el-pagination>
    </div>

  </div>
</template>
<script src="./js/locations.js"></script>
<style lang="scss" scoped></style>
