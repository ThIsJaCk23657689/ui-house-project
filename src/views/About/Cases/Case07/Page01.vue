<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

interface UrlObject {
    name: string;
}

const $returnUrl: UrlObject = { name: 'cases-menu' };
const $prevUrl: UrlObject = { name: 'cases-mountain' };
const $nextUrl: UrlObject = { name: 'cases-shome' };

const $title = '居雍';
const $content = '森綠八期首座休閒名宅「居雍天廈」，近距七期政經核心，高鐵相迎奔馳事業版圖，近G12捷運站，出則繁華相迎、入則大隱於市，展現大器宅邸居家品味。';
const $imageUrl = new URL('@/assets/images/cases/liveown/01.png', import.meta.url).href;
const $slogan = '宏觀視野，東方質感宅邸';

</script>

<template>
<CaseLayout :prevUrl="$prevUrl" :nextUrl="$nextUrl" :returnUrl="$returnUrl">
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-[80%] relative">

            <div class="relative h-full overflow-hidden">
                <Transition name="scale" appear>
                    <img :src="$imageUrl" alt="" class=" object-cover">
                </Transition>
            </div>

            <div class="absolute w-[25%] bottom-16 right-64 z-10 pl-12 py-6 pr-6 ">
                <div class="mb-4">
                    <span class="text-white font-bold text-6xl">{{ $title }}</span>
                </div>
                <p class="text-white text-justify">{{ $content }}</p>
            </div>

            <div class="absolute top-0 right-0 h-full flex justify-center items-center px-4">
                <span class="text-white text-6xl vertical-text" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">PROFESSIONAL TEAM</span>
            </div>

        </div>    

        <div class="w-full h-[20%] flex justify-center pt-16 bg-[#b6b9b9]">
            <span class="text-2xl text-[#555555]">{{ $slogan }}</span>
        </div>
    </div>
</CaseLayout>
</template>

<style scoped>
</style>
