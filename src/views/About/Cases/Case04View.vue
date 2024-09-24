<script setup lang="ts">
import CaseWrapper from '@/layouts/CaseWrapper.vue';
import Page01View from './Case04/Page01.vue';
import Page02View from './Case04/Page02.vue';
import Page03View from './Case04/Page03.vue';
import Page04View from './Case04/Page04.vue';
import Page05View from './Case04/Page05.vue';
import Page06View from './Case04/Page06.vue';

const pages = [
    { content: Page01View },
    { content: Page02View },
    { content: Page03View },
    { content: Page04View },
    { content: Page05View },
    { content: Page06View },
];

</script>

<template>
<CaseWrapper :pages="pages">
</CaseWrapper>
</template>

<style scoped>
</style>
