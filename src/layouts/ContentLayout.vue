<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContentMenu from '@/components/ContentMenu.vue'

</script>

<template>
    <div class="w-screen h-screen flex">
        <div class="relative w-1/6 shadow-lg z-20">
            <ContentMenu></ContentMenu>
        </div>

        <main class="h-full w-5/6">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>

</style>