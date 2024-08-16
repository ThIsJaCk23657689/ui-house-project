<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
    currentHoverIndex: number,
}>()

function getRoomCssClasses(roomIndex: number) {
    let classes = ['transition-300-out'];
    if (roomIndex == 2 || roomIndex == 4 || roomIndex == 6) {
        classes.push('cls-2');
    } else {
        classes.push('cls-1');
    }

    if (props.currentHoverIndex == roomIndex) {
        classes.push('cls-hover');
    }

    return classes;
}

watch(() => props.currentHoverIndex, (newValue, oldValue) => {
    // 在這裡觸發重新渲染或其他相關操作

});

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2806.81 1051.74">
        <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
                <!-- A -->
                <polygon :class="getRoomCssClasses(1)"
                    points="520 125.25 313.6 125.25 313.6 253.1 184.3 253.27 140.8 253.1 136.5 253.27 136.5 382.56 46.56 382.56 46.56 408.33 35.28 410.05 35.28 532.76 8.85 532.76 8.85 564.16 0 564.16 0.21 985.01 54.65 985.01 55.66 996.46 56.16 1051.72 532.12 1051.72 532.12 540.21 532.12 126.9" />
                <!-- B -->
                <polygon :class="getRoomCssClasses(2)"
                    points="518.99 459.87 1225.34 459.87 1226.68 56.68 1152.85 56.76 1152.85 21.48 1060.97 21.48 1060.97 0.08 870 0.08 870 56.8 518.99 53.26 518.99 459.87" />
                <!-- C -->
                <polygon :class="getRoomCssClasses(3)"
                    points="1504.73 21.48 1504.73 459.87 2220.55 459.87 2220.55 378.02 2268.97 376.88 2270.25 80.93 2147.73 80.93 2147.73 21.31 2080.39 21.31 2080.39 0.08 1882.05 0.08 1882.05 25.87 1745.65 25.87 1745.65 0 1550.72 0 1550.72 21.48 1504.73 21.48" />
                <!-- D -->
                <polygon :class="getRoomCssClasses(4)"
                    points="2059.79 459.87 2059.79 605.87 2148.46 605.87 2148.46 1051.74 2804.42 1051.63 2806.81 886.23 2775.68 821.58 2699.83 822.52 2699.83 649.07 2647.53 648.59 2647.53 591.74 2624.8 591.74 2624.8 526.94 2508.84 525.81 2508.84 367.05 2270.25 367.05 2270.25 376.88 2220.55 378.02 2220.55 459.87 2059.79 459.87" />
                <!-- E -->
                <polygon :class="getRoomCssClasses(5)"
                    points="1225.34 603.38 1243.54 603.42 2148.46 605.87 2148.46 1051.74 1483.28 1051.74 1483.28 1005.21 1213.98 1005.21 1225.34 603.38" />
                <!-- F -->
                <polygon :class="getRoomCssClasses(6)"
                    points="532.69 603.38 1225.91 603.38 1225.91 813.64 1162.25 813.64 1160.73 864.59 1151.64 864.59 1153.22 1051.72 718.12 1051.72 532.69 1051.72 532.69 603.38" />
            </g>
        </g>
    </svg>
</template>

<style scoped>
.cls-1 {
    fill: #f6de00;
    opacity: 0.4;
}

.cls-2 {
    fill: #afafb0;
    opacity: 0.5;
}

.cls-hover {
    opacity: 0.15;
}
</style>