<script setup lang="ts">
import CaseWrapper from '@/layouts/CaseWrapper.vue';
import Page01View from './Case01/Page01.vue';
import Page02View from './Case01/Page02.vue';
import Page03View from './Case01/Page03.vue';
import Page04View from './Case01/Page04.vue';

const pages = [
    { content: Page01View },
    { content: Page02View },
    { content: Page03View },
    { content: Page04View },
];

</script>

<template>
<CaseWrapper :pages="pages">
</CaseWrapper>
</template>

<style scoped>

</style>
