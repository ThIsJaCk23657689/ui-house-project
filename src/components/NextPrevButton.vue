<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '@/components/icons/ArrowReturnIcon.vue';
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps({
    routeTo: {
        type: Object,
        required: true
    },
    positionClass: {
        type: String,
        required: true
    }
});

const emits = defineEmits(['prev', 'next']);

const PrevPage = () => {
    emits('prev');
}

const NextPage = () => {
    emits('next');
}

</script>

<template>
<div :class="positionClass" class="flex flex-row justify-center items-center z-90">
    <button class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative" @click="PrevPage">
        <img src="@/assets/images/button_1.png" alt="object-cover">
        <ChevronLeftIcon class="h-6 w-6 text-white absolute mr-1" />
    </button>
    <button class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative" @click="NextPage">
        <img src="@/assets/images/button_2.png" alt="object-cover">
        <ChevronRightIcon class="h-6 w-6 text-white absolute ml-1" />
    </button>
    <RouteButton :to="routeTo" class="w-9 h-9 flex justify-center items-center transition-300-out relative">
        <img src="@/assets/images/button_3.png" alt="object-cover">
        <ArrowReturnIcon class="h-4 w-4 text-white absolute"/>
    </RouteButton>
</div>
</template>

<style scoped>
</style>
