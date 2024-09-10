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
import ThirteenView from '@/views/Location/ThirteenView.vue'

// Structure 規劃
import ApperanceView from '@/views/Structure/ApperanceView.vue'
import FirstFloorView from '@/views/Structure/FirstFloorView.vue'
import RoofView from '@/views/Structure/RoofView.vue'
import StandardView from '@/views/Structure/StandardView.vue'
import StandardIndividualView from '@/views/Structure/StandardIndividualView.vue'
import BasementView from '@/views/Structure/BasementView.vue'

// Facilities 公設
import FacilitiesView from '@/layouts/FacilitiesLayout.vue'
import Facilities01 from '@/views/Structure/Facilities/Facilities01.vue'
import Facilities02 from '@/views/Structure/Facilities/Facilities02.vue'
import Facilities03 from '@/views/Structure/Facilities/Facilities03.vue'

// Material 選材
import MaterialMenuView from '@/views/Material/MaterialMenuView.vue'
import PanasonicKitchenView from '@/views/Material/PanasonicKitchenView.vue'
import RinnaiView from '@/views/Material/RinnaiView.vue'
import SvagoView from '@/views/Material/SvagoView.vue'
import PanasonicBathroomView from '@/views/Material/PanasonicBathroomView.vue'
import InnociView from '@/views/Material/InnociView.vue'
import HansgroheView from '@/views/Material/HansgroheView.vue'
import LifeGearView from '@/views/Material/LifeGearView.vue'
import DaikenView from '@/views/Material/DaikenView.vue'
import LamettView from '@/views/Material/LamettView.vue'
import WaferlockView from '@/views/Material/WaferlockView.vue'
import ElectricCarView from '@/views/Material/ElectricCarView.vue'
import SecomView from '@/views/Material/SecomView.vue'

// 理念
import ConceptView from '@/views/About/ConceptView.vue'

// 業績
import CasesView from '@/views/About/Cases/CasesView.vue'
import Case01View from '@/views/About/Cases/Case01View.vue'
import Case02View from '@/views/About/Cases/Case02View.vue'
import Case03View from '@/views/About/Cases/Case03View.vue'
import Case04View from '@/views/About/Cases/Case04View.vue'
import Case05View from '@/views/About/Cases/Case05View.vue'
import Case06View from '@/views/About/Cases/Case06View.vue'
import Case07View from '@/views/About/Cases/Case07View.vue'

// 團隊
import TeamsView from '@/views/About/Teams/TeamsView.vue'
import ChangView from '@/views/About/Teams/ChangView.vue'
import ChenView from '@/views/About/Teams/ChenView.vue'


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
						},
						{
							path: 'thirteen',
							name: 'thirteen',
							component: ThirteenView
						}
					]
				},
				{
					path: 'structure',
					name: 'structure',
					component: StructureView,
					redirect: { name: 'apperance' },
					children: [
						{
							path: 'apperance',
							name: 'apperance',
							component: ApperanceView,
						},
						{
							path: '1floor',
							name: '1floor',
							component: FirstFloorView,
						},
						{
							path: 'roof',
							name: 'roof',
							component: RoofView,
						},
						{
							path: 'standard',
							name: 'standard',
							component: StandardView,
						},
						{
							path: 'standard-individual/:type?',
							name: 'standard-individual',
							component: StandardIndividualView,
							props: true,
						},
						{
							path: 'basement',
							name: 'basement',
							component: BasementView,
						},
						{
							path: 'facilities',
							name: 'facilities',
							component: FacilitiesView,
							redirect: { name: 'facilities01' },
							children: [
								{
									path: 'facilities01',
									name: 'facilities01',
									component: Facilities01,
								},
								{
									path: 'facilities02',
									name: 'facilities02',
									component: Facilities02,
								},
								{
									path: 'facilities03',
									name: 'facilities03',
									component: Facilities03,
								},
							]
						}
					]
				},
				{
					path: 'material',
					name: 'material',
					component: MaterialView,
					redirect: { name: 'material-menu' },
					children: [
						{
							path: 'menu',
							name: 'material-menu',
							component: MaterialMenuView,
						},
						{
							path: 'panasonickitchen',
							name: 'panasonickitchen',
							component: PanasonicKitchenView,
						},
						{
							path: 'rinnai',
							name: 'rinnai',
							component: RinnaiView,
						},
						{
							path: 'svago',
							name: 'svago',
							component: SvagoView,
						},
						{
							path: 'panasonicbathroom',
							name: 'panasonicbathroom',
							component: PanasonicBathroomView,
						},
						{
							path: 'innoci',
							name: 'innoci',
							component: InnociView,
						},
						{
							path: 'hansgrohe',
							name: 'hansgrohe',
							component: HansgroheView,
						},
						{
							path: 'lifegear',
							name: 'lifegear',
							component: LifeGearView,
						},
						{
							path: 'daiken',
							name: 'daiken',
							component: DaikenView,
						},
						{
							path: 'lamett',
							name: 'lamett',
							component: LamettView,
						},
						{
							path: 'waferlock',
							name: 'waferlock',
							component: WaferlockView,
						},
						{
							path: 'electriccar',
							name: 'electriccar',
							component: ElectricCarView,
						},
						{
							path: 'secom',
							name: 'secom',
							component: SecomView,
						}
					]
				},
				{
					path: 'about',
					name: 'about',
					component: AboutView,
					redirect: { name: 'concept' },
					children: [
						{
							path: 'concept',
							name: 'concept',
							component: ConceptView,
						},
						{
							path: 'cases',
							name: 'cases',
							redirect: { name: 'cases-menu' },
							children: [
								{
									path: 'menu',
									name: 'cases-menu',
									component: CasesView,
								},
								// {
								// 	path: 'case01',
								// 	name: 'cases-case01',
								// 	component: Case01View,
								// },
								// {
								// 	path: 'case02',
								// 	name: 'cases-case02',
								// 	component: Case02View,
								// },
								{
									path: 'shome',
									name: 'cases-shome',
									component: Case03View,
								},
								{
									path: 'good',
									name: 'cases-good',
									component: Case04View,
								},
								{
									path: 'nine',
									name: 'cases-nine',
									component: Case05View,
								},
								{
									path: 'mountain',
									name: 'cases-mountain',
									component: Case06View,
								},
								{
									path: 'liveown',
									name: 'cases-liveown',
									component: Case07View,
								},
							]
						},
						{
							path: 'teams',
							name: 'teams',
							redirect: { name: 'teams-menu' },
							children: [
								{
									path: 'menu',
									name: 'teams-menu',
									component: TeamsView,
								},
								{
									path: 'chen',
									name: 'teams-chen',
									component: ChenView,
								},
								{
									path: 'chang',
									name: 'teams-chang',
									component: ChangView,
								},
							]
						}
					]
				}
			]
		}
	]
})

export default router
