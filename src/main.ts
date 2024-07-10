/*
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-09 17:59:39
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-07-09 13:24:14
 */
import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/dist/index.css'
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

const app = createApp(App)

//全局组件自动化注册
const globalModules = import.meta.glob([
  "./components/*/index.vue",
  "./components/*.vue"
]);
for (const [pathname, component] of Object.entries(globalModules)) {
  const keyArr = pathname
    .replace("./components/", "")
    .split("/")
    .reverse();
  const key = keyArr.length > 1 ? keyArr[1] : keyArr[0].replace(".vue", "");
  app.component(key, defineAsyncComponent(component));
}

app.use(createPinia())
  .use(router)
  .use(vue3TreeOrg)
  .mount('#app')