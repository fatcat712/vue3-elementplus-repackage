import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
export const rowsData = {
    'gstcid-17001': {
        id: 'gstcid-17001',
        taskType: 1,
        materialNameAlias: '大枣'
    },
    'gstcid-17211': {
        id: 'gstcid-17211',
        taskType: 2,
        materialNameAlias: '麻仁'
    },
    'gstcid-17231': {
        id: 'gstcid-17231',
        taskType: 1,
        materialNameAlias: '枸杞'
    },
    'gstcid-17488': {
        id: 'gstcid-17488',
        taskType: 1,
        materialNameAlias: '决明子'
    },
    'gstcid-17090': {
        id: 'gstcid-17090',
        taskType: 2,
        materialNameAlias: '生姜'
    }
}

export const itemsData = {
    'gstcid-1001': {
        id: 'gstcid-1001',
        rowId: 'gstcid-17001',
        label: '销售单',
        time: {
            start: GSTC.api.date(`2024-03-01`).valueOf(),
            end: GSTC.api.date(`2024-03-02`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#6d97fb'
        }
    },
    'gstcid-1002': {
        id: 'gstcid-1002',
        rowId: 'gstcid-17001',
        label: '发货通知单',
        time: {
            start: GSTC.api.date(`2024-03-03`).valueOf(),
            end: GSTC.api.date(`2024-03-05`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#6d97fb'
        }
    },
    'gstcid-1003': {
        id: 'gstcid-1003',
        rowId: 'gstcid-17001',
        label: '出库单',
        time: {
            start: GSTC.api.date(`2024-03-06`).valueOf(),
            end: GSTC.api.date(`2024-03-08`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#6d97fb'
        }
    },
    'gstcid-1004': {
        id: 'gstcid-1004',
        rowId: 'gstcid-17211',
        label: '生产',
        time: {
            start: GSTC.api.date(`2024-03-01`).valueOf(),
            end: GSTC.api.date(`2024-03-04`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#a4c76f'
        }
    },
    'gstcid-1005': {
        id: 'gstcid-1005',
        rowId: 'gstcid-17211',
        label: '质检入库',
        time: {
            start: GSTC.api.date(`2024-03-05`).valueOf(),
            end: GSTC.api.date(`2024-03-06`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#a4c76f'
        }
    },
    'gstcid-1006': {
        id: 'gstcid-1006',
        rowId: 'gstcid-17231',
        label: '生产',
        time: {
            start: GSTC.api.date(`2024-03-02`).valueOf(),
            end: GSTC.api.date(`2024-03-03`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#a4c76f'
        },
        dependant: ['gstcid-1007']
    },
    'gstcid-1007': {
        id: 'gstcid-1007',
        rowId: 'gstcid-17231',
        label: '质检入库',
        time: {
            start: GSTC.api.date(`2024-03-05`).valueOf(),
            end: GSTC.api.date(`2024-03-06`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#a4c76f'
        },
        dependant: [GSTC.api.GSTCID('1008')]
    },
    'gstcid-1008': {
        id: 'gstcid-1008',
        rowId: 'gstcid-17231',
        label: '出库',
        time: {
            start: GSTC.api.date(`2024-03-08`).valueOf(),
            end: GSTC.api.date(`2024-03-09`).add(1, "day").valueOf(),
        },
        style: {
            'border-radius': '0px',
            background: '#a4c76f'
        }
    },
}