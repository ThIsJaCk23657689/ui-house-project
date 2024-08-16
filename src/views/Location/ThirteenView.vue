<script setup lang="ts">
import MapViewer from '@/components/MapViewer.vue';
const mainImage = new URL('@/assets/images/map.png', import.meta.url).href;

interface SpotData {
    id: number,
    name: string
    top: number
    left: number,
    images: Array<string>
}

const spotData : SpotData[] = [];

</script>

<template>
<MapViewer :image-url="mainImage" :spot-data="spotData"></MapViewer>
</template>

<style scoped>
</style>