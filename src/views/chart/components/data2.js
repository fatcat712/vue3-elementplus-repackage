import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
export const rowsData = {
    'gstcid-17001': {
        id: 'gstcid-17001',
        materialNameAlias: '大枣'
    },
    'gstcid-17211': {
        id: 'gstcid-17211',
        materialNameAlias: '麻仁'
    },
    'gstcid-17231': {
        id: 'gstcid-17231',
        materialNameAlias: '枸杞'
    },
    'gstcid-17488': {
        id: 'gstcid-17488',
        materialNameAlias: '决明子'
    },
    'gstcid-17090': {
        id: 'gstcid-17090',
        materialNameAlias: '生姜'
    }
}

export const itemsData = {
    'gstcid-1001': {
        id: 'gstcid-1001',
        rowId: 'gstcid-17001',
        label: '生产任务计划',
        spec: '大包（TL）',
        amount: 99,
        type: 1,
        time: {
            start: GSTC.api.date(`2024-03-01`).valueOf(),
            end: GSTC.api.date(`2024-03-02`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '4px'
        }
    },
    'gstcid-1002': {
        id: 'gstcid-1002',
        rowId: 'gstcid-17001',
        label: '发货任务',
        spec: '大包（TL）',
        amount: 99,
        type: 1,
        time: {
            start: GSTC.api.date(`2024-03-01`).valueOf(),
            end: GSTC.api.date(`2024-03-03`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '4px'
        }
    },
    'gstcid-1003': {
        id: 'gstcid-1003',
        rowId: 'gstcid-17001',
        label: '出库计划',
        spec: '大包（TL）',
        amount: 99,
        type: 2,
        time: {
            start: GSTC.api.date(`2024-03-03`).valueOf(),
            end: GSTC.api.date(`2024-03-5`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '4px'
        }
    },
    'gstcid-1004': {
        id: 'gstcid-1004',
        rowId: 'gstcid-17001',
        label: '打包计划',
        spec: '大包（TL）',
        amount: 99,
        type: 2,
        time: {
            start: GSTC.api.date(`2024-03-07`).valueOf(),
            end: GSTC.api.date(`2024-03-08`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '4px'
        }
    },
    'gstcid-1005': {
        id: 'gstcid-1005',
        rowId: 'gstcid-17211',
        label: '发货计划',
        spec: '大包（TL）',
        amount: 99,
        type: 1,
        time: {
            start: GSTC.api.date(`2024-03-05`).valueOf(),
            end: GSTC.api.date(`2024-03-06`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '4px'
        }
    },
}