<script setup lang="ts">
import CaseWrapper from '@/layouts/CaseWrapper.vue';
import Page01View from './Case05/Page01.vue';
import Page02View from './Case05/Page02.vue';
import Page03View from './Case05/Page03.vue';
import Page04View from './Case05/Page04.vue';
import Page05View from './Case05/Page05.vue';

const pages = [
    { content: Page01View },
    { content: Page02View },
    { content: Page03View },
    { content: Page04View },
    { content: Page05View }
];

</script>

<template>
<CaseWrapper :pages="pages">
</CaseWrapper>
</template>

<style scoped>

</style>
