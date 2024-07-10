<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-02 17:45:55
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-04 11:33:44
-->
<template>
  <div class="common-layout">
    <el-container>
      <SideBar></SideBar>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import SideBar from './sideBar/index.vue'
import { reactive, ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.common-layout {
  @include h100;

  .el-container {
    @include h100;
  }
}
</style>