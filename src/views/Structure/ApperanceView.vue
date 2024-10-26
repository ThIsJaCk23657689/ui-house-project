<script setup lang="ts">
import ImageScaleViewer from '@/components/ImageScaleViewer.vue';

const buildingImages = [
    {
        day: {
            url: new URL('@/assets/images/apperance/day_1.gif', import.meta.url).href,
            spot: {
                top: 10,
                left: 6,
                rotate: 130,
            }
        },
        night: {
            url: new URL('@/assets/images/apperance/night_1.gif', import.meta.url).href,
            spot: {
                top: 10,
                left: 6,
                rotate: 130,
            }
        },
    },
    {
        day: {
            url: new URL('@/assets/images/apperance/day_2.gif', import.meta.url).href,
            spot: {
                top: 2,
                left: 44.2,
                rotate: 180,
            }
        },
        night: {
            url: new URL('@/assets/images/apperance/night_1.gif', import.meta.url).href,
            spot: {
                top: 10,
                left: 6,
                rotate: 130,
            }
        },
    },
    {
        day: {
            url: new URL('@/assets/images/apperance/day_3.gif', import.meta.url).href,
            spot: {
                top: 49,
                left: 37,
                rotate: 0,
            }
        },
        night: {
            url: new URL('@/assets/images/apperance/night_1.gif', import.meta.url).href,
            spot: {
                top: 10,
                left: 6,
                rotate: 130,
            }
        },
    },
    {
        day: {
            url: new URL('@/assets/images/apperance/day_4.gif', import.meta.url).href,
            spot: {
                top: 27,
                left: 0,
                rotate: 90,
            }
        },
        night: {
            url: new URL('@/assets/images/apperance/night_1.gif', import.meta.url).href,
            spot: {
                top: 10,
                left: 6,
                rotate: 130,
            }
        },
    },
];
</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <ImageScaleViewer :image-urls="buildingImages"></ImageScaleViewer>

    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center">
        <div class="h-full flex flex-col justify-end items-center relative">
            <div class="absolute top-48 left-0 flex flex-col items-start w-1/2 ml-4">
                <span class="text-xl text-primary-300 vertical-text english-font mb-6">Ultra</span>
                <span class="text-xl text-zinc-100 vertical-text">規　劃</span>
            </div>
            <img src="@/assets/images/right_banner_2.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>
</div>
</template>

<style scoped>
</style>
