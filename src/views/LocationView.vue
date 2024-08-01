<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
<RouterView />
<div class="absolute flex justify-end items-center right-0 top-0 h-full">
    <div class="h-full flex flex-col justify-end items-center relative">
        <div class="absolute top-48 left-0 flex flex-col items-start w-1/2 ml-4">
            <span class="text-xl text-zinc-100 vertical-text english-font mb-4">Urban</span>
            <span class="text-xl text-zinc-100 vertical-text">地　段</span>
        </div>
        <img src="@/assets/images/right_banner.png" alt="" class="h-full object-cover">
    </div>
</div>
</template>

<style scoped>
</style>
