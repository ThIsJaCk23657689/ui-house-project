<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

interface UrlObject {
    name: string;
}

const $returnUrl: UrlObject = { name: 'cases-menu' };
const $prevUrl: UrlObject = { name: 'cases-shome' };
const $nextUrl: UrlObject = { name: 'cases-nine' };

const $title = '好樣';
const $content = '走進水湳智慧城，國際級城市建設一次囊括，74 號道、中山高、中科路跨橋、中清空中匝道共構出北台中最大立體交通網，為城市注入滿滿活力。「好樣」呼應最潮未來，以國際式樣×幾何語彙 × 色塊拼貼，打造出風格獨特、個性鮮明的居所。';
const $imageUrl = new URL('@/assets/images/cases/good/01.jpg', import.meta.url).href;
const $slogan = '潮感生活　國際式精品宅';
</script>

<template>
<CaseLayout :prevUrl="$prevUrl" :nextUrl="$nextUrl" :returnUrl="$returnUrl">
    <div class="w-full h-full flex relative">

        <div class="relative overflow-hidden">
            <Transition name="scale" appear>
                <img :src="$imageUrl" alt="" class="h-full object-cover">
            </Transition>
        </div>

        <div class="absolute w-[21.6%] top-16 right-16 z-10 text-center">
            <div class="mb-4">
                <span class="text-white font-bold text-6xl">{{ $title }}</span>
            </div>
            <p class="text-white">{{ $content }}</p>
        </div>

        <div class="absolute top-0 left-0 h-full flex justify-center items-center pl-16">
            <span class="text-white text-6xl vertical-text" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">PROFESSIONAL TEAM</span>
        </div>

        <div class="absolute bottom-32 right-16 bg-zinc-100 flex justify-center items-center px-2 py-2">
            <span class="vertical-text text-xl tracking-[.1em]">{{ $slogan }}</span>
        </div>
        
    </div>
</CaseLayout>
</template>

<style scoped>

</style>
