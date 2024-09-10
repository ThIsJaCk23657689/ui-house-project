<script setup lang="ts">
import { ref, computed } from 'vue';
import IconMagnifyingGlassPlus from '@/components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '@/components/icons/IconMagnifyingGlassMinus.vue';
import IconSun from '@/components/icons/IconSun.vue';
import IconSunFill from '@/components/icons/IconSunFill.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconMoonFill from '@/components/icons/IconMoonFill.vue';

interface Spot {
    top: number;
    left: number;
    rotate: number;
}

interface ImageInfo {
    url: string;
    spot: Spot;
}

interface ImageUrls {
    day: ImageInfo;
    night: ImageInfo;
}

const props = defineProps<{
	imageUrls: Array<ImageUrls>
}>();

const scale = ref(1);               // 初始縮放比例
const dragging = ref(false);        // 是否正在拖動
const lastMouseX = ref(0);          // 上次滑鼠 X 座標
const lastMouseY = ref(0);          // 上次滑鼠 Y 座標
const translateX = ref(0);          // X 軸位移
const translateY = ref(0);          // Y 軸位移
const currentIndex = ref(0);        // 目前第幾張圖片
const dayMode = ref(true);          // 是否為白天模式

function ceil (value: number) {
    return Math.ceil(value);
}

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

function changeImageIndex (index: number) {
    currentIndex.value = index;
};

function changeDay(enable: boolean) {
    dayMode.value = enable;
}

function reset() {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
}

const spot = computed(() => {
  return dayMode.value
    ? props.imageUrls[currentIndex.value].day.spot
    : props.imageUrls[currentIndex.value].night.spot;
});

</script>

<template>
    <div class="overflow-hidden w-full h-full relative bg-primary-300">

        <div class="w-full h-full"
            :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
            }"
            @mousedown="startDragging"
            @mousemove="handleDragging"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
            @mouseenter="handleMouseEnter"
            @wheel="handleWheel">

            <TransitionGroup name="image-fade">
                <div v-if="dayMode" v-for="i in [currentIndex]" :key="i" class="w-full h-full">
                    <img :key="currentIndex" :src="imageUrls[currentIndex].day.url" alt="Image" class="w-full h-full object-cover">
                </div>
				<div v-else v-for="i in [currentIndex]" :key="i + 10" class="w-full h-full">
                    <img :key="currentIndex" :src="imageUrls[currentIndex].night.url" alt="Image" class="w-full h-full object-cover">
                </div>
            </TransitionGroup>
            
        </div>

        <div class="absolute bottom-0 right-24 flex justify-center items-center w-1/5 h-1/4">
            <div class="flex justify-center items-center relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img src="@/assets/images/apperance/minmap.png" alt="Minmap" class="object-cover"/>
                </div>
                <div class="absolute w-[1.5rem] transition ease-out delay-150 duration-300" :style="{ top: `${spot.top}%`, left: `${spot.left}%`, transform: `rotate(${spot.rotate}deg)` }">
                    <img src="@/assets/images/apperance/spot.png" alt="current spot" class="object-cover drop-shadow-md"/>
                </div>
            </div>
        </div>

        <div class="control-panel">
            <div class="left-area relative flex flex-row justify-center items-center">
                <button class="scale-button z-10" @click="changeDay(true)">
                    <IconSunFill v-if="dayMode" class="h-full text-zinc-100"></IconSunFill>
                    <IconSun v-else class="h-full text-zinc-100"></IconSun>
                </button>
                <button class="scale-button z-10" @click="changeDay(false)">
                    <IconMoon v-if="dayMode" class="h-full text-zinc-100"></IconMoon>
                    <IconMoonFill v-else class="h-full text-zinc-100"></IconMoonFill>
                </button>
                <button class="scale-button" @click="zoomIn">
                    <IconMagnifyingGlassPlus class="h-full text-zinc-100"></IconMagnifyingGlassPlus>
                </button>
                <button class="scale-button" @click="zoomOut">
                    <IconMagnifyingGlassMinus class="h-full text-zinc-100"></IconMagnifyingGlassMinus>
                </button>
                <div class="scale-text text-zinc-100 relative cursor-pointer mr-4" @click="reset">
                    {{ ceil(scale * 100) }}%
                </div>
            </div>
        </div>

        <div v-if="dayMode" class="absolute inset-y-0 right-0 w-36 h-full flex flex-col justify-center items-center">
            <div v-for="(imageUrl, index) in imageUrls" :key="index" class="group" @click="changeImageIndex(index)">
                <div :class="[
                    'dot', 'cursor-pointer', 'mb-8',
                    { 'group-hover:bg-primary-600 transition-300-out bg-primary-500': currentIndex !== index },
                    { 'bg-primary-500': currentIndex === index }
                ]">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.control-panel{
    position: absolute;
    width: 240px;
    height: 40px;
    bottom: 5.3%;
    right: 7.2%;
    display: flex;
    flex-direction: row;
}

.control-panel .left-area {
    width: 100%;
    height: 100%;
}

.scale-button {
    margin-right: 8px;
    height: 24px;
}

.dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
}

.scale-text {
    padding: 0px 4px 0px 4px;
    display: inline-block;
    border: 2px solid #fff;
    border-radius: 25px;
}

.vertical-line {
    border-left: 1px solid #fff;
    height: 60px;
    margin-left: 4%;
}

</style>