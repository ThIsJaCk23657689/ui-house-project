<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Rinnai/Page01.vue'

const pages = [
    { content: Page01View },
];

const buttons = [
    {
        text: "瓦斯爐 抽油煙機",
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
