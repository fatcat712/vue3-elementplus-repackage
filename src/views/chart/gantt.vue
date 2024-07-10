<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2024-06-04 10:08:30
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-04 10:32:36
-->
<template>
  <el-tabs v-model="active">
    <el-tab-pane
      label="图1"
      name="gantt1"
    >
      <Gantt1 />
    </el-tab-pane>
    <el-tab-pane
      label="图2"
      name="gantt2"
    >
      <Gantt2 />
    </el-tab-pane>
    <el-tab-pane
      label="图3"
      name="gantt3"
    >
      <Gantt3 />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Gantt1 from './components/gantt1.vue'
import Gantt2 from './components/gantt2.vue'
import Gantt3 from './components/gantt3.vue'
defineOptions({
  name: 'Gantt'
})

const active = ref('gantt1')
</script>

<style lang="scss" scoped></style>