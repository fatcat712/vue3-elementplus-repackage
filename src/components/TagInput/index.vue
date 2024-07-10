<!--
 * @Description: 带tag的输入框
 * @Author: zhanyinjia
 * @Date: 2024-07-09 10:48:36
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-07-09 10:59:50
-->
<template>
  <div class="wrap">
    <div class="flex f-s-c">
      <el-tag
        class="mt1 ml6"
        v-for="(tag, index) in cutTags(tags)"
        :key="index"
        size="small"
        closable
        @close="delTag(index)"
      >{{ tag }}</el-tag>
      <el-tooltip
        v-if="tags.length > max"
        class="item"
        effect="light"
        placement="bottom-start"
        trigger="click"
      >
        <div>
          <el-tag
            v-if="tags.length > max"
            class="more"
            size="small"
            style="cursor:pointer;"
          >+{{ tags.length - max }}</el-tag>
        </div>
        <template #content>
          <div class="more-tags">
            <template
              v-for="(tag, index) in tags"
              :key="index"
            >
              <el-tag
                v-if="index >= max"
                class="hide-tag"
                size="small"
                closable
                @close="delTag(index)"
              >{{ tag }}</el-tag>
            </template>
          </div>
        </template>
      </el-tooltip>
      <el-input
        class="auto-size flex-auto"
        v-model.trim="word"
        :placeholder="placeholder"
        @keydown.enter.native="addTag"
      ></el-input>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const tags = defineModel('tags', { type: Array, default: () => [] })

const props = defineProps({
  max: {
    type: Number,
    default: 2
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
})

const word = ref([])

const cutTags = (list) => {
  return list.slice(0, props.max)
}
const addTag = () => {
  if (tags.value.includes(word.value) || !word.value) return
  tags.value.push(word.value)
  word.value = ''
}
const delTag = (index) => {
  tags.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.wrap {
  display: inline-block;
  border: 1px solid #dcdfe6;
  padding: 0 5px 0 0;
  border-radius: 4px;
}

.more {
  margin: -4px 0 0 6px;
}

.auto-size {
  width: auto;
}

:deep(.el-input__wrapper) {
  border: 1px solid transparent;
  box-shadow: none;
}

:deep(.el-input__inner) {
  height: 26px;
  line-height: 26px;
}

:deep(.el-tooltip__trigger) {
  height: 30px;
}

.more-tags {
  max-width: 360px;

  .hide-tag {
    margin-right: 6px;

    &:last-child {
      margin-right: 0
    }
  }
}
</style>