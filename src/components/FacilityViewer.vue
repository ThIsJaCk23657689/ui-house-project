<script setup lang="ts">
import { ref } from 'vue';
import RouteButton from '@/components/RouteButton.vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '@/components/icons/ArrowReturnIcon.vue';

const props = defineProps<{
	images: Array<string>,
	title: string
}>()

const currentIndex = ref(0);        // 目前第幾張圖片

function nextImage() {
    let currentImageLength = props.images.length;
    currentIndex.value = (currentIndex.value + 1) % currentImageLength;
}

function prevImage() {
    let currentImageLength = props.images.length;
    currentIndex.value = (currentIndex.value - 1 + currentImageLength) % currentImageLength;
}

</script>

<template>
<div class="w-full h-full relative flex flex-col">
	<div class="w-full h-5/6 flex relative">
		<TransitionGroup name="image-fade">
			<div v-for="i in [currentIndex]" :key="i" class="w-full h-full">
				<img :key="currentIndex" :src="images[currentIndex]" alt="Image" class="w-full h-full object-cover">
			</div>
		</TransitionGroup>

	</div>
		
	<div class="w-full h-1/6 flex flex-row bg-gradient-to-r from-primary-600 to-primary-500">
		<div class="w-1/2 h-full flex flex-row justify-start items-center pl-24">
			<span class="english-font text-3xl text-zinc-100 mr-6">ARCH</span>
			<div class="w-1/2 h-px bg-zinc-200"></div>
		</div>
		<div class="w-1/2 h-full flex justify-end items-end pr-28 pb-12">

			<!-- 按鈕 -->
			<div class="flex flex-row justify-center items-center z-90">
				<template v-if="images.length > 1">
					<button class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative" @click="prevImage">
						<img src="@/assets/images/button_1.png" alt="object-cover">
						<ChevronLeftIcon class="h-6 w-6 text-white absolute mr-1" />
					</button>
					<button  class="w-9 h-9 flex justify-center items-center transition-300-out mr-2 relative" @click="nextImage">
						<img src="@/assets/images/button_1.png" alt="object-cover">
						<ChevronRightIcon class="h-6 w-6 text-white absolute ml-1" />
					</button>
				</template>
				<RouteButton :to="{ name: '1floor' }" class="w-9 h-9 flex justify-center items-center transition-300-out relative">
					<img src="@/assets/images/button_1.png" alt="object-cover">
					<ArrowReturnIcon class="h-4 w-4 text-white absolute"/>
				</RouteButton>
			</div>

		</div>
	</div>

</div>
</template>

<style scoped>
.cube {
	left: 0;
	bottom: 0;
	width: 0.6%;
	height: 20%;
}

.button-container {
	right: 6%;
	bottom: 3%;
}
</style>