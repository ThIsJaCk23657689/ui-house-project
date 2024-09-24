<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Waferlock/Page01.vue'

const pages = [
    { content: Page01View },
];

const buttons = [
    {
        text: "感應式門鎖",
        start: 0,
        end: 0
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>
</style>
