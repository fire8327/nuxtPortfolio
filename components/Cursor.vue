<template>
    <ClientOnly>
        <div class="w-4 h-4 mix-blend-difference pointer-events-none rounded-full fixed z-[9999] bg-[#131313] dark:bg-[#f9f9f9] max-lg:hidden transition-opacity duration-500" :style="{top:`${y}px`,left:`${x}px`}" :class="!isCursorShow ? 'opacity-0' : 'opacity-100'">
        </div>
    </ClientOnly>  
</template>

<script setup>
    const x = ref(null)
    const y = ref(null)
    const isCursorShow = ref(true)
    onMounted(()=> {
        useEventListener("mousemove", e => {
            x.value = e.clientX
            y.value = e.clientY
            x.value == 0 || y.value == 0 || y.value >= window.innerHeight - 16 || x.value >= window.innerWidth - getScrollWidth() - 16 ? isCursorShow.value = false : isCursorShow.value = true
        })
        const getScrollWidth = () => {
        let scrollDiv = document.createElement("div");
        scrollDiv.className = "scrollbar-measure";
        document.body.appendChild(scrollDiv);

        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        document.body.removeChild(scrollDiv);
        if(document.body.offsetHeight <= window.innerHeight) scrollbarWidth = 0
        return scrollbarWidth
        }
    })
</script>