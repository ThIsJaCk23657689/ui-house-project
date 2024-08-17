<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const materials = [
    { path: 'panasonickitchen', image: new URL('@/assets/images/materials/logos/PanasonicKitchen.svg', import.meta.url).href },
    { path: 'rinnai', image: new URL('@/assets/images/materials/logos/Rinnai.svg', import.meta.url).href },
    { path: 'svago', image: new URL('@/assets/images/materials/logos/Svago.svg', import.meta.url).href },
    { path: 'panasonicbathroom', image: new URL('@/assets/images/materials/logos/PanasonicBathroom.svg', import.meta.url).href },
    { path: 'innoci', image: new URL('@/assets/images/materials/logos/Innoci.svg', import.meta.url).href },
    { path: 'hansgrohe', image: new URL('@/assets/images/materials/logos/Hansgrohe.svg', import.meta.url).href },
    { path: 'lifegear', image: new URL('@/assets/images/materials/logos/Lifegear.svg', import.meta.url).href },
    { path: 'daiken', image: new URL('@/assets/images/materials/logos/Daiken.svg', import.meta.url).href },
    { path: 'lamett', image: new URL('@/assets/images/materials/logos/Lamett.svg', import.meta.url).href },
    { path: 'waferlock', image: new URL('@/assets/images/materials/logos/Waferlock.svg', import.meta.url).href },
    { path: 'electriccar', image: new URL('@/assets/images/materials/logos/ElectronCar.svg', import.meta.url).href },
];

</script>

<template>
<div class="w-full h-full flex justify-center items-center relative">
    <!-- 背景圖案 -->
    <div class="w-4/5 absolute">
        <img src="@/assets/images/materials/menu_bg.svg" alt="" class="object-cover">
    </div>

    <div class="w-4/5 h-3/5 grid grid-cols-4 gap-4 z-10">
        <RouteButton :to="material.path" v-for="(material, index) in materials" :key="index" class="flex justify-center items-center opacity-75 hover:opacity-100 transition-300-out">
            <div class="w-4/6 flex justify-center items-center">
                <img :src="material.image" alt="" class="object-cover w-full">
            </div>
        </RouteButton>
    </div>

    <!-- 右側 banner -->
    <div class="absolute top-0 right-0 h-full flex justify-end items-center">
        <div class="h-full flex flex-col justify-end items-center relative">
            <div class="absolute top-48 left-0 flex flex-col items-start w-1/2 ml-4">
                <span class="text-xl text-primary-300 vertical-text english-font mb-6">Upgrade</span>
                <span class="text-xl text-zinc-100 vertical-text">選　材</span>
            </div>
            <img src="@/assets/images/right_banner_2.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>

</div>
</template>

<style scoped>
</style>