/*
 * @Description: 菜单
 * @Author: zhanyinjia
 * @Date: 2023-08-03 14:23:39
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-07-09 13:59:54
 */
export const menu = [
  {
    name: 'vue3实践',
    path: '/vue3',
    sort: 30,
    children: [
      {
        name: '组合式函数',
        path: '/vue3/combineFunc',
      },
    ]
  },
  {
    name: 'elementplus二次封装',
    path: '/repackage',
    sort: 20,
    children: [
      {
        name: 'table',
        path: '/repackage/table',
      },
      {
        name: 'tagInput',
        path: '/repackage/tagInput',
      },
    ]
  },
  {
    name: 'vueUse',
    path: '/vueUse',
    sort: 40,
    children: [
      {
        name: 'useDark',
        path: '/vueUse/useDark',
      },
      {
        name: 'useTemplatePromise',
        path: '/vueUse/useTemplatePromise',
      },
    ]
  },
  {
    name: '第三方库',
    path: '/library',
    sort: 50,
    children: [
      {
        name: '大文件分片上传',
        path: '/library/bigFileUpload',
      },
      {
        name: 'vue3-tree-org',
        path: '/library/vue3TreeOrg',
      },
    ]
  },
  {
    name: '工作台',
    path: '/workbench',
    sort: 10,
    children: [
      {
        name: '工作区',
        path: '/workbench/index'
      },
    ]
  },
  {
    name: '图表',
    path: '/chart',
    sort: 60,
    children: [
      {
        name: '甘特图',
        path: '/chart/gantt'
      },
      {
        name: '全日历',
        path: '/chart/fullcalendar'
      }
    ]
  },
  {
    name: '其他功能',
    path: '/others',
    sort: 70,
    children: [
      {
        name: 'web worker',
        path: '/others/webworker'
      },
    ]
  },
]