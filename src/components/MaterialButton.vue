<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps<{
	active: boolean | false,
	visible: boolean | true,
}>()
</script>

<template>
	<RouteButton to="#" v-if="active" v-show="visible" class="border border-zinc-500 rounded-lg text-center 
									px-6 py-1 bg-zinc-200
							  		transition-300-out">
		<slot></slot>
	</RouteButton>
	<RouteButton to="#" v-else v-show="visible" class="border border-zinc-500 rounded-lg text-center 
							  		 px-6 py-1 bg-zinc-100 hover:bg-zinc-200 transition-300-out">
		<slot></slot>
	</RouteButton>
</template>

<style scoped>
</style>
