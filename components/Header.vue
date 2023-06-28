<template>
    <header class="w-full py-2 top-0 left-0 duration-500 transition-all fixed z-50 grid-container" :class="{'-translate-y-full' : isScrollDown, 'bg-[#f9f9f9] dark:bg-[#131313]' : isMenuColor}">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img src="images/header/logo.jpg" alt="" class="rounded-full w-14">
            </NuxtLink>      
            <div class="flex items-center gap-4">
                <UseDark v-slot="{ isDark, toggleDark }">
                    <button @click="toggleDark()" class="rounded-full text-xl flex items-center justify-center p-2 bg-black border border-white border-opacity-[18%] dark:bg-white text-white dark:text-black">
                        <Icon :name="isDark ?'ph:sun-dim' : 'material-symbols:dark-mode-outline-rounded'"/>
                    </button>
                </UseDark>
                <div class="flex items-center gap-2 text-lg cursor-pointer" @click="isMenuShow = !isMenuShow">
                    <div class="flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                        <div :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></div>
                        <div :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] transition-opacity ease-linear duration-500"></div>
                        <div :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></div>
                    </div>
                    <p>Menu</p>
                </div>
            </div>          
        </div>
    </header>
    <div class="fixed inset-0 bg-[#f9f9f9] dark:bg-[#131313] bg-[url(images/body/bg_white.png)] dark:bg-[url(images/body/bg_black.png)] bg-fixed grid-container h-full transition-transform duration-500 z-40" :class="{'-translate-y-[1000px]' : !isMenuShow}">
        <div class="flex max-lg:flex-col h-full gap-6 items-center py-20 relative">
            <ul class="z-10 w-full lg:w-1/2 xl:w-[65%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16 lg:list-decimal-leading-zero list-inside marker:text-base marker:dark:text-[#f9f9f9]/25 marker:text-[#131313]/30">
                <li class="text-2xl md:text-3xl lg:text-4xl link w-fit"><NuxtLink to="/">Главная</NuxtLink></li>
                <li class="text-2xl md:text-3xl lg:text-4xl link w-fit"><NuxtLink to="/">Портфолио</NuxtLink></li>
                <li class="text-2xl md:text-3xl lg:text-4xl link w-fit"><NuxtLink to="/">Обо мне</NuxtLink></li>
                <li class="text-2xl md:text-3xl lg:text-4xl link w-fit"><NuxtLink to="/">Связаться со мной</NuxtLink></li>
                <li class="text-2xl md:text-3xl lg:text-4xl link w-fit"><NuxtLink to="/">Api</NuxtLink></li>
            </ul>
            <div class="w-px h-5/6 dark:bg-[#f9f9f9]/25 bg-[#131313]/30 max-lg:w-5/6 max-lg:h-px"></div>
            <div class="z-10 w-full lg:w-1/2 xl:w-[35%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16 text-lg">
                <div class="flex flex-col gap-4 max-lg:items-center">
                    <p class="text-transparent !bg-clip-text text-xl animate-text">Контакты</p>
                    <div class="flex flex-col gap-2 max-lg:items-center">
                        <NuxtLink to="tel:+79093044826" class="link w-fit">+7-909-304-48-26</NuxtLink>
                        <NuxtLink to="mailto:fire83274@gmail.com" class="link w-fit">fire83274@gmail.com</NuxtLink>
                        <NuxtLink to="https://t.me/fire83274" target="_blank" class="link w-fit">@fire83274</NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-4 max-lg:items-center">
                    <p class="text-transparent !bg-clip-text text-xl animate-text">Соцсети</p>
                    <div class="flex gap-4 items-center">
                        <NuxtLink to="https://t.me/fire83274" target="_blank" class="link">Telegram.</NuxtLink>
                        <NuxtLink to="https://github.com/fire8327" target="_blank" class="link">GitHub.</NuxtLink>
                        <NuxtLink to="https://vk.com/fire83274" target="_blank" class="link">Vk.</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="absolute left-1/2 -translate-x-1/2 top-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:left-4 lg:translate-x-0 opacity-5 text-[13vw] z-0">МЕНЮ</div>
        </div>
    </div>
</template>

<script setup>
    import { UseDark } from '@vueuse/components'

    const isMenuShow = ref(false)
    const isMenuColor = ref(false)
    const { x, y } = useWindowScroll()
    const isScrollDown = ref(false) 
    watch(y , (newValue , oldValue) => {
        y.value > 100 && newValue > oldValue ? isScrollDown.value = true : isScrollDown.value = false
        y.value > 100 ? isMenuColor.value = true : isMenuColor.value = false
    })
    onMounted(() => {
        watch(isMenuShow , () => {
            isMenuShow.value ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
        })        
    })
</script>   
