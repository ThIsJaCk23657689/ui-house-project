<script setup lang="ts">
import MaterialWrapper from '@/layouts/MaterialWrapper.vue'
import Page01View from './Svago/Page01.vue'
import Page02View from './Svago/Page02.vue'
import Page03View from './Svago/Page03.vue'
import Page04View from './Svago/Page04.vue'
import Page05View from './Svago/Page05.vue'
import Page06View from './Svago/Page06.vue'

const pages = [
    { content: Page01View, isDark: true },
    { content: Page02View, isDark: true },
    { content: Page03View, isDark: true },
    { content: Page04View, isDark: true },
    { content: Page05View, isDark: true },
    { content: Page06View, isDark: true },
];

const buttons = [
    {
        text: "A/B/C/D/F 戶",
        start: 0,
        end: 2
    },
    {
        text: "E 戶",
        start: 3,
        end: 5
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
