<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './ElectricCar/Page01.vue'
import Page02View from './ElectricCar/Page02.vue'
import Page03View from './ElectricCar/Page03.vue'
import Page04View from './ElectricCar/Page04.vue'
import Page05View from './ElectricCar/Page05.vue'
import Page06View from './ElectricCar/Page06.vue'
import Page07View from './ElectricCar/Page07.vue'
import Page08View from './ElectricCar/Page08.vue'
import Page09View from './ElectricCar/Page09.vue'
import Page10View from './ElectricCar/Page10.vue'

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
];

const buttons = [
    {
        text: "電動車",
        start: 0,
        end: 9
    }
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
