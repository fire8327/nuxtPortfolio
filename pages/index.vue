<template>
    <div class="flex flex-col justify-center min-h-screen bg-cover bg-[url(images/entry/1.jpg)] w-full col-span-full -mt-20 bg-center relative bg-fixed">
        <div class="wrapper flex flex-col gap-8 md:gap-12 lg:gap-16 z-10 text-[#f9f9f9] text-2xl md:text-3xl lg:text-4xl">
            <p>Привет!</p>
            <p class="text-5xl md:text-6xl lg:text-7xl">Я — Веб-разработчик</p>
            <p>Перевоплощаю идеи в код.</p>
        </div>
        <div class="absolute bg-[#131313] bg-opacity-30 inset-0"></div>
    </div>
    <div class="flex flex-col items-center text-center gap-6 lg:gap-8 uppercase">
        <p class="text-2xl md:text-3xl lg:text-4xl">Краткая информация обо мне</p>
        <p class="md:text-lg lg:text-xl md:max-w-2xl lg:max-w-5xl text-[#131313]/60 dark:text-[#f9f9f9]/60">Меня зовут Леонид. Я Веб-разработчик. Специализируюсь на фронтенде и использую tailwindcss для вёрстки сайтов. Изучаю vue и nuxt. Надеюсь, вы <span class="text-transparent !bg-clip-text animate-text">горите своим делом</span> также, как я.</p>
        <div class="grid grid-cols-2 items-center w-full lg:w-1/2">
            <img src="images/about/1.jpg" alt="" class="-rotate-6 w-full">
            <img src="images/about/2.jpg" alt="" class="rotate-6 w-full">
        </div>
    </div>
    <CoopOptions/>
    <div class="flex max-lg:flex-col items-center gap-6 lg:gap-8 py-6 lg:py-8 border-y border-[#131313]/60 dark:border-[#f9f9f9]/60">
        <div class="w-full lg:w-1/2 uppercase text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60">
            <p>Начните создавать кастомные адаптивные сайты вместе со мной прямо сейчас. Всего за пару действий вы получите быстрые и прозводительные сайты, которые идеально соответствуют <span class="text-transparent !bg-clip-text text-xl animate-text">вашим</span> потребностям.</p>
        </div>
        <img src="images/create/main.png" alt="" class="w-full lg:w-1/2">
    </div>
    <NewProject/>
    <div class="flex flex-col items-center gap-6 lg:gap-8">
        <p class="text-2xl md:text-3xl lg:text-4xl uppercase">Кейсы</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <Card/>
        </div>
        <NuxtLink to="/" class="flex items-center self-end gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Посмотреть ещё</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
</template>

<script setup>
    useServerSeoMeta({
		title: 'Главная',
		lang: 'ru'
	})
</script>