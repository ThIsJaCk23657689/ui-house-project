<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './PanasonicBathroom/Page01.vue'
import Page02View from './PanasonicBathroom/Page02.vue'
import Page03View from './PanasonicBathroom/Page03.vue'
import Page04View from './PanasonicBathroom/Page04.vue'
import Page05View from './PanasonicBathroom/Page05.vue'

const pages = [
    { content: Page01View },
    { content: Page02View },
    { content: Page03View },
    { content: Page04View },
    { content: Page05View }
];

const buttons = [
    {
        text: "影片",
        start: 0,
        end: 0  
    },
    {
        text: "頂級全自動馬桶",
        start: 1,
        end: 3
    },
    {
        text: "樣品示意",
        start: 4,
        end: 4
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
