<template>
  <div class="info-wrapper">
    <template v-if="info">

      <el-card class="card">
          <div class="bold">Character Info</div>
        <img :src="info.image" alt="character image" />
        <el-row  :gutter="20">
          <el-col :span="8" class="align-right">
            Name:
          </el-col>
          <el-col :span="16" class="align-left">
            {{ info.name }}
          </el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="8" class="align-right">
            Status:
          </el-col>
          <el-col :span="16" class="align-left">
            <el-tag :type="info.status === 'Alive' ? 'success' : 'danger'">{{
              info.status
            }}</el-tag>
          </el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="8" class="align-right">
            Gender:
          </el-col>
          <el-col :span="16" class="align-left">
            {{ info.gender }}
          </el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="8" class="align-right">
            Species:
          </el-col>
          <el-col :span="16" class="align-left">
            {{ info.species }}
          </el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="8" class="align-right">
            Location:
          </el-col>
          <el-col :span="16" class="align-left">
            {{ info.location.name }}
          </el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="8" class="align-right">
            Episode:
          </el-col>
          <el-col :span="8" class="align-left word-wrap" >
            {{ info.episode.join() }}
          </el-col>
        </el-row>
      </el-card>
    </template>
    <template v-else>
      No info found!
    </template>
  </div>
</template>
<script src="./js/character-info.js"></script>
<style lang="scss" scoped>
.info-wrapper {

  display: flex;
  justify-content: center;
  .card {
      min-width: 40%;
  }
  .el-row{
      margin: 10px 0px;
  }
}
</style>
