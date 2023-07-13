<template>
    <div class="flex flex-col gap-6 lg:gap-8 items-center">
        <p class="text-2xl md:text-3xl lg:text-4xl uppercase text-center">Профессиональное творчество</p>
        <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60 uppercase">Мои работы - ваше впечатление</p>        
        <NuxtLink to="/feedback" class="flex items-center gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Начать проект</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <Card v-for="site in data" v-bind="site"/>
    </div>
    <div class="flex max-lg:flex-col items-center gap-6 lg:gap-8 py-6 lg:py-8 border-y border-[#131313]/60 dark:border-[#f9f9f9]/60">
        <div class="w-full lg:w-1/2 uppercase flex flex-col gap-6">
            <p class="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">План выполнения работ</p>
            <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60">Наглядное представление нашего с вами сотрудничества. Вместе мы создадим высококачественный и эффективный веб-сайт.</p>
        </div>
        <div class="w-full lg:w-1/2">
            <ol class="border-l border-[#131313]/60 dark:border-[#f9f9f9]/60">
                <li>
                    <div class="flex-start flex items-center pt-3">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full dark:bg-[#f9f9f9] bg-[#131313]"></div>
                    </div>
                    <div class="mb-6 ml-4 mt-2">
                    <p class="mb-1.5 text-xl font-semibold">Определение целей и задач сайта</p>
                    <p class="mb-3 text-[#131313]/60 dark:text-[#f9f9f9]/60">
                        Позволит сохранить на сайте соответствующую информацию.
                    </p>
                    </div>
                </li>
                <li>
                    <div class="flex-start flex items-center pt-3">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full dark:bg-[#f9f9f9] bg-[#131313]"></div>
                    </div>
                    <div class="mb-6 ml-4 mt-2">
                    <p class="mb-1.5 text-xl font-semibold">Оценка дизайна</p>
                    <p class="mb-3 text-[#131313]/60 dark:text-[#f9f9f9]/60">
                        Просмотр и оценка сложности дизайна сайта. Обзор цветов, шрифтов и компонентов дизайна.
                    </p>    
                    </div>
                </li>
                <li>
                    <div class="flex-start flex items-center pt-3">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full dark:bg-[#f9f9f9] bg-[#131313]"></div>
                    </div>
                    <div class="mb-6 ml-4 mt-2">
                    <p class="mb-1.5 text-xl font-semibold">Вёрстка</p>
                    <p class="mb-3 text-[#131313]/60 dark:text-[#f9f9f9]/60">
                        Перенос макета в HTML формат.
                    </p>
                    </div>
                </li>
                <li>
                    <div class="flex-start flex items-center pt-3">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full dark:bg-[#f9f9f9] bg-[#131313]"></div>
                    </div>
                    <div class="mb-6 ml-4 mt-2">
                    <p class="mb-1.5 text-xl font-semibold">Разработка функционала</p>
                    <p class="mb-3 text-[#131313]/60 dark:text-[#f9f9f9]/60">
                        Подключение скриптов и плагинов, проверка валидности кода.
                    </p>
                    </div>
                </li>
                <li>
                    <div class="flex-start flex items-center pt-3">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full dark:bg-[#f9f9f9] bg-[#131313]"></div>
                    </div>
                    <div class="mb-6 ml-4 mt-2">
                    <p class="mb-1.5 text-xl font-semibold">Передача/публикация сайта</p>
                    <p class="mb-3 text-[#131313]/60 dark:text-[#f9f9f9]/60">
                        Итоговый показ проекта и отправка архива/ссылки сайта.
                    </p>
                    </div>
                </li>
            </ol>
        </div>    
    </div>
    <NewProject/>
</template>

<script setup>
    import { createClient } from '@supabase/supabase-js'
    useServerSeoMeta({
		title: 'Портфолио',
		lang: 'ru'
	})

    const supabase = createClient('https://sqovgnvsvfrlijbxlztc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxb3ZnbnZzdmZybGlqYnhsenRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NzgyMzMsImV4cCI6MjAwNDM1NDIzM30.s0cs5zNw1DGyl_yFwvglOHQQz4uMHyinWoOZQz1sB58') 
    const { data } = await supabase.from('examples').select()
</script>
