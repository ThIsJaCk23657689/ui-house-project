<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const people = [
    {
        router: { name: 'teams-chen' },
        transition: 'slide-fade-up',
        avatar: new URL('@/assets/images/teams/person-01.png', import.meta.url).href,
        title: '建築設計',
        name: '陳彥伯',
        position: '建築師',
    },
    {
        router: { name: 'teams-chang' },
        transition: 'slide-fade-down',
        avatar: new URL('@/assets/images/teams/person-02.png', import.meta.url).href,
        title: '公設設計',
        name: '張世利',
        position: '創意總監',
    }
];

</script>

<template>
<div class="w-full h-full flex flex-row">
    <div class="w-full h-full flex flex-row bg-gradient-to-l from-gray-300 to-white">
        <!-- 左側 -->
        <div class="w-1/2 h-full flex justify-end">
            <!-- 人物介紹 1 -->
            <div class="w-4/5 h-full flex justify-end pr-2">
                <Transition :name="people[0].transition" appear>
                    <RouteButton :to="people[0].router" class="flex flex-col w-4/5 mt-48 3xl:mt-56 relative">
                        <div class="w-full overflow-hidden mb-4 relative">
                            <img :src="people[0].avatar" class="object-cover w-full h-full mainImage" alt="">
                            <span class="absolute top-10 right-6 vertical-text text-3xl text-zinc-50 font-bold tracking-[.5rem] mr-2 z-10">{{ people[0].title }}</span>
                        </div>

                        <div class="absolute top-[21.5rem] 3xl:top-[27.4rem] left-[12rem] w-full flex flex-col z-50">
                            <div class="w-full mb-2">
                                <img src="@/assets/images/teams/banner.png" alt="" class="object-fit" style="height: 2.4rem;">
                            </div>
                            <div class="w-full flex flex-row items-end">
                                <span class="text-2xl font-bold mr-2">{{ people[0].name }}</span>
                                <span class="text-xl font-bold">{{ people[0].position }}</span>
                            </div>
                        </div>

                    </RouteButton>
                </Transition>
            </div>
        </div>

        <!-- 右側 -->
        <div class="w-1/2 h-full flex">
            <!-- 人物介紹 2 -->
            <div class="w-4/5 h-full flex justify-start items-end pl-2">
                <Transition :name="people[1].transition" appear>
                    <RouteButton :to="people[1].router" class="flex flex-row w-4/5 mb-40 3xl:mb-56">
                        <div class="h-full flex flex-col relative">
                            <div class="w-full overflow-hidden mb-2">
                                <img :src="people[1].avatar" class="object-cover w-full h-full mainImage" alt="">
                            </div>
                            <div class="absolute bottom-[2.8rem] -right-[2.4rem] flex flex-row justify-end items-end z-20">
                                <span class="vertical-text font-bold text-2xl ml-2">{{ people[1].title }}</span>
                            </div>
                            <div class="w-full flex flex-row justify-end items-end">
                                <span class="text-2xl font-bold mr-2">{{ people[1].name }}</span>
                                <span class="text-xl font-bold">{{ people[1].position }}</span>
                            </div>
                        </div>
                    </RouteButton>
                </Transition>
            </div>

            <!-- 標題 -->
            <div class="w-1/5 h-full flex pt-32 pl-4">
                <div class="english-font text-zinc-50 text-6xl vertiacl-text">PROFESSIONAL TEAM</div>
            </div>
        </div>
    </div>

    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center">
        <div class="h-full flex flex-col justify-end items-center relative">
            <div class="absolute top-48 left-0 flex flex-col items-start w-1/2 ml-4">
                <span class="text-xl text-primary-300 vertical-text english-font mb-6">PROFESSIONAL TEAM</span>
                <span class="text-xl text-zinc-100 vertical-text">團　隊</span>
            </div>
            <img src="@/assets/images/right_banner_2.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>
</div>
</template>

<style scoped>
.vertiacl-text {
    writing-mode: vertical-lr;
}

.mainImage {
    transform: scale(1.1);
    transition: all 2.0s ease-out;
}

.mainImage:hover {
    transform: scale(1.0);
}


/* ========================== */
.slide-fade-up-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
	transform: translateY(80px);
	opacity: 0;
}


/* ========================== */
.slide-fade-down-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
	transform: translateY(-80px);
	opacity: 0;
}
</style>
