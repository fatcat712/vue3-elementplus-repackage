<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-09 17:59:39
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-05 10:54:23
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

defineComponent({
  components: {
    ElConfigProvider
  }
})

const zIndex = ref(3000)
const size = ref('default')
</script>

<template>
  <el-config-provider
    :locale="zhCn"
    :size="size"
    :z-index="zIndex"
  >
    <RouterView />
  </el-config-provider>
</template>

<style lang="scss">
@import './assets/index.scss';
</style>