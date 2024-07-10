<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2024-03-20 14:24:11
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-25 11:40:46
-->
<template>
  <div class="f-s-c">
    <el-card style="max-width: 380px;margin-right:20px;">
      <template #header>
        <div class="card-header">
          <span>耗时计算放在主线程中处理</span>
        </div>
      </template>
      <div>{{ result1 }}</div>
      <el-button
        type="primary"
        @click="normalCalc"
      >计算一个很大的值</el-button>
      <el-input v-model="form.name1"></el-input>
      <el-select v-model="form.age1">
        <el-option
          :value="20"
          label="20"
        ></el-option>
        <el-option
          :value="30"
          label="30"
        ></el-option>
        <el-option
          :value="40"
          label="40"
        ></el-option>
      </el-select>
    </el-card>
    <el-card style="max-width: 380px">
      <template #header>
        <div class="card-header">
          <span>使用web worker另开线程处理耗时计算</span>
        </div>
      </template>
      <div>{{ result2 }}</div>
      <el-button
        type="primary"
        @click="workerCalc"
      >计算一个很大的值</el-button>
      <el-input v-model="form.name2"></el-input>
      <el-select v-model="form.age2">
        <el-option
          :value="20"
          label="20"
        ></el-option>
        <el-option
          :value="30"
          label="30"
        ></el-option>
        <el-option
          :value="40"
          label="40"
        ></el-option>
      </el-select>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const result1 = ref(0)
const result2 = ref(0)
const form = ref({
  name1: '',
  age1: '',
  name2: '',
  age2: ''
})


const normalCalc = () => {
  let res = 0
  for (let index = 0; index < 10000000000; index++) {
    res = res + index
  }
  result1.value = res
}

const workerCalc = () => {
  const worker = new Worker("/worker.js");

  worker.postMessage({
    command: "generate",
    quota: 100,
  });

  // 当 worker 给主线程回发一条消息时，为用户更新 output 框，包含生成的质数（从 message 中获取）。
  worker.addEventListener("message", (message) => {
    console.log('worker回传的消息：', message);
    result2.value = message.data
  });
}
</script>
<style scoped lang="">
</style>