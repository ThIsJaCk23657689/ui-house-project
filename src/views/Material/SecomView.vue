<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Secom/Page01.vue'
import Page02View from './Secom/Page02.vue'
import Page03View from './Secom/Page03.vue'
import Page04View from './Secom/Page04.vue'
import Page05View from './Secom/Page05.vue'
import Page06View from './Secom/Page06.vue'
import Page07View from './Secom/Page07.vue'
import Page08View from './Secom/Page08.vue'
import Page09View from './Secom/Page09.vue'
import Page10View from './Secom/Page10.vue'
import Page11View from './Secom/Page11.vue'

const pages = [
    { content: Page01View },
    { content: Page02View },
    { content: Page03View },
    { content: Page04View },
    { content: Page05View },
    { content: Page06View },
    { content: Page07View },
    { content: Page08View },
    { content: Page09View },
    { content: Page10View },
    { content: Page11View },
];

const buttons : any = [];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
