<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

interface UrlObject {
    name: string;
}

const $returnUrl: UrlObject = { name: 'cases-menu' };
const $prevUrl: UrlObject = { name: 'cases-liveown' };
const $nextUrl: UrlObject = { name: 'cases-good' };

const $title = 'S HOME';
const $content = '以交通匯聚＋建設利多的高鐵新都心為中心，串流一高、二高與 74 號到形成暢達交通網，是台中門戶也是任意門，出門悠遊全市界。「S HOME」融會高鐵特區的環境特質，以設計感及多材質交織出獨具美感的風格建築，並成為旅人必訪、駐足驚嘆的精品宅邸。';
const $imageUrl = new URL('@/assets/images/cases/shome/01.png', import.meta.url).href;
const $slogan = '接軌世界　國際旅人的家';

</script>

<template>
<CaseLayout :prevUrl="$prevUrl" :nextUrl="$nextUrl" :returnUrl="$returnUrl">
    <div class="w-full h-full flex relative">

        <div class="relative overflow-hidden">
            <Transition name="scale" appear>
                <img :src="$imageUrl" alt="" class="h-full object-cover">
            </Transition>
        </div>

        <div class="absolute w-[21.6%] top-64 left-36 z-10">
            <div class="mb-4">
                <span class="text-white font-bold text-6xl">{{ $title }}</span>
            </div>
            <p class="text-white text-justify">{{ $content }}</p>
        </div>

        <div class="absolute top-0 right-0 flex flex-row h-full">
            <div class="h-full flex justify-center items-center">
                <span class="text-white text-6xl vertical-text" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">PROFESSIONAL TEAM</span>
            </div>
            <div class="h-full flex justify-center items-center px-4">
                <span class="text-white vertical-text text-2xl">{{ $slogan }}</span>
            </div>
        </div>
        
    </div>
</CaseLayout>
</template>

<style scoped>
</style>
