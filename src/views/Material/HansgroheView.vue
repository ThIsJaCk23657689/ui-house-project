<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Hansgrohe/Page01.vue'
import Page02View from './Hansgrohe/Page02.vue'
import Page03View from './Hansgrohe/Page03.vue'
// import Page04View from './Hansgrohe/Page04.vue'
// import Page05View from './Hansgrohe/Page05.vue'

const pages = [
    { content: Page01View },
    { content: Page02View },
    { content: Page03View },
    // { content: Page04View },
    // { content: Page05View }
];

const buttons = [
    {
        text: "德國頂級龍頭技術",
        start: 0,
        end: 1
    },
    {
        text: "樣品示意",
        start: 2,
        end: 2
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
