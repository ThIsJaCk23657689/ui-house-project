<script setup lang="ts">

</script>

<template>
<div class="w-full h-full flex flex-row justify-between">
    <div class="h-full pl-24">

        <!-- 標題 -->
        <div class="mt-[23rem] mb-16">
            <Transition name="slide-fade-right" appear>
                <div class="text-6xl 3xl:text-7xl flex items-end">
                    <span class="font-bold inline-block">職人</span>
                    <span class="inline-block">態度&nbsp;╳&nbsp;</span>
                    <span class="font-bold inline-block">風格</span>
                    <span class="inline-block">專屬</span>
                </div>
            </Transition>
            <Transition name="slide-fade-right" appear>
                <h3 class="font-bold mt-6 text-6xl sub-title">美的<span class="font-normal">IN</span> 同興協記</h3>
            </Transition>
        </div>

        <!-- 文字 -->
        <Transition name="slide-fade-in" appear>
            <div class="bg-gradient-to-r from-gray-300 to-white rounded-lg text-primary-300 font-bold text-xl 3xl:text-2xl py-2 px-4 flex items-center justify-start tracking-widest mb-8">
                我們用 <span class="tracking-normal">PMG</span>：務實、時尚、自然，成就關於美的一切
            </div>
        </Transition>

        <Transition name="slide-fade-in2" appear>
            <ul class="pl-6 text-xl text-primary-300">
                <li class="mb-3">
                    <div class="flex flex-row items-center justify-start">
                        <div class="english-col">Pragmatic</div>
                        <div class="font-bold">頂真精神，誠信負責、把事情做到最好</div>
                    </div>
                </li>
                <li class="mb-3">
                    <div class="flex flex-row items-center justify-start">
                        <div class="english-col">Modern</div>
                        <div class="font-bold">建築觀點因時因地制宜，反映當代生活風格</div>
                    </div>
                </li>
                <li class="mb-3">
                    <div class="flex flex-row items-center justify-start">
                        <div class="english-col">Green</div>
                        <div class="font-bold">以緣相映的哲學，自然而然與環境共生</div>
                    </div>
                </li>
            </ul>
        </Transition>

    </div>

    <!-- 右側 banner -->
    <div class="h-full flex justify-end items-center bg-primary-100">
        <div class="h-full flex flex-col justify-end items-center relative">
            <div class="absolute top-48 right-4 flex flex-col items-start ml-4 z-10">
                <span class="text-xl text-primary-300 vertical-text english-font mb-6">Unique</span>
                <span class="text-xl text-zinc-100 vertical-text">理　念</span>
            </div>
            <img src="@/assets/images/right_banner_4.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
        <div class="h-full flex flex-col justify-end items-center relative">
            <img src="@/assets/images/right_banner_3.png" alt="" class="h-full object-cover" style="max-width: max-content;">
        </div>
    </div>
</div>
</template>

<style scoped>
.sub-title {
    color: #4d4d4d;
}

.english-col {
    width: 18%
}







.slide-fade-right-enter-active {
	transition: all 2.0s ease-out;
}

.slide-fade-right-leave-active {
	transition: all 2.0s ease-out;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
	transform: translateX(-80px);
	opacity: 0;
}


.slide-fade-in-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-in-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-in-enter-from,
.slide-fade-in-leave-to {
	opacity: 0;
}


.slide-fade-in2-enter-active {
	transition: all 2.5s ease-out;
}

.slide-fade-in2-leave-active {
	transition: all 2.5s ease-out;
}

.slide-fade-in2-enter-from,
.slide-fade-in2-leave-to {
	opacity: 0;
}


</style>
