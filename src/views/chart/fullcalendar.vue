<!--
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2024-03-25 09:51:12
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-03-27 13:57:58
-->
<template>
    <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
        <template v-slot:eventContent='arg'>
            <b>{{ arg.timeText }}</b>
            <i>{{ arg.event.title }}</i>
        </template>
    </FullCalendar>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import zh from '@fullcalendar/core/locales/zh-cn';
import { ref, reactive } from "vue";

const calendarOptions = reactive({
    plugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
    ],
    headerToolbar: {
        left: 'prev,next,today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        {
            id: 1104,
            title: '事件4',
            allDay: true,
            start: '2024-01-27',
            end: '2024-02-03'
        },
        {
            id: 1101,
            title: '事件1',
            allDay: true,
            start: '2024-02-27',
            end: '2024-03-03'
        },
        {
            id: 1102,
            title: '事件2',
            allDay: true,
            start: '2024-03-24',
            end: '2024-03-26'
        },
        {
            id: 1103,
            title: '事件3',
            allDay: true,
            start: '2024-03-24',
            end: '2024-03-27'
        },
    ],
    firstDay: 0,
    locale: zh,
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
})

</script>
<style scoped lang="scss">
.demo-app-calendar {
    width: 600px;
}
</style>