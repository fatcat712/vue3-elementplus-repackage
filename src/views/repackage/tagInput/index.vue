<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2024-07-09 10:40:45
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-07-09 10:54:03
-->
<template>
  <el-form
    :inline="true"
    :model="listQuery"
  >
    <el-form-item>
      <TagInput
        v-model:tags="listQuery.productName"
        placeholder="可输入多个物料名称搜索"
      ></TagInput>
    </el-form-item>
    <el-form-item>
      <TagInput
        v-model:tags="listQuery.productCode"
        placeholder="可输入多个物料编码搜索"
      ></TagInput>
    </el-form-item>
    <el-form-item>
      <el-input
        v-model.trim="listQuery.specification"
        placeholder="请输入物料规格"
        clearable
        class="s-size"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
      >查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const listQuery = reactive({
  productCode: [],
  productName: [],
  specification: ''
});
</script>

<style lang="scss" scoped></style>