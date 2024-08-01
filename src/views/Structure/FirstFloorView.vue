<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';


const mainImage = new URL('@/assets/images/floorplans/1F.jpg', import.meta.url).href;
const spots : any = [];

</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true">
        <template v-for="(spot, index) in spots" :key="index">
            <RouteButton :to="spot.url" class="absolute flex flex-row items-center z-40" :style="{ top: `${spot.top}%`, left: `${spot.left}%` }">   
                <div v-if="spot.url != '#'" class="spot-marker animate flex justify-center items-center english-font text-white text-center">
                    {{ spot.marker }}
                </div>
                <div v-else class="spot-marker flex justify-center items-center english-font text-white text-center">
                    {{ spot.marker }}
                </div>
            </RouteButton>
        </template>
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