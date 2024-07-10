<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-03 14:21:26
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2023-08-07 11:09:14
-->
<template>
  <el-sub-menu v-if="menu.children" :index="menu.path">
    <template #title>
      <el-icon><IconMenu /></el-icon>
      <span>{{ menu.name }}</span>
    </template>
    <menuItem v-for="item in menu.children" :key="item.path" :menu="item"></menuItem>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <span>{{ menu.name }}</span>
  </el-menu-item>
</template>

<script setup>
import menuItem from './item.vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

defineProps({
  menu: Object
})
</script>

<style lang="" scoped>
</style>