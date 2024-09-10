<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';


const mainImage = new URL('@/assets/images/floorplans/1F.jpg', import.meta.url).href;
const spots : any = [
    { marker: 'A', top: 61.20, left: 34.00, text: '', url: '/structure/facilities/facilities01' },
    { marker: 'B', top: 52.10, left: 44.50, text: '', url: '/structure/facilities/facilities02' },
    { marker: 'C', top: 50.00, left: 54.00, text: '', url: '/structure/facilities/facilities03' },
];

</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true">
        <template v-for="(spot, index) in spots" :key="index">
            <RouteButton :to="spot.url" class="absolute flex flex-row items-center z-40" :style="{ top: `${spot.top}%`, left: `${spot.left}%` }">   
                <div v-if="spot.url != '#'" class="spot-marker animate flex justify-center items-center english-font text-white text-center">
                </div>
                <div v-else class="spot-marker flex justify-center items-center english-font text-white text-center">
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
.spot-marker {
    width: 20px;
    height: 20px;
    background-color: #002537;
    border-radius: 50%;
}

.spot-marker.animate {
    animation: flash 0.8s infinite alternate ease-out;
}

@keyframes flash {
    from {
        background-color: #002537;
    }
    to {
        background-color: #2c7ea1;
    }
}
</style>