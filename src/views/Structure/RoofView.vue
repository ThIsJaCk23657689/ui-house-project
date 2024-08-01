<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floorplans/RF.jpg', import.meta.url).href;
const spots = [];

</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <FloorPlanWrapper :image-url="mainImage" :title="'R'" :is-floor="true">
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

</style>