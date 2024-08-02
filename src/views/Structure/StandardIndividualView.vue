<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { RouterLink } from 'vue-router'
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const props = defineProps(['type']);

const currentType = ref(0);
const standards = [
    { 
        title: 'A', 
        url: new URL('@/assets/images/floorplans/individual/a.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floorplans/buttons/a.svg', import.meta.url).href 
    },
    { 
        title: 'B', 
        url: new URL('@/assets/images/floorplans/individual/b.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floorplans/buttons/B.svg', import.meta.url).href 
    },
    { 
        title: 'C', 
        url: new URL('@/assets/images/floorplans/individual/c.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floorplans/buttons/c.svg', import.meta.url).href 
    },
    { 
        title: 'D', 
        url: new URL('@/assets/images/floorplans/individual/d.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floorplans/buttons/d.svg', import.meta.url).href 
    },
    { 
        title: 'E', 
        url: new URL('@/assets/images/floorplans/individual/e.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floorplans/buttons/e.svg', import.meta.url).href 
    },
    { 
        title: 'F', 
        url: new URL('@/assets/images/floorplans/individual/f.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floorplans/buttons/f.svg', import.meta.url).href 
    }
];

function updateCurrentType() {
    if (props.type === '') {
        currentType.value = 0;
    } else if (props.type === 'A') {
        currentType.value = 0;
    } else if (props.type === 'B') {
        currentType.value = 1;
    } else if (props.type === 'C') {
        currentType.value = 2;
    } else if (props.type === 'D') {
        currentType.value = 3;
    } else if (props.type === 'E') {
        currentType.value = 4;
    } else if (props.type === 'F') {
        currentType.value = 5;
    }
}

onMounted(() => {
    updateCurrentType();
})

watch(() => props.type, () => {
    updateCurrentType();
});

</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <FloorPlanWrapper :image-url="standards[currentType].url" :title="standards[currentType].title" :is-floor="false" :isAera="true">
    </FloorPlanWrapper>

    <div class="little-plan-container">
        <img :src="standards[currentType].buttonImg" alt="Image" class="object-cover little-plan" />
        
        <RouterLink :to="{ name: 'standard-individual', params: { type: 'A' } }" class="absolute a-part"></RouterLink>
        <RouterLink :to="{ name: 'standard-individual', params: { type: 'B' } }" class="absolute b-part"></RouterLink>
        <RouterLink :to="{ name: 'standard-individual', params: { type: 'C' } }" class="absolute c-part"></RouterLink>
        <RouterLink :to="{ name: 'standard-individual', params: { type: 'D' } }" class="absolute d-part"></RouterLink>
        <RouterLink :to="{ name: 'standard-individual', params: { type: 'E' } }" class="absolute e-part"></RouterLink>
        <RouterLink :to="{ name: 'standard-individual', params: { type: 'F' } }" class="absolute f-part"></RouterLink>
    </div>

    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center">
        <div class="h-full flex flex-col justify-end items-center relative">
            <img src="@/assets/images/right_banner_3.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>
</div>
</template>

<style scoped>
.little-plan-container {
    width: 260px;
    position: absolute;
    bottom: 14.58%;
    right: 7.5%;
    z-index: 100;
}

.a-part {
    width: 17%;
    height: 100%;
    top: 0%;
    left: 0%;
}
.b-part {
    width: 24%;
    height: 42%;
    top: 0%;
    left: 17%;
}
.c-part {
    width: 24%;
    height: 42%;
    top: 0%;
    left: 51%;
}
.d-part {
    width: 25%;
    height: 100%;
    top: 0%;
    left: 75%;
}
.e-part {
    width: 24%;
    height: 42%;
    bottom: 0%;
    left: 51%;
}
.f-part {
    width: 24%;
    height: 42%;
    bottom: 0%;
    left: 17%;
}
</style>
