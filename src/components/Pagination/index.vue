<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-07 13:43:10
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2023-08-10 18:15:22
-->
<template>
  <el-pagination
    v-model:current-page="page"
    v-model:page-size="size"
    :default-page-size="10"
    :page-sizes="pageSizes"
    :disabled="disabled"
    :background="background"
    :layout="layout"
    :total="total"
    @update:page-size="handleSizeChange"
    @update:current-page="handleCurrentChange"
  />
  <el-button @click="$emit('submit', 100)">100</el-button>
  <el-button @click="$emit('submit', 200)">200</el-button>
</template>

<script setup lang="ts">
import { Pagination } from '@/utils/type'
import { computed, reactive, ref } from 'vue'

const props = withDefaults(defineProps<Pagination>(), {
  currentPage: 1,
  pageSize: 10,
  pageSizes: () => [10, 20, 50, 100],
  disabled: false,
  background: false,
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 100
})

const emits = defineEmits({
  'update:currentPage': null,
  submit(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
    console.log('emit校验')
    console.log(payload)
    return payload > 100 ? true : false
  }
})

const page = computed({
  get() {
    return props.currentPage
  },
  set(newValue) {
    emits('update:pageSize', newValue)
  }
})
const size = computed({
  get() {
    return props.pageSize
  },
  set(newValue) {
    emits('update:pageSize', newValue)
  }
})

// 分页大小变化
const handleSizeChange = (size) => {
  console.log(size)
}
// 翻页
const handleCurrentChange = (page) => {
  console.log(page)
}
</script>

<style lang="scss" scoped>
</style>