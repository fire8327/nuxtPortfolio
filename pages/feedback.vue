<template>
    <div class="flex flex-col min-h-screen py-80 bg-cover bg-[url(images/feedback/main.jpg)] w-full col-span-full -mt-20 bg-center relative bg-fixed">
        <div class="wrapper flex flex-col gap-8 md:gap-12 lg:gap-16 z-10 text-[#f9f9f9] items-center">            
            <p class="text-2xl md:text-3xl lg:text-4xl text-center uppercase">Свяжитесь со мной</p>
        </div>
        <div class="absolute bg-[#131313] bg-opacity-60 inset-0"></div>
    </div>
    
</template>

<script setup>
    useServerSeoMeta({
		title: 'Свяжитесь со мной',
		lang: 'ru'
	})

</script>
