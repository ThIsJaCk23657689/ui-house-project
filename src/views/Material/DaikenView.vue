<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Daiken/Page01.vue'
import Page02View from './Daiken/Page02.vue'
// import Page03View from './Daiken/Page03.vue'

const pages = [
    { content: Page01View },
    { content: Page02View },
    //{ content: Page03View }
];

const buttons = [
    {
        text: "室內靜音門",
        start: 0,
        end: 1
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
