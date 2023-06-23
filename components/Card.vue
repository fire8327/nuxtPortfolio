<template>
    <div class="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <NuxtLink to="/"><img src="https://fire8327.github.io/Portfolio/Assets/Images/examples/Estate.png" alt="" class="w-full rounded-xl"></NuxtLink>
        <div class="flex items-center gap-2">
            <button class="px-4 py-1 rounded-full opacity-60 border border-[#131313] dark:border-[#f9f9f9] shrink-0">Ru</button>
            <button class="px-4 py-1 rounded-full opacity-60 border border-[#131313] dark:border-[#f9f9f9] shrink-0">Landing</button>
            <button class="px-4 py-1 rounded-full opacity-60 border border-[#131313] dark:border-[#f9f9f9] shrink-0">White Theme</button>
        </div>
        <div class="flex items-center justify-between">
            <p class="uppercase text-lg">Сайт недвижимости</p>
            <NuxtLink to="/" class="opacity-60 duration-500 transition-all hover:opacity-100 hover:-translate-y-2 hover:scale-110">
                <Icon name="material-symbols:arrow-outward-rounded" class="text-3xl"/>
            </NuxtLink>
        </div>
    </div>
</template>