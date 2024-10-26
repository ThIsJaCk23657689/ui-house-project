<script setup lang="ts">
import { ref } from 'vue';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid';

const bShowControl = ref<boolean>(false);
const showControl = () => {
    bShowControl.value = true;
};
const hideControl = () => {
    bShowControl.value = false;
}

const imageTransform = ref<string>('translateX(0%)');
const panoramaImage = ref<HTMLImageElement | null>(null);
let currentTranslateXPercent  = 0;
let animationFrameId: number | null = null;
const bIsMoving = ref<boolean>(false);

const handleMouseMove = (event: MouseEvent) => {
    showControl();

    const container = event.currentTarget as HTMLElement;
    const { left, width } = container.getBoundingClientRect();
    const mouseX = event.clientX - left;

    if (mouseX < width / 3) {
        startMoving(0.2);
    } else if (mouseX > (2 * width) / 3) {
        startMoving(-0.15);
    } else {
        stopMoving();
        bIsMoving.value = false;
    }
};

const handleMouseLeave = () => {
    hideControl();
    stopMoving();
    bIsMoving.value = false;
};

const startMoving = (step: number) => {
    if ( bIsMoving.value )
        return;

    stopMoving();
    animateImage(step);
    bIsMoving.value = true;
};

const animateImage = (step: number) => {
    if (!panoramaImage.value) return;

    const containerWidth = panoramaImage.value.parentElement?.clientWidth ?? 0;
    const imageWidth = panoramaImage.value.clientWidth;
    const maxTranslatePercent = ( (imageWidth - containerWidth) / 2 / imageWidth) * 100;

    const update = () => {
        currentTranslateXPercent += step;
        if (currentTranslateXPercent < -maxTranslatePercent) {
            currentTranslateXPercent = -maxTranslatePercent;
        } else if (currentTranslateXPercent > maxTranslatePercent) {
            currentTranslateXPercent = maxTranslatePercent;
        }
        imageTransform.value = `translateX(${currentTranslateXPercent}%)`;
        animationFrameId = requestAnimationFrame(update);
    };

    update();
};

const stopMoving = () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
};

</script>

<template>
    <div id="main"
        class="w-full h-full relative flex overflow-hidden" 
        @mousemove="handleMouseMove" 
        @mouseleave="handleMouseLeave">

        <div id="container" 
            class="relative w-full h-full flex justify-center items-center overflow-hidden">
            <img ref="panoramaImage" src="@/assets/images/panorama.gif" 
                alt="" 
                class="h-full transition-300-out"
                :style="{ transform: imageTransform, maxWidth: 'none' }">
        </div>
        
        <div id="control" 
            class="w-full h-full absolute top-0 left-0 flex justify-between items-center transition-300-out z-10"
            :class="{ 'opacity-100': bShowControl, 'opacity-0': !bShowControl }">
            
            <button id="right" 
                class="circle-button h-full bg-map-button-to-r left-0 group transition-300-out" 
                :class="{ 'translate-x-left': !bShowControl, 'translate-x-0': bShowControl }"
                type="button">
                    <ArrowLeftIcon class="h-10 w-10 text-zinc-200 group-hover:text-primary-100 transition-300-out" />
            </button>

            <button id="left" 
            class="circle-button h-full bg-map-button-to-l right-0 group transition-300-out" 
            :class="{ 'translate-x-right': !bShowControl, 'translate-x-0': bShowControl }"
            type="button">
                <ArrowRightIcon class="h-10 w-10 text-zinc-200 group-hover:text-primary-100 transition-300-out" />
            </button>

        </div>

    </div>
</template>

<style scoped>
.circle-button {
    position: absolute;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#control .circle-button {
  transition: transform 0.5s ease;
}

#control .circle-button.translate-x-left {
  transform: translateX(-100%);
}

#control .circle-button.translate-x-right {
  transform: translateX(100%);
}

#control .circle-button.translate-x-0 {
  transform: translateX(0);
}
</style>
