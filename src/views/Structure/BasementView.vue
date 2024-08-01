<script setup lang="ts">
import { ref } from 'vue';
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const currentBasement = ref(0);

const basement = [
    { title: 'B1', text: '地下一樓配置圖', url: new URL('@/assets/images/floorplans/B1.png', import.meta.url).href },
    { title: 'B2', text: '地下二樓配置圖', url: new URL('@/assets/images/floorplans/B2.png', import.meta.url).href },
    { title: 'B3', text: '地下三樓配置圖', url: new URL('@/assets/images/floorplans/B3.png', import.meta.url).href }
];

const buttons = [
    { text: 'B1', isActive: true },
    { text: 'B2', isActive: false },
    { text: 'B3', isActive: false }
];

function bassmentButtonClicked(index: number) {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].isActive = false;
    }

    buttons[index].isActive = true;
    currentBasement.value = index;
    console.log('basement button clicked:' + index);
}

</script>

<template>
<div class="w-full h-full relative flex flex-row justify-center items-center">
    <FloorPlanWrapper 
        :image-url="basement[currentBasement].url" 
        :title="basement[currentBasement].title" 
        :is-floor="true"
        :is-basement="true"
        :buttons="buttons"
        @basement-Button="bassmentButtonClicked">
    </FloorPlanWrapper>
    
    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center">
        <div class="h-full flex flex-col justify-end items-center relative">
            <img src="@/assets/images/right_banner_3.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>
</div>   

</template>

<style scoped>
</style>
