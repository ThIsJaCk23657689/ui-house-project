<script setup lang="ts">
import { ref, computed, markRaw } from 'vue';
import NextPrevButton from '@/components/NextPrevButton.vue';

const props = defineProps<{
    pages: Array<{
        content: any
    }>,
}>()

const currentPageIndex = ref(0);

const currentView = computed(() => {
    return markRaw(props.pages[currentPageIndex.value].content);
});

function PrevPage() {
    // currentMode.value = "left";
    currentPageIndex.value = ( currentPageIndex.value - 1 + props.pages.length ) % props.pages.length;
}

function NextPage() {
    // currentMode.value = "right";
    currentPageIndex.value = ( currentPageIndex.value + 1 ) % props.pages.length;
}

</script>

<template>
<div class="w-full h-full flex justify-center items-center">
    <div class="main w-full h-full overflow-hidden relative bg-zinc-100">

        <transition name="slide" mode="out-in">
            <component v-bind:is="currentView" :key="currentPageIndex"></component>
        </transition>

        <!-- 按鈕 -->
        <NextPrevButton :positionClass="'absolute right-48 bottom-12'" :routeTo="{ name: 'cases-menu' }" @prev="PrevPage" @next="NextPage" />

    </div>
</div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: opacity 0.4s ease-out;
}
.slide-enter, .slide-leave-to {
    opacity: 0;
}
</style>
