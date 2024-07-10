<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2024-03-26 13:51:49
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-25 11:41:07
-->
<template>
  <el-button @click="open">打开弹框</el-button>
  <TemplatePromise v-slot="{ promise, resolve, reject, args, isResolving }">
    <el-dialog
      :modelValue="true"
      :title="args[0]"
      center
    >
      <p>可以打开控制台查看logs</p>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
      >
        <el-form-item
          label="姓名"
          prop="name"
        >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
          label="年龄"
          prop="age"
        >
          <el-input v-model="form.age"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="resolve('cancel')"> 取消 </el-button>
          <el-button
            type="primary"
            :disabled="isResolving"
            @click="resolve(validateFn(formRef))"
          >
            {{ isResolving ? 'loading...' : '确定' }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </TemplatePromise>
</template>

<script setup>
import { createTemplatePromise } from '@vueuse/core'
import { ref, reactive } from 'vue'

const formRef = ref(null)
const form = reactive({ name: '张三', age: 10 })
const rules = reactive({
  name: {
    required: true,
    trigger: 'blur',
    message: '请输入姓名'
  },
  age: {
    required: true,
    trigger: 'blur',
    message: '请输入年龄'
  }
})

const TemplatePromise = createTemplatePromise()

const open = async () => {
  const result = await TemplatePromise.start('新增')
  console.log(result)
}

const validateFn = async (formRef) => {
  return new Promise((resolve) => {
    formRef.validate((valid, fields) => {
      if (valid) {
        console.log('校验通过')
        resolve(asyncFn())
      } else {
        console.log('校验失败', fields)
        resolve(false)
      }
    })
  })
}

const asyncFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 100000)
  })
}
</script>
