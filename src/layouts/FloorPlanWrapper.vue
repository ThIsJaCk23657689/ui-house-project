<script setup lang="ts">
import { ref } from 'vue';
import IconMagnifyingGlassPlus from '../components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '../components/icons/IconMagnifyingGlassMinus.vue';
import FloorPlanBackground from '@/components/icons/FloorPlanBackground.vue';
import RouteButton from '@/components/RouteButton.vue';
import CompressIcon from '@/components/icons/CompressIcon.vue';

const props = defineProps<{
    imageUrl: string,
    title?: string,
    isFloor: boolean | false,
    isBasement?: boolean | false,
    isAera?: boolean | false,
    hasBg?: boolean | false,
    titleImage?: string,
    buttons?: Array<{
        text: string,
        isActive: boolean | false,
    }>,
}>()

function ceil (value: number) {
    return Math.ceil(value);
}

const scale = ref(1);               // 初始縮放比例
const dragging = ref(false);        // 是否正在拖動
const lastMouseX = ref(0);          // 上次滑鼠 X 座標
const lastMouseY = ref(0);          // 上次滑鼠 Y 座標
const translateX = ref(0);          // X 軸位移
const translateY = ref(0);          // Y 軸位移

const currentHoverType = ref(0);    // 紀錄現在 hover 哪一個房型

function zoomIn() {
    if ( scale.value < 3.0 ) {
        scale.value *= 1.2;
    }
}

function zoomOut() {
    if ( scale.value > 1.0 ) {
        scale.value /= 1.2;
    } else {
        scale.value = 1.0;
    }
}

function startDragging(event: { preventDefault: () => void; clientX: number; clientY: number; }) {
    event.preventDefault();
    dragging.value = true;
    lastMouseX.value = event.clientX;
    lastMouseY.value = event.clientY;
}

function handleDragging(event: { clientX: number; clientY: number; }) {
    if (!dragging.value) return;

    const offsetX = (event.clientX - lastMouseX.value) / scale.value;
    const offsetY = (event.clientY - lastMouseY.value) / scale.value;
    lastMouseX.value = event.clientX;
    lastMouseY.value = event.clientY;

    translateX.value += offsetX;
    translateY.value += offsetY;
}

function stopDragging() {
    dragging.value = false;
    window.removeEventListener('wheel', handleWheel);
}

function handleMouseEnter() {
    window.addEventListener('wheel', handleWheel);
}

function handleWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.max( -1, Math.min( 1, event.deltaY ) );
    if ( delta > 0 ) {
        zoomOut();
    } else if ( delta < 0 ) {
        zoomIn();
    }
}

function reset() {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
}

// 0 代表沒 hover；從 1 開始算
function hoverRoom(index: number) {
    currentHoverType.value = index;

    console.log('hoverRoom', index);
}

</script>

<template>
<div class="flex flex-row relative w-full h-full">

    <div class="relative w-full h-full bg-white overflow-hidden">
        <div class="w-full h-full flex justify-center items-center relative" :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
            }"
            @mousedown="startDragging"
            @mousemove="handleDragging"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
            @mouseenter="handleMouseEnter"
            @wheel="handleWheel">

            <div v-if="hasBg" class="w-4/5 relative">
                <FloorPlanBackground class="w-full absolute inset-0" :current-hover-index="currentHoverType" style="padding-right: 5px;"></FloorPlanBackground>
                <img :src="imageUrl" alt="Image" class="object-cover relative z-10"/>
            </div>
            <div v-else-if="isFloor == false && isAera == true" class="w-full h-full flex justify-start items-center" style="padding-left: 8rem;">
                <img :src="imageUrl" alt="Image" class="object-cover" style="width: 75%;" />
            </div>
            <div v-else-if="isFloor == true && isBasement == true" class="w-4/6 flex justify-center items-center">
                <img :src="imageUrl" alt="Image" class="object-cover mt-24" />
            </div>
            <div v-else class="w-full h-full flex justify-center items-center">
                <!-- 1F 全面平面圖 & RF 全面平面圖 -->
                <img :src="imageUrl" alt="Image" class="object-cover" />
            </div>

            <div v-if="hasBg" class="w-full h-full absolute top-0 left-0 z-20">
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'A' } }" class="absolute a-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(1)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'B' } }" class="absolute b-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(2)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'C' } }" class="absolute c-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(3)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'D' } }" class="absolute d-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(4)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'E' } }" class="absolute e-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(5)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'F' } }" class="absolute f-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(6)"></RouterLink>
            </div>
            <slot></slot>

        </div>

        <slot name="fixed"></slot>
    </div>


    <!-- 右邊面板 -->
    <div class="w-40 h-full absolute right-0 top-0 z-10 flex flex-col justify-center items-end">
        <div class="w-full h-full flex relative" style="font-family: '微軟正黑體'">

            <div class="flex flex-col mt-48 ml-4">
                <div v-if="isFloor == true && isAera == false && isBasement == false" class="absolute flex flex-col justify-center items-center">
                    <div class="mb-6">
                        <span v-if="title == '1'" class="text-primary-300 text-8xl tracking-tighter" style="font-family: Arial, Helvetica, sans-serif;">1F</span>
                        <span v-else-if="title == 'R'" class="text-primary-300 text-8xl font-bold">RF</span>
                    </div>
                    <div class="title-image-text">
                        <span class="text-primary-300 text-3xl font-bold">平面配置</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- 指南針 -->
    <div class="compress-container absolute flex justify-center items-center">
        <CompressIcon class="compress text-primary-300" />
    </div>

    <!-- 圖片控制面板 -->
    <div class="control-panel absolute flex flex-col z-20 bottom-16 right-24">
        <div class="left-area relative flex flex-row items-center justify-center">
            <button class="scale-button" @click="zoomIn">
                <IconMagnifyingGlassPlus class="h-full text-primary-300"></IconMagnifyingGlassPlus>
            </button>
            <button class="scale-button" @click="zoomOut">
                <IconMagnifyingGlassMinus class="h-full text-primary-300"></IconMagnifyingGlassMinus>
            </button>
            <div class="scale-text text-primary-300 cursor-pointer border border-primary-300 rounded-full" @click="reset">
                {{ ceil(scale * 100) }}%
            </div>
        </div>
    </div>

</div>
</template>

<style scoped>
.main {
    width: 84%;
}

.design-border {
    width: 15px;
    height: 100%;
}

.design-block {
    width: 100%;
    height: 20.88%;
}

.floor-plan-title {
    display: inline-block;
    width: 100%;
    font-size: 80px;
    color: #fff;
    text-align: center;
    line-height: 1;
}

.compress-container {
    width: 50px;
    height: 50px;
    right: 18%;
    bottom: 7%;
    transform: rotateZ(273deg);
}

.floor {
    font-size: 70px;
    color: #fff;
    text-align: center;
    line-height: 1;
}

.floor-plan-text {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 1;
}

.control-panel{
    height: 40px;
}

.control-panel .left-area {
    border-radius: 25px 25px 25px 25px;
    width: 100%;
    height: 100%;
}

.scale-button {
    margin-right: 8px;
    height: 28px;
}

.scale-text {
    padding: 0px 8px 0px 8px;
    display: inline-block;
}

.special-border {
    width: 1px;
    height: 500px;
}

.title-image-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 0.4rem;
}



.a-part {
    width: 28%;
    height: 29%;
    top: 65%;
    left: 10%;
}

.b-part {
    width: 27%;
    height: 29%;
    top: 65%;
    left: 38%;
}

.c-part {
    width: 24.5%;
    height: 32%;
    top: 36%;
    left: 64.8%;
}

.d-part {
    width: 24.5%;
    height: 30%;
    top: 6%;
    left: 64.8%;
}

.e-part {
    width: 26%;
    height: 30%;
    top: 6%;
    left: 39%;
}

.f-part {
    width: 26%;
    height: 29%;
    top: 36%;
    left: 12%;
}

</style>
