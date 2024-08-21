<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
const mainImage = new URL('@/assets/images/floorplans/standard_foreground.svg', import.meta.url).href;
</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <FloorPlanWrapper :image-url="mainImage" :title="'std'" :is-floor="true" :has-bg="true">
        <div class="title-container absolute flex flex-col justify-center items-center">
            <span class="text-3xl font-bold text-zinc-700 mb-1 vertical-text" style="font-family: '微軟正黑體';">復興路二段</span>
            <span class="text-2xl font-bold text-zinc-700 mb-1" style="font-family: '微軟正黑體';">71</span>
            <span class="text-3xl font-bold text-zinc-700 vertical-text" style="font-family: '微軟正黑體';">巷</span>
        </div>
    </FloorPlanWrapper>
    
    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center">
        <div class="h-full flex flex-col justify-end items-center relative">
            <img src="@/assets/images/right_banner_3.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>
</div>
</template>

<style scoped>
.title-container {
    top: 44%;
    left: 6%;
}
</style>
