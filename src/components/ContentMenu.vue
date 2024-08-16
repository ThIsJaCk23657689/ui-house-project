<script setup lang="ts">
import { ref, watch, onMounted  } from 'vue';
import { useRoute } from 'vue-router'
import RouteButton from '@/components/RouteButton.vue';

const menuItems = ref([
	{ 
        path:'/location', 
        englishText: 'Urban', 
        chineseText: '地　段', 
        subItems: [
            { name:'environment', path: '/location/environment', text: '地段' },
			{ name:'lifefunction', path: '/location/lifefunction', text: '生活機能' },
			{ name:'raiseup', path: '/location/thirteen', text: '13期大崛起' }
        ]  
    },
	{ 
        path:'/structure',    
        englishText: 'Ultra',    
        chineseText: '規劃', 
        subItems: [
            { name:'apperance', path: '/structure/apperance', text: '外觀3D' },
            { name:'1floor', path: '/structure/1floor', text: '1F全面平圖' },
            { name:'roof', path: '/structure/roof', text: 'RF全面平圖' },
            { name:'standard', path: '/structure/standard', text: '標準層' },
            { name:'basement', path: '/structure/basement', text: '地下室' }
        ]  
    },
	{ 
        path:'/material',   
        englishText: 'Upgrade',   
        chineseText: '選材', 
        subItems: []  
    },
	{ 
        path:'/about',   
        englishText: 'Unique',   
        chineseText: '業績', 
        subItems: [
            { name:'concept', path: '#', text: '理念' },
            { name:'cases', path: '#',  text: '業績' },
            { name:'teams', path: '#', text: '團隊' },
        ]    
    },
]);

const activeSubMenu = ref('');
const route = useRoute();

const showSubMenu = (menuId: any) => {
    activeSubMenu.value = menuId;
};

// 決定主選單是否要 active
const isMainMenuItemActive = (currentMenuItem: any) => {
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

// 如果有 hover 過去那個主選單就會變成 active（展開），但結束 hover 不會截除狀態
const isActive = (itemId: string) => {
    if (activeSubMenu.value !== '') {
        return activeSubMenu.value === itemId;
    }
    return false;
};

// 透過路由名稱來判斷子選單是否要 active
const isSubActive = (routerName: string) => {
    const name: any = route.name;
    const parts = name.split("-");

    let result = route.name;
    if (parts.length > 1) {
        result = parts[0];
    }

    return result === routerName;
};

watch(
    () => route.path,
    () => {

    }
);

onMounted(() => {

})

</script>

<template>
<div class="w-full h-full bg-gradient-to-t from-primary-200 to-white">
    <div class="flex justify-center  items-center">
        <RouteButton :to="{ name: 'home' }" class="w-full flex items-end">
			<div class="">
				<img src="@/assets/images/small_u.png" alt="" class="object-cover w-full">
			</div>
			<div class="absolute w-full flex justify-center mb-4">
				<img src="@/assets/images/small_logo.png" alt="" class="object-cover w-4/5">
			</div>
        </RouteButton>
    </div>
    <div class="flex justify-start items-start">
        <ul class="ml-24 mt-6">
            <li v-for="(item, i) in menuItems" :key="i" class="mb-6">
                <RouteButton :to="item.path" @mouseover="showSubMenu(item.path)" class="group text-start">
                    <div v-if="isMainMenuItemActive(item)" class="flex flex-col">
                        <span class="text-2xl text-primary-100 english-font">{{ item.englishText }}</span>
                        <span class="text-md text-primary-100 font-semibold">{{ item.chineseText }}</span>
                    </div>
                    <div v-else class="flex flex-col">
                        <span class="text-2xl text-primary-300 english-font group-hover:text-primary-100 transition-300-out">{{ item.englishText }}</span>
                        <span class="text-md text-primary-300 font-semibold group-hover:text-primary-100 transition-300-out">{{ item.chineseText }}</span>
                    </div>
                </RouteButton>

                <div v-if="isActive(item.path) || isMainMenuItemActive(item)" class="mt-1">
                    <ul>

                        <li v-for="(subItem, j) in item.subItems" :key="j" class="flex flex-row items-center mb-1">
                            <RouteButton :to="subItem.path" class="text-start">
                                <span v-if="isSubActive(subItem.name)" class="text-md text-primary-100 font-semibold tracking-wider">{{ subItem.text }}</span>
                                <span v-else class="text-md text-primary-300 font-semibold tracking-wider hover:text-primary-100 transition-300-out">{{ subItem.text }}</span>
                            </RouteButton>
                        </li>

                    </ul>
                </div>
            </li>

        </ul>
    </div>
</div>
</template>

<style scoped>
</style>