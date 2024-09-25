<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

interface UrlObject {
    name: string;
}

const $returnUrl: UrlObject = { name: 'cases-menu' };
const $prevUrl: UrlObject = { name: 'cases-good' };
const $nextUrl: UrlObject = { name: 'cases-mountain' };

const $title = '九悅';
const $content = '在書香、人文氣息中感受時間流轉的英倫風建築「九悅」－雙捷運‧雙園道‧南區人文商圈；濃郁人文書香，涵養生活氣質，展讀城市最美的篇章。';
const $imageUrl = new URL('@/assets/images/cases/nine/01.png', import.meta.url).href;
const $slogan = '蘊含生活詩意，典藏式建築';

</script>

<template>
<CaseLayout :prevUrl="$prevUrl" :nextUrl="$nextUrl" :returnUrl="$returnUrl">
    <div class="h-full flex flex-row">
        <div class="w-[90%] h-full relative">

            <div class="relative h-full overflow-hidden rounded-bl-[3rem]">
                <Transition name="scale" appear>
                    <img :src="$imageUrl" alt="" class="object-cover">
                </Transition>
            </div>

            <div class="absolute w-1/4 bottom-16 left-32 z-10">
                <div class="mb-4">
                    <span class="text-white font-bold text-6xl">{{ $title }}</span>
                </div>
                <p class="text-white text-justify">{{ $content }}</p>
            </div>

            <div class="absolute top-0 right-0 h-full flex justify-center items-center pr-16">
                <span class="text-white text-6xl vertical-text" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">PROFESSIONAL TEAM</span>
            </div>
        </div>    
        <div class="w-[10%] h-full flex justify-center items-center">
            <span class="vertical-text text-2xl">{{ $slogan }}</span>
        </div>
    </div>
</CaseLayout>
</template>

<style scoped>
</style>
