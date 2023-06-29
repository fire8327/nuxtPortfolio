<template>
    <div class="flex max-lg:flex-col items-center gap-6 lg:gap-8 py-6 lg:py-8 border-y border-[#131313]/60 dark:border-[#f9f9f9]/60">
        <div class="w-full lg:w-1/2 uppercase flex flex-col gap-6">
            <p class="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">Фронтенд разработка</p>
            <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60">Если <span class="text-transparent !bg-clip-text animate-text">вы</span> ищете человека, который поможет вам реализовать крутой проект и подобрать лучшее решение, тогда вы обратились <span class="text-transparent !bg-clip-text animate-text">по адресу</span>. Вместе мы выведем ваш сайт на новый уровень.</p>
        </div>
        <img src="/images/about/main.png" alt="" class="w-full lg:w-1/2">
    </div>
    <CoopOptions/>
    <div class="flex max-lg:flex-col items-center gap-6 lg:gap-8 py-6 lg:py-8 border-y border-[#131313]/60 dark:border-[#f9f9f9]/60">
        <div class="w-full lg:w-1/2 uppercase flex flex-col gap-6">
            <p class="text-2xl md:text-3xl lg:text-4xl max-lg:text-center">Навыки</p>
            <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60">Я умею создавать сайты с нуля, имея лишь макет, разрабатывать пользовательские интерфейсы, и обладаю опытом веб-разработки на различных платформах и фреймворках, а также помогу разместить ваш проект на GitHub.</p>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <p>HTML</p>
                <div class="w-full h-1 bg-[#efefef] dark:bg-[#191919] relative">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end bg-[#efefef] dark:bg-[#191919] h-2.5 w-[98%]">
                        <p class="-mr-2.5">98%</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>CSS</p>
                <div class="w-full h-1 bg-[#efefef] dark:bg-[#191919] relative">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end bg-[#efefef] dark:bg-[#191919] h-2.5 w-[95%]">
                        <p class="-mr-2.5">95%</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>TailwindCSS</p>
                <div class="w-full h-1 bg-[#efefef] dark:bg-[#191919] relative">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end bg-[#efefef] dark:bg-[#191919] h-2.5 w-[85%]">
                        <p class="-mr-2.5">85%</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>JS, Jquery</p>
                <div class="w-full h-1 bg-[#efefef] dark:bg-[#191919] relative">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end bg-[#efefef] dark:bg-[#191919] h-2.5 w-[80%]">
                        <p class="-mr-2.5">80%</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>Vue, Nuxt</p>
                <div class="w-full h-1 bg-[#efefef] dark:bg-[#191919] relative">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end bg-[#efefef] dark:bg-[#191919] h-2.5 w-[60%]">
                        <p class="-mr-2.5">60%</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>Дизайнерское мышление</p>
                <div class="w-full h-1 bg-[#efefef] dark:bg-[#191919] relative">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end bg-[#efefef] dark:bg-[#191919] h-2.5 w-[50%]">
                        <p class="-mr-2.5">50%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center gap-6 lg:gap-8">
        <p class="text-2xl md:text-3xl lg:text-4xl uppercase">Новый уровень создания сайтов</p>
        <p class="text-sm uppercase text-[#131313]/60 dark:text-[#f9f9f9]/60">Всё, что вам нужно. В одном месте</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 uppercase">
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="carbon:auto-scroll" class="text-5xl"/>
                </div>
                <p>Плавная прокрутка сайта</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="icon-park-outline:full-screen-play" class="text-5xl"/>
                </div>
                <p>Полная адаптивность</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="ic:baseline-speed" class="text-5xl"/>
                </div>
                <p>Высокая скорость загрузки</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="mdi:button-cursor" class="text-5xl"/>
                </div>
                <p>Эффект паралакса</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="mdi:file-code" class="text-5xl"/>
                </div>
                <p>Валидный код</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="fluent:dark-theme-20-filled" class="text-5xl"/>
                </div>
                <p>Переключение тем</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="material-symbols:menu" class="text-5xl"/>
                </div>
                <p>Классическое и кастомое меню</p>
            </div>
            <div class="flex flex-col gap-4 items-center text-center">
                <div class="p-6 rounded-xl overflow-hidden border border-[#131313]/60 dark:border-[#f9f9f9]/60">
                    <Icon name="mdi:email" class="text-5xl"/>
                </div>
                <p>Форма обратной связи</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center gap-6 lg:gap-8 bg-[#efefef] dark:bg-[#191919] col-span-full w-full py-6 lg:py-8">
        <p class="text-2xl md:text-3xl lg:text-4xl uppercase text-center">Кредо жизни</p>
        <p class="md:text-lg lg:text-xl">" Мы должны оставаться <span class="text-transparent !bg-clip-text animate-text">мыми</span>, а они <span class="text-transparent !bg-clip-text animate-text">оними</span> "</p>
    </div>
    <div class="flex flex-col gap-6 lg:gap-8 items-center">
        <p class="text-2xl md:text-3xl lg:text-4xl uppercase">Время делать проекты</p>
        <div class="flex flex-col items-center gap-6">
            <div class="flex items-center gap-2 text-4xl">
                <div class="flex items-center justify-center border rounded-full w-20 md:w-36 lg:w-44 h-20 md:h-36 lg:h-44">
                    {{ hours }}
                </div>
                <p class="text-center">:</p>
                <div class="flex items-center justify-center border rounded-full w-20 md:w-36 lg:w-44 h-20 md:h-36 lg:h-44">
                    {{ minutes }}
                </div>
                <p class="text-center">:</p>
                <div class="flex items-center justify-center border rounded-full w-20 md:w-36 lg:w-44 h-20 md:h-36 lg:h-44">
                    {{ seconds }}
                </div>
            </div>
            <p class="text-xl md:text-2xl lg:text-3xl first-letter:uppercase">{{ date.toLocaleDateString("ru" ,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
        </div>
        <NuxtLink to="/feedback" class="flex items-center self-end gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Начать проект</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
</template>

<script setup>
    useServerSeoMeta({
		title: 'Обо мне',
		lang: 'ru'
	})

    let date = ref(new Date())
    const hours = computed(() => {return date.value.getHours()})
    const minutes = computed(() => {return date.value.getMinutes()})
    const seconds = computed(() => {return date.value.getSeconds()})    
    setInterval(() => {
        date.value = new Date()
    }, 1000);
</script>
