<script setup lang="ts">
import MapViewer from '@/components/MapViewer.vue';
const mainImage = new URL('@/assets/images/map.svg', import.meta.url).href;

interface SpotData {
    id: number,
    name: string
    top: number
    left: number,
    images: Array<string>
}

const spotData : SpotData[] = [
    {
        id: 2, name: '大慶車站', top: 66, left: 15, images: [ 
            new URL('@/assets/images/spots/02-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/02-02.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/02-03.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/02-04.jpg', import.meta.url).href
        ] 
    },
    {
        id: 3, name: '中山醫學院大慶校區', top: 61, left: 13, images: [ 
            new URL('@/assets/images/spots/03-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/03-02.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/03-03.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/03-04.jpg', import.meta.url).href
        ] 
    },
    {
        id: 5, name: '文心秀泰', top: 35, left: 4, images: [ 
            new URL('@/assets/images/spots/05-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/05-02.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/05-03.jpg', import.meta.url).href
        ] 
    },
    {
        id: 6, name: '和平國小', top: 74, left: 33, images: [ 
            new URL('@/assets/images/spots/06-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/06-02.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/06-03.jpg', import.meta.url).href 
        ] 
    },
    {
        id: 7, name: '中興大學', top: 60, left: 69, images: [ 
            new URL('@/assets/images/spots/07-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/07-02.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/07-03.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/07-04.jpg', import.meta.url).href
        ] 
    },
    {
        id: 9, name: '國美館', top: 2, left: 49, images: [ 
            new URL('@/assets/images/spots/09-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/09-02.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/09-03.jpg', import.meta.url).href 
        ] 
    },
    {
        id: 10, name: '美術園道', top: 14, left: 49, images: [ 
            new URL('@/assets/images/spots/10-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/10-02.jpg', import.meta.url).href 
        ] 
    },
    {
        id: 11, name: '好市多', top: 19, left: 15, images: [ 
            new URL('@/assets/images/spots/11-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/11-02.jpg', import.meta.url).href 
        ] 
    },
    {
        id: 12, name: '四育國中', top: 43.5, left: 52.15, images: [ 
            new URL('@/assets/images/spots/12-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/12-02.jpg', import.meta.url).href 
        ] 
    },
];

</script>

<template>
<MapViewer :image-url="mainImage" :spot-data="spotData"></MapViewer>
</template>

<style scoped>
</style>