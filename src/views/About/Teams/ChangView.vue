<script setup lang="ts">
import { ref } from 'vue';
import TeamMemberLayout from '@/layouts/TeamMemberLayout.vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '@/components/icons/ArrowReturnIcon.vue';
import RouteButton from '@/components/RouteButton.vue';

const person = {
    avatar: new URL('@/assets/images/teams/person-02-01.png', import.meta.url).href,
    title: '公設景觀',
    company: '大述設計 設計總監',
    name: '張世利',
    englishName: 'Aaron Chang',
    position: '創意總監',
    bio: [
        "中國魯迅美術學院.環境藝術設計系",
        "2021-2022大述空間設計有限公司創辦人",
        "2009-2021台中伯特利建筑空間研究室設計總監",
        "2003-2009 上海臻建築建築設計諮詢有限公司首席設計師",
    ],
    awardTitle: "得獎記錄(伯特利設計團隊期間)",
    awards: [
        "2017.上海金外灘獎",
        "2018.第五届法国INNODESIGNPRIZE国际创新设计大奖",
        "2018.美國IDA國際設計獎",
        "2018.英國LICC Honorable mention",
        "2018.第9届國際空間設計大獎IDEA-TOPS艾特獎",
        "2018-2019義大利A'design",
        "2019.徳國 IF DISCIPLINE ARCHITECTURE",
        "2019.英國SBID-finalist",
        "2019.美國AMP Honorable Mention",
        "2019.日本 JCD國際商空設計大獎",
    ],
    awardsGrid: [],
    workImages: [
        { url: new URL('@/assets/images/teams/02-01.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/02-02.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/02-03.png', import.meta.url).href }
    ]
};

const switchLink = {
    router: { name: 'teams-chen' },
    name: '建築設計'
};

const images = [
    { url: new URL('@/assets/images/teams/02.png', import.meta.url).href },
    { url: new URL('@/assets/images/teams/02-W.png', import.meta.url).href },
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
