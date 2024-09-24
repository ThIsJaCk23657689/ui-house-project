<script setup lang="ts">
import { ref, computed, markRaw } from 'vue';
import { useRoute } from 'vue-router';
import RouteButton from '@/components/RouteButton.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import NextPrevButton from '@/components/NextPrevButton.vue';

const route = useRoute();
const props = defineProps<{
    pages: Array<{
        content: any
    }>,
    buttons: Array<{
        text: string,
        start: number,
        end: number
    }>
}>();


// Side Menu
const materials = [
    { path: 'panasonickitchen', image: new URL('@/assets/images/materials/side/PanasonicKitchen.png', import.meta.url).href },
    { path: 'rinnai', image: new URL('@/assets/images/materials/side/Rinnai.png', import.meta.url).href },
    { path: 'svago', image: new URL('@/assets/images/materials/side/Svago.png', import.meta.url).href },
    { path: 'panasonicbathroom', image: new URL('@/assets/images/materials/side/PanasonicBathroom.png', import.meta.url).href },
    { path: 'innoci', image: new URL('@/assets/images/materials/side/Innoci.png', import.meta.url).href },
    { path: 'hansgrohe', image: new URL('@/assets/images/materials/side/Hansgrohe.png', import.meta.url).href },
    { path: 'lifegear', image: new URL('@/assets/images/materials/side/Lifegear.png', import.meta.url).href },
    { path: 'daiken', image: new URL('@/assets/images/materials/side/Daiken.png', import.meta.url).href },
    { path: 'lamett', image: new URL('@/assets/images/materials/side/Lamett.png', import.meta.url).href },
    { path: 'waferlock', image: new URL('@/assets/images/materials/side/Waferlock.png', import.meta.url).href },
    { path: 'electriccar', image: new URL('@/assets/images/materials/side/ElectronCar.png', import.meta.url).href },
    { path: 'secom', image: new URL('@/assets/images/materials/side/Secom.png', import.meta.url).href },
];

// 決定Side Menu單是否要 active
const IsSideMenuItemActive = (currentMenuItem: any) => {
    let isActive : boolean = false;
    const currentRoutePath : string = route.path;               // '/material/menu'
    const currentMenuItemPath : string = currentMenuItem.path;  // '/material'
    if (currentRoutePath.includes(currentMenuItemPath)) {
        isActive = true;
    } else {
        isActive = false;
    }
    return isActive;
};


const currentPageIndex = ref(0);
const currentButtonIndex = ref(0);
// const currentMode = ref("right");

const currentView = computed(() => {
    return markRaw(props.pages[currentPageIndex.value].content);
});

function PrevPage() {
    // currentMode.value = "left";
    currentPageIndex.value = ( currentPageIndex.value - 1 + props.pages.length ) % props.pages.length;
    UpdateClassButtonActive();
}

function NextPage() {
    // currentMode.value = "right";
    currentPageIndex.value = ( currentPageIndex.value + 1 ) % props.pages.length;
    UpdateClassButtonActive();
}

function IsButtonActive(index: number) {
    return index === currentButtonIndex.value;
}

function OnClassButtonClicked(index: number) {
    if (props.buttons[index].start >= props.pages.length) {
        return;     
    }

    currentPageIndex.value = props.buttons[index].start;
    UpdateClassButtonActive();
}

function UpdateClassButtonActive() {
    for (let i = 0; i < props.buttons.length; i++) {
        if (currentPageIndex.value >= props.buttons[i].start && currentPageIndex.value <= props.buttons[i].end) {
            currentButtonIndex.value = i;
            break;
        }
    }
}

function IsButtonVisible(index: number) {
    return props.buttons[index].start < props.pages.length;
}

</script>

<template>
<div class="w-full h-full flex justify-center items-center">
    <div class="main h-full overflow-hidden relative bg-zinc-100">

        <!-- 子選單按鈕 -->
        <div class="absolute top-20 left-28 flex flex-row gap-3 z-10">
            <template v-for="(button, index) in buttons">
                <MaterialButton :active="IsButtonActive(index)" :visible="true" @click="OnClassButtonClicked(index)">
                    {{ button.text }}
                </MaterialButton>
            </template>
        </div>

        <transition name="slide" mode="out-in">
            <component v-bind:is="currentView" :key="currentPageIndex"></component>
        </transition>

        <!-- 下一頁、上一頁、回主選單按鈕 -->
        <NextPrevButton :positionClass="'absolute right-20 bottom-8'" :routeTo="{ name: 'material-menu' }" @prev="PrevPage" @next="NextPage" />
    </div>

    <!-- 側邊選單 -->
    <div class="side h-full flex flex-col justify-around items-center py-14 bg-primary-400">
        <template v-for="(material, index) in materials" :key="index">
            <RouteButton v-if="IsSideMenuItemActive(material)" :to="material.path" class="w-full flex justify-center items-center opacity-100 transition-300-out py-4">
                <div class="w-4/6 flex justify-center items-center">
                    <img :src="material.image" alt="" class="object-cover w-full">
                </div>
            </RouteButton>
            <RouteButton v-else :to="material.path" class="w-full flex justify-center items-center opacity-75 hover:opacity-100 transition-300-out py-4">
                <div class="w-4/6 flex justify-center items-center">
                    <img :src="material.image" alt="" class="object-cover w-full">
                </div>
            </RouteButton>
        </template>
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

.main {
    width: 88%;
}

.side {
    width: 12%;
}

/* .left-enter-active, .left-leave-active {
    transition: transform 0.4s ease-out;
}
.left-enter {
    transform: translate(100%, 0);
}
.left-leave-to {
    transform: translate(-100%, 0);
}

.right-enter-active, .right-leave-active {
    transition: transform 0.4s ease-out;
}
.right-enter {
    transform: translate(-100%, 0);
}
.right-leave-to {
    transform: translate(100%, 0);
}

 */
</style>
