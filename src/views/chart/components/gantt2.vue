<template>
  <div
    class="gstc-wrapper"
    ref="gstcElement"
  ></div>
</template>

<script setup>
import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
import { Plugin as TimelinePointer } from "gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js";
import { Plugin as Selection } from "gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js";
import "gantt-schedule-timeline-calendar/dist/style.css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { rowsData, itemsData } from './data2.js'

let gstc, state;
const gstcElement = ref(null);

function itemSlot(vido, props) {
  console.log(1);
  console.log(props);
  const { html, onChange, update } = vido;
  let label = '', spec = '', amount = '', type = '';
  onChange((newProps) => {
    console.log(2);
    console.log(newProps);
    props = newProps;
    if (!props || !props.item) return;
    label = props.item.label;
    spec = props.item.spec;
    amount = props.item.amount;
    type = props.item.type;
    update();
  });
  function onClick() {
    // props.item will contain your item data
    alert(props.item.id + ' clicked!');
  }

  return (content) => {
    return html`
                <div class="chart-block f-s-c ${type == 2 ? 'blue' : ''}" @click=${onClick}>
                    <div class="chart-line"></div >
                    <div class="content flex-auto">
                        <p class="title">${label}</p>
                        <p class="spec">${spec}</p>
                        <p class="amount">${amount}</p>
                    </div>
                </div > `;
  }

}

/**
 * @type {import('../../dist/gstc').Template}
 */
function chartTimelineItemsRowItemTemplate({
  className,
  labelClassName,
  styleMap,
  cache,
  shouldDetach,
  cutterLeft,
  cutterRight,
  getContent,
  actions,
  slots,
  html,
  vido,
  props,
}) {
  console.log(styleMap.directive());
  const detach = shouldDetach || !props || !props.item;
  return cache(
    detach
      ? null
      : slots.html(
        'outer',
        html`
            < div
        class=${className}
        data-gstcid=${props.item.id}
        data-actions=${actions()}
        style=${styleMap.directive()}
        @click=${onItemClick}
            >
            ${slots.html(
          'inner',
          html`
                  ${cutterLeft()}
                  <div class=${labelClassName}>${slots.html('content', getContent())}222</div>
                  ${cutterRight()}
                `
        )
          }
            </div >
            `
      )
  );
}

function onItemClick(ev) {
  console.log('Item click from template', ev);
}

onMounted(() => {
  /**
   * @type { import("gantt-schedule-timeline-calendar").Config }
   */
  const config = {
    licenseKey:
      "====BEGIN LICENSE KEY====\nXOfH/lnVASM6et4Co473t9jPIvhmQ/l0X3Ewog30VudX6GVkOB0n3oDx42NtADJ8HjYrhfXKSNu5EMRb5KzCLvMt/pu7xugjbvpyI1glE7Ha6E5VZwRpb4AC8T1KBF67FKAgaI7YFeOtPFROSCKrW5la38jbE5fo+q2N6wAfEti8la2ie6/7U2V+SdJPqkm/mLY/JBHdvDHoUduwe4zgqBUYLTNUgX6aKdlhpZPuHfj2SMeB/tcTJfH48rN1mgGkNkAT9ovROwI7ReLrdlHrHmJ1UwZZnAfxAC3ftIjgTEHsd/f+JrjW6t+kL6Ef1tT1eQ2DPFLJlhluTD91AsZMUg==||U2FsdGVkX1/SWWqU9YmxtM0T6Nm5mClKwqTaoF9wgZd9rNw2xs4hnY8Ilv8DZtFyNt92xym3eB6WA605N5llLm0D68EQtU9ci1rTEDopZ1ODzcqtTVSoFEloNPFSfW6LTIC9+2LSVBeeHXoLEQiLYHWihHu10Xll3KsH9iBObDACDm1PT7IV4uWvNpNeuKJc\npY3C5SG+3sHRX1aeMnHlKLhaIsOdw2IexjvMqocVpfRpX4wnsabNA0VJ3k95zUPS3vTtSegeDhwbl6j+/FZcGk9i+gAy6LuetlKuARjPYn2LH5Be3Ah+ggSBPlxf3JW9rtWNdUoFByHTcFlhzlU9HnpnBUrgcVMhCQ7SAjN9h2NMGmCr10Rn4OE0WtelNqYVig7KmENaPvFT+k2I0cYZ4KWwxxsQNKbjEAxJxrzK4HkaczCvyQbzj4Ppxx/0q+Cns44OeyWcwYD/vSaJm4Kptwpr+L4y5BoSO/WeqhSUQQ85nvOhtE0pSH/ZXYo3pqjPdQRfNm6NFeBl2lwTmZUEuw==\n====END LICENSE KEY====",
    plugins: [
      TimelinePointer(),
      Selection()
    ],
    list: {
      columns: {
        data: {
          [GSTC.api.GSTCID("materialName")]: {
            id: GSTC.api.GSTCID("materialName"),
            width: 100,
            data: "materialNameAlias",
            header: {
              content: ''
            },
          },
        },
      },
      rows: rowsData,
    },
    chart: {
      item: {
        height: 64
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
    },
    slots: {
      'chart-timeline-items-row-item': { inner: [itemSlot] }
    },
    /* templates: {
        'chart-timeline-items-row-item': chartTimelineItemsRowItemTemplate,
    }, */
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

</script>
<style scoped lang="scss">
.gstc-wrapper {
  margin: 0;
  padding: 0;

  ::v-deep(.gstc__chart-timeline-items-row-item .chart-block) {
    width: 100%;
    background: #fff;
    border: 1px solid #81b337;
    border-radius: 4px;
    color: #666;
    overflow: hidden;

    .chart-line {
      width: 4px;
      height: 100%;
      background: #81b337;
    }

    .content {
      color: #333;
      height: 100%;
      padding-left: 10px;
      background: #f5ffe6;
      line-height: 20px;

      .spec {
        color: #8d8c8c;
        font-size: 12px;
      }

      .amount {
        color: #81b337
      }
    }

    &.blue {
      border-color: #3470fc;

      .chart-line {
        background: #3470fc;
      }

      .content {
        background: #b9cefe;
      }

      .amount {
        color: #3470fc
      }
    }
  }
}
</style>