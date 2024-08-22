<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Lamett/Page01.vue'
import Page02View from './Lamett/Page02.vue'
import Page03View from './Lamett/Page03.vue'
import Page04View from './Lamett/Page04.vue'
import Page05View from './Lamett/Page05.vue'
import Page06View from './Lamett/Page06.vue'
import Page07View from './Lamett/Page07.vue'
import Page08View from './Lamett/Page08.vue'
import Page09View from './Lamett/Page09.vue'
import Page10View from './Lamett/Page10.vue'
import Page11View from './Lamett/Page11.vue'
//import Page12View from './Lamett/Page12.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: true  },
    { content: Page03View, isDark: false },
    { content: Page04View, isDark: true  },
    { content: Page05View, isDark: false },
    { content: Page06View, isDark: false },
    { content: Page07View, isDark: false },
    { content: Page08View, isDark: false },
    { content: Page09View, isDark: false },
    { content: Page10View, isDark: false },
    { content: Page11View, isDark: false },
    //{ content: Page12View, isDark: false },
];

const buttons = [
    {
        text: "關於樂邁",
        start: 0,
        end: 2
    },
    {
        text: "石晶地板",
        start: 3,
        end: 9
    },
    {
        text: "樣品示意",
        start: 10,
        end: 10
    }
];

</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
