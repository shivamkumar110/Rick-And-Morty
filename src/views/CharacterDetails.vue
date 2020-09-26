<template>
  <div class="character-details">
    <character-info :info="characterInfo" />
    <div class="align-center margin-t20">
      <el-button>
        <router-link :to="{ name: 'Home' }">Back Home</router-link>
      </el-button>
    </div>
  </div>
</template>
<script src="./js/character-details.js"></script>
<style lang="scss">
.character-details{
    margin-top: 20px;
}
</style>
