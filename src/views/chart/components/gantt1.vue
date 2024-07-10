<template>
  <div>
    <div class="toolbox">
      <button @click="updateFirstRow">更新第一条数据</button>
      <button @click="changeZoomLevel">更新缩放级别</button>
    </div>
    <div
      class="gstc-wrapper"
      ref="gstcElement"
    ></div>
  </div>
</template>

<script setup>
import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
import { Plugin as TimelinePointer } from "gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js";
import { Plugin as Selection } from "gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js";
import { Plugin as DependencyLines } from 'gantt-schedule-timeline-calendar/dist/plugins/dependency-lines.esm.min.js';
import "gantt-schedule-timeline-calendar/dist/style.css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { rowsData, itemsData } from './data1'

let gstc, state;
const gstcElement = ref(null);

onMounted(() => {
  /**
   * @type { import("gantt-schedule-timeline-calendar").Config }
   */
  const config = {
    licenseKey:
      "====BEGIN LICENSE KEY====\nXOfH/lnVASM6et4Co473t9jPIvhmQ/l0X3Ewog30VudX6GVkOB0n3oDx42NtADJ8HjYrhfXKSNu5EMRb5KzCLvMt/pu7xugjbvpyI1glE7Ha6E5VZwRpb4AC8T1KBF67FKAgaI7YFeOtPFROSCKrW5la38jbE5fo+q2N6wAfEti8la2ie6/7U2V+SdJPqkm/mLY/JBHdvDHoUduwe4zgqBUYLTNUgX6aKdlhpZPuHfj2SMeB/tcTJfH48rN1mgGkNkAT9ovROwI7ReLrdlHrHmJ1UwZZnAfxAC3ftIjgTEHsd/f+JrjW6t+kL6Ef1tT1eQ2DPFLJlhluTD91AsZMUg==||U2FsdGVkX1/SWWqU9YmxtM0T6Nm5mClKwqTaoF9wgZd9rNw2xs4hnY8Ilv8DZtFyNt92xym3eB6WA605N5llLm0D68EQtU9ci1rTEDopZ1ODzcqtTVSoFEloNPFSfW6LTIC9+2LSVBeeHXoLEQiLYHWihHu10Xll3KsH9iBObDACDm1PT7IV4uWvNpNeuKJc\npY3C5SG+3sHRX1aeMnHlKLhaIsOdw2IexjvMqocVpfRpX4wnsabNA0VJ3k95zUPS3vTtSegeDhwbl6j+/FZcGk9i+gAy6LuetlKuARjPYn2LH5Be3Ah+ggSBPlxf3JW9rtWNdUoFByHTcFlhzlU9HnpnBUrgcVMhCQ7SAjN9h2NMGmCr10Rn4OE0WtelNqYVig7KmENaPvFT+k2I0cYZ4KWwxxsQNKbjEAxJxrzK4HkaczCvyQbzj4Ppxx/0q+Cns44OeyWcwYD/vSaJm4Kptwpr+L4y5BoSO/WeqhSUQQ85nvOhtE0pSH/ZXYo3pqjPdQRfNm6NFeBl2lwTmZUEuw==\n====END LICENSE KEY====",
    plugins: [
      TimelinePointer(),
      Selection(),
      DependencyLines({
        rightPoint: {
          content: GSTC.api.lithtml.html`<div style="font-size:20px;color:#8b8a8a;">></div>`,
          width: 26,
          height: 26
        }
      }),
    ],
    list: {
      columns: {
        data: {
          [GSTC.api.GSTCID("taskType")]: {
            id: GSTC.api.GSTCID("taskType"),
            width: 100,
            data: ({ row, vido }) => {
              const styles = {
                color: row.taskType == 1 ? 'blue' : 'orange',
              };
              return vido.html`<div style=${vido.styleMap(styles)} class="${row.taskType == 1 ? 'inner' : 'outer'}">${row.taskType == 1 ? '内部' : '外部'}</div>`
            },
            header: {
              content: ({ column, vido }) => {
                const style1 = {
                  color: "#000",
                  "font-weight": "bold"
                };
                return vido.html`<p style=${vido.styleMap(style1)}>任务类型</p>`
              }
            }
          },
          [GSTC.api.GSTCID("materialName")]: {
            id: GSTC.api.GSTCID("materialName"),
            width: 100,
            data: "materialNameAlias",
            header: {
              content: ({ column, vido }) => {
                const style1 = {
                  color: "#000",
                  "font-weight": "bold"
                };
                return vido.html`<p style=${vido.styleMap(style1)}>物料名称</p>`
              }
            },
          },
        },
      },
      rows: rowsData,
    },
    chart: {
      item: {
        overlap: true
      },
      items: itemsData,
      time: {
        from: GSTC.api.date('2024-03-01').startOf('month').valueOf(),
        to: GSTC.api.date('2024-03-01').endOf('month').valueOf(),
        zoom: 20
      }
    },
    locale: {
      name: "zh",
      weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    }
  };

  state = GSTC.api.stateFromConfig(config);
  globalThis.state = state;
  gstc = GSTC({
    element: gstcElement.value,
    state,
  });
  globalThis.gstc = gstc;
});

onBeforeUnmount(() => {
  if (gstc) gstc.destroy();
});

function updateFirstRow() {
  state.update(`config.list.rows.${GSTC.api.GSTCID("17001")}`, (row) => {
    row.materialNameAlias = "蛋糕";
    return row;
  });
}

function changeZoomLevel() {
  state.update("config.chart.time.zoom", 21);
}
</script>
<style scoped>
.gstc-wrapper {
  margin: 0;
  padding: 0;
}
</style>