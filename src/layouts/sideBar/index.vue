<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-03 14:21:14
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-05 09:45:27
-->
<template>
  <el-aside :width="isCollapse ? '60px' : '200px'">
    <div class="flex f-e-c pt10 mr15">
      <Icon
        :icon="isCollapse ? 'ri:indent-increase' : 'ri:indent-decrease'"
        color="white"
        :width="24"
        @click="isCollapse = !isCollapse"
      />
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#dbb733"
      background-color="#606266"
      text-color="#fff"
      unique-opened
      :default-active="activePath"
      :router="true"
      @select="handleSelect"
      :collapse="isCollapse"
    >
      <menuItem
        v-for="item in menuList"
        :key="item.path"
        :menu="item"
      >
      </menuItem>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import menuItem from "./item.vue";
import { menu } from "@/data/menu.js";
import { Icon } from '@iconify/vue';

const sortMenu = menu.sort((a, b) => a.sort - b.sort);
const menuList = ref(sortMenu);
let activePath = ref("");
const isCollapse = ref(false)

const route = useRoute();
activePath.value = route.path;

const handleSelect = (key, keyPath) => {
  activePath.value = key;
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-aside {
  background: #606266;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>