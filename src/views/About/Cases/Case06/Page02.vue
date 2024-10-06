<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

interface UrlObject {
    name: string;
}

const $returnUrl: UrlObject = { name: 'cases-menu' };
const $prevUrl: UrlObject = { name: 'cases-nine' };
const $nextUrl: UrlObject = { name: 'cases-liveown' };

const $title = '見山';
const $content = '位於八期高綠闊市景的「見山」，營造引人入勝的自然氛圍，以山為題、景為意，希冀居住者與建築產生共鳴，享受詩詞筆下的棲居意境，感受被景致環繞、遊樂於山水間的靜謐雅緻。';
const $imageUrl = new URL('@/assets/images/cases/mountain/01.png', import.meta.url).href;
const $slogan = '綠意豐繞　文化綠建築';

</script>

<template>
<CaseLayout :prevUrl="$prevUrl" :nextUrl="$nextUrl" :returnUrl="$returnUrl">
    <div class="w-full h-full flex flex-row">
        <div class="w-[82%] h-full relative">

            <div class="relative h-full overflow-hidden rounded-bl-[3rem]">
                <Transition name="scale" appear>
                    <img :src="$imageUrl" alt="" class="h-full object-cover">
                </Transition>
            </div>

            <div class="absolute w-[28%] bottom-16 right-16 z-10 bg-[#555555] bg-opacity-50 pl-12 py-6 pr-6 ">
                <div class="mb-4">
                    <span class="text-white font-bold text-6xl">{{ $title }}</span>
                </div>
                <p class="text-white text-justify">{{ $content }}</p>
            </div>

        </div>    
        <div class="h-full bg-[#a4a09f] flex justify-center items-center px-4">
            <span class="text-white text-6xl vertical-text" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">PROFESSIONAL TEAM</span>
        </div>
        <div class="w-[18%] h-full flex justify-center items-center">
            <span class="vertical-text text-2xl">{{ $slogan }}</span>
        </div>
    </div>
</CaseLayout>
</template>

<style scoped>
</style>
