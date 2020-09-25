<template>
  <div>
    <el-card class="cards-wrapper">
      <div v-if="details">
        Location Details : {{ details.name }}
        <el-card>
          <div>Name: {{ details.name || "-" }}</div>
          <div>Dimension: {{ details.dimension || "-" }}</div>
          <div>Type: {{ details.type || "-" }}</div>
          <div>
            Created: {{ new Date(details.created).toLocaleDateString() || "-" }}
          </div>
          <div>No. of Residents: {{ details.residents.length || "-" }}</div>
        </el-card>

        <div class="character" v-loading="isCharactersLoading">
          <el-row>
            <el-col
              :span="8"
              v-for="character in charactersList"
              :key="character.id"
            >
              <el-card>
                <img :src="character.image" class="image" />
                <div>
                    Name: {{character.name}}
                    <el-tag :type="character.status === 'Alive'? 'success': 'danger'">{{character.status}}</el-tag>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
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
