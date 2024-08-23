<script setup lang="ts">
import { ref } from 'vue';
import TeamMemberLayout from '@/layouts/TeamMemberLayout.vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '@/components/icons/ArrowReturnIcon.vue';
import RouteButton from '@/components/RouteButton.vue';

const person = {
    avatar: new URL('@/assets/images/teams/person-01.png', import.meta.url).href,
    title: '建築設計',
    company: '',
    name: '陳彥伯',
    englishName: '',
    position: '建築師',
    bio: [
        "陳彥伯建築師事務所 主持建築師(2010~迄今)",
        "國雄建設有限公司 開發部建築師(2008~2010)",
        "林德群建築師事務所 專案設計師(2005~2008)",
        "國立成功大學 建築研究所碩士畢業(2003~2005)",
        "逢甲大學 建築系學士畢業(1998~2003)",
        "逢甲大學建築系兼講師(2022~)",
    ],
    awardTitle: "",
    awards: [
        "2022第24屆國家建築金質獎",
    ],
    awardsGrid: [],
    workImages: [
        { url: new URL('@/assets/images/teams/01-01.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/01-02.png', import.meta.url).href },
    ]
};

const switchLink = {
    router: { name: 'teams-chang' },
    name: '公設設計'
};

const images = [
    { url: new URL('@/assets/images/teams/01.png', import.meta.url).href },
    { url: new URL('@/assets/images/teams/01-W.png', import.meta.url).href },
];

const currentIndex = ref(0);
const next = () => {
    currentIndex.value = currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
};
const prev = () => {
    currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
};


</script>

<template>
<div class="w-full h-full flex flex-row relative">
    <div class="w-full h-full">
        <img :src="images[currentIndex].url" alt="" class="w-full h-full object-cover">
    </div>

    <!-- 按鈕 -->
    <div class="absolute right-48 bottom-12 flex flex-row justify-center items-center z-90">
        <button class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative" @click="prev">
            <img src="@/assets/images/button_1.png" alt="object-cover">
            <ChevronLeftIcon class="h-6 w-6 text-white absolute mr-1" />
        </button>
        <button  class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative" @click="next">
            <img src="@/assets/images/button_2.png" alt="object-cover">
            <ChevronRightIcon class="h-6 w-6 text-white absolute ml-1" />
        </button>
        <RouteButton :to="{ name: 'teams' }" class="w-9 h-9 flex justify-center items-center transition-300-out relative">
            <img src="@/assets/images/button_3.png" alt="object-cover">
            <ArrowReturnIcon class="h-4 w-4 text-white absolute"/>
        </RouteButton>
    </div>

    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center relative">
        <div class="h-full flex flex-col justify-end items-center relative">
            <div class="absolute top-48 left-0 flex flex-col items-start w-1/2 ml-4">
                <span class="text-xl text-primary-300 vertical-text english-font mb-6">PROFESSIONAL TEAM</span>
                <span class="text-xl text-zinc-100 vertical-text">團　隊</span>
            </div>
            <img src="@/assets/images/right_banner_2.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>

        <!-- 小按鈕 -->
        <RouteButton :to="switchLink.router" class="flex justify-center items-center absolute -left-6 bottom-[25rem] bg-primary-300 rounded-lg z-10">
            <span class="text-zinc-50 text-xl vertical-text py-2 tracking-[0.25rem]">{{ switchLink.name }}</span>
        </RouteButton>
    </div>
</div>
</template>

<style scoped>
</style>
