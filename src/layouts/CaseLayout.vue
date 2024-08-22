<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '../components/icons/ArrowReturnIcon.vue';
import RouteButton from '@/components/RouteButton.vue';

interface UrlObject {
    name: string;
}

const props = defineProps<{
    prevUrl: UrlObject;
    nextUrl: UrlObject;
    returnUrl: UrlObject;
}>();

</script>

<template>
<div class="w-full h-full relative">

    <div class="h-full flex flex-row justify-between">
        <!-- 內容 -->
        <slot></slot>

        <!-- 右側 banner -->
        <div class="h-full flex justify-end items-center">
            <div class="h-full flex flex-col justify-end items-center relative">
                <div class="absolute top-48 left-0 flex flex-col items-start w-1/2 ml-4">
                    <span class="text-xl text-primary-300 vertical-text english-font mb-6">Unique</span>
                    <span class="text-xl text-zinc-100 vertical-text">業　績</span>
                </div>
                <img src="@/assets/images/right_banner_2.png" alt="" class="h-full object-cover" style="max-width: max-content;">
            </div>
        </div>

    </div>

    <!-- 按鈕 -->
    <div class="absolute right-48 bottom-12 flex flex-row justify-center items-center z-90">
        <RouteButton :to="props.prevUrl" class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative">
            <img src="@/assets/images/button_1.png" alt="object-cover">
            <ChevronLeftIcon class="h-6 w-6 text-white absolute mr-1" />
        </RouteButton>
        <RouteButton :to="props.nextUrl" class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative">
            <img src="@/assets/images/button_2.png" alt="object-cover">
            <ChevronRightIcon class="h-6 w-6 text-white absolute ml-1" />
        </RouteButton>
        <RouteButton :to="props.returnUrl" class="w-9 h-9 flex justify-center items-center transition-300-out relative">
            <img src="@/assets/images/button_3.png" alt="object-cover">
            <ArrowReturnIcon class="h-4 w-4 text-white absolute"/>
        </RouteButton>
    </div>


    <!-- <template v-if="props.imageUrls.length > 1">
        <button class="w-8 border border-white rounded-full p-1 bg-black/50 text-white prev-button hover:bg-primary-100 hover:border-primary-100 transition-300-out z-20" @click="prevImage">
            <ChevronLeftIcon></ChevronLeftIcon>
        </button>

        <button class="w-8 border border-white rounded-full p-1 bg-black/50 text-white next-button hover:bg-primary-100 hover:border-primary-100 transition-300-out z-20" @click="nextImage">
            <ChevronRightIcon></ChevronRightIcon>
        </button>
    </template>

    <div class="card h-full flex flex-row">
        <div class="bg-primary-200 w-1/3 h-full flex flex-col justify-around items-center">
            
            <div class="flex flex-col justify-center items-center">
                <Transition name="fade" appear>
                    <div class="english-font text-2xl text-zinc-400 mb-6">PORTFOLIO</div>
                </Transition>
                
                <Transition name="fade" appear>
                    <div class="font-bold text-lg text-zinc-50">
                        {{ slogan }}
                    </div>
                </Transition>
            </div>

            <Transition name="fade" appear>
                <div class="flex justify-center items-center mb-8">
                    <RouteButton :to="{ name: 'cases-menu' }" class="text-zinc-50 font-bold text-5xl">
                        {{ mainTitle }}
                    </RouteButton>   
                </div>
            </Transition>

            <Transition name="fade" appear>
                <div class="text-zinc-50 flex justify-center items-center px-16">
                    <p class="w-full center-justified mb-12">
                        <slot></slot>
                    </p>
                </div>
            </Transition>

        </div>

        <div class="relative w-2/3 h-full overflow-hidden">
            <Transition name="scale" appear>
                <img :src="imageUrls[currentPageIndex]" alt="" class="object-cover h-full mainImage">
            </Transition>
        </div>

    </div> -->
</div>
</template>

<style scoped>


/* ========================== */
.fade-enter-active, .fade-leave-active {
    transition: all 2.0s ease-out;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}


/* ========================== */
.slide-fade-down-enter-active,
.slide-fade-down-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
	transform: translateY(-50px);
	opacity: 0;
}

</style>
