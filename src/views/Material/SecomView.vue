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
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: true  },
    { content: Page03View, isDark: true  },
    { content: Page04View, isDark: true  },
    { content: Page05View, isDark: true  },
    { content: Page06View, isDark: true  },
    { content: Page07View, isDark: true  },
    { content: Page08View, isDark: true  },
    { content: Page09View, isDark: true  },
    { content: Page10View, isDark: true  },
    { content: Page11View, isDark: true  },
];

const buttons : any = [];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
