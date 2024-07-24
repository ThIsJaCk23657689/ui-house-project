import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import ContentLayout from '@/layouts/ContentLayout.vue'
import LocationView from '@/views/LocationView.vue'
import StructureView from '@/views/StructureView.vue'
import MaterialView from '@/views/MaterialView.vue'
import AboutView from '@/views/AboutView.vue'

// Location 地段
import EnvironmentView from '@/views/Location/EnvironmentView.vue'
import LifeFunctionView from '@/views/Location/LifeFunctionView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/',
			component: ContentLayout,
			children: [
				{
					path: 'location',
					name: 'location',
					component: LocationView,
					redirect: { name: 'environment' },
					children: [
						{
							path: 'environment',
							name: 'environment',
							component: EnvironmentView
						},
						{
							path: 'lifefunction',
							name: 'lifefunction',
							component: LifeFunctionView
						}
					]
				},
				{
					path: 'structure',
					name: 'structure',
					component: StructureView,
				},
				{
					path: 'material',
					name: 'material',
					component: MaterialView,
				},
				{
					path: 'about',
					name: 'about',
					component: AboutView,
				}
			]
		}
	]
})

export default router
