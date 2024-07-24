<script setup lang="ts">
import { ref, onMounted } from 'vue';
import RouteButton from '@/components/RouteButton.vue';

interface MenuItem {
	id: number;
	routeName: string;
	englishText: string;
	chineseText: string;
}

const menuItems = ref<MenuItem[]>([]);
const allItems : MenuItem[] = [
	{
		id: 1,
		routeName: 'location', 
        englishText: 'Urban', 
        chineseText: '地　段', 
	},
	{
		id: 2,
		routeName: 'structure', 
        englishText: 'Ultra', 
        chineseText: '規　劃', 
	},
	{
		id: 3,
		routeName: 'material', 
        englishText: 'Upgrade', 
        chineseText: '選　材', 
	},
	{
		id: 4,
		routeName: 'about', 
        englishText: 'Unique', 
        chineseText: '業績實景', 
	}
];

onMounted(() => {
	let index = 0;
	const interval = setInterval(() => {
		if (index < allItems.length) {
			menuItems.value.push(allItems[index]);
			index++;
		} else {
			clearInterval(interval);
		}
	}, 800);
});

</script>

<template>
	<div class="w-full h-full flex flex-row justify-center items-center">
		<div class="w-1/2 h-full flex flex-col bg-primary-100">
			<Transition name="slide-right" appear>
				<img src="@/assets/images/big_u_home.png" alt="" class="object-cover h-full absolute left-0 top-0">
			</Transition>
		</div>
		<div class="w-1/2 h-full flex flex-col bg-primary-100">
			<div class="w-full h-full flex flex-col ml-10">
				<div class="w-full h-1/2 flex justify-start items-end">
					<Transition name="slide-fade-down" appear>
						<img src="@/assets/images/logo.png" alt="" class="object-cover left-0 top-0" style="width: 52%;">
					</Transition>
				</div>
				<div class="w-full h-1/2 flex justify-start items-end">
					<TransitionGroup name="test" tag="ul" class="flex flex-row relative" style="margin-bottom: 29%;" appear>
						<li v-for="(item, index) in menuItems" 
							:key="index" 
							:class="{ 'menu-item mr-8': index !== menuItems.length - 1 }">
							<RouteButton :to="{ name: item.routeName }" class="group relative">
								<div class="flex flex-row items-center mr-10 h-8">
									<span class="text-xl text-zinc-200 chinese-font font-light group-hover:text-white group-hover:mb-2 transition-300-out mr-2">{{ item.chineseText }}</span>
									<span class="text-md text-zinc-200 english-font group-hover:text-white group-hover:mb-2 transition-300-out">{{ item.englishText }}</span>
								</div>
							</RouteButton>
						</li>
					</TransitionGroup>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.stretch {
    transform-origin: left center;
    transform: scaleX(1.16) scaleY(0.98);
}

.menu-item {
	list-style-type: none;
	border-right: 2px solid #FFFFFF;
}

.test-enter-active,
.test-leave-active {
	transition: all 0.7s ease-out;
}

.test-enter-from,
.test-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>