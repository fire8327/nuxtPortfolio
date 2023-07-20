<template>
    <div class="flex flex-col min-h-screen justify-center bg-cover bg-[url(/images/feedback/main.jpg)] w-full col-span-full -mt-20 bg-center relative bg-fixed">
        <div class="wrapper flex flex-col gap-8 md:gap-12 lg:gap-16 z-10 items-center">            
            <p class="text-2xl md:text-3xl lg:text-4xl text-center uppercase text-[#f9f9f9]">Связаться со мной</p>
            <FormKit id="feedback" @submit="feedback" type="form" form-class="text-base rounded-xl mx-auto flex flex-col gap-4 w-full items-center md:w-2/3 lg:w-1/2 p-6 lg:p-10 border border-[#131313]/60 dark:border-[#f9f9f9]/60 bg-[#f9f9f9] dark:bg-[#131313]" :actions="false">
                <FormKit name="name" validation="required" label="Имя" type="text" label-class="$remove:text-sm" message-class="uppercase" outer-class="w-full" wrapper-class="w-full" inner-class="$remove:focus-within:ring-blue-500 $remove:max-w-md w-full" input-class="$remove:text-gray-700" placeholder="Иван"></FormKit>
                <FormKit name="email" validation="required|email" label="Почта" type="email" label-class="$remove:text-sm" message-class="uppercase" outer-class="w-full" wrapper-class="w-full" inner-class="$remove:focus-within:ring-blue-500 $remove:max-w-md w-full" input-class="$remove:text-gray-700" placeholder="user@example.com"></FormKit>
                <FormKit name="desc" label="Сообщение" type="textarea" label-class="$remove:text-sm" outer-class="w-full" wrapper-class="w-full" inner-class="$remove:focus-within:ring-blue-500 $remove:max-w-md w-full" input-class="$remove:text-gray-700 resize-none" placeholder="Немного текста..."></FormKit>
                <FormKit type="submit" input-class="$remove:bg-blue-600 focus:outline-none $remove:font-normal font-semibold $remove:text-sm rounded-2xl dark:bg-[#f9f9f9] bg-[#131313] text-[#f9f9f9] dark:text-[#131313]" :ignore="false">Отправить</FormKit>
                <FormKitMessages class="uppercase"/>
            </FormKit>
            <button type="button" @click="message.title = null" class="flex items-center gap-4 px-6 py-2 rounded-2xl w-fit dark:bg-[#f9f9f9] bg-[#131313] text-[#f9f9f9] dark:text-[#131313]" :class="message.type ? 'shadow-[0_0_20px_-7px]' : 'bg-red-500'" v-if="message.title">
                <span>{{message.title}}</span>
                <Icon name="material-symbols:close-rounded" class="text-xl"/>
            </button>	
        </div>
        <div class="absolute bg-[#131313] bg-opacity-60 inset-0"></div>
        <Scroll/>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="relative p-4 border border-[#131313]/60 dark:border-[#f9f9f9]/60 flex flex-col items-center text-center gap-4 text-lg">
            <p class="absolute top-6 right-6 opacity-5 text-4xl z-0 text-white">01</p>
            <Icon name="material-symbols:alternate-email" class="text-3xl opacity-60 self-start"/>            
            <p>Написать мне</p>
            <p class="opacity-60 uppercase text-sm grow">Пишите мне по общим вопросам, включая маркетинг и возможности партнерства.</p>
            <NuxtLink class="underline underline-offset-2" to="mailto:fire83274@gmail.com">fire83274@gmail.com</NuxtLink>
        </div>
        <div class="relative p-4 border border-[#131313]/60 dark:border-[#f9f9f9]/60 flex flex-col items-center text-center gap-4 text-lg">
            <p class="absolute top-6 right-6 opacity-5 text-4xl z-0 text-white">02</p>
            <Icon name="material-symbols:call" class="text-3xl opacity-60 self-start"/>            
            <p>Позвонить мне</p>
            <p class="opacity-60 uppercase text-sm grow">Позвоните мне, чтобы поговорить со мной. Я всегда рад помочь.</p>
            <NuxtLink class="underline underline-offset-2" to="tel:+79093044826">+7-909-304-48-26</NuxtLink>
        </div>
        <div class="relative p-4 border border-[#131313]/60 dark:border-[#f9f9f9]/60 flex flex-col items-center text-center gap-4 text-lg">
            <p class="absolute top-6 right-6 opacity-5 text-4xl z-0 text-white">03</p>
            <Icon name="material-symbols:help" class="text-3xl opacity-60 self-start"/>            
            <p>Поддержка</p>
            <p class="opacity-60 uppercase text-sm grow">Свяжитесь со мной любым удобным для вас способом.</p>
            <NuxtLink class="underline underline-offset-2" to="https://t.me/fire83274" target="_blank">@fire83274</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    import { FormKitMessages } from '@formkit/vue'
    import { reset } from '@formkit/core'

    useServerSeoMeta({
		title: 'Связаться со мной',
		lang: 'ru'
	})

    const token = "6046764797:AAFAFULakfayU2Hg9iEoiuKFBGe8rZIA19w"
    const chat_id = "-921242533"
    const URL = `https://api.telegram.org/bot${token}/sendMessage`

    let message = ref({title:null, type:true})

    const feedback = async(forms) =>{
    let msg = "<b>Заявка с сайта!</b>\n"
	+ `<b>Имя:</b> ${forms.name}\n`
    + `<b>Email:</b> ${forms.email}\n`
    + `<b>Сообщение:</b> ${forms.desc}\n`
	const {data, error} = await useFetch(URL,{
		body:{
			'chat_id': chat_id,
			'parse_mode': 'html',
			'text': msg
		},
		method:'post'
	})

	if (error.value) return message.value.title = 'При отправке произошла ошибка!', message.value.type = false
	message.value.title = 'Успешная отправка!', message.value.type = true 
	reset('feedback')
}
</script>
