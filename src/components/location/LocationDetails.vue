<template>
  <div>
    <el-card class="cards-wrapper">
      <div v-if="details">
        Location Details : {{details.name}}
        <el-card> Name: {{ details.name || "-" }} </el-card>
        <el-card> Dimension: {{ details.dimension || "-" }} </el-card>
        <el-card> Type: {{ details.type || "-" }} </el-card>
        <el-card>
          Created: {{ new Date(details.created).toLocaleDateString() || "-" }}
        </el-card>
        <el-card>
          No of Residents:: {{ details.residents.length || "-" }}
        </el-card>
      </div>
      <div v-else>Select Location to see info</div>
    </el-card>
  </div>
</template>
<script src="./js/location-details.js"></script>
<style lang="scss" scoped>
.cards-wrapper {
  padding: 40px 20px;
  .el-card {
margin: 20px 0px;
    }
}

</style>
