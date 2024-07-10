<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-03 15:36:53
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-03-27 14:58:23
-->
<template>
  <el-button type="primary" @click="toggleDark()">切换模式，当前为{{ isDark ? 'Dark' : 'Light' }}</el-button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>