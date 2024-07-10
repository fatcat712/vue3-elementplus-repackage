/*
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-09 17:59:39
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-07-09 11:46:53
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/vue3",
      name: "vue3",
      redirect: '/vue3/combineFunc',
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: "elementplus二次封装"
      },
      children: [
        {
          path: "combineFunc",
          name: "combineFunc",
          component: () => import("@/views/vue3/combineFunc/index.vue"),
          meta: {
            title: "组合式函数"
          }
        }]
    },
    {
      path: "/repackage",
      name: "repackage",
      redirect: '/repackage/table',
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: "elementplus二次封装"
      },
      children: [
        {
          path: "table",
          name: "table",
          component: () => import("@/views/repackage/table/index.vue"),
          meta: {
            title: "基础表格"
          }
        },
        {
          path: "tagInput",
          name: "tagInput",
          component: () => import("@/views/repackage/tagInput/index.vue"),
          meta: {
            title: "带tag的搜索框"
          }
        },
      ]
    },
    {
      path: "/vueUse",
      name: "vueUse",
      redirect: '/vueUse/useDark',
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: "VueUse"
      },
      children: [
        {
          path: "useDark",
          name: "useDark",
          component: () => import("@/views/vueUse/useDark.vue"),
          meta: {
            title: "useDark"
          }
        },
        {
          path: "useTemplatePromise",
          name: "useTemplatePromise",
          component: () => import("@/views/vueUse/useTemplatePromise.vue"),
          meta: {
            title: "useTemplatePromise"
          }
        },
      ]
    },
    {
      path: "/library",
      name: "library",
      redirect: '/library/upload',
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: "第三方库"
      },
      children: [
        {
          path: "bigFileUpload",
          name: "bigFileUpload",
          component: () => import("@/views/library/bigFileUpload/index.vue"),
          meta: {
            title: "大文件分片上传"
          }
        },
        {
          path: "vue3TreeOrg",
          name: "vue3TreeOrg",
          component: () => import("@/views/library/vue3TreeOrg/index.vue"),
          meta: {
            title: "vue3TreeOrg"
          }
        }
      ]
    },
    {
      path: "/workbench",
      name: "workbench",
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: ""
      },
      children: [
        {
          path: "index",
          name: "index",
          component: () => import("@/views/workbench/index.vue"),
          meta: {
            title: "草稿"
          }
        }]
    },
    {
      path: "/chart",
      name: "chart",
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: ""
      },
      children: [
        {
          path: "gantt",
          name: "gantt",
          component: () => import("@/views/chart/gantt.vue"),
          meta: {
            title: "甘特图"
          }
        },
        {
          path: "fullcalendar",
          name: "fullcalendar",
          component: () => import("@/views/chart/fullcalendar.vue"),
          meta: {
            title: "fullcalendar"
          }
        },
      ]
    },
    {
      path: "/others",
      name: "others",
      component: () => import("@/layouts/index.vue"),
      meta: {
        title: ""
      },
      children: [
        {
          path: "webworker",
          name: "webworker",
          component: () => import("@/views/others/webworker.vue"),
          meta: {
            title: "web worker"
          }
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/workbench/index'
    }
  ]
})

export default router
